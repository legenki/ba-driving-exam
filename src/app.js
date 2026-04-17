(function(){
function renderVocab() {
  // Filters — use CAT_ORDER to control pill order
  const usedCats = CAT_ORDER.filter(c => ALL_VOCAB.some(v => v.cat === c));
  const cats = ['all', ...usedCats, 'alphabet'];
  const filterHtml = cats.map(c => {
    const label = c === 'all' ? t('vocabAll') : c === 'alphabet' ? t('vocabAlphabet') : catLabel(c);
    return `<button class="filter-pill${vocabState.filter===c?' active':''}" data-action="vfilter" data-cat="${c}">${label}</button>`;
  }).join('');
  document.getElementById('vocab-filters').innerHTML = filterHtml;

  const alphaEl = document.getElementById('vocab-alphabet');
  const listEl = document.getElementById('vocab-list');
  const countEl = document.getElementById('vocab-count');

  if (vocabState.filter === 'alphabet') {
    alphaEl.style.display = '';
    listEl.style.display = 'none';
    countEl.textContent = t('vocabLetters', ALPHABET.length);
    alphaEl.innerHTML = `<div class="alphabet-section">
      <div class="alphabet-title">${t('alphaTitle')}</div>
      <div class="alphabet-grid">
        ${ALPHABET.map(([letter, name, read, readEn]) => `
          <div class="alpha-row">
            <div class="alpha-top">
              <span class="alpha-letter">${letter}</span>
              <span class="alpha-name">${name}</span>
            </div>
            <span class="alpha-read">${lang === 'en' ? (readEn || read) : read}</span>
          </div>`).join('')}
      </div>
      <div class="alphabet-note">${t('alphaNotes')}</div>
    </div>`;
    return;
  }

  alphaEl.style.display = 'none';
  listEl.style.display = '';

  // Filter & search
  let items = ALL_VOCAB;
  if (vocabState.filter !== 'all') {
    items = items.filter(v => v.cat === vocabState.filter);
  }
  if (vocabState.search) {
    const s = vocabState.search.toLowerCase();
    items = items.filter(v =>
      v.es.toLowerCase().includes(s) ||
      v.ru.toLowerCase().includes(s) ||
      (v.en && v.en.toLowerCase().includes(s))
    );
  }

  countEl.textContent = t('vocabWords', items.length);

  const listHtml = items.map(v => {
    const open = vocabState.expanded.has(v.id);
    const translation = lang === 'en' ? (v.en || v.ru) : v.ru;
    return `<div class="vocab-card" data-action="vtoggle" data-vid="${v.id}">
      <div class="vocab-es">${esc(v.es)}</div>
      <div class="vocab-ru">${esc(translation)}</div>
      <div class="vocab-meta">
        <span class="badge badge-cat">${catLabel(v.cat)}</span>
      </div>
      <div class="vocab-example${open?' open':''}">
        <em>${esc(v.example)}</em>
      </div>
    </div>`;
  }).join('');

  listEl.innerHTML = listHtml || `<div class="empty-state"><div class="empty-icon">🔍</div>${t('vocabNotFound')}</div>`;
}

// ─── STATS ────────────────────────────────────────────
function renderStats() {
  const totalAnswered = Object.keys(S.answered).length;
  const totalCorrect = Object.values(S.answered).filter(v => v.correct).length;
  const sessions = S.sessions.length;
  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  // Weak topics
  const topicData = Object.entries(S.topicStats)
    .filter(([,t]) => t.correct + t.incorrect >= 2)
    .map(([name, t]) => ({
      name,
      total: t.correct + t.incorrect,
      rate: Math.round(t.correct / (t.correct + t.incorrect) * 100)
    }))
    .sort((a,b) => a.rate - b.rate);

  const weakHtml = topicData.length === 0
    ? `<div class="empty-state" style="padding:20px"><div class="empty-icon">📊</div>${t('statsNoData')}</div>`
    : topicData.map(t => {
        const fillCls = t.rate < 60 ? 'fill-red' : t.rate < 75 ? 'fill-amber' : 'fill-green';
        return `<div class="topic-bar">
          <div class="topic-row">
            <span class="topic-name">${esc(t.name)}</span>
            <div class="track"><div class="fill ${fillCls}" style="width:${t.rate}%"></div></div>
            <span class="topic-pct">${t.rate}%</span>
          </div>
        </div>`;
      }).join('');

  // Session history chart
  const recentSessions = S.sessions.slice(-7);
  let chartHtml = '';
  if (recentSessions.length > 0) {
    const W = 280, H = 80, barW = 28, gap = (W - recentSessions.length * barW) / (recentSessions.length + 1);
    const days = lang === 'ru' ? ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'] : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#a8a8a8' : '#9c9890';
    const labelColor = isDark ? '#8a8a8a' : '#6b6963';
    let bars = '';
    recentSessions.forEach((sess, i) => {
      const rate = sess.total > 0 ? sess.correct / sess.total : 0;
      const h = Math.max(4, Math.round(rate * 62));
      const x = gap + i * (barW + gap);
      const y = 70 - h;
      const fill = rate >= 0.7 ? '#16a34a' : rate >= 0.5 ? '#d97706' : '#dc2626';
      const d = new Date(sess.date + 'T12:00:00');
      const dayLabel = days[d.getDay()] || sess.date.slice(5);
      bars += `<rect x="${x}" y="${y}" width="${barW}" height="${h}" rx="4" fill="${fill}" opacity=".85"/>`;
      bars += `<text x="${x+barW/2}" y="78" text-anchor="middle" font-size="9" fill="${textColor}">${dayLabel}</text>`;
      bars += `<text x="${x+barW/2}" y="${y-3}" text-anchor="middle" font-size="9" fill="${labelColor}">${Math.round(rate*100)}%</text>`;
    });
    chartHtml = `<div class="chart-wrap">
      <svg viewBox="0 0 ${W} ${H}" style="width:100%;max-width:${W}px">
        ${bars}
      </svg>
    </div>`;
  }

  document.getElementById('stats-content').innerHTML = `
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-num">${accuracy}%</div>
        <div class="stat-lbl">${lang === 'ru' ? 'Точность' : 'Accuracy'}</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${totalAnswered}</div>
        <div class="stat-lbl">${t('statsAnswered')}</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${sessions}</div>
        <div class="stat-lbl">${t('statsSessions')}</div>
      </div>
    </div>
    ${recentSessions.length > 0 ? `
    <div class="card">
      <div class="section-title">${t('statsHistory')}</div>
      ${chartHtml}
    </div>` : ''}
    <div class="card">
      <div class="section-title">${t('statsWeakTopics')}</div>
      ${weakHtml}
    </div>
    <div style="text-align:center;margin-top:20px">
      <button class="btn btn-danger" data-action="resetconfirm">${t('statsResetBtn')}</button>
    </div>
  `;
}


// ─── INFO ─────────────────────────────────────────────
function renderInfo() {
  const isEN = lang === 'en';
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const langCard = `<div class="info-card" style="margin-bottom:14px">
    <div class="info-card-header" style="margin-bottom:10px;padding-bottom:10px">
      <span class="info-icon">🌐</span>
      <h2>${isEN ? 'Language' : 'Язык'}</h2>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;gap:12px">
      <span style="font-size:14px;color:var(--muted)">${isEN ? 'Switch interface language:' : 'Переключить язык интерфейса:'}</span>
      <div style="display:flex;gap:6px">
        <button class="lang-btn${isEN?' lang-active':''}" data-action="toggleLang" id="lang-btn-en" data-lang="en">EN</button>
        <button class="lang-btn${!isEN?' lang-active':''}" data-action="toggleLang" id="lang-btn-ru" data-lang="ru">RU</button>
      </div>
    </div>
  </div>`;
  const themeCard = `<div class="info-card" style="margin-bottom:14px">
    <div class="info-card-header" style="margin-bottom:10px;padding-bottom:10px">
      <span class="info-icon">🎨</span>
      <h2>${isEN ? 'Theme' : 'Тема'}</h2>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;gap:12px">
      <span style="font-size:14px;color:var(--muted)">${isEN ? 'Dark theme:' : 'Темная тема:'}</span>
      <div style="display:flex;gap:6px">
        <button class="lang-btn${!isDark?' lang-active':''}" data-action="toggleTheme" data-theme="light">☀️ ${isEN ? 'Light' : 'Светлая'}</button>
        <button class="lang-btn${isDark?' lang-active':''}" data-action="toggleTheme" data-theme="dark">🌙 ${isEN ? 'Dark' : 'Темная'}</button>
      </div>
    </div>
  </div>`;
  const html = INFO_HTML[lang];
  const secondCard = html.indexOf('<div class="info-card">', html.indexOf('<div class="info-card">') + 1);
  const infoHtml = secondCard === -1 ? html + langCard + themeCard : html.slice(0, secondCard) + langCard + themeCard + html.slice(secondCard);
  document.getElementById('info-content').innerHTML = infoHtml;
}

// ─── LANG ─────────────────────────────────────────────
function applyLang() {
  document.title = t('pageTitle');
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  const btn = document.getElementById('lang-btn');
  if (btn) btn.textContent = lang === 'en' ? 'RU' : 'EN';
}

// ─── ROUTER ──────────────────────────────────────────
let currentView = 'quiz';

function navigate(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + view).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === view));
  currentView = view;
  if (view === 'vocab') renderVocab();
  if (view === 'stats') renderStats();
  if (view === 'info') renderInfo();
}

// ─── EVENTS ──────────────────────────────────────────
document.addEventListener('click', e => {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const { action, view, idx, cat, vid } = el.dataset;

  if (action === 'nav' || el.classList.contains('nav-btn')) {
    navigate(el.dataset.view);
    return;
  }
  if (action === 'select') { selectOption(+idx); return; }
  if (action === 'submit') { submitAnswer(); return; }
  if (action === 'next') { nextQuestion(); return; }
  if (action === 'restart') { startSession(); return; }
  if (action === 'vfilter') {
    vocabState.filter = cat;
    renderVocab();
    return;
  }
  if (action === 'vtoggle') {
    if (vocabState.expanded.has(vid)) vocabState.expanded.delete(vid);
    else vocabState.expanded.add(vid);
    renderVocab();
    return;
  }
  if (action === 'toggleLang') {
    setLang(el.dataset.lang || (lang === 'en' ? 'ru' : 'en'));
    applyLang();
    renderInfo();
    renderQuestion();
    renderVocab();
    renderStats();
    return;
  }
  if (action === 'toggleTheme') {
    setTheme(el.dataset.theme);
    renderInfo();
    return;
  }
  if (action === 'resetconfirm') {
    if (confirm(t('statsResetConfirm'))) {
      resetState();
      renderStats();
      alert(lang === 'ru' ? 'Прогресс сброшен.' : 'Statistics reset.');
    }
    return;
  }
});

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => navigate(btn.dataset.view));
});

document.getElementById('vocab-search').addEventListener('input', e => {
  vocabState.search = e.target.value.trim();
  renderVocab();
});

// ─── TOOLTIP ─────────────────────────────────────────
const tt = document.getElementById('tt');
document.addEventListener('mouseover', e => {
  const abbr = e.target.closest('abbr[data-ru]');
  if (!abbr) return;
  const r = abbr.getBoundingClientRect();
  tt.textContent = abbr.dataset.ru;
  tt.style.left = Math.min(r.left, window.innerWidth - 220) + 'px';
  tt.style.top = (r.top - 32 + window.scrollY) + 'px';
  tt.classList.add('show');
});
document.addEventListener('mouseout', e => {
  if (!e.target.closest('abbr[data-ru]')) return;
  tt.classList.remove('show');
});

// ─── INIT ─────────────────────────────────────────────
loadTheme();
loadState();
applyLang();
startSession();
renderInfo();
})();
