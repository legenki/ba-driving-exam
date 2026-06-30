// Apply the saved theme before first paint to avoid a flash.
const theme = localStorage.getItem('pddar_theme');
if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
