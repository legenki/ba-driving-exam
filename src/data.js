// ─── I18N ─────────────────────────────────────────────
const I18N = {
  en: {
    navQuiz: 'Quiz',
    navVocab: 'Dictionary',
    navStats: 'Statistics',
    navInfo: 'Info',
    langToggle: 'RU',
    pageTitle: 'BA Driving Exam',
    questionOf: (n, total) => `Question ${n} of ${total}`,
    scoreLabel: (c, t) => `${c}/${t} correct`,
    answerBtn: 'Answer →',
    nextBtn: 'Next →',
    restartBtn: 'Restart',
    selectAnswer: 'Select an answer',
    sessionPassLabel: 'Correct answers',
    sessionPass: 'Passed! 🎉',
    sessionFail: 'Failed',
    sessionTimeout: 'Time is up!',
    newSessionBtn: 'New session',
    glosTitle: 'WORD BREAKDOWN',
    glosTerms: 'TERMS FROM DICTIONARY',
    glosWords: 'WORDS IN QUESTION',
    glosStruct: 'QUESTION STRUCTURE',
    explCorrect: '✓ Correct',
    explWrong: '✗ Wrong',
    explCorrectAns: 'Correct answer:',
    vocabSearchPlaceholder: 'Search... / Buscar...',
    vocabAll: 'All',
    vocabAlphabet: 'Alphabet',
    vocabWords: (n) => `${n} words`,
    vocabLetters: (n) => `${n} letters`,
    vocabNotFound: 'Nothing found',
    alphaTitle: 'Spanish Alphabet — 27 letters',
    alphaNotes: `<strong>Argentine pronunciation notes:</strong><br>
        <strong>ll / y</strong> → "sh" or "zh" sound (not "y" as in Spain)<br>
        <strong>v</strong> → pronounced as "b"<br>
        <strong>z / c(e,i)</strong> → "s" (not "θ" as in Spain)<br>
        <strong>h</strong> → always silent<br>
        <strong>rr / r at word start</strong> → rolled r`,
    statsAnswered: 'Answered',
    statsCorrect: 'Correct',
    statsSessions: 'Sessions',
    statsWeakTopics: 'WEAK TOPICS',
    statsHistory: 'SESSION HISTORY',
    statsNoData: 'Complete some quizzes to see statistics',
    statsResetBtn: 'Reset statistics',
    statsResetConfirm: 'Reset all statistics? This cannot be undone.',
    timerExpiredTitle: 'Time is up!',
    timerExpiredBody: 'The 40-minute exam time has expired.',
    infoHeroTitle: 'How to get a driving license in Buenos Aires',
    infoHeroSubtitle: 'Official information with translation and explanations',
    infoSource: 'Source: buenosaires.gob.ar ↗',
    infoFooter: 'Information was current at the time this site was created.<br>Check latest details at <a href="https://buenosaires.gob.ar" target="_blank" style="color:var(--accent)">buenosaires.gob.ar</a>',
  },
  ru: {
    navQuiz: 'Тест',
    navVocab: 'Словарь',
    navStats: 'Статистика',
    navInfo: 'Инфо',
    langToggle: 'EN',
    pageTitle: 'Экзамен ПДД — Буэнос-Айрес',
    questionOf: (n, total) => `Вопрос ${n} из ${total}`,
    scoreLabel: (c, t) => `${c}/${t} верно`,
    answerBtn: 'Ответить →',
    nextBtn: 'Далее →',
    restartBtn: 'Сначала',
    selectAnswer: 'Выберите ответ',
    sessionPassLabel: 'Правильных ответов',
    sessionPass: 'Сдал! 🎉',
    sessionFail: 'Не сдал',
    sessionTimeout: 'Время вышло!',
    newSessionBtn: 'Новая сессия',
    glosTitle: 'РАЗБОР СЛОВ',
    glosTerms: 'ТЕРМИНЫ ИЗ СЛОВАРЯ',
    glosWords: 'СЛОВА В ВОПРОСЕ',
    glosStruct: 'СТРУКТУРА ВОПРОСА',
    explCorrect: '✓ Верно',
    explWrong: '✗ Неверно',
    explCorrectAns: 'Правильный ответ:',
    vocabSearchPlaceholder: 'Искать... / Buscar...',
    vocabAll: 'Все',
    vocabAlphabet: 'Алфавит',
    vocabWords: (n) => `${n} слов`,
    vocabLetters: (n) => `${n} букв`,
    vocabNotFound: 'Ничего не найдено',
    alphaTitle: 'Испанский алфавит — 27 букв',
    alphaNotes: `<strong>Особенности аргентинского произношения:</strong><br>
        <strong>ll / y</strong> → звук «ш» или «ж» (не «й» как в Испании)<br>
        <strong>v</strong> → произносится как «б»<br>
        <strong>z / c(e,i)</strong> → «с» (не «θ» как в Испании)<br>
        <strong>h</strong> → всегда немое<br>
        <strong>rr / r в начале</strong> → раскатистый звук`,
    statsAnswered: 'Отвечено',
    statsCorrect: 'Верно',
    statsSessions: 'Сессий',
    statsWeakTopics: 'СЛАБЫЕ ТЕМЫ',
    statsHistory: 'ИСТОРИЯ СЕССИЙ',
    statsNoData: 'Пройдите тесты, чтобы увидеть статистику',
    statsResetBtn: 'Сбросить статистику',
    statsResetConfirm: 'Сбросить всю статистику? Это невозможно отменить.',
    timerExpiredTitle: 'Время вышло!',
    timerExpiredBody: 'Отведённые 40 минут на экзамен истекли.',
    infoHeroTitle: 'Как получить права в Буэнос-Айресе',
    infoHeroSubtitle: 'Официальная информация с переводом и пояснениями',
    infoSource: 'Источник: buenosaires.gob.ar ↗',
    infoFooter: 'Информация актуальна на момент создания сайта.<br>Проверяйте актуальные данные на <a href="https://buenosaires.gob.ar" target="_blank" style="color:var(--accent)">buenosaires.gob.ar</a>',
  }
};

let lang = localStorage.getItem('pddar_lang') || 'en';
function t(key, ...args) {
  const v = I18N[lang][key];
  return typeof v === 'function' ? v(...args) : (v ?? key);
}
function setLang(l) {
  lang = l;
  localStorage.setItem('pddar_lang', l);
  document.documentElement.lang = l;
}
function catLabel(cat) {
  return (lang === 'ru' ? CAT_LABELS : CAT_LABELS_EN)[cat] || cat;
}

// ─── INFO HTML ────────────────────────────────────────
const INFO_HTML = {
  en: `
    <div class="info-hero">
      <div class="info-hero-icon">🚗</div>
      <h1 class="info-title">How to get a driving license in Buenos Aires</h1>
      <p class="info-subtitle">Official information with translation and explanations</p>
      <a class="info-source-link" href="https://buenosaires.gob.ar/gcaba_historico/tramites/otorgamiento-de-licencia-de-conducir" target="_blank" rel="noopener">
        Source: buenosaires.gob.ar ↗
      </a>
    </div>

    <div class="info-card">
      <div class="info-card-header">
        <span class="info-icon">📋</span>
        <h2>General Information</h2>
      </div>
      <div class="info-row">
        <span class="info-label">Who needs it</span>
        <span class="info-val">First-time license <em>or</em> if previous license expired more than a year ago</span>
      </div>
      <div class="info-row">
        <span class="info-label">Status</span>
        <span class="info-val">New licenses are issued with <strong>"novice driver"</strong> (novato) status</span>
      </div>
      <div class="info-row">
        <span class="info-label">Process duration</span>
        <span class="info-val">Up to <strong>180 days</strong> from start</span>
      </div>
      <div class="info-row">
        <span class="info-label">Format</span>
        <span class="info-val">Combined: partly online, partly in-person</span>
      </div>
      <div class="info-note">
        💡 <strong>Note:</strong> "Novice" (novato) status means restrictions for the first 12 months: no paid passengers, alcohol limit 0.0 g/L (instead of standard 0.5 g/L).
      </div>
    </div>

    <div class="info-card">
      <div class="info-card-header">
        <span class="info-icon">📄</span>
        <h2>Required Documents</h2>
      </div>
      <div class="info-doc-list">
        <div class="info-doc">
          <div class="info-doc-name">DNI / Cédula de identidad</div>
          <div class="info-doc-ru">National identity document (DNI)</div>
          <div class="info-doc-note">Must be valid and show a Buenos Aires registered address</div>
        </div>
        <div class="info-doc">
          <div class="info-doc-name">Usuario miBA</div>
          <div class="info-doc-ru">Account on the miBA platform</div>
          <div class="info-doc-note">Register at <strong>mi.buenosaires.gob.ar</strong> — required for booking appointments and online steps</div>
        </div>
        <div class="info-doc">
          <div class="info-doc-name">CENAT</div>
          <div class="info-doc-ru">National traffic violation clearance certificate</div>
          <div class="info-doc-note">Costs <strong>$8.840 ARS</strong>. Valid for <strong>60 days</strong>. Get it in advance!</div>
        </div>
        <div class="info-doc">
          <div class="info-doc-name">Constancia de infracciones</div>
          <div class="info-doc-ru">Confirmation: no active fines</div>
          <div class="info-doc-note">Checked automatically — there must be no unpaid fines</div>
        </div>
      </div>
      <div class="info-note">
        💡 <strong>For foreigners</strong> (extranjeros): a certified translation of foreign licenses may be required — this can help avoid the "novice" status.
      </div>
    </div>

    <div class="info-card">
      <div class="info-card-header">
        <span class="info-icon">📍</span>
        <h2>Steps to get your license</h2>
      </div>
      <div class="info-steps">
        <div class="info-step">
          <div class="step-num">1</div>
          <div class="step-body">
            <div class="step-title">Check for fines</div>
            <div class="step-es">Verificar infracciones de tránsito</div>
            <div class="step-desc">Make sure you have no active unpaid fines. You can check online on the city website.</div>
          </div>
        </div>
        <div class="info-step">
          <div class="step-num">2</div>
          <div class="step-body">
            <div class="step-title">Get the CENAT</div>
            <div class="step-es">Obtener Certificado Nacional de Antecedentes de Tránsito</div>
            <div class="step-desc">National traffic record certificate. Pay $8.840 ARS and receive it online. <strong>Important:</strong> valid only 60 days, so get it shortly before starting the process.</div>
          </div>
        </div>
        <div class="info-step">
          <div class="step-num">3</div>
          <div class="step-body">
            <div class="step-title">Online questionnaire</div>
            <div class="step-es">Completar datos personales y declaración de aptitud física</div>
            <div class="step-desc">On the miBA platform, fill in personal data and a health declaration.</div>
          </div>
        </div>
        <div class="info-step">
          <div class="step-num">4</div>
          <div class="step-body">
            <div class="step-title">Road safety course</div>
            <div class="step-es">Curso de Educación Vial</div>
            <div class="step-desc">Must be completed within <strong>48 hours</strong> of starting. Valid for <strong>1 year</strong>. Can be done online or at a driving school. This is not driving — it's a theoretical video course.</div>
          </div>
        </div>
        <div class="info-step">
          <div class="step-num">5</div>
          <div class="step-body">
            <div class="step-title">Book appointment and pay</div>
            <div class="step-es">Sacar turno y pagar el BUI</div>
            <div class="step-desc">Choose one of <strong>15 offices</strong> and pay the unified ticket (BUI) <strong>$34.200 ARS</strong>. Payment within <strong>48 hours</strong>, otherwise the appointment is cancelled.</div>
          </div>
        </div>
        <div class="info-step">
          <div class="step-num">6</div>
          <div class="step-body">
            <div class="step-title">Psychophysical evaluation</div>
            <div class="step-es">Evaluación psicofísica</div>
            <div class="step-desc">In person at the office: vision, hearing, psychological and general medical assessment.</div>
          </div>
        </div>
        <div class="info-step">
          <div class="step-num">7</div>
          <div class="step-body">
            <div class="step-title">Theory exam</div>
            <div class="step-es">Examen teórico</div>
            <div class="step-desc">Multiple choice test — just like this app! Study materials are available on the city website. <strong>This site was built specifically to help you prepare for this exam.</strong></div>
          </div>
        </div>
        <div class="info-step">
          <div class="step-num">8</div>
          <div class="step-body">
            <div class="step-title">Practical exam</div>
            <div class="step-es">Examen práctico (manejo)</div>
            <div class="step-desc">Depends on category. For <strong>B1 (car)</strong> — driving on city streets in a dual-control vehicle. For <strong>A (motorcycle)</strong> — on a special track.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="info-card">
      <div class="info-card-header">
        <span class="info-icon">🏷️</span>
        <h2>License Categories</h2>
      </div>
      <div class="info-cats">
        <div class="info-cat info-cat-highlight">
          <div class="info-cat-letter">B1</div>
          <div class="info-cat-body">
            <div class="info-cat-name">Car, pickup, minivan</div>
            <div class="info-cat-es">Automóviles, camionetas y utilitarios</div>
            <div class="info-cat-note">Exam on city streets in a dual-control vehicle (manual or automatic)</div>
          </div>
        </div>
        <div class="info-cat">
          <div class="info-cat-letter">A</div>
          <div class="info-cat-body">
            <div class="info-cat-name">Motorcycle</div>
            <div class="info-cat-es">Motocicletas y ciclomotores</div>
            <div class="info-cat-note">Only at 4 offices with a track: sede Roca, ACA Libertador, Subsede 2, Sede 14</div>
          </div>
        </div>
        <div class="info-cat">
          <div class="info-cat-letter">C / D / E</div>
          <div class="info-cat-body">
            <div class="info-cat-name">Trucks, taxi/bus, trailers</div>
            <div class="info-cat-es">Camiones, transporte público, remolques</div>
            <div class="info-cat-note">Only at sede Roca. You must bring your own vehicle. These categories are valid only within Buenos Aires city!</div>
          </div>
        </div>
      </div>
      <div class="info-note">
        💡 <strong>Note:</strong> Categories C, D, E are city-only (CABA). To drive throughout Argentina, a separate inter-city license process is required.
      </div>
    </div>

    <div class="info-card">
      <div class="info-card-header">
        <span class="info-icon">💰</span>
        <h2>Cost</h2>
      </div>
      <div class="info-costs">
        <div class="info-cost-row">
          <div>
            <div class="info-cost-name">BUI — license issuance</div>
            <div class="info-cost-es">Boleto Único Inteligente</div>
          </div>
          <div class="info-cost-price">$34.200 ARS</div>
        </div>
        <div class="info-cost-row">
          <div>
            <div class="info-cost-name">CENAT — certificate</div>
            <div class="info-cost-es">Certificado Nacional de Antecedentes</div>
          </div>
          <div class="info-cost-price">$8.840 ARS</div>
        </div>
      </div>
      <div class="info-cost-total">Total: ~$43.040 ARS</div>
      <div style="margin-top:10px;font-size:13px;color:var(--muted)">
        <strong>Payment methods:</strong> Pago Fácil, Rapipago, Mercado Pago, online portal, BUEPP wallet
      </div>
      <div class="info-note" style="margin-top:10px">
        💡 Exemptions (exención): pensioners, Malvinas veterans, people with disabilities, low-income individuals, students of security forces — exempt from payment with supporting documents.
      </div>
    </div>

    <div class="info-card">
      <div class="info-card-header">
        <span class="info-icon">✅</span>
        <h2>Practical Tips</h2>
      </div>
      <div class="info-tips">
        <div class="info-tip">
          <span class="tip-icon">⏰</span>
          <div>
            <strong>CENAT is valid for 60 days.</strong> Start the process right after getting the certificate, otherwise you'll need to get a new one.
          </div>
        </div>
        <div class="info-tip">
          <span class="tip-icon">💳</span>
          <div>
            <strong>Pay the BUI within 48 hours</strong> after booking — otherwise the appointment is automatically cancelled.
          </div>
        </div>
        <div class="info-tip">
          <span class="tip-icon">📱</span>
          <div>
            <strong>Create your miBA account in advance</strong> at mi.buenosaires.gob.ar — without it you cannot start the process.
          </div>
        </div>
        <div class="info-tip">
          <span class="tip-icon">🏢</span>
          <div>
            <strong>Office hours:</strong> Mon–Fri, 8:30–14:00. Arrive early — queues can be long.
          </div>
        </div>
        <div class="info-tip">
          <span class="tip-icon">📚</span>
          <div>
            <strong>Theory exam</strong> — multiple choice test. Use this site to prepare. Questions are taken from real Buenos Aires simulators.
          </div>
        </div>
        <div class="info-tip">
          <span class="tip-icon">📞</span>
          <div>
            <strong>Chatbot Boti:</strong> +54 9 11 5050-0147 (WhatsApp) — ask any questions about the process in Spanish. <strong>Hotline:</strong> 147.
          </div>
        </div>
      </div>
    </div>

    <div style="text-align:center;padding:10px 0 20px;font-size:12px;color:var(--xs)">
      Information was current at the time this site was created.<br>
      Check latest details at <a href="https://buenosaires.gob.ar" target="_blank" style="color:var(--accent)">buenosaires.gob.ar</a>
    </div>
  `,
  ru: `
    <div class="info-hero">
      <div class="info-hero-icon">🚗</div>
      <h1 class="info-title">Как получить права в Буэнос-Айресе</h1>
      <p class="info-subtitle">Официальная информация с переводом и пояснениями</p>
      <a class="info-source-link" href="https://buenosaires.gob.ar/gcaba_historico/tramites/otorgamiento-de-licencia-de-conducir" target="_blank" rel="noopener">
        Источник: buenosaires.gob.ar ↗
      </a>
    </div>

    <div class="info-card">
      <div class="info-card-header">
        <span class="info-icon">📋</span>
        <h2>Общая информация</h2>
      </div>
      <div class="info-row">
        <span class="info-label">Для кого</span>
        <span class="info-val">Первое получение прав <em>или</em> если предыдущие истекли более года назад</span>
      </div>
      <div class="info-row">
        <span class="info-label">Статус</span>
        <span class="info-val">Новые права выдаются со статусом <strong>«начинающий водитель»</strong> (novato)</span>
      </div>
      <div class="info-row">
        <span class="info-label">Срок процесса</span>
        <span class="info-val">До <strong>180 дней</strong> с момента начала</span>
      </div>
      <div class="info-row">
        <span class="info-label">Формат</span>
        <span class="info-val">Комбинированный: часть онлайн, часть очно</span>
      </div>
      <div class="info-note">
        💡 <strong>Пояснение:</strong> Статус «начинающий» (novato) означает ограничения первые 12 месяцев: нельзя возить пассажиров за деньги, запрет на алкоголь 0,0 г/л (вместо стандартного 0,5 г/л).
      </div>
    </div>

    <div class="info-card">
      <div class="info-card-header">
        <span class="info-icon">📄</span>
        <h2>Необходимые документы</h2>
      </div>
      <div class="info-doc-list">
        <div class="info-doc">
          <div class="info-doc-name">DNI / Cédula de identidad</div>
          <div class="info-doc-ru">Удостоверение личности (ДНИ)</div>
          <div class="info-doc-note">Должен быть действующим и с адресом регистрации в Буэнос-Айресе</div>
        </div>
        <div class="info-doc">
          <div class="info-doc-name">Usuario miBA</div>
          <div class="info-doc-ru">Аккаунт на платформе miBA</div>
          <div class="info-doc-note">Регистрация на <strong>mi.buenosaires.gob.ar</strong> — нужен для записи и онлайн-шагов</div>
        </div>
        <div class="info-doc">
          <div class="info-doc-name">CENAT</div>
          <div class="info-doc-ru">Справка об отсутствии нарушений ПДД (национальная)</div>
          <div class="info-doc-note">Стоит <strong>$8.840 ARS</strong>. Действует <strong>60 дней</strong>. Получить заранее!</div>
        </div>
        <div class="info-doc">
          <div class="info-doc-name">Constancia de infracciones</div>
          <div class="info-doc-ru">Проверка: нет активных штрафов</div>
          <div class="info-doc-note">Проверяется автоматически — не должно быть неоплаченных штрафов</div>
        </div>
      </div>
      <div class="info-note">
        💡 <strong>Для иностранцев</strong> (extranjeros): потребуется легализованный перевод иностранных прав, если они у вас есть — это позволит избежать статуса «начинающий».
      </div>
    </div>

    <div class="info-card">
      <div class="info-card-header">
        <span class="info-icon">📍</span>
        <h2>Шаги получения прав</h2>
      </div>
      <div class="info-steps">
        <div class="info-step">
          <div class="step-num">1</div>
          <div class="step-body">
            <div class="step-title">Проверить штрафы</div>
            <div class="step-es">Verificar infracciones de tránsito</div>
            <div class="step-desc">Убедитесь, что у вас нет активных неоплаченных штрафов. Проверить можно онлайн на сайте города.</div>
          </div>
        </div>
        <div class="info-step">
          <div class="step-num">2</div>
          <div class="step-body">
            <div class="step-title">Получить CENAT</div>
            <div class="step-es">Obtener Certificado Nacional de Antecedentes de Tránsito</div>
            <div class="step-desc">Справка о национальных нарушениях ПДД. Оплатить $8.840 ARS и получить онлайн. <strong>Важно:</strong> действует только 60 дней, поэтому берите незадолго до начала процесса.</div>
          </div>
        </div>
        <div class="info-step">
          <div class="step-num">3</div>
          <div class="step-body">
            <div class="step-title">Онлайн-анкета</div>
            <div class="step-es">Completar datos personales y declaración de aptitud física</div>
            <div class="step-desc">На платформе miBA заполнить личные данные и декларацию о состоянии здоровья.</div>
          </div>
        </div>
        <div class="info-step">
          <div class="step-num">4</div>
          <div class="step-body">
            <div class="step-title">Курс безопасности дорожного движения</div>
            <div class="step-es">Curso de Educación Vial</div>
            <div class="step-desc">Нужно пройти в течение <strong>48 часов</strong> после начала. Действует <strong>1 год</strong>. Можно пройти онлайн или в автошколе. Это не вождение — теоретический видеокурс.</div>
          </div>
        </div>
        <div class="info-step">
          <div class="step-num">5</div>
          <div class="step-body">
            <div class="step-title">Запись на приём и оплата</div>
            <div class="step-es">Sacar turno y pagar el BUI</div>
            <div class="step-desc">Выбрать одно из <strong>15 офисов</strong> и оплатить единый талон (BUI) <strong>$34.200 ARS</strong>. Оплата в течение <strong>48 часов</strong>, иначе запись аннулируется.</div>
          </div>
        </div>
        <div class="info-step">
          <div class="step-num">6</div>
          <div class="step-body">
            <div class="step-title">Психофизическая оценка</div>
            <div class="step-es">Evaluación psicofísica</div>
            <div class="step-desc">Очно в офисе: проверка зрения, слуха, психологическая оценка и общее медицинское состояние.</div>
          </div>
        </div>
        <div class="info-step">
          <div class="step-num">7</div>
          <div class="step-body">
            <div class="step-title">Теоретический экзамен</div>
            <div class="step-es">Examen teórico</div>
            <div class="step-desc">Тест с вариантами ответов — как в этом приложении! Материалы для изучения есть на сайте города. <strong>Именно для подготовки к этому экзамену и создан этот сайт.</strong></div>
          </div>
        </div>
        <div class="info-step">
          <div class="step-num">8</div>
          <div class="step-body">
            <div class="step-title">Практический экзамен</div>
            <div class="step-es">Examen práctico (manejo)</div>
            <div class="step-desc">Зависит от категории. Для <strong>B1 (авто)</strong> — вождение по улице на машине с двойным управлением. Для <strong>A (мото)</strong> — на специальном треке.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="info-card">
      <div class="info-card-header">
        <span class="info-icon">🏷️</span>
        <h2>Категории прав</h2>
      </div>
      <div class="info-cats">
        <div class="info-cat info-cat-highlight">
          <div class="info-cat-letter">B1</div>
          <div class="info-cat-body">
            <div class="info-cat-name">Автомобиль, пикап, микроавтобус</div>
            <div class="info-cat-es">Automóviles, camionetas y utilitarios</div>
            <div class="info-cat-note">Экзамен по улицам города на машине с двойным управлением (ручная или автоматическая)</div>
          </div>
        </div>
        <div class="info-cat">
          <div class="info-cat-letter">A</div>
          <div class="info-cat-body">
            <div class="info-cat-name">Мотоцикл</div>
            <div class="info-cat-es">Motocicletas y ciclomotores</div>
            <div class="info-cat-note">Только в 4 офисах с треком: sede Roca, ACA Libertador, Subsede 2, Sede 14</div>
          </div>
        </div>
        <div class="info-cat">
          <div class="info-cat-letter">C / D / E</div>
          <div class="info-cat-body">
            <div class="info-cat-name">Грузовики, такси/автобус, прицепы</div>
            <div class="info-cat-es">Camiones, transporte público, remolques</div>
            <div class="info-cat-note">Только в sede Roca. Нужно привести своё транспортное средство. Категории действуют только в пределах Буэнос-Айреса!</div>
          </div>
        </div>
      </div>
      <div class="info-note">
        💡 <strong>Пояснение:</strong> Категории C, D, E — только городские (CABA). Если хотите ездить по всей Аргентине — нужен отдельный процесс получения межгородских прав.
      </div>
    </div>

    <div class="info-card">
      <div class="info-card-header">
        <span class="info-icon">💰</span>
        <h2>Стоимость</h2>
      </div>
      <div class="info-costs">
        <div class="info-cost-row">
          <div>
            <div class="info-cost-name">BUI — выдача удостоверения</div>
            <div class="info-cost-es">Boleto Único Inteligente</div>
          </div>
          <div class="info-cost-price">$34.200 ARS</div>
        </div>
        <div class="info-cost-row">
          <div>
            <div class="info-cost-name">CENAT — справка</div>
            <div class="info-cost-es">Certificado Nacional de Antecedentes</div>
          </div>
          <div class="info-cost-price">$8.840 ARS</div>
        </div>
      </div>
      <div class="info-cost-total">Итого: ~$43.040 ARS</div>
      <div style="margin-top:10px;font-size:13px;color:var(--muted)">
        <strong>Способы оплаты:</strong> Pago Fácil, Rapipago, Mercado Pago, онлайн-портал, BUEPP кошелёк
      </div>
      <div class="info-note" style="margin-top:10px">
        💡 Льготы (exención): пенсионеры, ветераны Мальвин, инвалиды, малоимущие, студенты силовых структур — освобождены от оплаты при предъявлении документов.
      </div>
    </div>

    <div class="info-card">
      <div class="info-card-header">
        <span class="info-icon">✅</span>
        <h2>Практические советы</h2>
      </div>
      <div class="info-tips">
        <div class="info-tip">
          <span class="tip-icon">⏰</span>
          <div>
            <strong>Срок CENAT — 60 дней.</strong> Начинайте процесс сразу после получения справки, иначе придётся брать заново.
          </div>
        </div>
        <div class="info-tip">
          <span class="tip-icon">💳</span>
          <div>
            <strong>Оплатите BUI в течение 48 часов</strong> после записи — иначе запись автоматически аннулируется.
          </div>
        </div>
        <div class="info-tip">
          <span class="tip-icon">📱</span>
          <div>
            <strong>Создайте аккаунт miBA заранее</strong> на mi.buenosaires.gob.ar — без него не начать процесс.
          </div>
        </div>
        <div class="info-tip">
          <span class="tip-icon">🏢</span>
          <div>
            <strong>Часы работы офисов:</strong> Пн–Пт, 8:30–14:00. Приходите заранее, очереди бывают большие.
          </div>
        </div>
        <div class="info-tip">
          <span class="tip-icon">📚</span>
          <div>
            <strong>Теоретический экзамен</strong> — тест с вариантами. Используйте этот сайт для подготовки. Вопросы взяты с реальных симуляторов Буэнос-Айреса.
          </div>
        </div>
        <div class="info-tip">
          <span class="tip-icon">📞</span>
          <div>
            <strong>Чат-бот Boti:</strong> +54 9 11 5050-0147 (WhatsApp) — задайте любые вопросы о процессе на испанском. <strong>Горячая линия:</strong> 147.
          </div>
        </div>
      </div>
    </div>

    <div style="text-align:center;padding:10px 0 20px;font-size:12px;color:var(--xs)">
      Информация актуальна на момент создания сайта.<br>
      Проверяйте актуальные данные на <a href="https://buenosaires.gob.ar" target="_blank" style="color:var(--accent)">buenosaires.gob.ar</a>
    </div>
  `
};


// ─── UTILS ───────────────────────────────────────────
function esc(s) {
  return String(s)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}


// ─── DATA ────────────────────────────────────────────
const QUESTIONS = [{"img":"img/b13.jpg","responses":[{"text":"Adelantamiento por la derecha."},{"correct":true,"text":"Giro a la derecha."},{"text":"Detenerse."}],"text":"¿Qué indica esta seña?","id":"q001"},{"img":"img/b173.jpg","responses":[{"correct":true,"text":"Como acompañamiento al uso de balizas y/o en caso de emergencia."},{"text":"Nunca."},{"text":"Sólo cuando se utilicen en calles."}],"text":"¿Son válidas este tipo de señas?","id":"q002"},{"responses":[{"correct":true,"text":"Detenerse inmediatamente y permanecer en el lugar del hecho."},{"text":"Conducir hasta la comisaría más cercana."},{"text":"Llamar al 911 y continuar el viaje."}],"text":"En caso de participar en un siniestro vial, ¿qué es recomendable hacer como primer paso?","id":"q003"},{"img":"img/b225.jpg","responses":[{"correct":true,"text":"Cruce de jinetes."},{"text":"Prohibición de circular con animales."},{"text":"Camino peligroso por presencia de animales sueltos."}],"text":"Determine qué indica la señal que a continuación se presenta:","id":"q004"},{"img":"img/b144.jpg","responses":[{"correct":true,"text":"A una diferencia de dos segundos."},{"text":"A una distancia de 2 metros."},{"text":"No existe una determinada. Sólo está prohibido circular inmediatamente detrás, sin dejar distancia."}],"text":"¿Cuál es la “distancia mínima de seguridad” a la que debe circular el vehículo A con respecto al B?","id":"q005"},{"img":"img/b185.jpg","responses":[{"text":"Igual que cuando la calzada se encuentra seca."},{"text":"Menor que cuando la calzada se encuentra seca."},{"correct":true,"text":"Mayor que cuando la calzada se encuentra seca."}],"text":"Al conducir sobre una calzada en estas condiciones, la distancia de frenado será...","id":"q006"},{"responses":[{"text":"No es obligatorio pero es recomendable llevarlo por sí se necesita utilizarlo frente a algún desperfecto mecánico."},{"text":"Sí, es obligatorio y puede ser llevado en cualquier parte del vehículo."},{"correct":true,"text":"Sí, es obligatorio y debe ser llevado dentro del habitáculo para poder utilizarlo en caso de necesitar descender a la calzada, frente a alguna causa de fuerza mayor."}],"text":"Según la Ley N° 2148, ¿es obligatorio llevar un chaleco de material reflectivo?","id":"q007"},{"img":"img/b39.jpg","responses":[{"correct":true,"text":"Advierte a los conductores sobre la existencia de un punto de cruce de ciclovía o bicisenda."},{"text":"Advierte a los conductores sobre la existencia de un establecimiento escolar cercano."},{"text":"Advierte a los conductores sobre un cruce peligroso por tener poca iluminación."}],"text":"¿Qué indica el siguiente cruce verde en las intersecciones?","id":"q008"},{"responses":[{"text":"Los vehículos de transporte de pasajero."},{"text":"El vehículo de menor tamaño."},{"correct":true,"text":"El vehículo que se presenta por el lado derecho."}],"text":"Como norma de carácter general, ¿quién tiene prioridad de paso en una encrucijada sin semáforos?","id":"q009"},{"img":"img/b157.jpg","responses":[{"text":"Junto a la acera izquierda los días hábiles durante las 24 horas."},{"correct":true,"text":"Junto a la acera izquierda los días hábiles entre las 7 y las 21 horas."},{"text":"Junto a la acera derecha los días hábiles entre las 7 y las 21 horas."}],"text":"La Ley Nº 2148 establece como norma general que en avenidas de este tipo, está prohibido estacionar vehículos…","id":"q010"},{"img":"img/b223.jpg","responses":[{"text":"Prohibido estacionar por la existencia de un aeropuerto cercano."},{"correct":true,"text":"Vuelos a baja altura de aviones sobre la vía, por la proximidad de aeródromo o aeropuerto."},{"text":"Prohibido estacionar y detenerse por la existencia de un aeropuerto cercano."}],"text":"¿Qué indica esta señal?","id":"q011"},{"img":"img/b210.jpg","responses":[{"correct":true,"text":"Sí, ya que por su edad debe utilizarlo y las características del cinturón de seguridad (3 puntos) permite ajustarlo correctamente."},{"text":"No, sólo puede utilizar el sistema de Retención Infantil en asientos laterales."},{"text":"Es indistinto, ya que al tener más de 10 años no es obligatorio que utilice el Sistema de Retención Infantil."}],"text":"Según la Ley Nº 2148, ¿es correcto que un niño de 11 años utilice un Sistema de Retención Infantil, en este asiento central?","id":"q012"},{"img":"img/b175.jpg","responses":[{"correct":true,"text":"Que está circulando en mí mismo sentido."},{"text":"Que está circulando en el sentido contrario al mío."},{"text":"No indican sentido de circulación sino que está descompuesto."}],"text":"Al observar las luces de este vehículo, ¿qué significado tienen en cuanto al sentido de circulación?","id":"q013"},{"img":"img/b164.jpg","responses":[{"correct":true,"text":"5 metros respecto de los rieles."},{"text":"2 metros respecto de los rieles."},{"text":"No existe una distancia mínima."}],"text":"Según la Ley Nº 24.449, en el caso de detener un vehículo en esta zona, ¿cuál es la distancia mínima que se debe mantener?","id":"q014"},{"img":"img/b93.jpg","responses":[{"text":"Aumentar la velocidad para no ser un obstáculo a este vehículo."},{"text":"Avisar a otros conductores de la presencia de este vehículo, usando repetidamente la bocina."},{"correct":true,"text":"Dar lugar a este vehículo, despejar el carril de emergencias y si fuera necesario detenerse."}],"text":"Frente a la siguiente situación de emergencia, ¿qué deben hacer los conductores que circulen en su proximidad?","id":"q015"},{"img":"img/b230.jpg","responses":[{"correct":true,"text":"Túnel."},{"text":"Puente angosto."},{"text":"Altura mínima."}],"text":"Determine qué indica la señal que a continuación se presenta:","id":"q016"},{"img":"img/b148.jpg","responses":[{"text":"Sí, salvo que el propietario del vehículo sea el mismo que el de la vivienda."},{"text":"No, ya que hay espacio suficiente para el paso del peatón."},{"correct":true,"text":"Ambas respuestas, A y B, son incorrectas."}],"text":"¿El vehículo de la imagen se encuentra en infracción?","id":"q017"},{"img":"img/b38.jpg","responses":[{"text":"Advierten la proximidad de una circunstancia o variación de la normalidad de la vía que puede resultar sorpresiva o peligrosa a la circulación."},{"text":"Identifican, orientan y hacen referencia a servicios, lugares, etc."},{"correct":true,"text":"Transmiten órdenes específicas, de cumplimiento obligatorio en el lugar para el cual están destinadas."}],"text":"¿Qué indican las señales reglamentarias?","id":"q018"},{"responses":[{"correct":true,"text":"No, porque la responsabilidad penal es intransferible."},{"text":"Sí. Además, del dueño también puede transferirse a la Compañía de Seguros."},{"text":"Lo resolverá el Juez, en función de la gravedad del incidente y sus consecuencias."}],"text":"Frente a un incidente de tránsito, ¿puede transferirse la Responsabilidad Penal del conductor de un vehículo al dueño del mismo?","id":"q019"},{"responses":[{"text":"Siempre y cuando se encuentre vigente."},{"text":"Sólo si es un familiar directo o tiene una relación laboral."},{"correct":true,"text":"En ningún caso."}],"text":"¿Se puede manejar un vehículo con “cédula para autorizado a conducir” a nombre de otra persona?","id":"q020"},{"responses":[{"correct":true,"text":"60 km/h."},{"text":"80 km/h."},{"text":"90 km/h."}],"text":"Según las normas generales, ¿cuál es la velocidad máxima que puede alcanzar un vehículo, al circular por ruta cuando atraviesa una zona urbana?","id":"q021"},{"responses":[{"text":"Sólo pueden, eventualmente, ampliarse para mejorar su visibilidad."},{"correct":true,"text":"No, deben estar colocadas en el lugar y de forma reglamentaria."},{"text":"Sólo está prohibido modificar la placa de dominio trasera, no así la delantera."}],"text":"La ubicación y posición de las placas de dominio del vehículo, ¿puede sufrir algún tipo de modificación?","id":"q022"},{"img":"img/b152.jpg","responses":[{"text":"Todo el frente del edificio."},{"correct":true,"text":"10 metros de cada lado de la entrada."},{"text":"5 metros de cada lado de la entrada."}],"text":"Como norma general, ¿qué distancia debe dejarse libre cuando se va a estacionar frente a este tipo de instituciones?","id":"q023"},{"img":"img/b258.jpg","responses":[{"correct":true,"text":"Que no se puede circular a una velocidad inferior a 35 km/h en esa vía."},{"text":"Que la velocidad máxima es de 35 km/h en esa vía."},{"text":"Que la velocidad precautoria es de 35 km/h en esa vía."}],"text":"¿Qué indica esta señal reglamentaria?","id":"q024"},{"responses":[{"correct":true,"text":"En cualquier asiento pero siempre con el cinturón de seguridad debidamente sujeto."},{"text":"Sólo en las plazas traseras con cinturón de seguridad debidamente sujeto."},{"text":"Sólo en dispositivo de retención infantil correspondiente a peso y talla, debidamente homologado."}],"text":"Según Ley N° 2148, ¿en qué plazas deben viajar los mayores de 12 años y con altura igual o superior a 1.50 mts.?","id":"q025"},{"responses":[{"text":"Siempre, independientemente de cómo se encuentre el tránsito vehicular."},{"correct":true,"text":"Cuando el tránsito se encuentra interrumpido por cualquier razón."},{"text":"Nunca, independientemente de cómo se encuentre el tránsito vehicular."}],"text":"¿Cuándo se debe ceder el paso a los vehículos que desean incorporarse al tránsito desde el lugar donde estaban estacionados o desde un garaje?","id":"q026"},{"img":"img/b133.jpg","responses":[{"text":"60 km/h."},{"text":"50 km/h."},{"correct":true,"text":"40 km/h."}],"text":"¿Cuál es la velocidad máxima permitida para un automóvil particular en este tramo de la avenida?","id":"q027"},{"img":"img/b273.jpg","responses":[{"text":"La señal A."},{"text":"La señal B."},{"correct":true,"text":"La señal C."}],"text":"¿Cuál de la tres señales indica que la ruta es provincial?","id":"q028"},{"responses":[{"text":"A controlar el buen funcionamiento del vehículo, los niveles de combustible, aceite e inflado de neumáticos."},{"correct":true,"text":"A adoptar conductas cautelosas al conducir, que consideran la responsabilidad por los actos que se llevan a cabo y a anticipar la conducta de los demás."},{"text":"A realizar cursos viales cada seis meses."}],"text":"¿A qué se denomina conducción preventiva?","id":"q029"},{"img":"img/b15.jpg","responses":[{"text":"Hacia la derecha."},{"text":"Hacia la izquierda."},{"correct":true,"text":"Hacia ambos lados."}],"text":"Si usted pretende cruzar esta intersección, ¿hacia qué lado debe mirar?","id":"q030"},{"responses":[{"text":"La bicisenda es de uso exclusivo de bicicletas y la ciclovía de uso preferencial."},{"text":"La bicisenda se encuentra sobre la calzada y la ciclovía sobre la vereda."},{"correct":true,"text":"La bicisenda se encuentra sobre la vereda y la ciclovía sobre la calzada."}],"text":"¿Cuál es la principal diferencia entre bicisendas y ciclovías?","id":"q031"},{"img":"img/b22.jpg","responses":[{"correct":true,"text":"Priorizar la circulación del peatón, indefectiblemente."},{"text":"Realizar una guiñada para advertir su preferencia de avance."},{"text":"Completar la maniobra como sea posible, para disminuir su tiempo de permanencia sobre la vereda."}],"text":"Si ud. es el conductor del vehículo, ¿qué conducta debe adoptar en la siguiente situación?","id":"q032"},{"img":"img/b162.jpg","responses":[{"text":"Sí, porque tiene las balizas encendidas y no necesita permanecer más de 5 minutos para que descienda un pasajero."},{"text":"Sí, porque la doble fila está permitida cuando se trata de ascenso y descenso de pasajeros."},{"correct":true,"text":"No, ya que la doble fila está permitida sólo como detención previa a la maniobra de estacionamiento."}],"text":"¿Está permitida la acción que se presenta en la siguiente imagen?","id":"q033"},{"responses":[{"correct":true,"text":"A mayor velocidad, menor campo visual."},{"text":"A menor velocidad, menor campo visual."},{"text":"A mayor velocidad, mayor campo visual."}],"text":"¿Qué relación existe entre la velocidad y el campo visual del conductor?","id":"q034"},{"img":"img/b270.jpg","responses":[{"text":"Prohibición de estacionar en la entrada de terminal de ómnibus."},{"correct":true,"text":"Existencia de terminal de ómnibus, en las inmediaciones."},{"text":"Prohibición de detenerse en la entrada de terminal de ómnibus."}],"text":"¿Qué significa esta señal?","id":"q035"},{"responses":[{"correct":true,"text":"No, salvo que se realice para estacionar, entrar o salir de un garaje (cuando no exista otra posibilidad) o salvar algún obstáculo."},{"text":"Sí, se puede realizar en cualquier ocasión pero el trayecto para circular debe ser de pocos metros."},{"text":"Sí, siempre que se realice antes de llegar a la mitad de la cuadra y asegurándose de no poner en riesgo al resto de los vehículos."}],"text":"¿Está permitido circular marcha atrás en la Ciudad de Buenos Aires?","id":"q036"},{"img":"img/b53.jpg","responses":[{"text":"Sólo si se ha participado de un siniestro vial."},{"text":"No. Sólo la prueba positiva, efectivamente realizada, se considera una falta."},{"correct":true,"text":"Sí, la misma se toma como una presunción de alcoholemia positiva."}],"text":"Si el conductor de un vehículo se niega a realizar este test, ¿constituye ésto una falta?","id":"q037"},{"img":"img/b154.jpg","responses":[{"text":"No. Está prohibido estacionar y detenerse."},{"correct":true,"text":"Sí. Sólo está prohibido estacionar pero no detenerse."},{"text":"Según la hora en que quiera realizarse la detención."}],"text":"Como norma general, frente a esta señal, ¿está permitido detenerse para el ascenso o descenso de pasajeros?","id":"q038"},{"responses":[{"text":"No, sólo es obligatorio para los que se ubiquen en los asientos delanteros."},{"text":"No, porque se está por llegar a destino."},{"correct":true,"text":"Sí, porque su uso es obligatorio para todos los ocupantes."}],"text":"Luego de un largo viaje en ruta, realizó una parada y le faltan muy pocos kilómetros para llegar a destino, ¿es necesario que todos los ocupantes vuelvan a ponerse el cinturón de seguridad?","id":"q039"},{"responses":[{"correct":true,"text":"Hecho que puede ser evitado, en el cual se produce daño a persona o cosa, en ocasión de circulación en la vía pública."},{"text":"Hecho impredecible e inevitable en ocasión de circulación en la vía pública."},{"text":"Hecho, evitable o no, que involucra daños a terceros."}],"text":"¿A qué se denomina incidente de tránsito o incidente vial?","id":"q040"},{"responses":[{"text":"Velocidad y confort."},{"correct":true,"text":"Fluidez y seguridad."},{"text":"Comodidad y Agilidad."}],"text":"¿Cuáles son los dos principios básicos de todo sistema de tránsito en el mundo?","id":"q041"},{"responses":[{"text":"60 km/h."},{"correct":true,"text":"80 km/h."},{"text":"100 km/h."}],"text":"Según Ley N° 2148, ¿cuál es la velocidad máxima permitida para automóviles particulares en los carriles centrales de la Av. Gral. Paz, en el tramo entre Autopista Ingeniero Pascual Palazzo y Av. 27 de Febrero?","id":"q042"},{"img":"img/b70.jpg","responses":[{"correct":true,"text":"Avanzar porque el personal ferroviario está autorizado a regular el paso de vehículos."},{"text":"Detenerme y esperar hasta que la barrera se levante porque el personal ferroviario no tiene la autoridad legal para realizar dicha indicación."},{"text":"Detenerme y esperar hasta que la barrera se levante, salvo que la indicación sea realizada por un agente de tránsito ya que es la única autoridad competente."}],"text":"Si se encuentra en esta situación y el personal ferroviario le indica que avance, ¿qué debe hacer?","id":"q043"},{"img":"img/b161.jpg","responses":[{"text":"Que se trate de una detención para el ascenso o descenso de pasajeros."},{"correct":true,"text":"Que se trate de una detención previa a la maniobra de estacionamiento."},{"text":"Ambas respuestas, la A y la B, son correctas."}],"text":"La Ley N° 2148 establece como norma general la prohibición de detenerse de la siguiente forma, excepto:","id":"q044"},{"img":"img/b31.jpg","responses":[{"text":"Cruce peligroso por tener poca iluminación."},{"text":"Senda peatonal próxima a centros de salud."},{"correct":true,"text":"Senda peatonal próxima a zona escolar."}],"text":"¿Qué significa la demarcación horizontal que se visualiza en la imagen?","id":"q045"},{"img":"img/b98.jpg","responses":[{"correct":true,"text":"Los vehículos que circulan por la calle A."},{"text":"Los vehículos que circulan por la calle B."}],"text":"¿Quién tiene prioridad de paso en el cruce de estas dos calles?","id":"q046"},{"img":"img/b215.jpg","responses":[{"correct":true,"text":"Sí. Lo establece la normativa para evitar lesiones graves en la zona cervical."},{"text":"No en todos, para los asientos traseros no cumplen ninguna función."},{"text":"No, ya que no forma parte de la seguridad activa ni pasiva de los vehículos."}],"text":"¿Es obligatoria la utilización de este elemento en todos los asientos del automóvil?","id":"q047"},{"img":"img/b202.jpg","responses":[{"correct":true,"text":"Imagen A."},{"text":"Imagen B."},{"text":"Ambas respuestas, la A y la B, son correctas."}],"text":"Indique cuál de estas imágenes muestra la manera correcta de colocar el espejo retrovisor:","id":"q048"},{"responses":[{"text":"Acomodar correctamente los espejos retrovisores antes de iniciar la marcha. Mientras se circula, además de revisar los espejos retrovisores, utilizar la visión periférica dando vistazos por encima de los hombros cuando sea necesario."},{"text":"Antes de realizar una maniobra se debe disminuir la velocidad de circulación, colocar la luz de giro y mirar por los espejos realizando un pequeño movimiento corporal hacia adelante para ampliar el ángulo de visión."},{"correct":true,"text":"Ambas respuestas, A y B, son correctas."}],"text":"¿Cómo se pueden reducir los puntos ciegos al conducir un vehículo?","id":"q049"},{"responses":[{"text":"Sí, únicamente si no compromete la visibilidad."},{"correct":true,"text":"Sí, mientras que esté ubicado en un asiento adicional detrás del conductor."},{"text":"Ambas respuestas, A y B, son incorrectas."}],"text":"El ciclista, ¿tiene permitido llevar un pasajero?","id":"q050"},{"img":"img/b7.jpg","responses":[{"correct":true,"text":"La opción A, ya que al tener ropa clara es más visible."},{"text":"Opción B, ya que al tener ropa oscura no genera distracciones en los demás conductores."},{"text":"Ambas opciones presentan el mismo riesgo por igual."}],"text":"En cuanto a su indumentaria, ¿cuál de los dos ciclistas presenta menor riesgo de sufrir un siniestro vial?","id":"q051"},{"img":"img/b246.jpg","responses":[{"text":"Camión - Colectivo - Moto - Ciclista - Peatón - Taxi/Automóvil."},{"correct":true,"text":"Peatón - Ciclista - Moto - Colectivo - Taxi/Automóvil - Camión."},{"text":"Peatón - Ciclista - Colectivo - Moto - Taxi/Automóvil - Camión."}],"text":"¿Cuál de las siguientes opciones representa a los usuarios de la vía, ordenados de más a menos vulnerable?","id":"q052"},{"responses":[{"correct":true,"text":"Lugar del hecho, características del incidente, cantidad y estado de las víctimas."},{"text":"Lugar del hecho, número de dominio de los vehículos involucrados, cantidad y estado de las víctimas."},{"text":"Únicamente lugar del hecho para ganar tiempo y que el servicio de emergencia llegue lo más rápido posible."}],"text":"En caso de participar en un siniestro vial, es recomendable que quien llame por teléfono al servicio de emergencias (107), indique con claridad:","id":"q053"},{"img":"img/b74.jpg","responses":[{"correct":true,"text":"Detener la marcha y realizar el cruce cuando se tenga la certeza de que no existe riesgo alguno."},{"text":"Al tener prioridad, debo atravesarla rápidamente para no obstaculizar la vía."},{"text":"Extremar precauciones al cruzar sin la necesidad de detenerme."}],"text":"Si al conducir un vehículo se encuentra en una intersección con esta señalización intermitente, ¿qué actitud debe tomar?","id":"q054"},{"responses":[{"correct":true,"text":"Antes de iniciar la marcha."},{"text":"Durante la conducción, para poder hacer una prueba real."},{"text":"Con el vehículo inmovilizado y el conductor fuera del mismo."}],"text":"Para realizar una conducción segura, ¿cuándo es recomendable verificar la orientación de los espejos retrovisores?","id":"q055"},{"img":"img/b226.jpg","responses":[{"text":"Camino resbaladizo."},{"correct":true,"text":"Camino sinuoso."},{"text":"Camino cuesta arriba."}],"text":"Determine qué indica la señal que a continuación se presenta:","id":"q056"},{"img":"img/b267.jpg","responses":[{"text":"Una encrucijada peligrosa."},{"correct":true,"text":"La existencia de un puesto sanitario o de socorro."},{"text":"La existencia de un templo religioso."}],"text":"¿Qué indica esta señal vertical de información?","id":"q057"},{"img":"img/b228.jpg","responses":[{"text":"Inicio de doble mano."},{"text":"Estrechamiento (en una sola mano)."},{"correct":true,"text":"Encrucijada (bifurcación)."}],"text":"Determine qué indica la señal que a continuación se presenta:","id":"q058"},{"img":"img/b6.jpg","responses":[{"text":"Sí, porque está conduciendo correctamente."},{"correct":true,"text":"No, ya que utilizar auriculares es un factor de distracción que impide conectarse con lo que sucede alrededor."},{"text":"Sí, ya que tiene las medidas de seguridad necesarias y el uso de los auriculares permite mejorar la calidad del viaje."}],"text":"¿Es aconsejable circular en bicicleta de esta manera?","id":"q059"},{"img":"img/b105.jpg","responses":[{"correct":true,"text":"Debe ceder el paso al vehículo que circula en el sentido contrario."},{"text":"Tiene prioridad de paso sobre el otro vehículo."},{"text":"La normativa no establece prioridad de paso ante esta situación."}],"text":"Frente a esta situación de obstrucción de vía, ¿qué debe hacer el conductor del vehículo señalado?","id":"q060"},{"img":"img/b206.jpg","responses":[{"text":"No hay plazo. Si llegase a desaprobar se deberá volver a abonar el arancel correspondiente, aunque se realice al otro día."},{"text":"Si se realiza dentro de los 60 días corridos a partir de efectuada la verificación."},{"correct":true,"text":"Si se realiza dentro de los 60 días hábiles de efectuada la verificación."}],"text":"En el caso de tener que realizar una reverificación de la VTV, por motivos de una desaprobación original, ¿cuál es el plazo de tiempo para que ésta sea gratuita?","id":"q061"},{"responses":[{"text":"Escuche música a alto volúmen."},{"text":"Mantenga el interior del vehículo a una temperatura superior a 25 °C."},{"correct":true,"text":"Mantenga bien ventilado el interior del vehículo."}],"text":"Para evitar o retrasar la aparición de la fatiga, es aconsejable que el conductor:","id":"q062"},{"img":"img/b158.jpg","responses":[{"text":"Junto a la acera derecha los días hábiles durante las 24 horas."},{"text":"Junto a la acera izquierda los días hábiles entre las 7 y las 21 horas."},{"correct":true,"text":"Junto a la acera izquierda todos los días durante las 24 horas."}],"text":"La Ley Nº 2148 establece como norma general que en este tipo de calles está prohibido estacionar vehículos...","id":"q063"},{"responses":[{"text":"Los efectos del alcohol no terminan con la ingesta, sino que se extienden hasta haberlo eliminado del organismo."},{"text":"Conducir con resaca es equiparable, por sus efectos en el organismo, a conducir alcoholizado."},{"correct":true,"text":"Ambas respuestas, la A y la B, son correctas."}],"text":"Conducir al día siguiente de una noche de consumo excesivo de alcohol es riesgoso porque:","id":"q064"},{"img":"img/b176.jpg","responses":[{"text":"Para advertir a los demás conductores, frente a malas condiciones climáticas, que el vehículo circula a baja velocidad."},{"correct":true,"text":"Para señalizar y advertir a los demás conductores que el vehículo se encuentra detenido o próximo a una maniobra de detención, estacionamiento o emergencia."},{"text":"Ambas respuestas, A y B, son correctas."}],"text":"¿Para qué sirven estas luces intermitentes?","id":"q065"},{"img":"img/b48.jpg","responses":[{"text":"Opción A."},{"correct":true,"text":"Opción B."},{"text":"Ambas respuestas, A y B, son correctas."}],"text":"¿Cuál de las siguientes opciones está directamente vinculada a la prevención y reducción de siniestros viales?","id":"q066"},{"img":"img/b156.jpg","responses":[{"correct":true,"text":"Junto a ambas aceras los días hábiles entre las 7 y las 21 horas."},{"text":"Junto a la acera derecha los días hábiles entre las 7 y las 21 horas."},{"text":"Junto a la acera izquierda los días hábiles entre las 7 y las 21 horas."}],"text":"La Ley Nº 2148 establece como norma general que en avenidas de este tipo, está prohibido estacionar vehículos...","id":"q067"},{"img":"img/b83.jpg","responses":[{"text":"La señal A."},{"correct":true,"text":"La señal B."},{"text":"La señal C."}],"text":"¿Cuál de estas señales es Reglamentaria?","id":"q068"},{"img":"img/b209.jpg","responses":[{"text":"Permite prescindir del uso del cinturón de seguridad."},{"correct":true,"text":"Complementa el uso del cinturón de seguridad."},{"text":"Es incompatible con el uso del cinturón de seguridad."}],"text":"Este elemento de seguridad...","id":"q069"},{"responses":[{"text":"Es indistinto, siempre que miren a ambos lados antes de hacerlo."},{"text":"En coincidencia con las paradas de transporte."},{"correct":true,"text":"Por la esquina, por la prolongación longitudinal de la vereda sobre la calle."}],"text":"Cuando no hay demarcación de la senda peatonal, ¿por dónde deben cruzar los peatones?","id":"q070"},{"responses":[{"correct":true,"text":"Al humano."},{"text":"Al vehicular."},{"text":"Al ambiental."}],"text":"¿A qué factor se deben la mayoría de los siniestros viales?","id":"q071"},{"responses":[{"text":"Tocando bocina."},{"correct":true,"text":"Utilizando la luz de giro del lado correspondiente, al menos 30 metros antes."},{"text":"Utilizando ambos giros, metros antes de llegar a la intersección."}],"text":"Para realizar correctamente un giro en una intersección se debe indicar...","id":"q072"},{"img":"img/b97.jpg","responses":[{"text":"El vehículo A."},{"correct":true,"text":"El vehículo B."}],"text":"En un cruce de dos calles sin semáforo, frente a la siguiente situación, ¿quién tiene prioridad de paso?","id":"q073"},{"responses":[{"correct":true,"text":"Aproximadamente 8 horas."},{"text":"Al menos 4 horas."},{"text":"Algunas horas, su cantidad no influye en la conducción ya que lo importante es realizar paradas de descanso."}],"text":"Si se va a conducir por un largo tiempo, lo recomendable es dormir la noche anterior...","id":"q074"},{"img":"img/b107.jpg","responses":[{"text":"El vehículo A."},{"correct":true,"text":"El vehículo B."},{"text":"Es indistinto."}],"text":"En esta situación, donde hay una calzada circular, ¿quién tiene la prioridad de paso?","id":"q075"},{"img":"img/b163.jpg","responses":[{"correct":true,"text":"Detrás de la prolongación de la línea imaginaria de la ochava, de modo que la esquina quede libre, sin obstaculizar la visibilidad de los conductores."},{"text":"Es indistinto siempre que quede la senda peatonal libre, para no obstaculizar el cruce del peatón."},{"text":"Dentro de la intersección."}],"text":"Si va a detenerse o estacionar en las cercanías de esta esquina, ¿dónde sería correcto hacerlo?","id":"q076"},{"img":"img/b24.jpg","responses":[{"text":"Que no comience a cruzar la calzada."},{"text":"Si inició el cruce, que lo finalice con mucha precaución."},{"correct":true,"text":"Ambas respuestas, la A y la B son correctas."}],"text":"Como conductor, observa que esta luz se encuentra intermitente, ¿qué debería esperar que haga el peatón?","id":"q077"},{"img":"img/b27.jpg","responses":[{"correct":true,"text":"Sí, ya que constituye una falta de tránsito que amerita esa sanción."},{"text":"Sólo si perjudica la circulación de los colectivos."},{"text":"Nunca, ya que la licencia de conducir es un documento personal. Sólo puede labrar un acta de infracción."}],"text":"¿La autoridad de tránsito puede retener la licencia de conducir al conductor de un vehículo, que no sea colectivo o de emergencia, por encontrarse circulando por este carril?","id":"q078"},{"img":"img/b94.jpg","responses":[{"correct":true,"text":"Cederle el paso, ya que está indicando que se encuentra en emergencia."},{"text":"Brindar mi colaboración, ya que está indicando que el vehículo tiene un desperfecto mecánico."},{"text":"Alertar a otros conductores, tocando repetidamente la bocina, que ese vehículo cruzará un semáforo en rojo."}],"text":"Ud. se encuentra frente a la siguiente situación donde el conductor toca repetidamente la bocina, ¿qué debe hacer si se encuentra conduciendo en su proximidad?","id":"q079"},{"img":"img/b16.jpg","responses":[{"text":"No, ya que la circulación de este tipo de vehículos en la vía pública se encuentra prohibida."},{"correct":true,"text":"Sí, sólo si su potencia disminuye progresivamente hasta interrumpirse al alcanzar una velocidad máxima de 25 km/h."},{"text":"No, sólo pueden circular por vías donde no haya ciclovías."}],"text":"¿Este ciclorodado con pedaleo asistido eléctricamente (bicicleta eléctrica) puede circular por este carril?","id":"q080"},{"responses":[{"correct":true,"text":"Daños materiales, costos sanitarios y administrativos."},{"text":"Daños materiales y costos sanitarios."},{"text":"Sólo daños materiales."}],"text":"Además de provocar víctimas fatales o lesionados graves, ¿qué otras consecuencias puede generar un siniestro de tránsito?","id":"q081"},{"img":"img/b160.jpg","responses":[{"text":"Permanece de ese modo, de 2 a 5 minutos."},{"text":"Permanece de ese modo alrededor de 2 minutos, no abandona el vehículo y además, indica su detención con las balizas."},{"correct":true,"text":"Es una detención previa a la maniobra de estacionamiento."}],"text":"En la presente situación, el vehículo señalado no se encuentra en infracción si...","id":"q082"},{"responses":[{"text":"Forma de trasladarnos de manera más efectiva, priorizando el uso del vehículo particular."},{"text":"Forma de trasladarnos de manera más rápida, independientemente del tipo de movilidad elegida."},{"correct":true,"text":"Forma de trasladarnos de manera rápida, segura y ordenada; haciendo hincapié en los peatones y ciclistas y contribuyendo a una mejor calidad ambiental."}],"text":"¿A qué se denomina Movilidad Sustentable?","id":"q083"},{"responses":[{"correct":true,"text":"Sólo para advertir una situación potencialmente de peligro."},{"text":"Sólo para advertir de un sobrepaso."},{"text":"Ambas respuestas, la A y la B, son incorrectas."}],"text":"¿En qué ocasiones se permite el uso de la bocina?","id":"q084"},{"responses":[{"text":"No iniciar el cruce si no hay espacio para ubicar el vehículo del otro lado sin obstruir la circulación transversal."},{"text":"Permitir, antes de avanzar, que complete el cruce otro vehículo o peatón que ya lo haya iniciado."},{"correct":true,"text":"Ambas respuestas, la A y la B, son correctas."}],"text":"Cuando un semáforo cambia de luz roja a verde, está habilitando a reiniciar la marcha; no obstante ello, ¿qué precauciones se deben adoptar?","id":"q085"},{"responses":[{"text":"No, porque al ser el sistema de suspensión delantero el deteriorado, éste no influirá en la conducción."},{"correct":true,"text":"Sí, puede afectar al correcto control del vehículo."},{"text":"No, porque si se encuentra correctamente la suspensión trasera, ésta asegurará el contacto adecuado de las ruedas con la calzada."}],"text":"Si el sistema de amortiguación delantero de su vehículo se encuentra en mal estado, ¿puede afectar esta anomalía la conducción?","id":"q086"},{"img":"img/b199.jpg","responses":[{"text":"Para comprobar la temperatura del aceite."},{"correct":true,"text":"Para comprobar el nivel del aceite."},{"text":"Para comprobar la presión del aceite y del líquido de frenos."}],"text":"¿Para qué sirve esta varilla metálica?","id":"q087"},{"responses":[{"correct":true,"text":"Lo más pesado en el fondo del baúl, cerca del centro del auto. Eso ayuda a la estabilidad direccional y al comportamiento en las curvas."},{"text":"Lo más pesado en el techo del vehículo, sujeto con sogas. Eso ayuda al centro de gravedad."},{"text":"Lo más pesado en los asientos traseros (si es que se viaja sin ocupantes en esa zona). Eso ayuda a la estabilidad direccional."}],"text":"¿En qué parte del vehículo es conveniente poner el equipaje?","id":"q088"},{"img":"img/b238.jpg","responses":[{"correct":true,"text":"Cruce de peatones (Peligro máximo)."},{"text":"Peatones a la izquierda."},{"text":"Prohibición de circular. Zona exclusiva peatonal."}],"text":"Determine qué indica la señal vertical que a continuación se presenta:","id":"q089"},{"img":"img/b25.jpg","responses":[{"text":"Todos los transportes de pasajeros."},{"text":"Sólo colectivos entre las 07 h y las 21 h."},{"correct":true,"text":"Colectivos autorizados y vehículos destinados al servicio de emergencia en cumplimiento de sus funciones."}],"text":"¿Qué vehículos pueden circular por el carril señalizado en la imagen?","id":"q090"},{"img":"img/b224.jpg","responses":[{"text":"Proximidad de bosques."},{"text":"Zonas de palmeras."},{"correct":true,"text":"Vientos fuertes laterales."}],"text":"Determine qué indica la señal que a continuación se presenta:","id":"q091"},{"img":"img/b123.jpg","responses":[{"text":"Indica que se puede traspasar."},{"correct":true,"text":"Divide sentidos opuestos de circulación e indica que está prohibido traspasarla."},{"text":"Que es una zona que se puede circular sobre ella."}],"text":"¿Qué indica esta demarcación amarilla en la calzada?","id":"q092"},{"responses":[{"text":"10 años."},{"text":"11 años."},{"correct":true,"text":"12 años."}],"text":"Según Ley N° 2148, ¿cuál es la edad mínima permitida para viajar en el asiento delantero de acompañante en un auto?","id":"q093"},{"img":"img/b49.jpg","responses":[{"text":"El número 1."},{"text":"La letra D."},{"correct":true,"text":"El número 3."}],"text":"¿Cuál dígito de la siguiente placa de dominio indica el mes en que se debe realizar la Verificación Técnica Vehicular?","id":"q094"},{"img":"img/b249.jpg","responses":[{"text":"Que existe la opción de doblar hacia la derecha."},{"correct":true,"text":"Que hay un giro obligatorio hacia la derecha."},{"text":"Que se aproxima una curva peligrosa con inclinación hacia la derecha."}],"text":"¿Qué indica esta señal?","id":"q095"},{"img":"img/b104.jpg","responses":[{"text":"Al automóvil."},{"correct":true,"text":"Al colectivo."},{"text":"Es indistinto."}],"text":"En la siguiente situación, ¿a quién le corresponde la prioridad de paso?","id":"q096"},{"img":"img/b54.jpg","responses":[{"correct":true,"text":"2 años."},{"text":"1 año."},{"text":"6 meses."}],"text":"De acuerdo al siguiente símbolo, ¿por cuánto tiempo tiene prohibido conducir con más de 0,0 gramos de alcohol por litro de sangre el conductor de este vehículo?","id":"q097"},{"responses":[{"text":"Donde la delimitación de carriles es de trazo continuo."},{"text":"En curvas, encrucijadas, pasos a nivel o puentes."},{"correct":true,"text":"Ambas respuestas, A y B, son correctas."}],"text":"Como norma general, ¿dónde está prohibido el sobrepaso de un vehículo?","id":"q098"},{"responses":[{"text":"Le salvará la vida ya que puede sustituir al cinturón de seguridad."},{"text":"Evitará que sufra lesiones, siempre y cuando el siniestro se produzca a menos de 80 km/h."},{"correct":true,"text":"Puede provocar lesiones graves."}],"text":"Durante un siniestro, si el conductor del vehículo no lleva puesto el cinturón de seguridad, el airbag...","id":"q099"},{"img":"img/b155.jpg","responses":[{"text":"Bebidas alcohólicas."},{"text":"Comidas abundantes."},{"correct":true,"text":"Ambas respuestas, la A y la B, son correctas."}],"text":"El cansancio puede verse inducido por ingerir:","id":"q100"},{"img":"img/b240.jpg","responses":[{"correct":true,"text":"Cruce ferroviario."},{"text":"Estación ferroviaria."},{"text":"Circulación exclusiva (ferrocarril)."}],"text":"Determine qué indica la señal que a continuación se presenta:","id":"q101"},{"img":"img/b241.jpg","responses":[{"text":"Se advierte la aproximación de una curva con pendiente ascendente."},{"correct":true,"text":"Se aproxima una curva cerrada."},{"text":"Se aproxima un camino sinuoso."}],"text":"Al visualizar esta señal de prevención, usted sabe que:","id":"q102"},{"img":"img/b135.jpg","responses":[{"correct":true,"text":"60 km/h."},{"text":"70 km/h."},{"text":"40 km/h."}],"text":"¿Cuál es la velocidad máxima permitida para automóviles particulares en este tramo de la Av. Costanera Rafael Obligado?","id":"q103"},{"img":"img/b201.jpg","responses":[{"text":"Opción A."},{"text":"Opción B."},{"correct":true,"text":"Opción C."}],"text":"¿Con qué se lubrica un motor?","id":"q104"},{"img":"img/b255.jpg","responses":[{"correct":true,"text":"Que el vehículo no puede continuar su marcha sin detenerse."},{"text":"Presencia de reductor de velocidad."},{"text":"Comienzo de sentido opuesto de circulación."}],"text":"¿Qué indica esta señal reglamentaria?","id":"q105"},{"img":"img/b262.jpg","responses":[{"correct":true,"text":"Desvío por cambio de sentido de circulación."},{"text":"Calzada dividida."},{"text":"Cruce Peligroso."}],"text":"Determine qué indica la señal que a continuación se presenta:","id":"q106"},{"img":"img/b87.jpg","responses":[{"text":"Figura A."},{"text":"Figura B."},{"correct":true,"text":"Figura C."}],"text":"¿Cuál de las siguientes imágenes , por forma y color, corresponde a la señal indicativa de una rotonda o pendiente pronunciada?","id":"q107"},{"img":"img/b10.jpg","responses":[{"correct":true,"text":"Al menos, un metro y medio."},{"text":"Al menos, medio metro."},{"text":"Lo suficiente para no tocarlo."}],"text":"¿Qué distancia lateral debe dejar respecto de este ciclista en caso de querer adelantarlo?","id":"q108"},{"responses":[{"text":"1° Pasaje - 2° Calle - 3° Avenida."},{"correct":true,"text":"1° Avenida - 2° Calle - 3° Pasaje."},{"text":"Es indistinto, ya que el vehículo que circula por la derecha siempre tiene prioridad."}],"text":"De acuerdo a la Ley N° 2148, en encrucijadas sin semáforos, ¿cuál es el orden de prioridad de paso según el tipo de arteria?","id":"q109"},{"img":"img/b26.jpg","responses":[{"text":"Taxis con pasajeros."},{"text":"Motos."},{"correct":true,"text":"Ambas respuestas, la A y la B, son incorrectas."}],"text":"Además de colectivos, ¿quiénes pueden circular por este carril?","id":"q110"},{"img":"img/b89.jpg","responses":[{"text":"Aumentar la velocidad para no ser un obstáculo a este vehículo."},{"text":"Avisar a otros conductores de la presencia de este vehículo, usando repetidamente la bocina."},{"correct":true,"text":"Dar lugar a este vehículo, despejar el carril de emergencias y si fuera necesario detenerse."}],"text":"Frente a la siguiente situación de emergencia, ¿qué deben hacer los conductores que circulen en su proximidad?","id":"q111"},{"responses":[{"correct":true,"text":"Sí, debiendo advertirlo encendiendo las balizas, empleando la bocina en forma intermitente y agitando un paño."},{"text":"Sí. El conductor de dicho vehículo deberá sacar un brazo por la ventanilla y agitarlo reiteradamente para indicarle al resto de los usuarios de la vía la situación en la que se encuentra."},{"text":"No, los servicios de emergencia sólo pueden ser efectuados por los vehículos habilitados para este fin."}],"text":"Según la Ley N° 2148, un vehículo que no está destinado al servicio de emergencia, en caso de extrema necesidad, ¿puede realizar un servicio similar al que efectúan éstos?","id":"q112"},{"responses":[{"correct":true,"text":"Pasados los 3 años de antigüedad, en el mes que le corresponda, o superados los 60.000 km."},{"text":"Inmediatamente al retirarlo de la agencia."},{"text":"En el mes que le corresponda, inmediatamente seguido al año transcurrido."}],"text":"Según Ley N°2265, ¿Cuándo debe realizar la primer VTV un automóvil 0km radicado en CABA?","id":"q113"},{"img":"img/b11.jpg","responses":[{"text":"No pueden hacerlo. Únicamente deben circular por ciclovías o bicisendas y los menores de 12 años por la vereda."},{"correct":true,"text":"Cerca del borde derecho de la calzada."},{"text":"Cerca del borde izquierdo de la calzada."}],"text":"¿Por dónde deben circular los ciclistas en esta calle?","id":"q114"},{"img":"img/b194.jpg","responses":[{"text":"Es indistinto mientras que no resbalen."},{"text":"Sólo puede verse afectada la conducción en viajes largos."},{"correct":true,"text":"No, sólo un calzado sujeto al pie brinda seguridad en la conducción."}],"text":"¿Es seguro conducir con este tipo de calzado?","id":"q115"},{"img":"img/b28.jpg","responses":[{"correct":true,"text":"Cruce de Metrobús."},{"text":"Cruce exclusivo de vehículos de emergencia."},{"text":"Cruce de bicicletas."}],"text":"¿Qué indica la señal horizontal de color rojo que se encuentra demarcada sobre la calzada?","id":"q116"},{"responses":[{"correct":true,"text":"Sobrepasarlo por la derecha de manera segura, colocando luz de giro y observando por los espejos retrovisores."},{"text":"Sobrepaso por la izquierda, colocando la luz de giro y observando por los espejos retrovisores."},{"text":"Tocarle bocina para indicarle que debe seguir."}],"text":"Si al llegar a una intersección sin semáforos, se encuentra que el vehículo que está delante suyo está detenido esperando poder doblar hacia la izquierda, ¿qué debe hacer si ud. desea continuar en línea recta?","id":"q117"},{"img":"img/b254.jpg","responses":[{"text":"Que sólo está permitido circular en bicicleta a partir de donde se encuentra la señal."},{"correct":true,"text":"Indica al ciclista que es obligatorio descender de la bicicleta a partir de donde se encuentra la señal."},{"text":"Que comienza una ciclovía."}],"text":"¿Qué indica esta señal reglamentaria?","id":"q118"},{"responses":[{"text":"Vehicular y Ambiental."},{"text":"Humano y Vehicular."},{"correct":true,"text":"Humano, Vehicular y Ambiental."}],"text":"La Organización Mundial de la Salud manifiesta que el riesgo en la vía pública surge como resultado de diversos factores, ¿cuáles son?","id":"q119"},{"responses":[{"text":"Por bicisendas y ciclovías, en aquellos tramos de arterias donde estén presentes."},{"text":"En aquellas vías sin ciclovías deben circular por el sector derecho de la calzada, a excepción de autopistas y otras vías rápidas, donde se encuentra prohibida su circulación."},{"correct":true,"text":"Ambas respuestas, la A y la B, son correctas."}],"text":"¿Por dónde tienen permitida la circulación los ciclistas mayores de 12 años?","id":"q120"},{"responses":[{"text":"Reducir la contaminación y mejorar la calidad del medio ambiente."},{"text":"Garantizar el cumplimiento de las normas de seguridad de los vehículos."},{"correct":true,"text":"Ambas respuestas, la A y la B, son correctas."}],"text":"¿Cuál es el objetivo de la Verificación Técnica Vehicular?","id":"q121"},{"responses":[{"text":"130 km/h."},{"correct":true,"text":"120 km/h."},{"text":"110 km/h."}],"text":"Según la Ley Nacional N° 24.449, ¿cuál es la velocidad máxima permitida para automóviles particulares en semiautopistas?","id":"q122"},{"responses":[{"text":"2 años, sólo en el caso de los menores de 21 años de edad."},{"text":"6 meses, sólo para quien la tramita por primera vez."},{"correct":true,"text":"2 años, independientemente a la edad."}],"text":"¿Cuánto dura en su totalidad la condición de principiante?","id":"q123"},{"responses":[{"text":"Que no ha respondido adecuadamente a una circunstancia del tránsito por falta de práctica en la conducción."},{"text":"Que ha realizado un acto con su vehículo que las reglas de prudencia indican no hacer, o sea, que ha actuado peligrosamente."},{"correct":true,"text":"Que ha actuado no conforme a las exigencias de la Ley."}],"text":"En un incidente de tránsito, ¿qué significa que el conductor sea considerado responsable por negligencia?","id":"q124"},{"img":"img/b114.jpg","responses":[{"correct":true,"text":"El vehículo que circula por el carril que se pretende ocupar."},{"text":"El vehículo que realiza el cambio de carril."},{"text":"El vehículo del carril más lento."}],"text":"En este tipo de arteria, ¿quién tiene prioridad cuando se desea realizar un cambio de carril?","id":"q125"},{"img":"img/b220.jpg","responses":[{"correct":true,"text":"Opción A."},{"text":"Opción B."},{"text":"Ambas opciones, A y B, son correctas."}],"text":"¿Cuál es la correcta posición del uso de la banda inferior del cinturón de seguridad de tres puntas?","id":"q126"},{"img":"img/b119.jpg","responses":[{"text":"El vehículo A."},{"text":"El vehículo B."},{"correct":true,"text":"El vehículo C."}],"text":"En esta situación, ¿quién tiene prioridad para realizar el sobrepaso al camión?","id":"q127"},{"img":"img/b45.jpg","responses":[{"text":"Encender las luces intermitentes, colocar las balizas portátiles y llamar al número de emergencia de la Autopista."},{"text":"Descender del vehículo usando un chaleco reflectante y ponerse a resguardo detrás de una defensa si las hubiere."},{"correct":true,"text":"Ambas respuestas, la A y la B, son correctas."}],"text":"En caso de un siniestro vial o desperfecto mecánico, ¿qué es recomendable hacer cuando el vehículo queda inmovilizado en el sector señalado?","id":"q128"},{"responses":[{"correct":true,"text":"Las drogas ilegales y algunas legales (como el alcohol y algunos medicamentos)."},{"text":"Sólo las drogas ilegales."},{"text":"Todo tipo de drogas (las legales e ilegales)."}],"text":"¿Consumir cuál de estas sustancias pueden afectar la capacidad para conducir?","id":"q129"},{"img":"img/b239.jpg","responses":[{"correct":true,"text":"La señal A."},{"text":"La señal B."},{"text":"La señal C."}],"text":"¿Cuál de estas señales indica “Cruce de Peatones (máximo peligro)”?","id":"q130"},{"img":"img/b237.jpg","responses":[{"text":"Estrechamiento (en una mano)."},{"text":"Calzada dividida."},{"correct":true,"text":"Estrechamiento (en las dos manos)."}],"text":"Determine qué indica la señal que a continuación se presenta:","id":"q131"},{"responses":[{"correct":true,"text":"A una conducción que disminuya los riesgos de seguridad vial y logre un menor consumo de combustible."},{"text":"A una conducción que logre llegar a destino en el menor tiempo posible."},{"text":"A una conducción que mantenga durante todo el trayecto la misma velocidad."}],"text":"¿A qué se denomina conducción eficiente?","id":"q132"},{"img":"img/b271.jpg","responses":[{"text":"Prohibición de detenerse en las inmediaciones a la plaza."},{"text":"Prohibición de estacionar en las inmediaciones a la plaza."},{"correct":true,"text":"Existencia de una plaza, en las inmediaciones."}],"text":"¿Qué indica esta señal?","id":"q133"},{"responses":[{"text":"No, porque es un documento personal."},{"correct":true,"text":"Sólo en los casos que la normativa vigente así lo indique."},{"text":"Sólo en casos de incidentes que involucren a terceros."}],"text":"En caso de comprobar una falta, ¿puede un agente de tránsito retener la licencia de conducir?","id":"q134"},{"responses":[{"correct":true,"text":"20 kilómetros por hora."},{"text":"40 kilómetros por hora."},{"text":"30 kilómetros por hora."}],"text":"Según la Ley N° 2148, ¿cuál es el límite superior de la velocidad precautoria en un paso nivel?","id":"q135"},{"img":"img/b235.jpg","responses":[{"text":"Niños jugando."},{"correct":true,"text":"Zona escolar."},{"text":"Calle peatonal."}],"text":"Determine qué indica la señal que a continuación se presenta:","id":"q136"},{"responses":[{"correct":true,"text":"Aquellas que advierten la proximidad de una circunstancia o variación de la normalidad de la vía que puede resultar sorpresiva o peligrosa a la circulación."},{"text":"Aquellas que no transmiten órdenes ni previenen sobre irregularidades o riesgos en la vía. Identifican, orientan y hacen referencia a servicios, lugares, etc."},{"text":"Aquellas que transmiten órdenes específicas, de cumplimiento obligatorio en el lugar para el cual están destinadas."}],"text":"¿Cuáles son las señales preventivas?","id":"q137"},{"img":"img/b257.jpg","responses":[{"text":"Indica que el carril sobre el que se encuentra la señal, no puede ser utilizado por motocicletas y ciclomotores."},{"correct":true,"text":"Indica que el carril sobre el que se encuentra la señal, es de uso exclusivo para motocicletas y ciclomotores."},{"text":"Indica que el carril sobre el que se encuentra la señal, es de uso exclusivo para bicicletas."}],"text":"¿Qué indica esta señal reglamentaria?","id":"q138"},{"img":"img/b253.jpg","responses":[{"text":"Que es un carril preferencial para ciclistas."},{"correct":true,"text":"Que es un carril de uso exclusivo para ciclistas."},{"text":"Que los ciclistas no pueden circular por este carril."}],"text":"Esta señal vertical reglamentaria indica…","id":"q139"},{"img":"img/b113.jpg","responses":[{"text":"El vehículo A."},{"correct":true,"text":"El vehículo B."}],"text":"El vehículo A pretende cambiar de carril hacia su derecha, ¿cuál de los dos vehículos tiene prioridad?","id":"q140"},{"img":"img/b186.jpg","responses":[{"correct":true,"text":"Sí, porque este efecto se produce por cambios bruscos en la intensidad de la luz."},{"text":"No, porque este efecto se produce sólo por el uso de la luz alta."},{"text":"No, porque este efecto se produce en rutas con poca iluminación."}],"text":"En estas condiciones, ¿una incorrecta regulación de la altura de las luces bajas puede producir encandilamiento?","id":"q141"},{"img":"img/b33.jpg","responses":[{"correct":true,"text":"Calle Prioridad Peatón."},{"text":"Calle con Intervención Peatonal."},{"text":"Calle con Bicisenda."}],"text":"La siguiente imagen corresponde a:","id":"q142"},{"img":"img/b42.jpg","responses":[{"correct":true,"text":"Opción A."},{"text":"Opción B."},{"text":"Opción C."}],"text":"¿Cuál de las siguientes imágenes muestra una ciclovía?","id":"q143"},{"img":"img/b82.jpg","responses":[{"text":"La señal A."},{"correct":true,"text":"La señal B."},{"text":"La señal C."}],"text":"¿Cuál de estas señales comunica “Prevención”?","id":"q144"},{"img":"img/b111.jpg","responses":[{"text":"Sí, salvo que se acerque un vehículo en el sentido contrario."},{"correct":true,"text":"No, ya que está prohibido por la demarcación horizontal."},{"text":"Sí, haciendo las señales de luces correspondientes y si el vehículo que circula en sentido contrario está lejos."}],"text":"En la siguiente situación, ¿el vehículo B puede sobrepasar al vehículo A?","id":"q145"},{"responses":[{"text":"El que lo intente primero."},{"text":"El último de la fila."},{"correct":true,"text":"El que circula más próximo al vehículo que se desea sobrepasar."}],"text":"Cuando varios vehículos circulan encolumnados, ¿cuál de ellos tiene prioridad para realizar el sobrepaso?","id":"q146"},{"img":"img/b222.jpg","responses":[{"text":"Senda peatonal."},{"correct":true,"text":"Personas trabajando."},{"text":"Cruce peatonal de máximo peligro."}],"text":"Determine qué indica la señal que a continuación se presenta:","id":"q147"},{"responses":[{"text":"Eventuales daños causados a terceros transportados únicamente."},{"correct":true,"text":"Eventuales daños causados a terceros transportados o no."},{"text":"Daños causados a los vehículos únicamente."}],"text":"Todo vehículo debe estar cubierto por un seguro, ¿qué daños mínimamente debe cubrir?","id":"q148"},{"img":"img/b18.jpg","responses":[{"correct":true,"text":"Detener el vehículo para que el peatón termine de cruzar y, antes de avanzar, hacer contacto visual con los peatones que aún no comenzaron a cruzar, aun sabiendo que obstruiré por un momento la bocacalle."},{"text":"Avanzar porque la luz verde del semáforo me habilita pero tocando bocina para que los peatones no se distraigan. Es importante no obstruir la bocacalle."}],"text":"¿Cómo debe proceder, si al llegar a esta intersección, se desea continuar en línea recta?","id":"q149"},{"img":"img/b57.jpg","responses":[{"text":"No, ya que no hay otros vehículos junto a él."},{"correct":true,"text":"Sí, ya que a pesar de estar detenido, está en la vía de circulación y su atención no está dirigida al contexto."},{"text":"No, ya que el vehículo no está en movimiento."}],"text":"Durante esta situación, ¿es riesgoso que el conductor utilice el teléfono celular?","id":"q150"},{"responses":[{"text":"Sobrepasar la línea de otro vehículo en circulación, sin necesidad de cambiar de carril."},{"correct":true,"text":"Sobrepasar la línea de otro vehículo en circulación, cambiando de carril."},{"text":"Exceder el límite de velocidad máxima."}],"text":"Según la Ley N°2148, ¿qué significa el término sobrepaso?","id":"q151"},{"img":"img/b265.jpg","responses":[{"text":"Permitido girar hacia la izquierda."},{"text":"Dirección obligatoria hacia la izquierda."},{"correct":true,"text":"Dirección permitida hacia la izquierda."}],"text":"¿Qué indica esta señal?","id":"q152"},{"responses":[{"text":"El vehículo que circule por la derecha."},{"text":"El vehículo que pretende acceder a la rotonda."},{"correct":true,"text":"El vehículo que se encuentra dentro de la calzada circular."}],"text":"¿Quién tiene prioridad de paso en una rotonda?","id":"q153"},{"responses":[{"text":"Permanecer en el carril ocupado, independientemente de la fluidez del tránsito."},{"correct":true,"text":"Incorporarse al carril derecho, si éste se encuentra libre, de forma gradual y sin obstaculizar la fluidez de tránsito."},{"text":"Incorporarse al carril derecho, aunque ésto implique que otro vehículo deba modificar su velocidad."}],"text":"Es obligatorio al finalizar un adelantamiento...","id":"q154"},{"img":"img/b231.jpg","responses":[{"text":"Encrucijada."},{"text":"Cruce de caminos."},{"correct":true,"text":"Incorporación de tránsito lateral."}],"text":"Determine qué indica la señal que a continuación se presenta:","id":"q155"},{"img":"img/b170.jpg","responses":[{"text":"Cuando se utilizan por separado sirven para preanunciar maniobras."},{"text":"Cuando se utilizan a la vez sirven para anunciar situaciones de emergencias o que se está por detener."},{"correct":true,"text":"Ambas respuestas, la A y la B, son correctas."}],"text":"¿Qué indica el uso de este tipo de luces?","id":"q156"},{"responses":[{"text":"Que el vehículo tiene un desperfecto."},{"correct":true,"text":"Que se encuentra en emergencia, transportando a una persona en grave estado de salud."},{"text":"Ambas respuestas, la A y la B, son correctas."}],"text":"Si el conductor de un vehículo circula con las balizas encendidas, toca repetidamente la bocina y el acompañante saca el brazo agitando un pañuelo. ¿Qué está indicando?","id":"q157"},{"responses":[{"text":"No, porque los que tienen responsabilidad son aquellos que conducen cualquier tipo de vehículo."},{"text":"No, la responsabilidad la asumen aquellos que obtienen una licencia de conducir."},{"correct":true,"text":"Sí, porque se está obligado a no causar peligro ni entorpecer la circulación."}],"text":"“Cada usuario de la vía pública es responsable de una parte del tránsito.” ¿Es correcta ésta premisa?","id":"q158"},{"img":"img/b245.jpg","responses":[{"text":"Cruce Ferroviario (por la derecha)."},{"text":"Prohibición de Girar."},{"correct":true,"text":"Panel de Prevención (Curva)."}],"text":"Determine qué indica la señal que a continuación se presenta:","id":"q159"},{"img":"img/b95.jpg","responses":[{"text":"El automóvil, porque circula por la mano derecha."},{"correct":true,"text":"El ciclista, porque el automóvil pierde la prioridad al querer girar."},{"text":"El ciclista, porque al circular por la ciclovía siempre tiene prioridad."}],"text":"En esta intersección sin semáforos, donde el conductor del vehículo realiza un giro a la derecha, ¿quién tiene prioridad de paso?","id":"q160"},{"responses":[{"text":"20 metros antes de realizar la maniobra."},{"text":"10 metros antes de realizar la maniobra."},{"correct":true,"text":"30 metros antes de realizar la maniobra."}],"text":"Si usted está conduciendo y va a girar al llegar a una intersección, debe anticipar su maniobra utilizando la luz de giro correspondiente por lo menos...","id":"q161"},{"img":"img/b76.jpg","responses":[{"text":"Que es un sector destinado a la detención y al estacionamiento de vehículos."},{"text":"Que se debe circular lentamente por su sector central."},{"correct":true,"text":"Que no se debe circular sobre ella."}],"text":"¿Qué indica esta demarcación amarilla en la calzada?","id":"q162"},{"img":"img/b179.jpg","responses":[{"text":"Debería circular a la mitad de la velocidad máxima establecida por Ley."},{"correct":true,"text":"Debería adecuar la velocidad de acuerdo a las condiciones climáticas y de dicha vía de circulación."},{"text":"Lo único que debería hacer es respetar es la velocidad máxima de la arteria por la que circula."}],"text":"En cuanto a la velocidad frente a esta situación, ¿qué debería considerar un conductor?","id":"q163"},{"img":"img/b147.jpg","responses":[{"correct":true,"text":"Se debe disminuir la velocidad y prestar atención a la posible aproximación de trenes."},{"text":"Se continúa con la misma velocidad, salvo que se haga efectiva la aproximación del tren."},{"text":"Se indica al resto de los conductores, la precaución sobre la aproximación de trenes, colocando balizas."}],"text":"Si al circular en ruta se encuentra con esta señal, ¿qué conducta debe seguir?","id":"q164"},{"img":"img/b128.jpg","responses":[{"correct":true,"text":"No, porque al ser una intersección semaforizada pero sin giro, no está permitido realizar esa maniobra."},{"text":"Sí, ya que el semáforo está en verde."},{"text":"No, ya que es una vía de doble sentido de circulación."}],"text":"De acuerdo a la Ley N° 2148, ¿está permitido realizar este giro?","id":"q165"},{"img":"img/b169.jpg","responses":[{"text":"Que el vehículo circula lentamente."},{"correct":true,"text":"Que el vehículo próximamente ingresará a un garage o se detendrá."},{"text":"Que el vehículo realizará un giro en la próxima intersección."}],"text":"Si el vehículo que lo precede, circula con estas luces intermitentes encendidas, ¿qué podría estar indicando el conductor?","id":"q166"},{"img":"img/b217.jpg","responses":[{"text":"Sí, ya que la obligación del uso del cinturón de seguridad alcanza sólo al conductor."},{"text":"Sí, ya que la obligación del uso del cinturón de seguridad alcanza sólo a las personas que se trasladen en los asientos delanteros."},{"correct":true,"text":"No, porque la obligación del uso del cinturón de seguridad es para todas las personas transportadas."}],"text":"¿Todos los ocupantes del vehículo viajan de manera correcta?","id":"q167"},{"img":"img/b191.jpg","responses":[{"text":"Sí, cuando el banco de niebla es muy denso."},{"text":"Sí, siempre y cuando se coloquen las luces altas para ser más visibles."},{"correct":true,"text":"No. Si no hay posibilidad de circular, debe alejarse lo más posible de la calzada y de la banquina."}],"text":"Si se encuentra en esta vía bajo estas condiciones climáticas, ¿lo más conveniente es detenerse en la banquina?","id":"q168"},{"img":"img/b200.jpg","responses":[{"text":"Aumenta el consumo de combustible porque el vehículo se vuelve más ligero."},{"correct":true,"text":"Incrementa la resistencia del viento y con ello, aumenta el consumo de combustible."},{"text":"Es indistinto donde se ubique la carga, no afecta al consumo de combustible."}],"text":"Con respecto al consumo de combustible, ¿qué consecuencias trae circular de la siguiente forma?","id":"q169"},{"responses":[{"text":"En la actualidad apenas tienen incidencia en los incidentes, debido a la seguridad de los vehículos."},{"text":"Son responsables de la mayoría de los incidentes solamente en vías de doble sentido."},{"correct":true,"text":"Son responsables de la mayoría de los incidentes fatales cualquiera sea la vía de circulación."}],"text":"Los excesos de velocidad...","id":"q170"},{"img":"img/b124.jpg","responses":[{"text":"Sí, porque en esta vía las luces deben estar encendidas."},{"text":"Sí, ya que mantiene una distancia prudencial respecto del resto de los vehículos."},{"correct":true,"text":"No, dado que está circulando por la banquina."}],"text":"El vehículo señalado con un círculo rojo, ¿circula correctamente?","id":"q171"},{"responses":[{"correct":true,"text":"Al espacio a ser ocupado por el conductor y los pasajeros."},{"text":"Al lugar en el cual se transporta el equipaje (Baúl)."},{"text":"Comprende a todo el vehículo en general."}],"text":"¿Qué se entiende por habitáculo?","id":"q172"},{"responses":[{"correct":true,"text":"El que firmó la autorización para obtener la licencia."},{"text":"El que lo acompaña."},{"text":"El que le autorizó el uso del vehículo."}],"text":"¿Quién es el responsable civil por un incidente de tránsito producido por un menor de edad poseedor de una licencia de conducir?","id":"q173"},{"responses":[{"text":"Principio ético que establece que no debería existir ningún vehículo particular circulando por calles, ni avenidas urbanas; ya que son los causantes de las víctimas fatales en siniestros de tránsito."},{"correct":true,"text":"Principio ético que establece que nadie debería morir ni sufrir lesiones permanentes en siniestros de tránsito."},{"text":"Principio ético que busca mejorar la velocidad en el tránsito, al no encontrarse con imprevistos en la vía."}],"text":"¿De qué se trata el “Programa Visión Cero” creado en 1997 en Suecia?","id":"q174"},{"responses":[{"text":"En ese mismo momento y ante la Autoridad de Control si ésta lo requiere."},{"correct":true,"text":"Ante la oficina de la Dirección General de Administración de Infracciones que corresponda."},{"text":"Ambas respuestas, la A y B, son correctas."}],"text":"Frente a un control de tránsito en CABA, si la autoridad realiza una infracción ante una falta cometida por un conductor, ¿dónde puede efectuarse el pago de la multa por dicha infracción","id":"q175"},{"img":"img/b242.jpg","responses":[{"correct":true,"text":"Cruce Ferroviario (Más de dos vías)."},{"text":"Estación Ferroviaria."},{"text":"Atención a Ferrocarril."}],"text":"Determine qué indica la señal que a continuación se presenta:","id":"q176"},{"img":"img/b56.jpg","responses":[{"correct":true,"text":"0,5 gramos de alcohol por litro de sangre."},{"text":"0,0 gramos de alcohol por litro de sangre."},{"text":"0,2 gramos de alcohol por litro de sangre."}],"text":"¿Cuál es el nivel máximo de alcoholemia admitido para el conductor del vehículo que se visualiza en la imagen?","id":"q177"},{"responses":[{"text":"La sensación de euforia."},{"correct":true,"text":"La visión borrosa y el aumento del número y duración de parpadeos."},{"text":"No realizar movimientos en el asiento, ni cambios de postura."}],"text":"¿Cuáles de éstos son los síntomas que advierten sobre la fatiga en la conducción?","id":"q178"},{"img":"img/b266.jpg","responses":[{"text":"No, al contrario, se mejora la adherencia porque los neumáticos se limpian."},{"correct":true,"text":"Sí, porque al mojarse pueden no funcionar eficazmente."},{"text":"No, porque justamente los frenos sirven para contrarrestar los efectos de la calzada resbaladiza."}],"text":"Si la calzada está mojada y hay charcos, ¿pueden perder eficacia los frenos?","id":"q179"},{"responses":[{"text":"Sí, cuando no haya señal que lo prohíba."},{"correct":true,"text":"No, ya que está prohibido por normativa."},{"text":"Sí, si hay suficiente visibilidad."}],"text":"En un túnel, con ambos sentidos de circulación, ¿está permitido sobrepasar a un vehículo?","id":"q180"},{"responses":[{"correct":true,"text":"A la velocidad adecuada a las circunstancias (dentro de los límites establecidos) que permite mantener el total dominio del vehículo sin generar riesgo."},{"text":"La circulación a la velocidad mínima establecida para una vía."},{"text":"La circulación a no más de 30 km/h en calles y de 45 km/h en avenidas."}],"text":"¿Qué se conoce como velocidad precautoria?","id":"q181"},{"responses":[{"text":"Sólo si es con el conductor. Si la discusión es con otra persona, lo mantiene en alerta ya que la tensión evita la somnolencia."},{"correct":true,"text":"Sí, puede entorpecer su capacidad de atención al contexto, ya que las discusiones generan un estado de estrés."},{"text":"No genera ningún efecto, siempre y cuando el conductor esté en condiciones legales para conducir."}],"text":"¿Puede afectar negativamente la conducción, si el acompañante comienza una discusión con el conductor o con otra persona de la vía pública?","id":"q182"},{"img":"img/b213.jpg","responses":[{"text":"Sí, ya que se encuentra sentada en un SRI, en el asiento trasero."},{"text":"No, ya que la niña debería ubicarse “a contra marcha” para reducir el efecto “latigazo”."},{"correct":true,"text":"No, ya que la niña no utiliza el cinturón de seguridad del SRI."}],"text":"¿Es correcta la manera en que utiliza el Sistema de Retención Infantil (SRI) esta niña?","id":"q183"},{"img":"img/b168.jpg","responses":[{"text":"Sí, siempre y cuando no entorpezca la circulación."},{"correct":true,"text":"No, está prohibido estacionar y detenerse por normativa."},{"text":"Si, a menos que haya una señal que lo prohíba expresamente."}],"text":"¿Se está habilitado a detener un vehículo en este lugar?","id":"q184"},{"img":"img/b221.jpg","responses":[{"text":"Sí, ya que las personas se encuentran con cinturón de seguridad."},{"text":"No, ya que por normativa no está permitido trasladar mascotas en un automóvil particular."},{"correct":true,"text":"No, ya que las mascotas deben ser transportadas en los asientos traseros sujetos con arnés o sistema de retención correspondiente."}],"text":"Los ocupantes de este vehículo ¿viajan de manera segura?","id":"q185"},{"responses":[{"text":"El vehículo que desciende."},{"correct":true,"text":"El vehículo que asciende."},{"text":"No hay prioridad, cualquiera de ellos."}],"text":"Como norma general, en una arteria de doble circulación, con pendiente pronunciada y con un ancho que no permite la circulación simultánea de dos vehículos, ¿quién tiene la prioridad de paso?","id":"q186"},{"img":"img/b51.jpg","responses":[{"text":"Enero."},{"correct":true,"text":"Julio."},{"text":"Diciembre."}],"text":"¿En qué mes del año debe realizar la Verificación Técnica Vehicular el vehículo que porte esta placa de dominio?","id":"q187"},{"responses":[{"text":"Comienza a disminuir de forma inmediata."},{"correct":true,"text":"Continúa subiendo durante 1 hora y luego comienza a descender paulatinamente."},{"text":"Se mantiene en el mismo valor durante 1 hora y luego comienza a descender."}],"text":"Una vez que dejó de ingerir alcohol, ¿qué sucede con la concentración de alcohol que tiene en su organismo?","id":"q188"},{"img":"img/b61.jpg","responses":[{"text":"Sí, porque se encuentra en el asiento delantero."},{"correct":true,"text":"No, porque la prohibición del uso de telefonía celular alcanza sólo al conductor del vehículo."},{"text":"Sí, su uso se encuentra prohibido para todos los ocupantes del vehículo."}],"text":"¿Se encuentra prohibida la acción de la persona señalada con el círculo rojo?","id":"q189"},{"responses":[{"text":"30 días corridos desde su vencimiento."},{"text":"Hasta las 00 horas del día de cumpleaños."},{"correct":true,"text":"No está permitido conducir con la licencia vencida, excepto que el vencimiento fuese un día inhábil, en cuyo caso se traslada al día hábil siguiente."}],"text":"Al tener la licencia vencida, ¿por cuánto tiempo puede seguir conduciendo sin estar en infracción?","id":"q190"},{"responses":[{"text":"Circular por él cuando a la derecha existe otro carril disponible."},{"text":"Circular por él siempre que se conduzca a la mayor velocidad permitida."},{"correct":true,"text":"Realizar maniobras de sobrepaso."}],"text":"El carril de sobrepaso en una autopista sirve para...","id":"q191"},{"img":"img/b88.jpg","responses":[{"text":"Figura A."},{"correct":true,"text":"Figura B."},{"text":"Figura C."}],"text":"¿Cuál de las siguientes imágenes, por forma y color, corresponde a la señal indicativa de estar próximo a una zona afectada por obras?","id":"q192"},{"responses":[{"text":"La línea peatonal."},{"correct":true,"text":"La línea imaginaria de prolongación de ochava."},{"text":"La línea de edificación transversal."}],"text":"¿Qué línea debe tomarse de referencia cuando se detiene o estaciona en proximidad de una esquina?","id":"q193"},{"img":"img/b122.jpg","responses":[{"correct":true,"text":"Se debe respetar lo que rige con respecto a la línea más próxima; si es continua no traspasarla y si es discontinua está permitido hacerlo."},{"text":"Se debe respetar lo que rige con respecto a la línea más próxima; si es discontinua no traspasarla y si es continua está permitido hacerlo."},{"text":"No debe traspasarse ninguna de ellas."}],"text":"Frente a la demarcación central de la calzada señalada, ¿cuál es la conducta a seguir?","id":"q194"},{"img":"img/b30.jpg","responses":[{"text":"Sí, siempre que señalice la maniobra con anticipación."},{"text":"No, ya que para realizarlo debería invadir los carriles exclusivos."},{"correct":true,"text":"Sólo si lo realiza fuera del horario de restricción de los carriles exclusivos."}],"text":"El auto señalizado con un círculo rojo, ¿tiene permitido girar a la derecha en el próximo cruce?","id":"q195"},{"responses":[{"text":"Todos los medicamentos, de venta libre, que no necesitan receta."},{"correct":true,"text":"Todos los medicamentos con efectos sedantes."},{"text":"Ambas respuestas, la A y la B, son correctas."}],"text":"¿Cuál de estas sustancias pueden afectar negativamente la capacidad de conducir?","id":"q196"},{"img":"img/b84.jpg","responses":[{"text":"La señal A."},{"text":"La señal B."},{"correct":true,"text":"La señal C."}],"text":"¿Cuál de estas señales es una señal reglamentaria?","id":"q197"},{"responses":[{"text":"Se la puede solicitar en cualquier establecimiento comercial que la realice."},{"correct":true,"text":"Se la debe solicitar en el Registro Nacional de la Propiedad del Automotor que corresponde al vehículo."},{"text":"Ambas respuestas, la A y la B, son correctas."}],"text":"Al sufrir la pérdida de la placa de dominio de un vehículo, ¿dónde se puede solicitar su reposición?","id":"q198"},{"img":"img/b120.jpg","responses":[{"correct":true,"text":"Sí, porque ordena la circulación de carriles e indica que se puede sobrepasar a otro vehículo."},{"text":"Sólo cuando la vía tiene dos carriles por sentido de circulación."},{"text":"No, porque indica prohibición de sobrepaso."}],"text":"¿Se puede traspasar la siguiente señal horizontal?","id":"q199"},{"img":"img/b9.jpg","responses":[{"text":"No, los estacionamientos son exclusivos para usuarios de autos y motos."},{"text":"Sólo en algunos estacionamientos está permitido."},{"correct":true,"text":"Sí, los estacionamientos están obligados a destinar un espacio para bicicletas."}],"text":"¿Está permitido estacionar una bicicleta en este lugar?","id":"q200"},{"img":"img/b65.jpg","responses":[{"correct":true,"text":"Las opciones A, B y C."},{"text":"Las opciones A y C."},{"text":"Las opciones B y C."}],"text":"¿Cuáles de las siguientes acciones son consideradas factores de distracción cuando se conduce un vehículo?","id":"q201"},{"img":"img/b32.jpg","responses":[{"text":"Estacionamiento para micros escolares."},{"correct":true,"text":"Carril de detención para el ascenso y descenso de escolares."},{"text":"Zona de ascenso y descenso de pasajeros de transporte público."}],"text":"¿Qué indica la demarcación horizontal que se visualiza en la imagen?","id":"q202"},{"responses":[{"text":"Con la luz de giro hacia el lado donde se irá a ingresar."},{"text":"Con la luz de giro hacia el lado opuesto donde se irá a ingresar."},{"correct":true,"text":"Con las luces intermitentes (balizas)."}],"text":"El ingreso hacia un garaje o estacionamiento, ¿cómo debe ser indicado por el conductor?","id":"q203"},{"responses":[{"text":"Es de 20 km/h para todas las arterias."},{"text":"No más de 30 km/h en calles y de 45 km/h en avenidas."},{"correct":true,"text":"Es igual a la mínima establecida para el tipo de arteria correspondiente."}],"text":"Según la Ley N° 2148, ¿cuál es la velocidad precautoria frente a establecimientos escolares durante los horarios de ingreso y egreso?","id":"q204"},{"img":"img/b19.jpg","responses":[{"text":"Esquivar a la peatona y tocarle bocina para que no se distraiga."},{"correct":true,"text":"Frenar y esperar a que termine de cruzar la peatona, aun sabiendo que el vehículo pueda obstaculizar el flujo vehicular."}],"text":"Desde el punto de vista del conductor frente a esta situación, ¿cuál es la acción adecuada?","id":"q205"},{"responses":[{"text":"24 horas."},{"text":"48 horas."},{"correct":true,"text":"72 horas."}],"text":"En caso de participar de un siniestro vial, ¿de cuánto tiempo se dispone para dar aviso sobre el hecho a la compañía aseguradora del vehículo?","id":"q206"},{"img":"img/b132.jpg","responses":[{"text":"40 km/h."},{"text":"70 km/h."},{"correct":true,"text":"60 km/h."}],"text":"Según las normas generales, ¿cuál es la velocidad máxima permitida para un automóvil particular en esta avenida?","id":"q207"},{"img":"img/b227.jpg","responses":[{"correct":true,"text":"Aproximación a un puente levadizo, rotatorio o flotante."},{"text":"Presencia de un puente de menor ancho que el resto de la vía."},{"text":"Proximidad de un paso a nivel."}],"text":"Determine qué indica la señal que a continuación se presenta:","id":"q208"},{"img":"img/b234.jpg","responses":[{"correct":true,"text":"Indica que de la elevación próxima a la ruta, pueden desprenderse rocas o partes que ruedan sobre la calzada."},{"text":"Indica que circulamos por una zona selvática."},{"text":"Indica que por la vía en la que se circula, la calzada presenta irregularidades."}],"text":"¿Qué indica esta señal preventiva?","id":"q209"},{"responses":[{"correct":true,"text":"El campo visual del conductor, su percepción del entorno, la capacidad lumínica del vehículo y la adherencia de las cubiertas."},{"text":"El campo visual del conductor y la capacidad lumínica del vehículo."},{"text":"Sólo afecta la capacidad lumínica del vehículo."}],"text":"La niebla, como factor de riesgo, produce modificaciones en…","id":"q210"},{"img":"img/b204.jpg","responses":[{"text":"Frenar inmediatamente."},{"text":"Desacelerar rápidamente y frenar."},{"correct":true,"text":"Desacelerar lentamente y sujetar el volante."}],"text":"Si al circular se presenta la siguiente situación, ¿cuál es la acción que se recomienda realizar?","id":"q211"},{"responses":[{"text":"10 puntos."},{"correct":true,"text":"20 puntos."},{"text":"5 puntos."}],"text":"Según el Sistema de Evaluación Permanente de Conductores (Scoring), ¿cuántos puntos se otorgan al conductor que obtiene la licencia de conducir por primera vez?","id":"q212"},{"img":"img/b129.jpg","responses":[{"text":"Puede circular marcha atrás, porque es un tramo corto el que tiene que recorrer, y efectuar el giro."},{"text":"Puede dar la vuelta en U para tomar el sentido contrario y así efectuar el giro programado."},{"correct":true,"text":"Ambas respuestas, A y B, son incorrectas."}],"text":"El vehículo con un círculo de color rojo quería girar a la derecha y, por error continuó en línea recta, de modo que:","id":"q213"},{"responses":[{"text":"Reduce la capacidad de reacción y el estado de alerta."},{"text":"Predispone a tomar malas decisiones, poniendo en riesgo la vida."},{"correct":true,"text":"Ambas respuestas, la A y la B, son correctas."}],"text":"¿Qué consecuencias tiene conducir habiendo dormido pocas horas previamente?","id":"q214"},{"img":"img/b67.jpg","responses":[{"text":"Avanzar porque la luz verde del semáforo lo habilita."},{"correct":true,"text":"Detenerse y esperar a la indicación del agente de tránsito para avanzar."},{"text":"Avanzar sólo si no pasan vehículos en la intersección."}],"text":"Como conductor, ¿qué debe realizar frente a la siguiente situación?","id":"q215"},{"img":"img/b167.jpg","responses":[{"correct":true,"text":"Orientar las ruedas hacia el cordón de la vereda y dejar la marcha hacia atrás o en posición de estacionamiento en el caso de tener caja automática."},{"text":"Orientar las ruedas hacia el centro de la calzada y dejar la marcha en primera o en posición de estacionamiento en el caso de tener caja automática."},{"text":"Orientar las ruedas paralelas al cordón y sin cambio o en posición de estacionamiento en el caso de tener caja automática."}],"text":"¿Qué precauciones se deben tener al dejar estacionado un vehículo en esta situación?","id":"q216"},{"img":"img/b165.jpg","responses":[{"text":"Sí. Al no estar el cordón pintado de amarillo, está habilitado a estacionarse y detenerse."},{"text":"Sí. Al no estar el cordón pintado de rojo, está habilitado a estacionarse pero no a detenerse."},{"correct":true,"text":"No, porque debería estar más alejado del cordón (a 20 cm de él)."}],"text":"¿Este vehículo se encuentra bien estacionado?","id":"q217"},{"responses":[{"text":"Todas las autopistas."},{"text":"Avenida Gral. Paz, Lugones e Intendente Cantilo."},{"correct":true,"text":"Ambas respuestas, la A y B, son correctas."}],"text":"Es obligatoria la circulación con luces bajas encendidas las 24 horas en...","id":"q218"},{"img":"img/b180.jpg","responses":[{"correct":true,"text":"Aquaplaning."},{"text":"Off tracking."}],"text":"¿Cómo se define el efecto que ocurre en la siguiente imagen?","id":"q219"},{"img":"img/b140.jpg","responses":[{"correct":true,"text":"30 km/h."},{"text":"40 km/h."},{"text":"60 km/h."}],"text":"¿Cuál es la velocidad máxima permitida para automóviles particulares en este tramo de la Av. Gral Roca, por encontrarse cerca de un establecimiento escolar?","id":"q220"},{"responses":[{"text":"Detenerse inmediatamente, solicitar auxilio para atender a las víctimas si las hubiera y brindar su colaboración para evitar mayores daños para la circulación."},{"text":"Suministrar sus datos personales, del vehículo, de la licencia de conducir y del seguro obligatorio a los demás siniestrados y a la autoridad interviniente."},{"correct":true,"text":"Ambas respuestas, A y B, son correctas."}],"text":"¿Qué obligaciones impone la ley a aquel conductor que participe de un siniestro?","id":"q221"},{"responses":[{"correct":true,"text":"40 km/h."},{"text":"50 km/h."},{"text":"60 km/h."}],"text":"Según la Ley Nacional N º 24.449, en carácter general, ¿cuál es la velocidad mínima permitida en las semiautopistas?","id":"q222"},{"img":"img/b184.jpg","responses":[{"correct":true,"text":"A 4 segundos."},{"text":"A 3 segundos."},{"text":"A 5 segundos."}],"text":"Cuando conduce bajo esta condición climática, ¿a cuánto se debe incrementar la regla de 2 segundos en la distancia de seguridad?","id":"q223"},{"img":"img/b2.jpg","responses":[{"text":"Opción A."},{"correct":true,"text":"Opción B."},{"text":"Opción C."}],"text":"Según las últimas estadísticas del Observatorio Vial de la Ciudad de Bs. As., la tasa más alta de víctimas fatales como consecuencia de incidentes de tránsito (luego de los peatones) son los usuarios de:","id":"q224"},{"responses":[{"correct":true,"text":"Sí."},{"text":"No, solamente afecta a la capacidad motora."},{"text":"Sólo cuando se tiene más de 1 gramo de alcohol por litro de sangre."}],"text":"Cuando se consume alcohol, ¿se pueden producir alteraciones en la visión?","id":"q225"},{"img":"img/b50.jpg","responses":[{"text":"Enero."},{"text":"Febrero."},{"correct":true,"text":"Marzo."}],"text":"¿En qué mes del año debe realizar la Verificación Técnica Vehicular el vehículo que porte esta placa de dominio?","id":"q226"},{"img":"img/b269.jpg","responses":[{"correct":true,"text":"Existencia de un teatro, en las inmediaciones."},{"text":"Prohibición de estacionar en la puerta de un teatro."},{"text":"Prohibición de detenerse en la puerta de un teatro."}],"text":"¿Qué indica esta señal?","id":"q227"},{"responses":[{"text":"Circular por la banquina."},{"correct":true,"text":"Circular por la derecha de la calzada y mantenerse. En el caso de ser necesario, reducir la velocidad."},{"text":"Ambas respuestas, A y B, son correctas."}],"text":"Al advertir que está por ser sobrepasado, ¿cuál debería ser su actitud?","id":"q228"},{"img":"img/b229.jpg","responses":[{"text":"Inicio de doble mano."},{"correct":true,"text":"Encrucijada (bifurcación)."},{"text":"Estrechamiento (en una sola mano)."}],"text":"Determine qué indica la señal que a continuación se presenta:","id":"q229"},{"img":"img/b44.jpg","responses":[{"text":"Colocar las balizas portátiles, ponerse a resguardo detrás de una defensa si las hubiere y llamar al número de emergencia de la Autopista."},{"text":"Descender del vehículo usando un chaleco reflectante para hacer señas al resto de los vehículos y llamar al número de emergencia de la Autopista."},{"correct":true,"text":"Permanecer dentro del vehículo con el cinturón de seguridad abrochado, encender las balizas y llamar al número de emergencia de la Autopista."}],"text":"En el caso de que un vehículo quede inmovilizado por un siniestro vial o desperfecto mecánico en los carriles marcados de esta vía, ¿qué es recomendable hacer?","id":"q230"},{"img":"img/b99.jpg","responses":[{"text":"El vehículo A."},{"correct":true,"text":"El vehículo B."}],"text":"¿Quién tiene prioridad de paso en el cruce de estas dos calles?","id":"q231"},{"img":"img/b261.jpg","responses":[{"text":"Dirección obligatoria en ambos sentidos."},{"correct":true,"text":"Dirección permitida en ambos sentidos."},{"text":"Giros permitidos."}],"text":"Indique qué representa la siguiente señal:","id":"q232"},{"img":"img/b138.jpg","responses":[{"text":"40 km/h."},{"correct":true,"text":"20 km/h."},{"text":"30 km/h."}],"text":"¿Cuál es la velocidad máxima permitida en este tramo de calle?","id":"q233"},{"img":"img/b91.jpg","responses":[{"text":"Ambos hacia su derecha."},{"text":"El único que debería apartarse es el auto 2 hacia su derecha."},{"correct":true,"text":"El auto 1 hacia su izquierda y el 2 hacia su derecha."}],"text":"Frente a la siguiente situación de emergencia, ¿hacia qué sector es recomendable que se aparten los vehículos de la imagen para facilitar el paso a la ambulancia?","id":"q234"},{"responses":[{"text":"28 lbs."},{"correct":true,"text":"La que indique el manual del usuario de ese automóvil."},{"text":"30 lbs."}],"text":"¿Cuál es la correcta presión de los neumáticos de un automóvil particular?","id":"q235"},{"responses":[{"text":"Sí, ya que se presume el estado de alcoholemia positiva."},{"text":"Sí, deberá ordenar la remoción del vehículo."},{"correct":true,"text":"Ambas respuestas, la A y la B, son correctas."}],"text":"Frente a la negativa por parte del conductor a realizar una prueba de alcoholemia, ¿el agente de control podrá prohibirle continuar conduciendo?","id":"q236"},{"responses":[{"text":"No debe superar la mitad de una cuadra.\\t"},{"text":"No más de 20 metros."},{"correct":true,"text":"El recorrido mínimo e indispensable, siempre que se trate de una maniobra de estacionamiento."}],"text":"Cuando un conductor realiza marcha atrás, ¿qué distancia puede recorrer?","id":"q237"},{"img":"img/b17.jpg","responses":[{"text":"Sí, porque por allí no circulan peatones y no hay peligro."},{"correct":true,"text":"No, porque aún hay peatones cruzando de un lado al otro de la arteria."},{"text":"Sí, aunque haya peatones cruzando tiene el espacio suficiente para avanzar."}],"text":"En esta situación, ¿es correcto que el vehículo avance?","id":"q238"},{"img":"img/b236.jpg","responses":[{"text":"Estrechamiento (en las dos manos)."},{"correct":true,"text":"Calzada dividida."},{"text":"Inicio doble mano."}],"text":"Determine qué indica la señal que a continuación se presenta:","id":"q239"},{"img":"img/b37.jpg","responses":[{"text":"Al estado del pavimento y al clima, en especial."},{"correct":true,"text":"A las condiciones en que se encuentran: el automóvil, la infraestructura vial, las condiciones climáticas y el conductor."},{"text":"Ninguna de las anteriores."}],"text":"A fin de aumentar la propia seguridad y la de los demás, ¿a qué se debería poner atención durante la circulación?","id":"q240"},{"responses":[{"text":"Dejar el vehículo cerrado y salir del túnel cuanto antes."},{"text":"Apagar todas las luces si el túnel está iluminado y solicitar auxilio a través del teléfono móvil."},{"correct":true,"text":"Apagar el motor, colocar las balizas portátiles, mantener encendidas las luces de posición e intermitentes y llamar al número de asistencia."}],"text":"¿Qué debe hacer usted si su vehículo queda inmovilizado en un túnel?","id":"q241"},{"responses":[{"text":"Puede circular a más velocidad que los automóviles."},{"text":"La posición del conductor es más elevada que en un automóvil."},{"correct":true,"text":"Por su tamaño, es menos visible."}],"text":"La circulación de un vehículo de dos ruedas suele ser más riesgosa porque...","id":"q242"},{"responses":[{"text":"Al tiempo que pasa desde que se empieza una maniobra hasta que se termina."},{"text":"Al tiempo que pasa desde que se enciende el vehículo hasta que se empieza a circular."},{"correct":true,"text":"Al tiempo que pasa desde que se advierte una situación de riesgo hasta que se toma una decisión."}],"text":"¿A qué se denomina “tiempo de reacción”?","id":"q243"},{"img":"img/b21.jpg","responses":[{"correct":true,"text":"Hacer contacto visual con la peatona y en el caso de que comience a cruzar cederle el paso."},{"text":"Avanzar ya que se tiene prioridad sobre la peatona por circular desde la derecha."},{"text":"Ambas respuestas, la A y la B, son incorrectas."}],"text":"Frente a la siguiente situación, ¿qué actitud debe tomar usted como conductor?","id":"q244"},{"img":"img/b80.jpg","responses":[{"correct":true,"text":"Área reservada de estacionamiento exclusivo de ciclorodados (bicicletas) y motovehículos."},{"text":"Lugar reservado para ascenso y descenso de pasajeros."},{"text":"Zona exclusiva para carga y descarga de mercaderías."}],"text":"Según la Ley N° 2148, ¿qué indica un cordón pintado de este color?","id":"q245"},{"img":"img/b106.jpg","responses":[{"text":"Al vehículo A, ya que circula por la derecha."},{"correct":true,"text":"Al vehículo B, ya que circula por una avenida."},{"text":"Es indistinto."}],"text":"En la siguiente situación, ¿a quién le corresponde la prioridad de paso?","id":"q246"},{"img":"img/b189.jpg","responses":[{"text":"Las luces altas, durante todo el recorrido mientras continúe la niebla."},{"correct":true,"text":"Las luces bajas y las rompeniebla (en el caso de tenerlas)."},{"text":"Las luces bajas, las rompenieblas (en caso de tenerlas) y las balizas."}],"text":"Con estas condiciones climáticas, ¿qué luces debe utilizar para poder circular en esta ruta?","id":"q247"},{"img":"img/b8.jpg","responses":[{"text":"Sí, siempre que se mantenga en el carril derecho."},{"correct":true,"text":"No, está prohibido."},{"text":"Sí, mientras se respete la velocidad mínima de la arteria."}],"text":"¿Se puede circular en bicicleta por esta vía?","id":"q248"},{"img":"img/b3.jpg","responses":[{"text":"Opción A."},{"correct":true,"text":"Opción B."},{"text":"Ambas respuestas, A y B, son correctas."}],"text":"Indique cuál de las siguientes situaciones conlleva mayor probabilidad de siniestralidad","id":"q249"},{"responses":[{"correct":true,"text":"Sí, ya que ambas condiciones aumentan el tiempo de reacción."},{"text":"No, ya que sólo tener alcoholemia positiva aumenta el tiempo de reacción."},{"text":"No, el descanso no tiene nada que ver con el consumo de alcohol."}],"text":"¿Estar 17 horas despierto provoca tener el mismo nivel de reacción que una persona con un nivel de alcohol en sangre mayor al permitido por Ley?","id":"q250"},{"img":"img/b268.jpg","responses":[{"text":"Servicio mecánico."},{"correct":true,"text":"Gomería."},{"text":"Estación de servicio."}],"text":"¿A qué punto de referencia hace alusión la señal que a continuación se presenta?","id":"q251"},{"img":"img/b251.jpg","responses":[{"text":"No avanzar."},{"text":"Comienzo de doble mano."},{"correct":true,"text":"Comienzo de sentido único."}],"text":"¿Qué indica esta señal?","id":"q252"},{"img":"img/b134.jpg","responses":[{"text":"60 km/h."},{"correct":true,"text":"70 km/h."},{"text":"50 km/h."}],"text":"¿Cuál es la velocidad máxima permitida para automóviles particulares en la Avenida Costanera Rafael Obligado que se visualiza en la imagen?","id":"q253"},{"img":"img/b196.jpg","responses":[{"text":"Sí, ya que es riesgoso que quede detenido pero sólo puede hacerse hasta el lugar más próximo donde pueda quedar inmovilizado."},{"text":"Sí, pero sólo si soy titular de una licencia que autoriza a conducir vehículos con remolque."},{"correct":true,"text":"No, sólo pueden hacerlo los vehículos autorizados a tal fin."}],"text":"En este tipo de vía, ¿está permitido remolcar con su automóvil particular a otro que se encuentra descompuesto?","id":"q254"},{"img":"img/b71.jpg","responses":[{"text":"Refuerzan el significado de las líneas discontinuas del carril porque es una zona peligrosa."},{"text":"Nada, no son señales de circulación y es ilegal su colocación."},{"correct":true,"text":"La prohibición de sobrepasar la línea imaginaria que las une."}],"text":"¿Qué indican las señales transitorias naranjas ubicadas en la calzada de la presente imagen?","id":"q255"},{"img":"img/b177.jpg","responses":[{"text":"Luces altas y giro."},{"correct":true,"text":"Luces reglamentarias y balizas."},{"text":"Luces antinieblas."}],"text":"Si al circular por la siguiente arteria, se ve obligado a detener en la banquina, ¿qué luces debe colocar?","id":"q256"},{"img":"img/b198.jpg","responses":[{"text":"Sí, ya que no se observa al conductor utilizar el celular que es la única prohibición al respecto."},{"correct":true,"text":"No, ya que por normativa no debe cargarse combustible con luces y motor encendido."},{"text":"La Ley no se expresa sobre esta situación."}],"text":"Según la Ley 2148, ¿este vehículo está cargando combustible de manera correcta?","id":"q257"},{"img":"img/b40.jpg","responses":[{"correct":true,"text":"Que en esa intersección hay una ciclovía o bicisenda."},{"text":"Que se aproxima a un cruce ferroviario."},{"text":"Que es un cruce exclusivo de peatones."}],"text":"¿Qué indica esta demarcación horizontal verde?","id":"q258"},{"img":"img/b232.jpg","responses":[{"correct":true,"text":"Inicio de doble circulación."},{"text":"Calzada dividida."},{"text":"Camino sinuoso."}],"text":"Determine qué indica la señal que a continuación se presenta:","id":"q259"},{"img":"img/b275.jpg","responses":[{"correct":true,"text":"Ruta Nacional N°3."},{"text":"Ruta Provincial N°3."},{"text":"Ruta Panamericana N°3."}],"text":"Indique qué significa esta señal:","id":"q260"},{"img":"img/b212.jpg","responses":[{"text":"Sí, ya que se encuentra bien ajustado y en el asiento trasero."},{"correct":true,"text":"No, ya que la orientación “a contra marcha” de los SRI es sólo para los grupos 0 y 0+ y 1 de SRI según indique su fabricante y este niño supera la edad para esos grupos."},{"text":"Sí, ya que la orientación “a contra marcha” reduce el efecto “latigazo” en caso de un siniestro."}],"text":"En la siguiente imagen, ¿es correcta la colocación del dispositivo de retención infantil para un niño de 7 años?","id":"q261"},{"img":"img/b29.jpg","responses":[{"correct":true,"text":"Carril exclusivo de colectivo de pasajeros."},{"text":"Cruce exclusivo de vehículos de emergencia."},{"text":"Ceda el paso."}],"text":"¿Qué indica la señal horizontal que se encuentra demarcada sobre la calzada?","id":"q262"},{"img":"img/b203.jpg","responses":[{"correct":true,"text":"1,6 mm."},{"text":"2 mm."},{"text":"3 mm."}],"text":"¿En qué momento es necesario renovar el siguiente elemento de seguridad? Cuando la profundidad del dibujo es menor de…","id":"q263"},{"responses":[{"text":"El tomador del seguro."},{"text":"El pasajero, si es mayor de edad."},{"correct":true,"text":"El conductor."}],"text":"¿Quién es el responsable frente a la autoridad de control, si uno de los pasajeros del automóvil no lleva puesto el cinturón de seguridad?","id":"q264"},{"img":"img/b193.jpg","responses":[{"text":"Aumentar la velocidad para sobrepasar al animal rápidamente."},{"text":"Usar la bocina para ahuyentar al animal y mantener su velocidad."},{"correct":true,"text":"Reducir la velocidad y si es necesario detenerse."}],"text":"Si ud. circula por la ruta y observa esta situación, debe…","id":"q265"},{"responses":[{"text":"Vías con un único sentido de circulación."},{"correct":true,"text":"Bandas longitudinales demarcadas en la calzada, destinadas a la circulación de determinados vehículos."},{"text":"Lugar por donde circulan ambulancias, bomberos y/o vehículos policiales, en cumplimiento o no de sus funciones."}],"text":"¿Qué son los carriles exclusivos?","id":"q266"},{"img":"img/b2.jpg","responses":[{"correct":true,"text":"Sí, independientemente del tipo de movilidad elegido."},{"text":"No, los peatones son usuarios de la vía pública y no están obligados."},{"text":"Sí pero sólo si estamos conduciendo un vehículo."}],"text":"“Como usuarios de la vía pública estamos obligados a no entorpecer injustificadamente la circulación y a no causar peligro, perjuicios o molestias innecesarias a las personas o daños a los bienes.” ¿Es correcta esta premisa?","id":"q267"},{"img":"img/b178.jpg","responses":[{"text":"Al estar ubicada en la parte posterior del vehículo, el color blanco es para diferenciarla de las luces de freno, posición y giro."},{"text":"Al ser de color blanco se obtiene mejor visión cuando la maniobra de retroceso se debe realizar de noche o en condiciones de poca visibilidad."},{"correct":true,"text":"Indica el sentido de circulación. La luz blanca significa que el vehículo circula en sentido contrario al del vehículo rojo que está detrás de él."}],"text":"¿Qué significado tiene el color de las luces encendidas que se indican en la imagen?","id":"q268"},{"img":"img/b207.jpg","responses":[{"text":"El color es para llamar la atención al conductor de categoría particular."},{"text":"El color es irrelevante para el conductor particular pero sí para el conductor profesional."},{"correct":true,"text":"El color, además de su forma, brinda información al conductor sobre el trayecto de la vía por la cual circula."}],"text":"¿Cuál es la importancia del color de las señales viales?","id":"q269"},{"responses":[{"text":"Alertar - Socorrer - Proteger."},{"correct":true,"text":"Proteger - Alertar - Socorrer."},{"text":"Socorrer - Proteger - Alertar."}],"text":"En caso de siniestro, el orden de actuación recomendado es…","id":"q270"},{"img":"img/b150.jpg","responses":[{"text":"No, ya que al portar la oblea universal de discapacidad tiene libre estacionamiento y por ello puede estacionar en este lugar."},{"correct":true,"text":"Sí. Todo vehículo tiene prohibido estacionar en este sector ya que pone en riesgo a pasajeros y peatones."}],"text":"El vehículo con la oblea universal de discapacidad que se muestra en esta imagen, ¿se encuentra en infracción?","id":"q271"},{"responses":[{"text":"Sólo una."},{"correct":true,"text":"La cantidad que solicite el titular del vehículo."},{"text":"Hasta cinco."}],"text":"¿Cuántas “cédulas para autorizados a conducir” podrán otorgarse para un mismo vehículo?","id":"q272"},{"responses":[{"text":"Sí, pero sólo cuando la bebida alcohólica que se ingirió tiene un alto grado de concentración."},{"text":"No, el nivel de alcohol se ve reducido en cuestión de horas, por ello conducir con resaca no altera las percepciones."},{"correct":true,"text":"Sí, puede afectar la coordinación, la atención y el tiempo de reacción."}],"text":"¿La resaca tiene efectos en el organismo que puedan afectar la conducción?","id":"q273"},{"img":"img/b66.jpg","responses":[{"text":"La opción A."},{"text":"La opción B."},{"correct":true,"text":"La opción C."}],"text":"Si al llegar a un cruce se presentan estas 3 señales, ¿cuál de ellas tiene prioridad normativa por sobre las demás?","id":"q274"},{"img":"img/b75.jpg","responses":[{"text":"Avanzar si es que el vehículo que cruza lo hace lentamente porque la prioridad de paso está dada por la luz verde."},{"correct":true,"text":"No iniciar el cruce, hasta que el otro vehículo haya completado el suyo."},{"text":"Avanzar rápidamente si el vehículo que cruza todavía no llegó a mitad del cruce, de esa manera se deja libre la intersección."}],"text":"Frente a esta situación, ¿qué debe hacer el conductor del vehículo señalado con el círculo rojo?","id":"q275"},{"img":"img/b137.jpg","responses":[{"correct":true,"text":"110 km/h."},{"text":"130 km/h."},{"text":"80 km/h."}],"text":"Según las normas generales, ¿cuál es la velocidad máxima permitida para automóviles particulares en esta zona de la ruta?","id":"q276"},{"responses":[{"text":"Poco antes de abandonar la misma."},{"correct":true,"text":"Cuando se haya entrado en el carril de desaceleración."},{"text":"Cuando se ingresa a la nueva vía de circulación."}],"text":"Al pretender abandonar una autopista o semiautopista, ¿cuándo se debe reducir la velocidad?","id":"q277"},{"responses":[{"correct":true,"text":"Que los peatones, ocultos por el colectivo, puedan cruzar por delante o por detrás de éste."},{"text":"Que los pasajeros bajen por la parte izquierda del colectivo detenido."},{"text":"Ninguno, mientras no sobrepase la velocidad máxima permitida por la Ley."}],"text":"¿Qué peligro debe preverse al sobrepasar un colectivo detenido?","id":"q278"},{"img":"img/b190.jpg","responses":[{"text":"Únicamente de noche y por una vía sin asfaltar."},{"text":"Sólo por vías sin banquina."},{"correct":true,"text":"En vías afectadas por niebla, en cualquier horario."}],"text":"¿En qué caso deberán utilizarse estas luces?","id":"q279"},{"img":"img/b102.jpg","responses":[{"text":"Disminuir un poco la velocidad y mirar que no se acerquen vehículos por la vía a la que se va a incorporar."},{"correct":true,"text":"Reducir la velocidad y detener el vehículo antes de la senda peatonal."},{"text":"Avanzar."}],"text":"Como conductor de un vehículo, ¿cómo debe proceder frente a esta señal horizontal?","id":"q280"},{"img":"img/b92.jpg","responses":[{"text":"El único que debería apartarse es el auto 2 hacia su derecha."},{"text":"Todos hacia su derecha."},{"correct":true,"text":"El auto 1 hacia su izquierda, mientras que el 2 y 3 hacia su derecha."}],"text":"Frente a la siguiente situación de emergencia, ¿hacia qué sector es recomendable que se aparten los vehículos de la imagen para facilitar el paso a la ambulancia?","id":"q281"},{"img":"img/b36.jpg","responses":[{"text":"Ampliar la zona permitida de estacionamiento para motos."},{"correct":true,"text":"Reducir la velocidad y radio de giro de los vehículos."},{"text":"Ampliar la zona permitida de estacionamiento para vehículos de emergencia."}],"text":"¿Para qué sirve la demarcación horizontal de color amarillo que se visualiza en la imagen?","id":"q282"},{"responses":[{"text":"Siempre."},{"text":"Nunca."},{"correct":true,"text":"Depende del tipo de medicamento."}],"text":"El consumo de medicamentos, ¿puede afectar la capacidad de conducir?","id":"q283"},{"img":"img/b52.jpg","responses":[{"correct":true,"text":"Sancionar la falta administrativa y contravencional, retener la licencia de conducir y remitir el vehículo."},{"text":"Esperar un tiempo prudencial y realizar una contraprueba, a la espera de que descienda la graduación alcohólica."},{"text":"Darle la opción al conductor de llamar a un tercero para que se haga responsable de la conducción del vehículo."}],"text":"Si un conductor de un automóvil particular obtiene el siguiente resultado en un control de alcoholemia realizado en la Ciudad Autónoma de Buenos Aires, ¿cómo debe proceder la autoridad de control de tránsito?","id":"q284"},{"img":"img/b216.jpg","responses":[{"text":"Nada en especial, dado que sólo es un elemento de confort."},{"correct":true,"text":"Lesiones en la zona cervical."},{"text":"Lesiones en el tórax."}],"text":"Frente a un siniestro, ¿qué puede evitar este elemento si está correctamente ubicado?","id":"q285"},{"responses":[{"correct":true,"text":"Azul."},{"text":"Blanco."},{"text":"Rojo."}],"text":"¿De qué color es la cartelería de Permitido Estacionar?","id":"q286"},{"img":"img/b116.jpg","responses":[{"text":"Aumentar la velocidad para que realice la maniobra detrás suyo."},{"correct":true,"text":"Reducir la velocidad para facilitarle el retorno al carril."},{"text":"Tocar bocina y hacer guiño de luces para indicarle que no debe realizar la maniobra."}],"text":"El conductor del vehículo A quiere volver rápidamente al carril derecho porque ve ante él una situación de peligro, ¿qué debe hacer el conductor del vehículo B?","id":"q287"},{"img":"img/b264.jpg","responses":[{"text":"Fin de semiautopista."},{"text":"Fin de ruta."},{"correct":true,"text":"Fin de autopista."}],"text":"Determine qué indica la señal que a continuación se presenta:","id":"q288"},{"responses":[{"text":"Solamente de adentro del automóvil hacia afuera."},{"correct":true,"text":"Desde adentro hacia fuera y de afuera hacia adentro del vehículo."},{"text":"El único cristal que debe garantizar plena y total visibilidad es el parabrisas."}],"text":"Todos los cristales de un vehículo deben garantizar visibilidad...","id":"q289"},{"img":"img/b183.jpg","responses":[{"text":"No, al reducir la velocidad, mayor es la proporción de agua en el asfalto."},{"correct":true,"text":"Sí, con lluvia la adherencia es menor."},{"text":"No. La distancia de seguridad debe ser siempre la misma."}],"text":"Bajo esta condición climática, ¿es recomendable aumentar la distancia de seguridad y reducir la velocidad?","id":"q290"},{"img":"img/b121.jpg","responses":[{"text":"Sí, salvo que haya una señal que indique lo contrario."},{"correct":true,"text":"No, está prohibido por normativa."},{"text":"Sólo si no se perjudica la circulación de otros vehículos."}],"text":"En este lugar, ¿está permitido sobrepasar a otro vehículo?","id":"q291"},{"responses":[{"correct":true,"text":"Asumir la obligación de no entorpecer la circulación y no causar peligro, perjuicios o molestias innecesarias a las personas o daños a los bienes."},{"text":"Acreditar experiencia de manejo en vehículos por más de un año."},{"text":"Concurrir a cursos de actualización en temática vial, con una frecuencia no mayor a seis meses."}],"text":"Todo usuario de la vía pública debe, como premisa básica…","id":"q292"},{"img":"img/b59.jpg","responses":[{"text":"No, ya que el conductor no está utilizando sus manos para mantener una comunicación telefónica."},{"text":"Sí, sólo cuando circula a altas velocidades."},{"correct":true,"text":"Sí, porque interfiere en su atención al contexto."}],"text":"La siguiente acción del conductor, ¿es considerada un factor de riesgo?","id":"q293"},{"responses":[{"text":"Desgastar las llantas."},{"text":"Sobrecalentar las llantas."},{"correct":true,"text":"El aquaplaning."}],"text":"Cuando hay agua en el camino, debe reducir su velocidad para evitar…","id":"q294"},{"responses":[{"correct":true,"text":"Es el carril de incorporación a una autopista."},{"text":"Es el carril derecho de una autopista."},{"text":"Es el carril izquierdo de una autopista."}],"text":"¿A qué se denomina 'carril de aceleración'?","id":"q295"},{"responses":[{"text":"Sector señalizado especialmente en la calzada para la circulación con carácter preferente de ciclorodados (bicicletas) y dispositivos de movilidad personal."},{"correct":true,"text":"Sector de la calzada señalizado especialmente con una separación física o demarcación horizontal para la circulación exclusiva de ciclorodados (bicicletas) y dispositivos de movilidad personal."},{"text":"Sector señalizado y especialmente acondicionado en aceras y espacios verdes para la circulación de ciclorodados (bicicletas) y dispositivos de movilidad personal."}],"text":"¿Qué es una ciclovía?","id":"q296"},{"img":"img/b68.jpg","responses":[{"text":"Que circule con precaución."},{"correct":true,"text":"Que detenga el vehículo."},{"text":"Que continúe avanzando."}],"text":"¿Qué está indicando el agente de tránsito al realizar esta señal a un conductor?","id":"q297"},{"img":"img/b127.jpg","responses":[{"text":"No, ya que sólo está permitido hacer ese giro si existe un semáforo que lo habilita."},{"correct":true,"text":"Sí, ya que es una intersección no semaforizada."},{"text":"No, ya que es una vía de doble sentido de circulación."}],"text":"De acuerdo a la Ley N° 2148, ¿está permitido realizar el siguiente giro?","id":"q298"},{"img":"img/b79.jpg","responses":[{"text":"Que está prohibido estacionar, pudiendo efectuarse la detención para ascenso y descenso de pasajeros."},{"text":"Que es un espacio reservado al estacionamiento exclusivo de vehículos destinados al servicio de emergencia."},{"correct":true,"text":"Que está prohibido estacionar o detenerse paralelo al cordón."}],"text":"Según la Ley Nº 2148, ¿qué indica la siguiente demarcación horizontal?","id":"q299"},{"responses":[{"text":"A la distancia que recorre un vehículo hasta su detención."},{"text":"A la distancia que debe guardar un vehículo, respecto de otro, para poder maniobrar."},{"correct":true,"text":"A la distancia que recorre un vehículo desde que el conductor percibe un peligro hasta que toma una decisión."}],"text":"¿A qué se denomina 'distancia de reacción'?","id":"q300"},{"img":"img/b274.jpg","responses":[{"text":"Ruta Nacional N°5."},{"correct":true,"text":"Ruta Provincial N°5."},{"text":"Ruta Panamericana N°5."}],"text":"Indique qué significa esta señal:","id":"q301"},{"img":"img/b182.jpg","responses":[{"text":"Es menos probable que aparezca la fatiga, ya que aumenta la atención."},{"correct":true,"text":"Es necesario descansar con más frecuencia, para evitar la fatiga."},{"text":"No influye en la aparición de fatiga, siempre y cuando se mantenga una velocidad prudente."}],"text":"Al conducir por un largo lapso de tiempo y en esta condición climática…","id":"q302"},{"img":"img/b233.jpg","responses":[{"correct":true,"text":"Rotonda."},{"text":"Peligro extremo de rotonda."},{"text":"Preferencia de avance."}],"text":"Determine qué indica la señal que a continuación se presenta:","id":"q303"},{"responses":[{"text":"Usar el freno de mano."},{"correct":true,"text":"Desacelerar (no frenar)."},{"text":"Accionar fuertemente el pedal de freno."}],"text":"Si al circular por ruta, el vehículo sale involuntariamente de la calzada, es recomendable:","id":"q304"},{"img":"img/b69.jpg","responses":[{"correct":true,"text":"Sí, porque al ser personal de obra está autorizado a regular el paso de vehículos en el tramo donde están trabajando."},{"text":"Sólo si se percibe una situación riesgosa ya que el personal de obra no tiene la autoridad legal para realizar dicha indicación."},{"text":"No, porque no tiene autoridad ya que la Ley sólo delega dicha función a los agentes de tránsito."}],"text":"Si al circular por una vía y la persona señalada le indica detenerse, ¿está obligado usted a obedecer?","id":"q305"},{"img":"img/b85.jpg","responses":[{"correct":true,"text":"La señal A."},{"text":"La señal B."},{"text":"La señal C."}],"text":"¿Cuál de estas señales es Informativa?","id":"q306"},{"img":"img/b14.jpg","responses":[{"text":"Giro a la izquierda."},{"text":"Adelantamiento por la izquierda."},{"correct":true,"text":"Detenerse."}],"text":"¿Qué indica esta seña?","id":"q307"},{"responses":[{"text":"La intención de la conducta dañosa."},{"correct":true,"text":"La existencia de un daño real, que afecte a algún particular, provocado como consecuencia del incidente."},{"text":"Los antecedentes de la persona que provoca el daño."}],"text":"En materia de Responsabilidad Civil, ¿qué es lo que se considera como factor determinante para dar inicio a una demanda?","id":"q308"},{"responses":[{"text":"Al tener más alternativas de movilidad no motorizada, como el uso de bicicleta, mayor es la probabilidad de siniestralidad."},{"text":"Al disminuir la cantidad de vehículos particulares, mayor es la probabilidad de siniestralidad."},{"correct":true,"text":"A mayor cantidad de vehículos motorizados, mayor probabilidad de siniestralidad."}],"text":"Indique cuál es la premisa correcta:","id":"q309"},{"img":"img/b195.jpg","responses":[{"text":"Cualquier vehículo que posea potencia suficiente para remolcar a otro vehículo y un elemento para sujetarlo firmemente."},{"text":"Cualquier vehículo utilizando la cuarta de enganche para que quede sujeto firmemente sin riesgo."},{"correct":true,"text":"Sólo los vehículos destinados a ese fin."}],"text":"¿Qué vehículo puede realizar el acarreo de otro en esta vía?","id":"q310"},{"responses":[{"text":"Usar auriculares y dispositivos electrónicos, que afecten la concentración."},{"text":"Usar ropa oscura y suelta."},{"correct":true,"text":"Ambas respuestas, A y B, son correctas."}],"text":"¿Qué se debe evitar al circular en bicicleta?","id":"q311"},{"responses":[{"correct":true,"text":"Se pone en grave riesgo a sí mismo y a todos los que lo rodean."},{"text":"Sólo pone en riesgo su propia vida."},{"text":"Al estar desinhibido, asume menos riesgos."}],"text":"La persona que conduce bajo los efectos de estupefacientes…","id":"q312"},{"responses":[{"text":"Son las rotondas."},{"text":"Son los espacios reservados para estacionamiento exclusivo de motovehículos."},{"correct":true,"text":"Son las marcas canalizadoras de tránsito. No se puede traspasar o circular sobre ellas."}],"text":"En materia de señalamiento horizontal, ¿qué se entiende por “isleta”?","id":"q313"},{"img":"img/b96.jpg","responses":[{"text":"El vehículo A, ya que está circulando por la derecha"},{"text":"Los vehículos B, ya que son varios los que circulan por esa calle."},{"correct":true,"text":"El vehículo A, ya que está saliendo del paso a nivel ferroviario."}],"text":"En un cruce de dos calles sin semáforo, frente a la siguiente situación, ¿quién tiene prioridad de paso?","id":"q314"},{"responses":[{"text":"Seguir circulando por la autopista pero por el carril de desaceleración, destinado a los vehículos lentos."},{"correct":true,"text":"Circular por el carril derecho y en la próxima salida abandonar la autopista para llamar al auxilio del vehículo."},{"text":"Continuar a baja velocidad, manteniéndose en el carril, independientemente de cuál fuera."}],"text":"Si al conducir por una autopista advierte que el vehículo presenta una falla grave, pero a pesar de ella puede seguir circulando; ¿qué se recomienda hacer en estos casos?","id":"q315"},{"img":"img/b259.jpg","responses":[{"text":"Prohibición de Girar a la Derecha."},{"correct":true,"text":"Prohibición de Cambiar de Carril."},{"text":"Prohibición de Adelantar."}],"text":"Determine qué indica la señal que a continuación se presenta:","id":"q316"},{"responses":[{"correct":true,"text":"Está permitido el agregado de dos faros rompeniebla y de hasta dos faros elevados con luces de freno."},{"text":"Sí. Se puede agregar las luces que se deseen ya que cuanto más capacidad de iluminación tenga el vehículo, mejor visibilidad tendrá el conductor."},{"text":"No, está prohibido agregar cualquier tipo de luz adicional. Sólo se podrá reponer las que traiga de fábrica, en caso de destrucción."}],"text":"Según la Ley Nº 2148, ¿está permitido colocar a un automóvil particular luces adicionales?","id":"q317"},{"img":"img/b77.jpg","responses":[{"text":"Es una señalización que se utiliza únicamente para dividir los carriles de la vía."},{"correct":true,"text":"Indica, para ambos sentidos de circulación, que no debe ser traspasada ni se puede circular sobre ella."},{"text":"Significa que sólo pueden circular vehículos particulares."}],"text":"¿Qué significa esta demarcación amarilla en la calzada?","id":"q318"},{"img":"img/b81.jpg","responses":[{"correct":true,"text":"Que sólo está prohibido estacionar, pudiendo efectuarse detenciones."},{"text":"Que es un lugar reservado para el estacionamiento exclusivo de vehículos destinados al transporte de pasajeros."},{"text":"Que está prohibido estacionar o detenerse al costado de la vereda."}],"text":"Según la Ley Nº 2148, ¿qué indica la siguiente demarcación horizontal?","id":"q319"},{"img":"img/b125.jpg","responses":[{"text":"Más temeraria."},{"text":"Menos segura."},{"correct":true,"text":"Ambas respuestas, A y B, son correctas."}],"text":"Bajo los efectos del estrés, la conducción se vuelve:","id":"q320"},{"responses":[{"correct":true,"text":"Al área de visión del entorno, a la que el conductor no tiene acceso ya sea de manera directa o porque los espejos retrovisores no la reflejan."},{"text":"Sólo al área de visión que no es cubierta por los espejos retrovisores."},{"text":"Al punto imaginario ubicado en el horizonte de una ruta."}],"text":"¿A qué se llama “Punto Ciego”?","id":"q321"},{"responses":[{"text":"Sí, lo único que se debe tener en cuenta es que no comprometa la visibilidad."},{"text":"No, está prohibido ya que puede desestabilizar la bicicleta."},{"correct":true,"text":"Sí, debe estar firmemente asegurada, permitiendo maniobrar y no perder la estabilidad."}],"text":"¿Está permitido llevar carga en una bicicleta?","id":"q322"},{"responses":[{"correct":true,"text":"En la asignación de un puntaje para cada conductor, al que se le irá restando puntos por infracciones cometidas."},{"text":"La obligación de los conductores a realizar un curso vial anual."},{"text":"Ambas respuestas, la A y la B, son incorrectas."}],"text":"¿En qué consiste el Sistema de Evaluación Permanente de Conductores (Scoring)?","id":"q323"},{"img":"img/b5.jpg","responses":[{"correct":true,"text":"Opción A."},{"text":"Opción B."},{"text":"Opción C."}],"text":"¿A qué medio de transporte corresponden todos los siguientes beneficios: ecológico, saludable, económico y rápido?","id":"q324"},{"img":"img/b34.jpg","responses":[{"correct":true,"text":"Incrementar la seguridad de los peatones."},{"text":"Promover la movilidad vehicular."},{"text":"Colaborar con la rapidez en la movilidad."}],"text":"Las intervenciones horizontales señaladas, sirven para…","id":"q325"},{"img":"img/b143.jpg","responses":[{"text":"20 kilómetros por hora."},{"correct":true,"text":"40 kilómetros por hora."},{"text":"30 kilómetros por hora.\\t"}],"text":"Los vehículos que circulan por la siguiente avenida, al llegar a esta bocacalle sin semáforos, ¿cuál es el límite superior de velocidad precautoria que deben respetar?","id":"q326"},{"responses":[{"text":"A menor cantidad de vehículos, mayor probabilidad de siniestralidad."},{"text":"A mayor cantidad de vehículos, menor probabilidad de siniestralidad."},{"correct":true,"text":"A menor cantidad de vehículos, menor probabilidad de siniestralidad."}],"text":"Indique cuál es la premisa correcta:","id":"q327"},{"img":"img/b100.jpg","responses":[{"correct":true,"text":"El vehículo A porque circula por una avenida."},{"text":"El vehículo B porque circula por la derecha."},{"text":"Es indistinto ya que es una esquina sin semáforo."}],"text":"¿Qué vehículo tiene prioridad de paso en esta intersección sin semáforo?","id":"q328"},{"responses":[{"correct":true,"text":"Cerca del borde derecho de la calzada."},{"text":"Cerca del borde izquierdo de la calzada."},{"text":"No pueden circular. Únicamente pueden hacerlo por ciclovías o bicisendas y los menores de 12 años por la vereda."}],"text":"¿Por qué sector de una calle sin demarcación deben circular los ciclistas cuando no existen ciclovías o bicisendas?","id":"q329"},{"img":"img/b62.jpg","responses":[{"correct":true,"text":"Sí, porque es considerado un factor de distracción."},{"text":"Únicamente si se circula a altas velocidades."},{"text":"Al contrario, ayuda a mantener la atención en la conducción."}],"text":"La presente conducta, ¿es riesgosa al momento de conducir?","id":"q330"},{"responses":[{"correct":true,"text":"Fríos."},{"text":"Calientes."},{"text":"Es indistinto, al ser de caucho se mantienen aislados de la temperatura."}],"text":"¿Cómo deben encontrarse los neumáticos para comprobar la correcta presión de aire?","id":"q331"},{"img":"img/b139.jpg","responses":[{"correct":true,"text":"20 km/h."},{"text":"40 km/h."},{"text":"30 km/h."}],"text":"¿Cuál es la velocidad máxima permitida en este tramo de calle?","id":"q332"},{"img":"img/b244.jpg","responses":[{"correct":true,"text":"Panel de Prevención (Objeto Rígido)."},{"text":"Calzada Reducida."},{"text":"Contramano."}],"text":"Determine qué indica la señal que a continuación se presenta:","id":"q333"},{"img":"img/b12.jpg","responses":[{"correct":true,"text":"Giro a la izquierda."},{"text":"Adelantamiento por la izquierda."},{"text":"Detenerse."}],"text":"¿Qué indica esta seña?","id":"q334"},{"img":"img/b141.jpg","responses":[{"correct":true,"text":"No, ya que el límite de la señal de tránsito rige independientemente del día y horario."},{"text":"Sí, ya que la Ley 2148 establece que esta restricción es durante el horario de funcionamiento escolar."}],"text":"¿El límite de velocidad máxima de 20 km/h en este tramo de calle se debe respetar sólo en el horario de funcionamiento escolar?","id":"q335"},{"responses":[{"correct":true,"text":"Las bajas."},{"text":"Las altas."},{"text":"Las de posición solamente."}],"text":"Para circular de noche por una calle de la Ciudad de Buenos Aires, ¿qué luces deben utilizarse?","id":"q336"},{"img":"img/b86.jpg","responses":[{"text":"Preventiva"},{"text":"Reglamentaria."},{"correct":true,"text":"Informativa."}],"text":"Indique qué tipo de señal es la que a continuación se muestra:","id":"q337"},{"img":"img/b252.jpg","responses":[{"text":"Sobrepasos por la derecha."},{"text":"Circulación exclusiva (camión)."},{"correct":true,"text":"Tránsito pesado a la derecha."}],"text":"Determine qué indica la señal que a continuación se presenta:","id":"q338"},{"img":"img/b23.jpg","responses":[{"correct":true,"text":"El peatón."},{"text":"El conductor."},{"text":"Es indistinto."}],"text":"En esta intersección, ¿quién tiene prioridad de paso?","id":"q339"},{"img":"img/b197.jpg","responses":[{"text":"Ubicarse cerca del surtidor."},{"correct":true,"text":"Dejar el motor y las luces encendidas."},{"text":"Sólo dejar el motor encendido."}],"text":"De acuerdo a la Ley N°2148 durante la siguiente circunstancia, ¿qué acción está prohibida realizar?","id":"q340"},{"img":"img/b142.jpg","responses":[{"text":"20 kilómetros por hora."},{"text":"40 kilómetros por hora."},{"correct":true,"text":"30 kilómetros por hora."}],"text":"En este cruce de dos calles sin semáforos, ¿cuál es el límite superior de la velocidad precautoria establecida por ley?","id":"q341"},{"img":"img/b43.jpg","responses":[{"text":"Se deben encender las luces bajas y, en lo posible, colocar balizas portátiles delante y detrás del mismo."},{"text":"Se deben encender las luces altas y, en lo posible, colocar balizas portátiles detrás del mismo."},{"correct":true,"text":"Se deben encender las balizas y, en lo posible, colocar balizas portátiles del lado de donde provienen los vehículos a una distancia adecuada del vehículo."}],"text":"En caso de un siniestro vial en este tipo de calle, ¿cómo es recomendable señalizar la zona del vehículo inmovilizado?","id":"q342"},{"img":"img/b109.jpg","responses":[{"correct":true,"text":"No, porque los vehículos de la arteria, a la que se pretende ingresar, están circulando."},{"text":"Sí, porque se encuentra a la derecha."},{"text":"Sí, porque señalizó su maniobra.\\t"}],"text":"El vehículo señalizado quiere incorporarse al tránsito, ¿tiene prioridad de paso sobre los otros vehículos que están circulando por esta arteria?","id":"q343"},{"img":"img/b181.jpg","responses":[{"correct":true,"text":"Sí, siempre que está disminuida la visibilidad."},{"text":"No, porque las luces sólo deben utilizarse por la noche."},{"text":"Sí, pero sólo en rutas."}],"text":"Frente a esta condición climática, ¿se deben encender las luces bajas?","id":"q344"},{"img":"img/b187.jpg","responses":[{"correct":true,"text":"60 km/h."},{"text":"80 km/h."},{"text":"40 km/h."}],"text":"¿Cuál es el límite de velocidad máxima en esta situación?","id":"q345"},{"img":"img/b58.jpg","responses":[{"text":"Opción A. Ya que al utilizar un sólo auricular la audición no se encuentra afectada."},{"text":"Opción B. Ya que al activar el manos libres las manos quedan disponibles para la conducción."},{"correct":true,"text":"Ambos sistemas son riesgosos."}],"text":"¿Cuál de estos sistemas de comunicación telefónica no es considerado riesgoso al momento de conducir un vehículo?","id":"q346"},{"img":"img/b205.jpg","responses":[{"text":"Los elementos A, B y D."},{"correct":true,"text":"Los elementos B, C y D."},{"text":"Los elementos A, D y E."}],"text":"Según las Leyes N° 2.148 y 24.449, ¿qué ítem enumera los elementos de seguridad obligatorios que se deben llevar en un vehículo?","id":"q347"},{"img":"img/b73.jpg","responses":[{"text":"Tengo la obligación de detener la marcha y cuando no haya más vehículos circulando por la arteria que cruza, puedo reiniciarla."},{"text":"Al tener prioridad, debo atravesarla rápidamente para no obstaculizar la vía."},{"correct":true,"text":"Efectuar el cruce con máxima precaución."}],"text":"Si al conducir un vehículo se encuentra en una intersección con esta señalización intermitente, ¿qué actitud debe tomar?","id":"q348"},{"responses":[{"text":"30 días corridos desde su vencimiento."},{"text":"Para que se la pueda renovar, siempre debe hacerse antes de su vencimiento. Una vez vencida se la debe tramitar como licencia nueva."},{"correct":true,"text":"No debe superar el año desde su vencimiento."}],"text":"Cuando se vence la licencia de conducir, ¿cuánto tiempo puede transcurrir para su renovación antes de que se necesite tramitarla como si fuese un otorgamiento?","id":"q349"},{"img":"img/b149.jpg","responses":[{"text":"No, excepto que se encuentre junto al cordón del garaje del propietario del vehículo."},{"text":"Sí, siempre que se estacione paralelo al cordón los días no hábiles."},{"correct":true,"text":"No. Está prohibido ya que pone en riesgo a los ciclistas."}],"text":"¿Es correcto estacionar el vehículo de esta manera?","id":"q350"},{"img":"img/b243.jpg","responses":[{"correct":true,"text":"Paneles de prevención."},{"text":"Prohibición de circular."},{"text":"Reducción de velocidad."}],"text":"Determine qué indica la señal que a continuación se presenta:","id":"q351"},{"responses":[{"text":"60 km/h."},{"text":"110 km/h."},{"correct":true,"text":"100 km/h."}],"text":"¿Cuál es la velocidad máxima permitida para un automóvil particular en Av. Intendente Cantilo, salvo señalización que indique otra velocidad?","id":"q352"},{"img":"img/b256.jpg","responses":[{"text":"Inicio de calle de convivencia."},{"text":"Los peatones no deben circular por esa zona."},{"correct":true,"text":"Los peatones deben circular obligatoriamente por la derecha."}],"text":"¿Qué indica esta señal reglamentaria?","id":"q353"},{"img":"img/b115.jpg","responses":[{"text":"Cualquiera de ellos."},{"correct":true,"text":"Sólo el carril señalado como A."},{"text":"Sólo el carril señalado como F."}],"text":"¿Cuál de estos carriles es el llamado ''carril de sobrepaso''?","id":"q354"},{"responses":[{"correct":true,"text":"Aproximadamente 1 segundo."},{"text":"Entre 2 y 3 segundos."},{"text":"Es inmediato, no transcurre tiempo entre estas acciones."}],"text":"¿Cuál es el tiempo promedio de reacción de un conductor desde que percibe un peligro hasta que acciona el freno?","id":"q355"},{"img":"img/b166.jpg","responses":[{"text":"Orientar las ruedas hacia el cordón de la vereda y dejar la marcha hacia atrás o en posición de estacionamiento en el caso de tener caja automática."},{"correct":true,"text":"Orientar las ruedas hacia el centro de la calzada y dejar la marcha en primera o en posición de estacionamiento en el caso de tener caja automática."},{"text":"Orientar las ruedas paralelas al cordón y sin cambio o en posición de estacionamiento en el caso de tener caja automática."}],"text":"¿Qué precauciones se deben tener al dejar estacionado un vehículo en esta situación?","id":"q356"},{"responses":[{"text":"Si hay un semáforo de giro que me habilite (en verde)."},{"text":"Si es un cruce sin semáforos y no se acerca ningún vehículo por la mano de circulación contraria a la de mi avance."},{"correct":true,"text":"Ambas respuestas, A y B, son correctas."}],"text":"Ud. viene circulando por una avenida de doble mano y al llegar a la bocacalle, precisa girar a la izquierda para tomar una calle de único sentido. De acuerdo a la Ley Nº 2148, ¿en qué condiciones puede efectuar esa maniobra?","id":"q357"},{"responses":[{"correct":true,"text":"Porque reduce la capacidad de reacción y aumenta el tiempo necesario para responder ante un estímulo."},{"text":"Porque se circula más rápido."},{"text":"Porque el viaje dura más."}],"text":"¿Por qué es peligroso conducir cansado?","id":"q358"},{"responses":[{"correct":true,"text":"Colocar balizas y detenerse en un lugar donde esté permitido."},{"text":"Ocupar el carril derecho, para circular a baja velocidad, y utilizar las balizas."},{"text":"Al tratarse de una llamada de urgencia, no importa donde se realice."}],"text":"Si un conductor necesita realizar una llamada de urgencia con el teléfono celular, ¿qué debe hacer para no generar una situación de riesgo en la vía pública?","id":"q359"},{"responses":[{"text":"Que el vehículo que antecede, no tenga las luces intermitentes encendidas y que ningún vehículo circule en sentido contrario, mientras dure la maniobra de sobrepaso."},{"text":"Que ningún otro vehículo esté realizando la maniobra de sobrepaso."},{"correct":true,"text":"Ambas respuestas, A y B, son correctas."}],"text":"En una vía de doble sentido de circulación, ¿qué deberá comprobar antes de iniciar un sobrepaso?","id":"q360"},{"img":"img/b35.jpg","responses":[{"correct":true,"text":"Intervención Peatonal."},{"text":"Intervención Vehicular."},{"text":"Intervención de la Calzada."}],"text":"¿Cómo se denomina la intervención de color amarillo que se visualiza en la imagen?","id":"q361"},{"responses":[{"text":"Evita desperfectos del motor y ayuda a reducir el consumo de combustible."},{"text":"Ayuda a reducir el factor de riesgo vehicular involucrado en los siniestros viales."},{"correct":true,"text":"Ambas respuestas, A y B, son correctas."}],"text":"Es importante realizar un correcto mantenimiento vehicular porque...","id":"q362"},{"img":"img/b146.jpg","responses":[{"correct":true,"text":"Reducir la velocidad del vehículo"},{"text":"Incrementar la velocidad del vehículo"},{"text":"Dar vuelta a la izquierda y después a la derecha"}],"text":"Si ve esta señal mientras conduce, usted debe…","id":"q363"},{"img":"img/b118.jpg","responses":[{"text":"Sí, salvo que haya una señal que indique lo contrario."},{"correct":true,"text":"No, está prohibido por normativa."},{"text":"Sólo en el caso de que no perjudique la circulación de otros vehículos."}],"text":"¿Está permitido sobrepasar a otro vehículo en este lugar?","id":"q364"},{"img":"img/b151.jpg","responses":[{"text":"Sí, ya que se encuentra con balizas encendidas."},{"text":"Sí, porque sólo está prohibido el estacionamiento."},{"correct":true,"text":"No, ya que tanto la detención como el estacionamiento en este sector se encuentra prohibido."}],"text":"¿Es correcta la detención del vehículo en este sector?","id":"q365"},{"img":"img/b145.jpg","responses":[{"text":"Aumentar la velocidad gradualmente antes de ingresar en la curva."},{"correct":true,"text":"Desacelerar antes de ingresar a la curva."},{"text":"Mantener la misma velocidad antes de la curva y acelerar mientras se circula en ella."}],"text":"¿Cuál es la manera más adecuada de conducir un vehículo en este tramo de la ruta?","id":"q366"},{"img":"img/b248.jpg","responses":[{"text":"Indica la prohibición de estacionamiento en el frente de entidades bancarias."},{"correct":true,"text":"Indica que la vía ante la cual se encuentra tiene sentido de circulación opuesto, y por lo tanto no se puede ingresar."},{"text":"Indica la prohibición de circulación de vehículos sin permiso de ingreso."}],"text":"¿Qué significa esta señal?","id":"q367"},{"responses":[{"text":"Para medir el grado de tonalidad debe efectuarse una prueba colorimétrica mediante un dispositivo portátil reglamentado debidamente."},{"correct":true,"text":"Se deben distinguir los ocupantes del vehículo a corta distancia."},{"text":"Se debería poder observar las facciones del conductor a una distancia mínima de 15 metros."}],"text":"En cuanto al grado o tono de color que pueden tener los cristales de un automóvil, ¿qué establece la ley 2148, con respecto a su control en la vía pública?","id":"q368"},{"img":"img/b112.jpg","responses":[{"text":"Los vehículos A y B."},{"text":"Los vehículos A y C."},{"correct":true,"text":"Los vehículos B y C."}],"text":"¿Cuáles de los siguientes vehículos NO se encuentran en infracción?","id":"q369"},{"responses":[{"text":"La Ley Nacional N° 24.449."},{"text":"La Ley de la Ciudad N° 2.148."},{"correct":true,"text":"Ambas respuestas, la A y la B, son correctas."}],"text":"¿Qué Ley rige al momento de circular por la Ciudad de Buenos Aires?","id":"q370"},{"img":"img/b130.jpg","responses":[{"text":"60 km/h."},{"correct":true,"text":"40 km/h."},{"text":"70 km/h."}],"text":"Según las normas generales, ¿cuál es la velocidad máxima permitida en esta calle?","id":"q371"},{"img":"img/b20.jpg","responses":[{"text":"No, pero si el peatón se encuentra cruzando, el conductor debe dejarlo pasar para no producir un siniestro vial."},{"correct":true,"text":"Sí, siempre."}],"text":"Dadas las características de esta intersección, ¿el peatón también tiene prioridad?","id":"q372"},{"img":"img/b219.jpg","responses":[{"correct":true,"text":"No, porque pasa por el abdomen y debería hacerlo por los huesos de la cadera."},{"text":"No, porque pasa por el abdomen y debería hacerlo por los muslos."},{"text":"Sí, porque pasa por la clavícula y el abdomen."}],"text":"¿Esta persona tiene el cinturón correctamente colocado?","id":"q373"},{"img":"img/b263.jpg","responses":[{"correct":true,"text":"Comienzo de autopista."},{"text":"Comienzo de ruta."},{"text":"Comienzo de semiautopista."}],"text":"Determine qué indica la señal que a continuación se presenta:","id":"q374"},{"responses":[{"text":"La velocidad máxima permitida en la vía donde se encuentra la ciclovía."},{"correct":true,"text":"25 km/h."},{"text":"30 km/h."}],"text":"¿Cuál es la velocidad máxima permitida para circular con una bicicleta con asistencia eléctrica?","id":"q375"},{"img":"img/b41.jpg","responses":[{"text":"Opción A."},{"correct":true,"text":"Opción B."},{"text":"Opción C."}],"text":"¿Cuál de las siguientes imágenes muestra una bicisenda?","id":"q376"},{"img":"img/b4.jpg","responses":[{"correct":true,"text":"Opción A."},{"text":"Opción B."},{"text":"Es indistinto."}],"text":"Indique cuál de las siguientes situaciones conlleva mayor probabilidad de siniestralidad","id":"q377"},{"img":"img/b72.jpg","responses":[{"text":"Reglamentaria."},{"correct":true,"text":"Transitoria."},{"text":"Informativa."}],"text":"¿Qué tipo de señal es la siguiente imagen?","id":"q378"},{"img":"img/b108.jpg","responses":[{"text":"El vehículo A."},{"correct":true,"text":"El vehículo B."}],"text":"En esta pendiente estrecha, ¿cuál de los dos vehículos tiene prioridad de paso?","id":"q379"},{"responses":[{"correct":true,"text":"Sí, es peligroso porque tiene efectos en el organismo."},{"text":"No, ya que los efectos del alcohol aparecen durante las primeras horas de su ingesta."},{"text":"No, ya que los efectos de la resaca no intervienen en la conducción."}],"text":"¿Es peligroso conducir con resaca?","id":"q380"},{"img":"img/b47.jpg","responses":[{"text":"Sí, ya que exhibe una documentación provisoria."},{"text":"No, ya que para poder cumplir su función como provisoria debe ampliarse."},{"correct":true,"text":"No, ya que debe estar colocada en el lugar y de forma reglamentaria."}],"text":"¿Está permitido circular con la placa de dominio de este modo?","id":"q381"},{"responses":[{"correct":true,"text":"Cada 2 horas aproximadamente."},{"text":"Cada 4 horas aproximadamente."},{"text":"Cada 1 hora aproximadamente."}],"text":"¿Cada cuánto tiempo es recomendable parar si se realiza un viaje largo?","id":"q382"},{"img":"img/b247.jpg","responses":[{"text":"Se tiene la prioridad de avance."},{"correct":true,"text":"Se pierde la prioridad de avance."},{"text":"Esta señal no es indicativa de prioridad de avance."}],"text":"Frente a esta señal, ¿qué sucede con la prioridad de avance en esa vía?","id":"q383"},{"responses":[{"correct":true,"text":"Sí, por la falta de experiencia en la conducción."},{"text":"No, porque todos somos iguales ante la Ley."},{"text":"Únicamente cuando se trata de una persona que padece de fatiga crónica."}],"text":"Un conductor principiante, ¿puede sentirse más fácilmente fatigado?","id":"q384"},{"responses":[{"correct":true,"text":"No, porque está prohibido circular de manera permanente o transitoria por dicho carril."},{"text":"Sí, sólo cuando la línea longitudinal del lado exterior de este carril sea discontinua."},{"text":"Sí, porque sólo se permite su utilización para realizar alguna maniobra."}],"text":"Si ud. circula en el carril contiguo al carril exclusivo del Metrobús y desea realizar un sobrepaso a otro vehículo que circula más lento, ¿puede utilizar el carril exclusivo para hacer esta maniobra?","id":"q385"},{"img":"img/b110.jpg","responses":[{"text":"No. La prioridad es de los otros vehículos, independientemente si están detenidos o circulando."},{"correct":true,"text":"Sí, porque se encuentra el tránsito detenido y deben cederle el paso."},{"text":"No. La Ley no menciona nada al respecto, sólo se expresa sobre las prioridades en intersecciones no semaforizadas."}],"text":"El vehículo señalizado quiere incorporarse al tránsito, ¿tiene prioridad de paso sobre los otros vehículos que están detenidos en la arteria?","id":"q386"},{"img":"img/b60.jpg","responses":[{"text":"Disminuye su capacidad atencional, limita el sentido de la audición, reduce la capacidad de reacción y aumenta el tiempo necesario para responder ante un estímulo."},{"text":"El conductor debe mantener ambas manos comprometidas en la acción de conducir y al manipularlo, reduciría su capacidad para maniobrar."},{"correct":true,"text":"Ambas respuestas, la A y la B, son correctas."}],"text":"La siguiente acción del conductor es riesgosa porque:","id":"q387"},{"img":"img/b172.jpg","responses":[{"text":"Normas legales de carácter general; Señalización; Indicaciones de la autoridad competente."},{"correct":true,"text":"Indicaciones de la autoridad competente; Señalización; Normas legales de carácter general."},{"text":"Señalización; Normas legales de carácter general; Indicaciones de la autoridad competente."}],"text":"Indique el orden de prioridad normativo que debe respetar (de mayor a menor jerarquía):","id":"q388"},{"responses":[{"text":"Niños menores de 15 años."},{"correct":true,"text":"Jóvenes y adultos de 15 a 34 años."},{"text":"Adultos mayores de 35 años."}],"text":"Según las últimas estadísticas del Observatorio Vial de la Ciudad de Bs. As., ¿cuál es el rango etario con mayor número de víctimas lesionadas y fatales en siniestros viales?","id":"q389"},{"img":"img/b55.jpg","responses":[{"text":"0,5 gramos de alcohol por litro de sangre."},{"correct":true,"text":"0,0 gramos de alcohol por litro de sangre."},{"text":"0,2 gramos de alcohol por litro de sangre."}],"text":"De acuerdo al símbolo que exhibe, ¿cuál es el nivel máximo de alcoholemia admitido para el conductor de este vehículo?","id":"q390"},{"responses":[{"text":"911 y 109."},{"text":"103 y 107."},{"correct":true,"text":"107 y 911."}],"text":"¿Cuáles son los números de emergencia que todo usuario de la vía pública debe conocer con el objetivo de poder llamar y pedir ayuda ante el acontecimiento de algún incidente?","id":"q391"},{"responses":[{"text":"Cuando la cantidad de agua caída en una lluvia es abundante."},{"correct":true,"text":"A la pérdida de adherencia del neumático al piso a causa de la capa de agua acumulada en el pavimento, que es mayor a la cantidad que se puede expulsar a través de los dibujos de los neumáticos."},{"text":"Al estado resbaladizo en el que se encuentra la calzada luego de una llovizna."}],"text":"¿A qué se denomina “aquaplaning”?","id":"q392"},{"img":"img/b131.jpg","responses":[{"text":"30 km/h."},{"text":"40 km/h."},{"correct":true,"text":"20 km/h."}],"text":"Según las normas generales, ¿cuál es la velocidad mínima permitida en esta calle?","id":"q393"},{"responses":[{"text":"La resistencia aerodinámica."},{"text":"La velocidad."},{"correct":true,"text":"Ambas respuestas, A y B, son correctas."}],"text":"De los factores citados, ¿cuál interviene en el exceso de consumo de combustible?","id":"q394"},{"responses":[{"correct":true,"text":"A la distancia mínima que se debe mantener con el vehículo que circula adelante para tener un mayor margen de reacción y en caso de frenada repentina no se colisione con él."},{"text":"A la distancia que se debe mantener con el vehículo que circula en el carril paralelo, para realizar un sobrepaso seguro."},{"text":"A la distancia que recorre el vehículo desde que el conductor percibe una situación de peligro hasta que acciona el freno."}],"text":"¿A qué se denomina “distancia de seguridad”?","id":"q395"},{"img":"img/b211.jpg","responses":[{"text":"Sí, salvo en rutas nacionales."},{"text":"Sí, siempre y cuando esté debidamente ajustado."},{"correct":true,"text":"No, ya que estos dispositivos deben ir colocados en los asientos traseros."}],"text":"¿Es correcta la colocación del dispositivo de retención infantil en este vehículo?","id":"q396"},{"img":"img/b272.jpg","responses":[{"text":"Se encuentra permitido detenerse en esa vía."},{"correct":true,"text":"Existencia de un estacionamiento vehicular, en las inmediaciones."},{"text":"Se encuentra permitido estacionar en esa vía."}],"text":"¿Qué indica esta señal?","id":"q397"},{"img":"img/b46.jpg","responses":[{"text":"Nadie, porque está vencida y debe renovarse."},{"correct":true,"text":"Sólo el titular."},{"text":"El titular y sus familiares directos, por tener el mismo apellido."}],"text":"Con esta documentación, ¿quién está autorizado a conducir el vehículo?","id":"q398"},{"img":"img/b78.jpg","responses":[{"correct":true,"text":"Que se pueden traspasar."},{"text":"Que está prohibido traspasarlas."},{"text":"Que es una zona de máximo peligro."}],"text":"En la siguiente imagen, ¿qué indican las líneas centrales de la calzada señaladas?","id":"q399"},{"responses":[{"text":"La calle, acompañado de un adulto mayor de 18 años."},{"text":"Por la vereda, a la menor velocidad posible."},{"correct":true,"text":"Ambas respuestas, A y B, son correctas."}],"text":"Un menor de 12 años puede circular en bicicleta por…","id":"q400"},{"img":"img/b101.jpg","responses":[{"text":"Disminuir un poco la velocidad y mirar que no se acerquen vehículos por la vía a la que se va a incorporar."},{"correct":true,"text":"Reducir la velocidad y detener el vehículo antes de la senda peatonal."},{"text":"Avanzar."}],"text":"Al conducir un vehículo y llegar a esta intersección, ¿cómo debe proceder frente a esta señal?","id":"q401"},{"img":"img/b188.jpg","responses":[{"text":"Utilizar las luces rompeniebla, lo cual es suficiente porque permite ampliar la visibilidad del conductor."},{"correct":true,"text":"Conducir con ambas manos en el volante, reducir la velocidad, aumentar la distancia entre vehículos y utilizar las luces correspondientes del vehículo."},{"text":"Detenerse en la banquina hasta que levante el banco de niebla."}],"text":"Ante la siguiente situación, ¿qué es lo que se recomienda hacer?","id":"q402"}];
const VOCAB = [{"id":"v001","es":"licencia de conducir","ru":"водительское удостоверение","en":"driving license","cat":"documentos","example":"Debo renovar mi licencia de conducir."},{"id":"v002","es":"cédula de identidad","ru":"удостоверение личности","en":"identity card","cat":"documentos","example":"Presente su cédula de identidad en la ventanilla."},{"id":"v003","es":"permiso de conducir","ru":"разрешение на вождение","en":"driving permit","cat":"documentos","example":"El permiso de conducir tiene vigencia de 5 años."},{"id":"v004","es":"seguro obligatorio","ru":"обязательная страховка","en":"mandatory insurance","cat":"documentos","example":"Todo vehículo debe tener seguro obligatorio."},{"id":"v005","es":"VTV / revisión técnica","ru":"технический осмотр (ТО)","en":"vehicle inspection (VTV)","cat":"documentos","example":"La VTV debe renovarse anualmente."},{"id":"v006","es":"infracción / multa","ru":"нарушение / штраф","en":"traffic violation / fine","cat":"documentos","example":"Recibí una multa por exceso de velocidad."},{"id":"v007","es":"puntos del registro","ru":"баллы водительского удостоверения","en":"demerit points / licence points","cat":"documentos","example":"Perdí puntos del registro por la infracción."},{"id":"v008","es":"señal de tránsito","ru":"дорожный знак","en":"traffic sign","cat":"senales","example":"Respete siempre las señales de tránsito."},{"id":"v009","es":"señal de prohibición","ru":"запрещающий знак (красный круг)","en":"prohibition sign","cat":"senales","example":"El círculo rojo es una señal de prohibición."},{"id":"v010","es":"señal de peligro","ru":"знак опасности (треугольник)","en":"hazard / warning sign","cat":"senales","example":"El triángulo indica señal de peligro."},{"id":"v011","es":"señal de obligación","ru":"знак обязательного действия (синий круг)","en":"mandatory sign","cat":"senales","example":"El círculo azul es una señal de obligación."},{"id":"v012","es":"ceda el paso","ru":"уступите дорогу","en":"yield / give way","cat":"senales","example":"El triángulo invertido significa ceda el paso."},{"id":"v013","es":"STOP / pare","ru":"стоп — полная остановка","en":"STOP","cat":"senales","example":"En la señal de STOP debe detenerse completamente."},{"id":"v014","es":"semáforo","ru":"светофор","en":"traffic light","cat":"senales","example":"La luz roja del semáforo indica que debe detenerse."},{"id":"v015","es":"luz roja / verde / amarilla","ru":"красный / зелёный / жёлтый свет","en":"red / green / yellow light","cat":"senales","example":"La luz amarilla indica que debe prepararse para detenerse."},{"id":"v016","es":"senda peatonal / paso peatonal","ru":"пешеходный переход","en":"pedestrian crossing","cat":"senales","example":"Siempre ceda el paso en la senda peatonal."},{"id":"v017","es":"paso a nivel","ru":"железнодорожный переезд","en":"level crossing / railway crossing","cat":"senales","example":"Antes del paso a nivel, reduzca la velocidad."},{"id":"v018","es":"Cruz de San Andrés","ru":"знак ж/д переезда (Х-образный)","en":"Saint Andrew's cross (railway crossing)","cat":"senales","example":"La Cruz de San Andrés identifica el paso a nivel."},{"id":"v019","es":"velocidad máxima","ru":"максимальная скорость","en":"maximum speed","cat":"velocidad","example":"La velocidad máxima en avenidas es 60 km/h."},{"id":"v020","es":"velocidad mínima","ru":"минимальная скорость","en":"minimum speed","cat":"velocidad","example":"En calles la velocidad mínima es 20 km/h."},{"id":"v021","es":"exceso de velocidad","ru":"превышение скорости","en":"speeding","cat":"velocidad","example":"El exceso de velocidad es la principal causa de accidentes."},{"id":"v022","es":"zona urbana","ru":"городская зона","en":"urban area / city","cat":"velocidad","example":"En calles urbanas la velocidad máxima es 40 km/h."},{"id":"v023","es":"autopista","ru":"автострада / скоростная трасса","en":"highway / motorway","cat":"velocidad","example":"En autopistas la velocidad máxima es 130 km/h."},{"id":"v024","es":"avenida","ru":"проспект","en":"avenue","cat":"velocidad","example":"La velocidad máxima en avenidas es 60 km/h."},{"id":"v025","es":"calle","ru":"улица","en":"street","cat":"velocidad","example":"La velocidad máxima en calles es 40 km/h."},{"id":"v026","es":"adelantamiento / sobrepasar","ru":"обгон","en":"overtaking / passing","cat":"maniobras","example":"El adelantamiento se realiza siempre por la izquierda."},{"id":"v027","es":"incorporación a la vía","ru":"въезд в поток / перестроение","en":"merging onto the road","cat":"maniobras","example":"Al incorporarse a la autopista, ceda el paso."},{"id":"v028","es":"giro a la derecha / izquierda","ru":"поворот направо / налево","en":"right / left turn","cat":"maniobras","example":"Indique el giro con el señalizador anticipadamente."},{"id":"v029","es":"cambio de carril","ru":"смена полосы движения","en":"lane change","cat":"maniobras","example":"Antes del cambio de carril, active el señalizador."},{"id":"v030","es":"marcha atrás","ru":"задний ход","en":"reverse / reversing","cat":"maniobras","example":"La marcha atrás en autopistas está prohibida."},{"id":"v031","es":"estacionamiento / estacionar","ru":"парковка / парковаться","en":"parking / to park","cat":"maniobras","example":"El estacionamiento en doble fila está prohibido."},{"id":"v032","es":"señalizador / luz de giro","ru":"указатель поворота","en":"indicator / turn signal","cat":"maniobras","example":"Active el señalizador antes de girar."},{"id":"v033","es":"balizas / luces de emergencia","ru":"аварийная световая сигнализация","en":"hazard lights","cat":"maniobras","example":"Active las balizas en caso de emergencia."},{"id":"v034","es":"distancia de seguridad","ru":"безопасная дистанция","en":"safety distance","cat":"maniobras","example":"Mantenga la distancia de seguridad de 2 segundos."},{"id":"v035","es":"prioridad de paso","ru":"приоритет проезда / уступить дорогу","en":"right of way / priority","cat":"circulacion","example":"En encrucijada sin señal, prioridad a quien viene por la derecha."},{"id":"v036","es":"intersección / encrucijada / bocacalle","ru":"перекрёсток","en":"intersection / crossroads","cat":"circulacion","example":"Reduzca la velocidad al acercarse a una intersección."},{"id":"v037","es":"rotonda / glorieta","ru":"круговое движение (кольцо)","en":"roundabout","cat":"circulacion","example":"En la rotonda tiene prioridad quien ya circula dentro."},{"id":"v038","es":"carril / vía","ru":"полоса движения","en":"lane / lane","cat":"circulacion","example":"Circule por el carril derecho en autopistas."},{"id":"v039","es":"banquina / arcén","ru":"обочина","en":"hard shoulder / road shoulder","cat":"circulacion","example":"No circule por la banquina salvo emergencia."},{"id":"v040","es":"línea continua","ru":"сплошная линия (запрещено пересекать)","en":"solid line (no overtaking)","cat":"circulacion","example":"No está permitido cruzar la línea continua."},{"id":"v041","es":"línea discontinua","ru":"прерывистая линия (можно пересекать)","en":"dashed line (overtaking allowed)","cat":"circulacion","example":"La línea discontinua permite el cambio de carril."},{"id":"v042","es":"mano / sentido de circulación","ru":"направление / полоса","en":"direction of travel / traffic flow","cat":"circulacion","example":"Esta calle es de doble mano (двустороннее движение)."},{"id":"v043","es":"alcoholemia","ru":"содержание алкоголя в крови","en":"blood alcohol level","cat":"seguridad","example":"El límite de alcoholemia para conductores es 0,5 g/l."},{"id":"v044","es":"cinturón de seguridad","ru":"ремень безопасности","en":"seatbelt","cat":"seguridad","example":"El uso del cinturón de seguridad es obligatorio."},{"id":"v045","es":"casco","ru":"шлем (мотоциклетный)","en":"helmet","cat":"seguridad","example":"El conductor de moto debe usar casco siempre."},{"id":"v046","es":"airbag","ru":"подушка безопасности","en":"airbag","cat":"seguridad","example":"El airbag no reemplaza al cinturón de seguridad."},{"id":"v047","es":"silla / butaca infantil","ru":"детское автокресло","en":"child seat / car seat","cat":"seguridad","example":"Los niños deben ir en silla de seguridad homologada."},{"id":"v048","es":"tiempo de reacción","ru":"время реакции","en":"reaction time","cat":"seguridad","example":"El alcohol aumenta el tiempo de reacción."},{"id":"v049","es":"distancia de frenado","ru":"тормозной путь","en":"braking distance","cat":"seguridad","example":"En piso mojado aumenta la distancia de frenado."},{"id":"v050","es":"vehículo de emergencia","ru":"машина экстренной помощи","en":"emergency vehicle","cat":"seguridad","example":"Ceda el paso siempre a los vehículos de emergencia con sirena."},{"id":"v051","es":"siniestro vial / accidente de tránsito","ru":"ДТП / дорожно-транспортное происшествие","en":"road accident / traffic accident","cat":"seguridad","example":"En caso de siniestro vial, no abandone el lugar del hecho."},{"id":"v052","es":"niebla","ru":"туман","en":"fog","cat":"condiciones","example":"Con niebla use las luces de niebla y reduzca velocidad."},{"id":"v053","es":"calzada mojada / lluvia","ru":"мокрая дорога / дождь","en":"wet road / rain","cat":"condiciones","example":"Con calzada mojada aumente la distancia de seguridad."},{"id":"v054","es":"visibilidad reducida","ru":"ограниченная видимость","en":"reduced visibility","cat":"condiciones","example":"La niebla produce visibilidad reducida."},{"id":"v055","es":"luces largas / cortas / de posición","ru":"дальний / ближний / габаритный свет","en":"high beam / low beam / position lights","cat":"condiciones","example":"Use luces cortas en zona urbana de noche."},{"id":"v056","es":"ciclovía / bicisenda","ru":"велодорожка","en":"cycle path / bike lane","cat":"otros","example":"Los ciclistas deben circular por la ciclovía."},{"id":"v057","es":"peatón","ru":"пешеход","en":"pedestrian","cat":"otros","example":"El peatón tiene prioridad en la senda peatonal."},{"id":"v058","es":"ciclista / bicicleta","ru":"велосипедист / велосипед","en":"cyclist / bicycle","cat":"otros","example":"Respete al ciclista en la ciclovía."},{"id":"v059","es":"remolque / remolcar","ru":"буксировка / тащить на буксире","en":"trailer / to tow","cat":"otros","example":"El remolque en autopistas está reglamentado."},{"id":"v060","es":"cordón / vereda / acera","ru":"бордюр / тротуар","en":"kerb / pavement / sidewalk","cat":"otros","example":"No estacione sobre la vereda (тротуар)."}];

const CAT_LABELS = {
  documentos:'Документы',
  senales:'Знаки',
  velocidad:'Скорость',
  maniobras:'Манёвры',
  circulacion:'Движение',
  seguridad:'Безопасность',
  condiciones:'Условия',
  verbos:'Глаголы',
  estructura:'Структура вопроса',
  otros:'Другое'
};
const CAT_LABELS_EN = {
  documentos:'Documents',
  senales:'Signs',
  velocidad:'Speed',
  maniobras:'Maneuvers',
  circulacion:'Traffic',
  seguridad:'Safety',
  condiciones:'Conditions',
  verbos:'Verbs',
  estructura:'Question structure',
  otros:'Other'
};

// Extra vocab entries generated from WORD_DICT (merged in after VOCAB definition)
const WORD_DICT_VOCAB = [
  // Структура вопроса
  {id:'w001',es:'qué',ru:'что',"en":"what",cat:'estructura',example:'¿Qué indica esta señal?'},
  {id:'w002',es:'cuál',ru:'какой / который',"en":"which / what",cat:'estructura',example:'¿Cuál es la velocidad máxima?'},
  {id:'w003',es:'cuáles',ru:'какие',"en":"which ones / what",cat:'estructura',example:'¿Cuáles son los documentos obligatorios?'},
  {id:'w004',es:'cómo',ru:'как',"en":"how",cat:'estructura',example:'¿Cómo debe actuar el conductor?'},
  {id:'w005',es:'cuándo',ru:'когда',"en":"when",cat:'estructura',example:'¿Cuándo está permitido adelantar?'},
  {id:'w006',es:'por qué',ru:'почему',"en":"why",cat:'estructura',example:'¿Por qué es peligroso conducir cansado?'},
  {id:'w007',es:'en qué caso',ru:'в каком случае',"en":"in what case",cat:'estructura',example:'¿En qué caso se puede circular por la banquina?'},
  {id:'w008',es:'indica',ru:'указывает',"en":"indicates / shows",cat:'estructura',example:'¿Qué indica esta señal?'},
  {id:'w009',es:'determine',ru:'определите',"en":"determine",cat:'estructura',example:'Determine qué indica la señal.'},
  {id:'w010',es:'significa',ru:'означает',"en":"means / signifies",cat:'estructura',example:'¿Qué significa esta demarcación?'},
  {id:'w011',es:'según',ru:'согласно',"en":"according to",cat:'estructura',example:'Según la Ley 2148, ¿qué debe hacer?'},
  {id:'w012',es:'de acuerdo a',ru:'в соответствии с',"en":"according to",cat:'estructura',example:'De acuerdo a la ley, el conductor debe...'},
  {id:'w013',es:'establece',ru:'устанавливает',"en":"establishes / states",cat:'estructura',example:'La ley establece que...'},
  {id:'w014',es:'en caso de',ru:'в случае',"en":"in case of",cat:'estructura',example:'En caso de siniestro, debe detenerse.'},
  {id:'w015',es:'a fin de',ru:'с целью / для того чтобы',"en":"in order to",cat:'estructura',example:'A fin de evitar accidentes, debe reducir la velocidad.'},
  // Модальные конструкции
  {id:'w016',es:'debe',ru:'должен / нужно',"en":"must / should",cat:'estructura',example:'El conductor debe respetar las señales.'},
  {id:'w017',es:'puede',ru:'может',"en":"can / may",cat:'estructura',example:'¿Puede el conductor adelantar en este tramo?'},
  {id:'w018',es:'hay que',ru:'нужно / необходимо',"en":"one must / you have to",cat:'estructura',example:'Hay que detenerse ante la señal de STOP.'},
  {id:'w019',es:'es obligatorio',ru:'обязательно',"en":"is mandatory",cat:'estructura',example:'Es obligatorio usar el cinturón de seguridad.'},
  {id:'w020',es:'está permitido',ru:'разрешено',"en":"is allowed",cat:'estructura',example:'¿Está permitido estacionar aquí?'},
  {id:'w021',es:'está prohibido',ru:'запрещено',"en":"is forbidden / not allowed",cat:'estructura',example:'Está prohibido adelantar en una curva.'},
  {id:'w022',es:'se debe',ru:'следует / нужно',"en":"one must / you must",cat:'estructura',example:'Se debe mantener la distancia de seguridad.'},
  {id:'w023',es:'siempre',ru:'всегда',"en":"always",cat:'estructura',example:'Siempre debe ceder el paso al peatón.'},
  {id:'w024',es:'nunca',ru:'никогда',"en":"never",cat:'estructura',example:'Nunca debe circular en sentido contrario.'},
  {id:'w025',es:'salvo',ru:'кроме / за исключением',"en":"except / unless",cat:'estructura',example:'Está prohibido, salvo indicación contraria.'},
  {id:'w026',es:'siempre que',ru:'при условии что',"en":"whenever / as long as",cat:'estructura',example:'Puede adelantar, siempre que sea seguro.'},
  {id:'w027',es:'verdadero',ru:'истинный / верно',"en":"true",cat:'estructura',example:'Verdadero o Falso: el cinturón es obligatorio.'},
  {id:'w028',es:'falso',ru:'ложный / неверно',"en":"false",cat:'estructura',example:'Verdadero o Falso: se puede usar el celular.'},
  // Глаголы движения
  {id:'w029',es:'avanzar',ru:'продвигаться / ехать вперёд',"en":"to advance / to move forward",cat:'verbos',example:'No puede avanzar si el semáforo está en rojo.'},
  {id:'w030',es:'circular',ru:'ехать / двигаться',"en":"to drive / to travel (on road)",cat:'verbos',example:'Debe circular por el carril derecho.'},
  {id:'w031',es:'girar',ru:'повернуть',"en":"to turn",cat:'verbos',example:'Para girar, active el señalizador.'},
  {id:'w032',es:'doblar',ru:'повернуть (на перекрёстке)',"en":"to turn",cat:'verbos',example:'Al doblar en una esquina, ceda el paso al peatón.'},
  {id:'w033',es:'incorporarse',ru:'влиться в поток',"en":"to merge / to join (road)",cat:'verbos',example:'Al incorporarse a la autopista, ceda el paso.'},
  {id:'w034',es:'detenerse',ru:'остановиться',"en":"to stop",cat:'verbos',example:'Debe detenerse ante la señal de STOP.'},
  {id:'w035',es:'parar',ru:'остановить / остановиться',"en":"to stop",cat:'verbos',example:'El agente le indica que pare el vehículo.'},
  {id:'w036',es:'estacionar',ru:'парковаться',"en":"to park",cat:'verbos',example:'No está permitido estacionar en doble fila.'},
  {id:'w037',es:'frenar',ru:'тормозить',"en":"to brake",cat:'verbos',example:'Debe frenar suavemente en calzada mojada.'},
  {id:'w038',es:'acelerar',ru:'ускоряться',"en":"to accelerate",cat:'verbos',example:'No debe acelerar al ver la luz amarilla.'},
  {id:'w039',es:'reducir',ru:'снизить (скорость)',"en":"to reduce",cat:'verbos',example:'Debe reducir la velocidad en zona escolar.'},
  {id:'w040',es:'aumentar',ru:'увеличить',"en":"to increase",cat:'verbos',example:'En autopista puede aumentar la velocidad hasta el límite.'},
  {id:'w041',es:'adelantar',ru:'обгонять',"en":"to overtake",cat:'verbos',example:'Está prohibido adelantar en una curva peligrosa.'},
  {id:'w042',es:'sobrepasar',ru:'обогнать / превысить',"en":"to overtake / to pass",cat:'verbos',example:'No puede sobrepasar la velocidad máxima.'},
  {id:'w043',es:'cruzar',ru:'пересекать',"en":"to cross",cat:'verbos',example:'No puede cruzar la línea continua.'},
  {id:'w044',es:'ceder',ru:'уступать',"en":"to yield",cat:'verbos',example:'Debe ceder el paso al vehículo de la derecha.'},
  {id:'w045',es:'respetar',ru:'соблюдать / уважать',"en":"to respect / to obey",cat:'verbos',example:'El conductor debe respetar todas las señales.'},
  {id:'w046',es:'encender',ru:'включить',"en":"to turn on / to switch on",cat:'verbos',example:'Debe encender las luces al entrar al túnel.'},
  {id:'w047',es:'apagar',ru:'выключить',"en":"to turn off / to switch off",cat:'verbos',example:'Apague el motor antes de cargar combustible.'},
  {id:'w048',es:'llevar',ru:'везти / иметь при себе',"en":"to carry / to wear",cat:'verbos',example:'Debe llevar consigo los documentos del vehículo.'},
  {id:'w049',es:'verificar',ru:'проверить',"en":"to check / to verify",cat:'verbos',example:'Debe verificar que los frenos funcionen correctamente.'},
  {id:'w050',es:'abandonar',ru:'покидать',"en":"to abandon / to leave",cat:'verbos',example:'No debe abandonar el lugar del siniestro.'},
  {id:'w051',es:'permanecer',ru:'оставаться',"en":"to remain / to stay",cat:'verbos',example:'Debe permanecer en el lugar del accidente.'},
  {id:'w052',es:'señalizar',ru:'сигнализировать / обозначать',"en":"to signal / to indicate",cat:'verbos',example:'Debe señalizar el giro con anticipación.'},
  {id:'w053',es:'colocar',ru:'разместить / поставить',"en":"to place / to put",cat:'verbos',example:'Coloque las balizas detrás del vehículo.'},
  {id:'w054',es:'realizar',ru:'выполнять / осуществлять',"en":"to carry out / to do",cat:'verbos',example:'¿Cómo debe realizar el conductor el adelantamiento?'},
  {id:'w055',es:'utilizar',ru:'использовать',"en":"to use",cat:'verbos',example:'No puede utilizar el celular mientras conduce.'},
  {id:'w056',es:'producir',ru:'производить / вызывar',"en":"to produce / to cause",cat:'verbos',example:'La niebla produce visibilidad reducida.'},
  {id:'w057',es:'garantizar',ru:'гарантировar',"en":"to guarantee / to ensure",cat:'verbos',example:'El cinturón garantiza mayor seguridad.'},
  {id:'w058',es:'remolcar',ru:'буксировать',"en":"to tow",cat:'verbos',example:'Está prohibido remolcar en autopista sin permiso.'},
  {id:'w059',es:'ingresar',ru:'въезжать',"en":"to enter",cat:'verbos',example:'Al ingresar a una rotonda, ceda el paso.'},
  {id:'w060',es:'egresar',ru:'выезжать',"en":"to exit / to leave",cat:'verbos',example:'Al egresar de un garaje, ceda el paso al peatón.'},
  // Прилагательные
  {id:'w061',es:'obligatorio',ru:'обязательный',"en":"mandatory",cat:'otros',example:'El uso del cinturón es obligatorio.'},
  {id:'w062',es:'prohibido',ru:'запрещённый',"en":"forbidden",cat:'otros',example:'Está prohibido circular en sentido contrario.'},
  {id:'w063',es:'permitido',ru:'разрешённый',"en":"allowed",cat:'otros',example:'¿Está permitido estacionar aquí?'},
  {id:'w064',es:'peligroso',ru:'опасный',"en":"dangerous",cat:'otros',example:'Conducir cansado es peligroso.'},
  {id:'w065',es:'correcto',ru:'правильный',"en":"correct",cat:'otros',example:'¿Cuál es el comportamiento correcto?'},
  {id:'w066',es:'vigente',ru:'действующий',"en":"valid / current / in force",cat:'documentos',example:'Debe tener el seguro vigente.'},
  {id:'w067',es:'vencido',ru:'просроченный',"en":"expired",cat:'documentos',example:'No puede circular con documentos vencidos.'},
  {id:'w068',es:'responsabilidad',ru:'ответственность',"en":"responsibility / liability",cat:'documentos',example:'El conductor tiene responsabilidad civil y penal.'},
  {id:'w069',es:'culposo',ru:'по неосторожности',"en":"negligent / at fault",cat:'documentos',example:'Homicidio culposo: muerte causada sin intención.'},
  {id:'w070',es:'sanción',ru:'санкция / штраф',"en":"penalty / sanction",cat:'documentos',example:'La infracción puede resultar en una sanción.'},
  {id:'w071',es:'intermitente',ru:'мигающий / прерывистый',"en":"intermittent / indicator light",cat:'senales',example:'La luz intermitente del semáforo indica precaución.'},
  {id:'w072',es:'badén',ru:'лежачий полицейский',"en":"speed bump / speed hump",cat:'circulacion',example:'Reduzca la velocidad antes del badén.'},
  {id:'w073',es:'isleta',ru:'островок безопасности',"en":"traffic island",cat:'circulacion',example:'Los peatones pueden refugiarse en la isleta.'},
  {id:'w074',es:'zona escolar',ru:'школьная зона',"en":"school zone",cat:'velocidad',example:'En zona escolar la velocidad máxima es 20 km/h.'},
  {id:'w075',es:'opuesto',ru:'противоположный',"en":"opposite",cat:'circulacion',example:'Circulaba en el sentido opuesto.'},
];


// ─── STORAGE ─────────────────────────────────────────
const STORE_KEY = 'pddar_v1';
let S; // state

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      S = JSON.parse(raw);
      if (!S.version || S.version < 1) S = freshState();
    } else {
      S = freshState();
    }
  } catch(e) {
    S = freshState();
  }
}

function freshState() {
  return {
    version: 1,
    answered: {},   // id -> {correct:bool, attempts:int}
    sessions: [],    // {date,correct,total}
    currentSession: null,
    topicStats: {}
  };
}

function saveState() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch(e) {}
}

function resetState() {
  S = freshState();
  saveState();
}

// ─── QUIZ ─────────────────────────────────────────────
const letters = ['A','B','C','D','E'];
const TIMER_SECONDS = 40 * 60; // 40 минут

let qState = {
  queue: [],
  current: null,
  selected: null,
  answered: false,
  sessionCorrect: 0,
  sessionTotal: 0,
  sessionDate: null,
  timerSecondsLeft: TIMER_SECONDS,
  timerInterval: null,
};

function buildQueue() {
  const SESSION_SIZE = 40;
  // Weight questions by history
  let pool = [];
  for (const q of QUESTIONS) {
    const h = S.answered[q.id];
    if (!h) {
      pool.push(q, q, q); // weight 3 for never seen
    } else if (!h.correct) {
      pool.push(q, q);    // weight 2 for previously wrong
    } else {
      pool.push(q);       // weight 1 for correct
    }
  }
  // Shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  // Deduplicate while keeping SESSION_SIZE
  const seen = new Set();
  const unique = [];
  for (const q of pool) {
    if (!seen.has(q.id)) {
      seen.add(q.id);
      unique.push(q);
      if (unique.length >= SESSION_SIZE) break;
    }
  }
  return unique;
}

function startSession() {
  qState.queue = buildQueue();
  qState.sessionCorrect = 0;
  qState.sessionTotal = 0;
  qState.sessionDate = new Date().toISOString().slice(0,10);
  qState.timerSecondsLeft = TIMER_SECONDS;
  startTimer();
  nextQuestion();
}

function startTimer() {
  if (qState.timerInterval) clearInterval(qState.timerInterval);
  qState.timerInterval = setInterval(() => {
    if (qState.timerSecondsLeft <= 0) {
      clearInterval(qState.timerInterval);
      showSessionEnd(true); // time's up
      return;
    }
    qState.timerSecondsLeft--;
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  if (qState.timerInterval) {
    clearInterval(qState.timerInterval);
    qState.timerInterval = null;
  }
}

function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2,'0');
  const s = (sec % 60).toString().padStart(2,'0');
  return `${m}:${s}`;
}

function updateTimerDisplay() {
  const el = document.getElementById('quiz-timer');
  if (!el) return;
  const sec = qState.timerSecondsLeft;
  el.textContent = formatTime(sec);
  el.className = 'quiz-timer' + (sec <= 120 ? ' timer-warn' : sec <= 300 ? ' timer-amber' : '');
}

function nextQuestion() {
  if (qState.queue.length === 0) {
    showSessionEnd();
    return;
  }
  qState.current = qState.queue.shift();
  qState.selected = null;
  qState.answered = false;
  renderQuestion();
}

function renderQuestion() {
  const q = qState.current;
  const done = qState.sessionTotal;
  const total = done + qState.queue.length + 1;
  const pct = Math.round((done / total) * 100);

  let imgHtml = '';
  if (q.img) {
    imgHtml = `<img class="question-img" src="${q.img}" alt="Вопрос" loading="lazy" onerror="this.style.display='none'">`;
  }

  let optsHtml = '';
  q.responses.forEach((r, i) => {
    optsHtml += `<button class="opt-btn" data-action="select" data-idx="${i}">
      <span class="opt-letter">${letters[i]}</span>
      <span>${esc(r.text)}</span>
    </button>`;
  });

  buildGlossary._annotatedQ = null;
  const glossHtml = buildGlossary(q);
  const questionHtml = buildGlossary._annotatedQ || esc(q.text);

  document.getElementById('quiz-content').innerHTML = `
    <div class="quiz-header">
      <span style="font-size:13px;color:var(--muted)">${t('questionOf', done+1, total)}</span>
      <div style="display:flex;align-items:center;gap:8px">
        <span class="quiz-counter">${t('scoreLabel', qState.sessionCorrect, done)}</span>
        <span id="quiz-timer" class="quiz-timer">${formatTime(qState.timerSecondsLeft)}</span>
      </div>
    </div>
    <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
    <div class="card">
      ${imgHtml}
      <p class="question-text">${questionHtml}</p>
      <div class="options">${optsHtml}</div>
      <div class="quiz-actions">
        <button class="btn btn-primary" id="btn-submit" data-action="submit" disabled>${t('answerBtn')}</button>
      </div>
    </div>
    ${glossHtml}
  `;
}

// ─── WORD DICTIONARY (individual words) ─────────────────
// Common Spanish driving words with Russian translations
const WORD_DICT = {
  // Question structure words
  'qué':'что','cuál':'какой / который','cuáles':'какие','cómo':'как',
  'dónde':'где','cuándo':'когда','por qué':'почему','cuánto':'сколько',
  'indica':'указывает','determine':'определите','significa':'означает',
  'permite':'разрешает','está permitido':'разрешено','está prohibido':'запрещено',
  'debe':'должен / нужно','puede':'может','tienen':'имеют','es obligatorio':'обязательно',
  'según':'согласно','establece':'устанавливает','corresponde':'соответствует',
  'presentada':'представленный','siguiente':'следующий','anterior':'предыдущий',
  // Road & infrastructure
  'calzada':'проезжая часть','carretera':'дорога','autopista':'автострада',
  'avenida':'проспект','calle':'улица','bocacalle':'перекрёсток',
  'intersección':'перекрёсток','encrucijada':'перекрёсток','rotonda':'кольцо',
  'carril':'полоса','banquina':'обочина','acera':'тротуар','vereda':'тротуар',
  'cordón':'бордюр','túnel':'тунель','puente':'мост','curva':'поворот',
  'pendiente':'уклон / подъём','arcén':'обочина','mediana':'разделительная полоса',
  // Signs & markings
  'señal':'знак','señales':'знаки','señalización':'разметка / сигнализация',
  'demarcación':'дорожная разметка','línea continua':'сплошная линия',
  'línea discontinua':'прерывистая линия','semáforo':'светофор',
  'prohibición':'запрет','obligación':'обязательство / обязанность',
  'peligro':'опасность','precaución':'осторожность','advertencia':'предупреждение',
  'indicación':'указание','pare':'стоп / остановитесь','ceda el paso':'уступите дорогу',
  // Movement
  'circular':'ехать / двигаться','circulación':'движение / езда',
  'velocidad':'скорость','adelantamiento':'обгон','adelantar':'обгонять',
  'girar':'повернуть','giro':'поворот','incorporarse':'влиться в поток',
  'detener':'остановить','detenerse':'остановиться','estacionar':'парковаться',
  'retroceder':'двигаться назад','marcha atrás':'задний ход',
  'frenar':'тормозить','frenado':'торможение','aceleración':'ускорение',
  'sentido':'направление / смысл','mano':'направление движения',
  'doble mano':'двустороннее движение','sentido único':'одностороннее движение',
  // Safety
  'cinturón':'ремень безопасности','casco':'шлем','airbag':'подушка безопасности',
  'alcohol':'алкоголь','alcoholemia':'уровень алкоголя в крови',
  'reacción':'реакция','freno':'тормоз','distancia':'дистанция / расстояние',
  'seguridad':'безопасность','accidente':'авария','siniestro':'ДТП',
  'emergencia':'чрезвычайная ситуация','ambulancia':'скорая помощь',
  'bomberos':'пожарные','policía':'полиция',
  // Participants
  'conductor':'водитель','peatón':'пешеход','pasajero':'пассажир',
  'ciclista':'велосипедист','motociclista':'мотоциклист',
  // Documents & legal
  'licencia':'права / лицензия','registro':'водительское удостоверение',
  'seguro':'страховка','multa':'штраф','infracción':'нарушение','VTV':'техосмотр',
  // Common adjectives & adverbs
  'obligatorio':'обязательный','prohibido':'запрещённый','permitido':'разрешённый',
  'máximo':'максимальный','mínimo':'минимальный','previo':'предварительный',
  'inmediato':'немедленный','derecha':'справа / правый','izquierda':'слева / левый',
  'adelante':'впереди / вперёд','atrás':'сзади / назад','lateral':'боковой',
  'opuesto':'противоположный','exclusivo':'исключительный / только для',
  'adecuado':'подходящий / надлежащий','correcto':'правильный',
  'incorrecto':'неправильный','falso':'ложный','verdadero':'истинный',
  'peligroso':'опасный','visible':'видимый','suficiente':'достаточный',
  'necesario':'необходимый','vigente':'действующий','vencido':'просроченный',
  'continuo':'непрерывный','intermitente':'мигающий / прерывистый',
  'encendido':'включённый','apagado':'выключенный',
  // Common verbs
  'avanzar':'продвигаться / ехать вперёд','doblar':'повернуть',
  'incorporarse':'влиться в поток','parar':'остановить / остановиться',
  'aparcar':'парковаться','acelerar':'ускоряться',
  'reducir':'снизить','aumentar':'увеличить',
  'respetar':'соблюдать / уважать','ceder':'уступать','cruzar':'пересекать',
  'sobrepasar':'обогнать / превысить','encender':'включить','apagar':'выключить',
  'colocar':'разместить / поставить','llevar':'везти / иметь при себе',
  'portar':'носить / иметь при себе','verificar':'проверить',
  'revisar':'проверить / осмотреть','abandonar':'покидать',
  'permanecer':'оставаться','esperar':'ждать','advertir':'предупреждать',
  'señalizar':'сигнalizировать','remolcar':'буксировать',
  'ingresar':'въезжать','egresar':'выезжать','indicar':'указывать',
  'identificar':'определять / опознавать','realizar':'выполнять / осуществлять',
  'utilizar':'использовать','emplear':'использовать / применять',
  'producir':'производить / вызывать','ocasionar':'вызывать / причинять',
  'garantizar':'гарантировать','asegurar':'обеспечивать / страховать',
  // Conjunctions & prepositions (frequent in questions)
  'según':'согласно','ante':'перед лицом / при','frente a':'перед / напротив',
  'previo a':'до / перед','en caso de':'в случае',
  'siempre que':'при условии что','salvo':'кроме / за исключением',
  'mediante':'посредством','respecto a':'относительно',
  'dentro de':'внутри / в течение','fuera de':'вне / за пределами',
  'junto a':'рядом с','a menos que':'если не / кроме как',
  'tanto como':'как ... так и','ya sea':'будь то',
  'a fin de':'с целью / для того чтобы','de acuerdo a':'в соответствии с',
  'con el objeto de':'с целью','siempre':'всегда','nunca':'никогда',
  'generalmente':'как правило','habitualmente':'обычно',
  // Legal & documents
  'responsabilidad':'ответственность','culposo':'по неосторожности',
  'doloso':'умышленный','denuncia':'заявление / жалоба',
  'multa':'штраф','infracción':'нарушение','sanción':'санкция / штраф',
  // Numbers & units
  'km/h':'км/ч','metros':'метров','segundos':'секунд',
  'minutos':'минут','horas':'часов','gramos':'граммов',
};

const WORD_DICT_EN = {
  // Question structure words
  'qué':'what','cuál':'which / what','cuáles':'which (plural)','cómo':'how',
  'dónde':'where','cuándo':'when','por qué':'why','cuánto':'how much',
  'indica':'indicates','determine':'determine','significa':'means',
  'permite':'allows','está permitido':'is allowed','está prohibido':'is forbidden',
  'debe':'must / should','puede':'can / may','tienen':'have','es obligatorio':'is mandatory',
  'según':'according to','establece':'establishes','corresponde':'corresponds',
  'presentada':'presented','siguiente':'following','anterior':'previous',
  // Road & infrastructure
  'calzada':'roadway','carretera':'road','autopista':'highway',
  'avenida':'avenue','calle':'street','bocacalle':'intersection',
  'intersección':'intersection','encrucijada':'crossroads','rotonda':'roundabout',
  'carril':'lane','banquina':'shoulder','acera':'sidewalk','vereda':'sidewalk',
  'cordón':'curb','túnel':'tunnel','puente':'bridge','curva':'curve / bend',
  'pendiente':'slope / incline','arcén':'hard shoulder','mediana':'median strip',
  // Signs & markings
  'señal':'sign','señales':'signs','señalización':'road markings / signage',
  'demarcación':'road marking','línea continua':'solid line',
  'línea discontinua':'dashed line','semáforo':'traffic light',
  'prohibición':'prohibition','obligación':'obligation',
  'peligro':'danger','precaución':'caution','advertencia':'warning',
  'indicación':'indication','pare':'stop','ceda el paso':'yield',
  // Movement
  'circular':'to drive / travel','circulación':'traffic / movement',
  'velocidad':'speed','adelantamiento':'overtaking','adelantar':'to overtake',
  'girar':'to turn','giro':'turn','incorporarse':'to merge into traffic',
  'detener':'to stop','detenerse':'to stop (oneself)','estacionar':'to park',
  'retroceder':'to reverse','marcha atrás':'reverse gear',
  'frenar':'to brake','frenado':'braking','aceleración':'acceleration',
  'sentido':'direction','mano':'direction of travel',
  'doble mano':'two-way traffic','sentido único':'one-way traffic',
  // Safety
  'cinturón':'seatbelt','casco':'helmet','airbag':'airbag',
  'alcohol':'alcohol','alcoholemia':'blood alcohol level',
  'reacción':'reaction','freno':'brake','distancia':'distance',
  'seguridad':'safety','accidente':'accident','siniestro':'crash / accident',
  'emergencia':'emergency','ambulancia':'ambulance',
  'bomberos':'firefighters','policía':'police',
  // Participants
  'conductor':'driver','peatón':'pedestrian','pasajero':'passenger',
  'ciclista':'cyclist','motociclista':'motorcyclist',
  // Documents & legal
  'licencia':'license','registro':'registration / license',
  'seguro':'insurance','multa':'fine','infracción':'violation','VTV':'vehicle inspection',
  // Common adjectives & adverbs
  'obligatorio':'mandatory','prohibido':'forbidden','permitido':'allowed',
  'máximo':'maximum','mínimo':'minimum','previo':'prior / previous',
  'inmediato':'immediate','derecha':'right','izquierda':'left',
  'adelante':'ahead / forward','atrás':'behind / backward','lateral':'side / lateral',
  'opuesto':'opposite','exclusivo':'exclusive / only for',
  'adecuado':'appropriate / adequate','correcto':'correct',
  'incorrecto':'incorrect','falso':'false','verdadero':'true',
  'peligroso':'dangerous','visible':'visible','suficiente':'sufficient',
  'necesario':'necessary','vigente':'valid / in force','vencido':'expired',
  'continuo':'continuous','intermitente':'flashing / intermittent',
  'encendido':'on / lit','apagado':'off',
  // Common verbs
  'avanzar':'to move forward','doblar':'to turn',
  'incorporarse':'to merge','parar':'to stop',
  'aparcar':'to park','acelerar':'to accelerate',
  'reducir':'to reduce','aumentar':'to increase',
  'respetar':'to obey / respect','ceder':'to yield','cruzar':'to cross',
  'sobrepasar':'to exceed / overtake','encender':'to turn on','apagar':'to turn off',
  'colocar':'to place / position','llevar':'to carry / wear',
  'portar':'to carry / have','verificar':'to verify / check',
  'revisar':'to check / inspect','abandonar':'to leave / abandon',
  'permanecer':'to remain','esperar':'to wait','advertir':'to warn',
  'señalizar':'to signal','remolcar':'to tow',
  'ingresar':'to enter','egresar':'to exit','indicar':'to indicate',
  'identificar':'to identify','realizar':'to carry out / perform',
  'utilizar':'to use','emplear':'to use / employ',
  'producir':'to produce / cause','ocasionar':'to cause',
  'garantizar':'to guarantee','asegurar':'to ensure / insure',
  // Conjunctions & prepositions
  'según':'according to','ante':'before / in the face of','frente a':'in front of',
  'previo a':'prior to','en caso de':'in case of',
  'siempre que':'whenever / as long as','salvo':'except / unless',
  'mediante':'by means of','respecto a':'regarding',
  'dentro de':'within / inside','fuera de':'outside of',
  'junto a':'next to / alongside','a menos que':'unless',
  'tanto como':'as much as','ya sea':'whether it be',
  'a fin de':'in order to','de acuerdo a':'in accordance with',
  'con el objeto de':'for the purpose of','siempre':'always','nunca':'never',
  'generalmente':'generally','habitualmente':'usually',
  // Legal & documents
  'responsabilidad':'responsibility','culposo':'negligent',
  'doloso':'intentional','denuncia':'complaint / report',
  'multa':'fine','infracción':'violation','sanción':'sanction / penalty',
  // Numbers & units
  'km/h':'km/h','metros':'meters','segundos':'seconds',
  'minutos':'minutes','horas':'hours','gramos':'grams',
};

function buildGlossary(q) {
  const texts = [q.text, ...q.responses.map(r => r.text)];
  const allText = texts.join(' ').toLowerCase();

  // ── SECTION 1: Vocab matches (словарь) ──────────────────
  const scored = [];
  for (const v of VOCAB) {
    const esLower = v.es.toLowerCase();
    if (allText.includes(esLower)) {
      scored.push({v, score: 3}); continue;
    }
    const words = esLower.split(/[\s\/]+/).filter(w => w.length >= 5);
    if (words.length > 0 && words.every(w => allText.includes(w))) {
      scored.push({v, score: 2}); continue;
    }
    const longWords = esLower.split(/[\s\/]+/).filter(w => w.length >= 7);
    if (longWords.some(w => allText.includes(w))) scored.push({v, score: 1});
  }
  scored.sort((a, b) => b.score - a.score);
  const vocabMatches = scored.slice(0, 5).map(s => s.v);

  // ── SECTION 2: Word-level annotations ───────────────────
  // Check multi-word phrases first (longest first), then single words
  const usedSpans = new Set(); // track matched text to avoid duplicates
  const wordHits = [];

  // Sort dict keys: multi-word first, then by length desc
  const dictKeys = Object.keys(WORD_DICT).sort((a,b) => {
    const aw = a.split(' ').length, bw = b.split(' ').length;
    if (bw !== aw) return bw - aw;
    return b.length - a.length;
  });

  for (const key of dictKeys) {
    if (allText.includes(key) && !usedSpans.has(key)) {
      // Avoid adding if a longer phrase already covers this word
      const alreadyCovered = [...usedSpans].some(used => used.includes(key));
      if (!alreadyCovered) {
        wordHits.push({es: key, ru: WORD_DICT[key], en: WORD_DICT_EN[key]});
        usedSpans.add(key);
      }
    }
    if (wordHits.length >= 12) break;
  }

  // ── SECTION 3: Annotate question text ───────────────────
  // Highlight matched words in the question text display
  let annotatedQ = esc(q.text);
  // Sort by length desc to avoid partial replacements
  const sortedHits = [...wordHits].sort((a,b) => b.es.length - a.es.length);
  for (const {es, ru} of sortedHits) {
    const re = new RegExp('(' + es.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + ')', 'gi');
    annotatedQ = annotatedQ.replace(re, `<mark class="word-mark" title="${esc(ru)}">$1</mark>`);
  }
  // Also highlight vocab matches
  for (const v of vocabMatches) {
    const re = new RegExp('(' + v.es.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + ')', 'gi');
    annotatedQ = annotatedQ.replace(re, `<mark class="word-mark vocab-mark" title="${esc(lang==='en'?(v.en||v.ru):v.ru)}">$1</mark>`);
  }

  if (vocabMatches.length === 0 && wordHits.length === 0) return '';

  // ── Build output ─────────────────────────────────────────
  let sectionsHtml = '';

  if (vocabMatches.length > 0) {
    const vocabItems = vocabMatches.map(v => `
      <div class="glos-item">
        <span class="glos-es">${esc(v.es)}</span>
        <span class="glos-arrow">→</span>
        <span class="glos-ru">${esc(lang==='en'?(v.en||v.ru):v.ru)}</span>
      </div>`).join('');
    sectionsHtml += `<div class="glos-section-title">${t('glosTerms')}</div><div class="glos-list">${vocabItems}</div>`;
  }

  if (wordHits.length > 0) {
    // Group: question structure words vs content words
    const structureKeys = new Set(['qué','cuál','cuáles','cómo','dónde','cuándo','por qué','cuánto',
      'indica','determine','significa','permite','está permitido','está prohibido',
      'debe','puede','tienen','es obligatorio','según','establece','corresponde',
      'presentada','siguiente','anterior']);
    const structWords = wordHits.filter(w => structureKeys.has(w.es));
    const contentWords = wordHits.filter(w => !structureKeys.has(w.es));

    if (contentWords.length > 0) {
      const items = contentWords.map(w => `
        <div class="glos-item">
          <span class="glos-es">${esc(w.es)}</span>
          <span class="glos-arrow">→</span>
          <span class="glos-ru">${esc(lang==='en'?(w.en||w.ru):w.ru)}</span>
        </div>`).join('');
      sectionsHtml += `<div class="glos-section-title" style="margin-top:10px">${t('glosWords')}</div><div class="glos-list">${items}</div>`;
    }

    if (structWords.length > 0) {
      const items = structWords.map(w => `
        <div class="glos-item">
          <span class="glos-es glos-struct">${esc(w.es)}</span>
          <span class="glos-arrow">→</span>
          <span class="glos-ru">${esc(lang==='en'?(w.en||w.ru):w.ru)}</span>
        </div>`).join('');
      sectionsHtml += `<div class="glos-section-title" style="margin-top:10px">${t('glosStruct')}</div><div class="glos-list">${items}</div>`;
    }
  }

  // Store annotated question for use in renderQuestion
  buildGlossary._annotatedQ = annotatedQ;

  return `
    <div class="glos-card">
      <div class="glos-header">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
        ${t('glosTitle')}
      </div>
      ${sectionsHtml}
    </div>
  `;
}

function selectOption(idx) {
  if (qState.answered) return;
  qState.selected = idx;
  document.querySelectorAll('.opt-btn').forEach((b, i) => {
    b.classList.toggle('selected', i === idx);
  });
  document.getElementById('btn-submit').disabled = false;
}

function submitAnswer() {
  if (qState.answered || qState.selected === null) return;
  qState.answered = true;
  const q = qState.current;
  const correctIdx = q.responses.findIndex(r => r.correct);
  const isCorrect = qState.selected === correctIdx;

  qState.sessionTotal++;
  if (isCorrect) qState.sessionCorrect++;

  // Update storage
  const prev = S.answered[q.id] || {correct: false, attempts: 0};
  S.answered[q.id] = {correct: isCorrect, attempts: prev.attempts + 1};

  // Update topic stats (use first word keywords as topic proxy)
  const topic = guessTopicFromQuestion(q.text);
  if (!S.topicStats[topic]) S.topicStats[topic] = {correct:0,incorrect:0};
  if (isCorrect) S.topicStats[topic].correct++;
  else S.topicStats[topic].incorrect++;

  saveState();

  // Update UI
  document.querySelectorAll('.opt-btn').forEach((b, i) => {
    b.disabled = true;
    if (i === correctIdx) b.classList.add('correct');
    else if (i === qState.selected && !isCorrect) b.classList.add('wrong');
  });

  const explDiv = document.createElement('div');
  explDiv.className = 'explanation';
  explDiv.innerHTML = buildExplanation(q, isCorrect, correctIdx, qState.selected);

  const actions = document.querySelector('.quiz-actions');
  actions.parentNode.insertBefore(explDiv, actions);

  document.getElementById('btn-submit').outerHTML =
    `<button class="btn btn-primary" data-action="next">${t('nextBtn')}</button>`;
}

function showSessionEnd(timeout = false) {
  stopTimer();
  const pct = qState.sessionTotal > 0
    ? Math.round((qState.sessionCorrect / qState.sessionTotal) * 100)
    : 0;
  const pass = pct >= 70;

  // Save session
  S.sessions.push({
    date: qState.sessionDate,
    correct: qState.sessionCorrect,
    total: qState.sessionTotal
  });
  if (S.sessions.length > 30) S.sessions = S.sessions.slice(-30);
  saveState();

  const timeoutMsg = timeout ? `<div style="font-size:14px;color:var(--red);margin-bottom:12px">⏱️ ${t('sessionTimeout')}</div>` : '';
  const statusMsg = timeout
    ? '📚 ' + (lang === 'ru' ? 'Время истекло. Тренируйтесь отвечать быстрее!' : 'Time is up. Practice answering faster!')
    : pass ? '✅ ' + (lang === 'ru' ? 'Зачёт! Продолжайте в том же духе.' : 'Passed! Keep it up.') : '📚 ' + (lang === 'ru' ? 'Нужно ещё поработать. Не сдавайтесь!' : 'More practice needed. Don\'t give up!');

  document.getElementById('quiz-content').innerHTML = `
    <div class="card session-end">
      ${timeoutMsg}
      <div class="session-score ${pass ? 'score-pass' : 'score-fail'}">${pct}%</div>
      <div class="session-label">${t('sessionPassLabel')}: ${qState.sessionCorrect}/${qState.sessionTotal}</div>
      <div style="font-size:15px;margin-bottom:24px;color:var(--muted)">${statusMsg}</div>
      <button class="btn btn-primary" data-action="restart">${t('newSessionBtn')}</button>
    </div>
  `;
}

// ─── EXPLANATION ENGINE ──────────────────────────────────
function buildExplanation(q, isCorrect, correctIdx, selectedIdx) {
  const correctText = q.responses[correctIdx].text;
  const selectedText = q.responses[selectedIdx].text;
  const qLow = q.text.toLowerCase();
  const cLow = correctText.toLowerCase();

  const badge = isCorrect
    ? `<span class="result-badge badge-correct">${t('explCorrect')}</span>`
    : `<span class="result-badge badge-wrong">${t('explWrong')}</span>`;

  // Build explanation text based on topic
  const rule = getRuleExplanation(qLow, cLow, correctText, selectedText, isCorrect);

  let html = `<div class="expl-top">${badge}`;
  if (!isCorrect) {
    html += `<span class="expl-correct-ans"><strong>${t('explCorrectAns')}</strong> ${esc(correctText)}</span>`;
  }
  html += `</div>`;

  if (rule) {
    html += `<div class="expl-body">${rule}</div>`;
  }

  return html;
}

function getRuleExplanation(q, c, correctText, selectedText, isCorrect) {
  // ── Velocidad ────────────────────────────────────────────
  if (/velocidad/.test(q)) {
    const m = correctText.match(/(\d+)\s*km\/h/i);
    if (m) {
      const speed = m[1];
      if (/autopista|semiautopista/.test(q + c))
        return lang==='en' ? `🚗 <strong>Highway speed limit:</strong> maximum <strong>${speed} km/h</strong>. Autopistas have the highest speed limit in Argentina.` : `🚗 <strong>Лимиты на автострадах:</strong> максимум <strong>${speed} км/ч</strong>. На autopistas действует самый высокий лимит скорости в Аргентине.`;
      if (/avenida/.test(q + c))
        return lang==='en' ? `🛣️ <strong>Avenue speed limit (avenidas):</strong> <strong>${speed} km/h</strong>. Avenidas are wide urban roads with a median strip.` : `🛣️ <strong>Лимит на проспектах (avenidas):</strong> <strong>${speed} км/ч</strong>. Проспекты — широкие городские дороги с разделительной полосой.`;
      if (/calle/.test(q + c))
        return lang==='en' ? `🏘️ <strong>Street speed limit (calles):</strong> <strong>${speed} km/h</strong>. Regular city streets have the lowest limit.` : `🏘️ <strong>Лимит на улицах (calles):</strong> <strong>${speed} км/ч</strong>. Обычные городские улицы — самый низкий лимит.`;
      if (/mínima/.test(q))
        return lang==='en' ? `⬇️ <strong>Minimum speed:</strong> <strong>${speed} km/h</strong>. Driving too slowly creates danger for other road users.` : `⬇️ <strong>Минимальная скорость:</strong> <strong>${speed} км/ч</strong>. Нельзя ехать слишком медленно — это создаёт опасность для других.`;
      return lang==='en' ? `⚡ <strong>Speed limit:</strong> <strong>${speed} km/h</strong>. Exceeding it is an infracción (violation) with point penalties.` : `⚡ <strong>Лимит скорости:</strong> <strong>${speed} км/ч</strong>. Превышение — infracción (нарушение) с потерей баллов.`;
    }
  }

  // ── Alcohol ──────────────────────────────────────────────
  if (/alcohol|alcoholemia/.test(q + c)) {
    if (/0[,.]5|0\.5/.test(correctText))
      return lang==='en' ? `🍷 <strong>Alcohol while driving:</strong> for regular drivers the limit is <strong>0.5 g/L</strong>. For noveles (under 2 years experience) and professional drivers — <strong>0.0 g/L</strong>. Refusing the test = violation.` : `🍷 <strong>Алкоголь за рулём:</strong> для обычных водителей максимум <strong>0,5 г/л</strong> в крови. Для noveles (новичков до 2 лет стажа) и профессиональных водителей — <strong>0,0 г/л</strong>. Отказ от теста = нарушение.`;
    if (/0[,.]0|cero/.test(correctText))
      return lang==='en' ? `🚫 <strong>Zero alcohol</strong> for novice drivers (noveles), motorcyclists and professional drivers. Any detectable amount is a violation.` : `🚫 <strong>Ноль алкоголя</strong> для начинающих водителей (noveles), мотоциклистов и профессиональных водителей. Любое обнаруженное количество — нарушение.`;
    if (/negar|negativa|prueba/.test(q))
      return lang==='en' ? `⚠️ <strong>Refusing an alcohol test</strong> is itself a violation. Drivers must submit to testing when requested by an officer.` : `⚠️ <strong>Отказ от проверки на алкоголь</strong> считается нарушением. Водитель обязан пройти тест по требованию инспектора.`;
    return lang==='en' ? `🍺 <strong>Alcohol:</strong> slows reaction time, impairs coordination and perception. Even small amounts are dangerous while driving.` : `🍺 <strong>Алкоголь:</strong> снижает реакцию, нарушает координацию и восприятие. Даже малые дозы опасны за рулём.`;
  }

  // ── Prioridad de paso ────────────────────────────────────
  if (/prioridad|preferencia de paso/.test(q + c)) {
    if (/derecha/.test(c))
      return lang==='en' ? `➡️ <strong>Right-hand rule:</strong> at an unmarked intersection, priority goes to the vehicle coming from the right. This is the basic Argentine traffic rule.` : `➡️ <strong>Правило правой руки:</strong> на перекрёстке без знаков приоритет у того, кто едет справа. Это базовое правило ПДД Аргентины.`;
    if (/rotonda/.test(q + c))
      return lang==='en' ? `🔄 <strong>At a roundabout (rotonda)</strong> vehicles already inside have priority. Entering vehicles must yield.` : `🔄 <strong>На кольце (rotonda)</strong> приоритет у тех, кто уже движется внутри кольца. Въезжающий обязан уступить.`;
    if (/emergencia|ambulancia|bombero|policía/.test(q + c))
      return lang==='en' ? `🚨 <strong>Emergency vehicles</strong> (ambulance, fire, police) with lights and siren have absolute priority. You must immediately yield and stop.` : `🚨 <strong>Машины экстренных служб</strong> (скорая, пожарные, полиция) с включёнными сиреной и огнями имеют абсолютный приоритет. Нужно немедленно уступить и остановиться.`;
    if (/semáforo/.test(q + c))
      return lang==='en' ? `🚦 <strong>Traffic lights</strong> override the right-hand rule — they determine priority. Green = go, red = stop.` : `🚦 <strong>Светофор</strong> отменяет правило правой руки — он задаёт приоритет. При зелёном — проезжаем, при красном — стоп.`;
    return lang==='en' ? `🛑 <strong>Right of way</strong> (prioridad de paso): this rule determines who goes first. Violations are a common cause of intersection accidents.` : `🛑 <strong>Приоритет проезда</strong> (prioridad de paso): правило определяет, кто едет первым. Нарушение — частая причина ДТП на перекрёстках.`;
  }

  // ── Señales ──────────────────────────────────────────────
  if (/señal|indica|determina|seña/.test(q)) {
    if (/triangular|triángulo/.test(q + c))
      return lang==='en' ? `⚠️ <strong>Triangular signs</strong> = danger / warning. White background with red border = warning signs. Inverted triangle = yield (ceda el paso).` : `⚠️ <strong>Треугольные знаки</strong> = опасность и предупреждение. Белый фон с красной каймой — предупреждающие знаки. Перевёрнутый треугольник = «уступите дорогу» (ceda el paso).`;
    if (/circular|círculo|redonda/.test(q + c)) {
      if (/rojo|prohibi/.test(c))
        return lang==='en' ? `🔴 <strong>Round signs with red</strong> = prohibition (prohibición). You may not do what is shown on the sign.` : `🔴 <strong>Круглые знаки с красным</strong> = запрет (prohibición). Нельзя делать то, что изображено на знаке.`;
      if (/azul|obliga/.test(c))
        return lang==='en' ? `🔵 <strong>Round blue signs</strong> = mandatory (obligación). You must do what is shown on the sign.` : `🔵 <strong>Круглые синие знаки</strong> = обязанность (obligación). Нужно делать то, что изображено.`;
    }
    if (/desvío/.test(c))
      return lang==='en' ? `↪️ <strong>Desvío</strong> = detour / route diversion. The sign warns of a change in the normal direction of travel.` : `↪️ <strong>Desvío</strong> = объезд / отклонение маршрута. Знак предупреждает об изменении привычного направления движения.`;
    if (/calzada dividida/.test(c))
      return lang==='en' ? `🛣️ <strong>Calzada dividida</strong> = divided road (with a median). Oncoming traffic lanes are physically separated.` : `🛣️ <strong>Calzada dividida</strong> = разделённая дорога (с разделительной полосой). Означает, что встречные потоки физически разделены.`;
    if (/cruce peligroso/.test(c))
      return lang==='en' ? `⚠️ <strong>Cruce peligroso</strong> = dangerous intersection. Requires reduced speed and extra caution.` : `⚠️ <strong>Cruce peligroso</strong> = опасный перекрёсток. Требует снижения скорости и повышенного внимания.`;
    if (/paso a nivel|cruz de san andrés/.test(q + c))
      return lang==='en' ? `🚂 <strong>St. Andrew's Cross (Cruz de San Andrés)</strong> = railway crossing. Check for trains, speed must not exceed 20 km/h.` : `🚂 <strong>Крест Св. Андрея (Cruz de San Andrés)</strong> = железнодорожный переезд. Нужно убедиться в отсутствии поезда, скорость не более 20 км/ч.`;
    return lang==='en' ? `🚧 <strong>Traffic signs</strong> fall into 4 types: warning (triangle), prohibition (red circle), mandatory (blue circle), informational (rectangle).` : `🚧 <strong>Знаки дорожного движения</strong> делятся на 4 типа: предупреждающие (треугольник), запрещающие (красный круг), обязывающие (синий круг), информационные (прямоугольник).`;
  }

  // ── Líneas y demarcación ─────────────────────────────────
  if (/línea|demarcación|continua|discontinua|amarilla/.test(q + c)) {
    if (/continua/.test(c))
      return lang==='en' ? `➖ <strong>Línea continua</strong> (solid line) = must not cross. Separates opposing traffic or marks a no-overtaking zone.` : `➖ <strong>Línea continua</strong> (сплошная линия) = нельзя пересекать. Разделяет встречные потоки или обозначает запрет обгона.`;
    if (/discontinua|entrecortada/.test(c))
      return lang==='en' ? `- - - <strong>Línea discontinua</strong> (dashed line) = may be crossed for safe overtaking or lane changes.` : `- - - <strong>Línea discontinua</strong> (прерывистая) = можно пересекать при безопасном обгоне или смене полосы.`;
    if (/amarilla/.test(q + c))
      return lang==='en' ? `🟡 <strong>Yellow line</strong> separates opposing traffic. Double solid yellow = strict no-crossing for both directions.` : `🟡 <strong>Жёлтая линия</strong> разделяет встречные потоки. Двойная жёлтая сплошная = строгий запрет пересечения для обоих направлений.`;
    return lang==='en' ? `📏 <strong>Road markings</strong> (demarcación horizontal) indicate traffic rules directly on the road surface.` : `📏 <strong>Разметка дороги</strong> (demarcación horizontal) указывает правила движения прямо на асфальте.`;
  }

  // ── Cinturón / Seguridad pasiva ──────────────────────────
  if (/cinturón|seguridad|airbag|silla.*infant|butaca/.test(q + c)) {
    if (/cinturón/.test(c))
      return lang==='en' ? `🎗️ <strong>Seatbelt (cinturón)</strong> is mandatory for all passengers. The airbag does not replace it — they work together. Fine for not wearing one.` : `🎗️ <strong>Ремень безопасности (cinturón)</strong> обязателен для всех пассажиров. Airbag не заменяет ремень — они работают вместе. Штраф за отсутствие ремня.`;
    if (/airbag/.test(q))
      return lang==='en' ? `💥 <strong>Airbag</strong> complements the seatbelt but does not replace it. Without a belt, the airbag itself can cause injury when deployed.` : `💥 <strong>Airbag (подушка безопасности)</strong> дополняет ремень, но не заменяет его. Без ремня airbag может сам причинить травму при срабатывании.`;
    if (/silla|butaca|niño|infant/.test(q + c))
      return lang==='en' ? `👶 <strong>Child seat (silla de seguridad)</strong> is mandatory for children. Installed in the back seat. Chosen by the child's weight and height.` : `👶 <strong>Детское кресло (silla de seguridad)</strong> обязательно для детей. Устанавливается на заднем сиденье. Выбирается по весу и росту ребёнка.`;
    return lang==='en' ? `🛡️ <strong>Passive safety</strong> = devices that protect on impact: seatbelt, airbag, headrest, child seat.` : `🛡️ <strong>Пассивная безопасность</strong> = устройства, защищающие при ударе: ремень, airbag, подголовник, детское кресло.`;
  }

  // ── Estacionamiento ──────────────────────────────────────
  if (/estacion|aparcar|parar|detener/.test(q)) {
    if (/prohibido/.test(c) || /no.*permit/.test(c))
      return lang==='en' ? `🚫 <strong>No parking:</strong> not allowed at pedestrian crossings, intersections, bus stops, garage entrances, or bike lanes.` : `🚫 <strong>Запрет парковки</strong>: нельзя останавливаться у пешеходных переходов, перекрёстков, остановок транспорта, въездов в гаражи, на велодорожках.`;
    if (/cordón|acera|vereda/.test(q + c))
      return lang==='en' ? `🅿️ <strong>Parallel parking</strong> (cordón): maximum 0.30 m from the curb. Parking on the sidewalk (vereda/acera) is forbidden.` : `🅿️ <strong>Парковка параллельно бордюру</strong> (cordón): максимум 0,30 м от бордюра. Запрещено парковаться на тротуаре (vereda/acera).`;
    if (/doble fila/.test(q + c))
      return lang==='en' ? `🚗🚗 <strong>Double parking (doble fila)</strong> = parking next to another parked car — forbidden, it blocks traffic.` : `🚗🚗 <strong>Двойной ряд (doble fila)</strong> = парковка рядом с другой припаркованной машиной — запрещено, блокирует движение.`;
    return lang==='en' ? `🅿️ <strong>Estacionamiento</strong> = parking with waiting. <strong>Detención</strong> = brief stop. <strong>Doble fila</strong> = double parking = forbidden.` : `🅿️ <strong>Estacionamiento</strong> = парковка со стоянкой. <strong>Detención</strong> = кратковременная остановка. <strong>Estacionamiento en doble fila</strong> = запрещено.`;
  }

  // ── Adelantamiento ───────────────────────────────────────
  if (/adelant|sobrepasar/.test(q + c)) {
    return lang==='en' ? `🚗💨 <strong>Overtaking (adelantamiento):</strong> always on the left, forbidden on curves, hilltops, tunnels, level crossings and pedestrian crossings. Check it's safe and signal first.` : `🚗💨 <strong>Обгон (adelantamiento)</strong>: всегда по левой стороне, запрещён на кривых, у вершин подъёмов, в туннелях, у переездов и пешеходных переходов. Нужно убедиться в безопасности и подать сигнал.`;
  }

  // ── Distancia de seguridad ───────────────────────────────
  if (/distancia.*seguridad|seguridad.*distancia|distancia.*frenado/.test(q + c)) {
    if (/segundo/.test(c))
      return lang==='en' ? `⏱️ <strong>Safety distance</strong> = minimum <strong>2 seconds</strong> behind the vehicle ahead. Double it on wet roads. At 60 km/h that's ~33 metres.` : `⏱️ <strong>Дистанция безопасности</strong> = минимум <strong>2 секунды</strong> до впереди едущего авто. На мокрой дороге — удвоить. На скорости 60 км/ч это ~33 метра.`;
    return lang==='en' ? `📏 <strong>Safety distance</strong> is needed for effective braking. It depends on speed, road conditions and driver reaction time.` : `📏 <strong>Дистанция безопасности</strong> нужна для успешного торможения. Зависит от скорости, состояния дороги и реакции водителя.`;
  }

  // ── Niebla / Condiciones adversas ───────────────────────
  if (/niebla|lluvia|hielo|mojada|visibilidad/.test(q + c)) {
    if (/niebla/.test(q + c))
      return lang==='en' ? `🌫️ <strong>Fog (niebla):</strong> turn on fog lights (luces de niebla), reduce speed, increase distance. Do not stop on the shoulder with lights off.` : `🌫️ <strong>Туман (niebla)</strong>: включите противотуманные фары (luces de niebla), снизьте скорость, увеличьте дистанцию. Не останавливайтесь на обочине с выключенными огнями.`;
    if (/lluvia|mojada/.test(q + c))
      return lang==='en' ? `🌧️ <strong>Wet road:</strong> braking distance doubles. Risk of aquaplaning above 80 km/h. Reduce speed and increase following distance.` : `🌧️ <strong>Мокрая дорога</strong>: тормозной путь увеличивается в 2 раза. Опасность аквапланирования на скорости выше 80 км/ч. Снизьте скорость и увеличьте дистанцию.`;
    return lang==='en' ? `⚠️ <strong>Adverse conditions</strong> require reduced speed, increased distance and appropriate lighting.` : `⚠️ <strong>Сложные условия</strong> требуют снижения скорости, увеличения дистанции и включения соответствующего освещения.`;
  }

  // ── Siniestro / Accidente ────────────────────────────────
  if (/siniestro|accidente|hecho/.test(q + c)) {
    return lang==='en' ? `🚑 <strong>In a traffic accident (siniestro vial):</strong> stop immediately, do not leave the scene. Turn on hazard lights (balizas), set out warning signs. Call 911. Leaving the scene is a criminal offence.` : `🚑 <strong>При ДТП (siniestro vial)</strong>: немедленно остановитесь, не покидайте место. Включите аварийку (balizas), выставьте знаки. Вызовите помощь (911). Уезжать с места ДТП — уголовное преступление.`;
  }

  // ── Alcohol effects ──────────────────────────────────────
  if (/efecto|produce|afecta|cansado|fatiga|sueño/.test(q)) {
    if (/reacción/.test(c))
      return lang==='en' ? `🧠 <strong>Alcohol and fatigue</strong> increase reaction time (tiempo de reacción). At 60 km/h, one extra second = 17 extra metres before braking.` : `🧠 <strong>Алкоголь и усталость</strong> увеличивают время реакции (tiempo de reacción). При скорости 60 км/ч лишняя секунда = 17 лишних метров до торможения.`;
    return lang==='en' ? `😴 <strong>Fatigue (fatiga/cansancio)</strong> is as dangerous as alcohol: slows reaction, reduces concentration. At the first sign of drowsiness — stop and rest.` : `😴 <strong>Усталость (fatiga/cansancio)</strong> так же опасна, как алкоголь: замедляет реакцию, снижает концентрацию. При первых признаках сна — остановитесь и отдохните.`;
  }

  // ── Peatones / Ciclistas ─────────────────────────────────
  if (/peatón|peatonal|ciclista|ciclovía/.test(q + c)) {
    if (/peatón/.test(c))
      return lang==='en' ? `🚶 <strong>Pedestrians (peatones)</strong> have priority at crossings (sendas peatonales). Drivers must stop. Hitting a pedestrian carries criminal liability.` : `🚶 <strong>Пешеход (peatón)</strong> имеет приоритет на пешеходных переходах (sendas peatonales). Водитель обязан остановиться. За сбитого пешехода — уголовная ответственность.`;
    if (/ciclovía|ciclista/.test(c))
      return lang==='en' ? `🚲 <strong>Bike lane (ciclovía/bicisenda)</strong> — exclusively for cyclists. No parking, driving on, or blocking it.` : `🚲 <strong>Велодорожка (ciclovía/bicisenda)</strong> — исключительно для велосипедистов. Нельзя парковаться, въезжать на ней или блокировать её.`;
    return lang==='en' ? `👥 <strong>Vulnerable road users:</strong> pedestrians and cyclists have special legal protection. Drivers have increased responsibility.` : `👥 <strong>Уязвимые участники</strong>: пешеходы и велосипедисты имеют особую защиту по закону. Водитель несёт повышенную ответственность.`;
  }

  // ── Documentos ───────────────────────────────────────────
  if (/document|licencia|registro|seguro|VTV|revisión/.test(q + c)) {
    return lang==='en' ? `📋 <strong>Required documents:</strong> licencia de conducir (license), cédula del vehículo (registration), seguro obligatorio (insurance), VTV (inspection). All must be valid.` : `📋 <strong>Обязательные документы</strong>: licencia de conducir (права), cédula del vehículo (свидетельство), seguro obligatorio (страховка), VTV (техосмотр). Все должны быть действующими.`;
  }

  // ── Luces ────────────────────────────────────────────────
  if (/luce|faros|iluminación/.test(q + c)) {
    if (/cortas|bajas/.test(c))
      return lang==='en' ? `💡 <strong>Low beam (luces cortas/bajas):</strong> in city at night, in tunnels, low visibility. Does not blind oncoming drivers.` : `💡 <strong>Ближний свет (luces cortas/bajas)</strong>: в городе ночью, в туннелях, при плохой видимости. Не слепит встречных водителей.`;
    if (/largas|altas/.test(c))
      return lang==='en' ? `🔦 <strong>High beam (luces largas/altas):</strong> only on rural roads with no oncoming traffic. Switch to low beam immediately when another vehicle approaches.` : `🔦 <strong>Дальний свет (luces largas/altas)</strong>: только на загородных трассах без встречного транспорта. При появлении встречной машины — немедленно переключить на ближний.`;
    if (/baliza|intermitente/.test(c))
      return lang==='en' ? `⚠️ <strong>Hazard lights (balizas/luces intermitentes):</strong> for breakdowns, accidents or dangerous stops. Not for double parking!` : `⚠️ <strong>Аварийные огни (balizas/luces intermitentes)</strong>: при поломке, ДТП или опасной остановке. Не для обозначения двойной парковки!`;
    return lang==='en' ? `💡 <strong>Lighting:</strong> choosing the right lights keeps you and others safe. In tunnels lights are mandatory even during the day.` : `💡 <strong>Освещение</strong>: правильный выбор огней — безопасность для вас и других. В туннелях огни обязательны даже днём.`;
  }

  // ── Uso de celular / bocina ───────────────────────────────
  if (/celular|teléfono|móvil|bocina/.test(q + c)) {
    if (/celular|teléfono/.test(q))
      return lang==='en' ? `📵 <strong>Phone while driving</strong> is forbidden without hands-free. Using a handheld phone is a violation with fines and points. Crash risk increases 4×.` : `📵 <strong>Телефон за рулём</strong> запрещён без hands-free. Использование телефона в руках — нарушение, влечёт штраф и потерю баллов. Риск ДТП возрастает в 4 раза.`;
    if (/bocina/.test(q))
      return lang==='en' ? `📯 <strong>Horn (bocina):</strong> forbidden in the city without necessity. Only permitted to prevent danger.` : `📯 <strong>Звуковой сигнал (bocina)</strong>: в городе запрещено использовать без необходимости. Допустимо только для предотвращения опасности.`;
  }

  // ── Generic fallback based on correct answer ─────────────
  return generateGenericExplanation(correctText, isCorrect);
}

function generateGenericExplanation(correctText, isCorrect) {
  // Build a generic but useful explanation from the correct answer itself
  const c = correctText.toLowerCase();

  // Look for key patterns in the correct answer
  if (/inmediatamente|de inmediato/.test(c))
    return lang==='en' ? `⚡ <strong>Immediate action:</strong> speed of response is critical in this situation. Delay increases danger.` : `⚡ <strong>Немедленное действие</strong>: в данной ситуации важна скорость реакции. Промедление увеличивает опасность.`;
  if (/siempre/.test(c))
    return lang==='en' ? `✅ <strong>Always (siempre):</strong> this rule has no exceptions. It applies in every situation.` : `✅ <strong>Всегда (siempre)</strong>: это правило без исключений. Действует в любой ситуации.`;
  if (/nunca/.test(c))
    return lang==='en' ? `🚫 <strong>Never (nunca):</strong> this is an absolute prohibition with no exceptions under Argentine traffic law.` : `🚫 <strong>Никогда (nunca)</strong>: это абсолютный запрет без исключений по правилам ПДД Аргентины.`;
  if (/obligatorio|debe/.test(c))
    return lang==='en' ? `📌 <strong>Mandatory (obligatorio):</strong> this is a legal requirement, not a recommendation. Non-compliance is a violation.` : `📌 <strong>Обязательно (obligatorio)</strong>: это требование закона, а не рекомендация. Несоблюдение — нарушение.`;
  if (/prohibido|no está permitido/.test(c))
    return lang==='en' ? `🚫 <strong>Forbidden (prohibido):</strong> this action violates Argentine traffic law (Ley 24.449 / Ley 2148 CABA).` : `🚫 <strong>Запрещено (prohibido)</strong>: действие нарушает правила дорожного движения Аргентины (Ley 24.449 / Ley 2148 CABA).`;
  if (/derecha/.test(c))
    return lang==='en' ? `➡️ <strong>Right (derecha):</strong> in Argentine traffic law, the right-side rule is one of the key principles.` : `➡️ <strong>Справа (derecha)</strong>: в аргентинских ПДД правило правой стороны — один из ключевых принципов.`;
  if (/izquierda/.test(c))
    return lang==='en' ? `⬅️ <strong>Left (izquierda):</strong> overtaking and certain manoeuvres are performed on the left side.` : `⬅️ <strong>Слева (izquierda)</strong>: обгон и определённые манёвры выполняются по левой стороне.`;

  // If nothing matches, show the correct answer with a note
  if (!isCorrect)
    return lang==='en' ? `📖 Remember the correct answer. It reflects Argentine traffic regulations (Ley 24.449 and Ley 2148 for CABA).` : `📖 Запомните правильный ответ. Он отражает правила дорожного движения Аргентины (Ley 24.449 и Ley 2148 для CABA).`;
  return lang==='en' ? `✅ Correct! This is an important Buenos Aires traffic rule.` : `✅ Правильно! Это важное правило ПДД Буэнос-Айреса.`;
}

function guessTopicFromQuestion(text) {
  const t = text.toLowerCase();
  if (/señal|indica|seña|signo|cartele|símbolo|marca/.test(t)) return 'Señales';
  if (/velocidad|km\/h|límite|rápid|despacio/.test(t)) return 'Velocidad';
  if (/alcohol|alcoholemia|bebid|embriag/.test(t)) return 'Alcohol';
  if (/cinturón|seguridad|airbag|casco|silla|infant/.test(t)) return 'Seguridad';
  if (/prioridad|paso|ceda|stop|semáforo|intersección|encrucijada|bocacalle/.test(t)) return 'Prioridad';
  if (/adelantar|sobrepasar|carril|maniobra|cambio|giro|girar/.test(t)) return 'Maniobras';
  if (/estacionar|detener|parar|doble fila/.test(t)) return 'Estacionamiento';
  if (/niebla|lluvia|calzada|visibilidad|condicion|clima/.test(t)) return 'Condiciones';
  if (/documento|licencia|permiso|registro|seguro|VTV|patente/.test(t)) return 'Documentos';
  if (/peatón|peatonal|ciclista|bicicleta|ciclovía/.test(t)) return 'Peatones';
  return 'Otros';
}

// ─── VOCAB ────────────────────────────────────────────
// Merge all vocab sources into one list, ordered by category
const ALL_VOCAB = [...VOCAB, ...WORD_DICT_VOCAB];
// Define preferred category order
const CAT_ORDER = ['documentos','senales','velocidad','maniobras','circulacion','seguridad','condiciones','verbos','estructura','otros'];

let vocabState = {filter:'all', search:'', expanded:new Set()};

const ALPHABET = [
  ['A a','a','а (как в «мама»)','like "a" in "father"'],
  ['B b','be','б (мягче, чем рус. б)','soft "b" (like English "b")'],
  ['C c','ce','с перед e,i → «с»; иначе → «к»','before e,i → "s"; otherwise → "k"'],
  ['D d','de','д (между гласными — мягкий «д»)','soft "d" between vowels (like "th" in "the")'],
  ['E e','e','э / е','like "e" in "bed"'],
  ['F f','efe','ф','like "f"'],
  ['G g','ge','г перед a,o,u; перед e,i → «х»','before a,o,u → "g"; before e,i → "h"'],
  ['H h','hache','не читается (немое)','silent (never pronounced)'],
  ['I i','i','и','like "ee" in "see"'],
  ['J j','jota','х (хота)','like a strong "h" (from the throat)'],
  ['K k','ka','к (только в заимствованных)','like "k" (only in loanwords)'],
  ['L l','ele','л','like "l"'],
  ['M m','eme','м','like "m"'],
  ['N n','ene','н','like "n"'],
  ['Ñ ñ','eñe','нь (как «нь» в «конь»)','like "ny" in "canyon"'],
  ['O o','o','о','like "o" in "more"'],
  ['P p','pe','п','like "p"'],
  ['Q q','cu','к (всегда перед ue, ui)','like "k" (always before ue, ui)'],
  ['R r','erre','р (в начале слова — раскатистый рр)','rolled "r"; strongly trilled at word start'],
  ['S s','ese','с','like "s"'],
  ['T t','te','т','like "t"'],
  ['U u','u','у','like "oo" in "food"'],
  ['V v','uve','б/в (в Аргентине = б)','same as "b" in Argentina'],
  ['W w','doble uve','в (в заимствованных)','like "v" (in loanwords)'],
  ['X x','equis','кс; перед согл. → «с»','"ks"; before consonants → "s"'],
  ['Y y','ye','й / и (в Аргентине — «ш»/«ж»)','in Argentina: like "sh" or "zh"'],
  ['Z z','zeta','с (в Аргентине = с)','like "s" in Argentina'],
];
