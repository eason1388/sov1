
const quotes = [
  { text: '心定則氣定，氣定則神安。', source: '隨緣堂每日法語' },
  { text: '修行不是追逐神異，而是把自己放回秩序。', source: '清靜經緯' },
  { text: '祭改如整理，真正的改變仍要落在起心動念與行為。', source: '法露恩光' },
  { text: '先看醫學，後看玄學，是對生命最基本的尊重。', source: '網站服務原則' },
  { text: '神行則氣行，神住則氣住。', source: '玄門養氣' },
  { text: '能量若要長久穩定，必先讓作息與內心變得穩定。', source: '修行養氣頁' },
  { text: '真正的護身，不只在符，更在正念、正行與正氣。', source: '符咒小百科' },
  { text: '把混亂帶回秩序，就是一種解厄。', source: '玄門專欄' },
  { text: '冥陽兩利，不是對抗，而是讓該安住的安住。', source: '品牌理念' },
  { text: '懂得回身觀照，才知道自己真正需要的是什麼。', source: '今日法語' },
  { text: '收驚的核心，不是神效，而是安神。', source: '服務項目' },
  { text: '修行如調弦，太緊易斷，太鬆無聲。', source: '清靜經緯' }
];

function setupDailyQuote() {
  const quoteEl = document.getElementById('daily-quote');
  const sourceEl = document.getElementById('daily-quote-source');
  const btn = document.getElementById('new-quote-btn');
  if (!quoteEl || !sourceEl) return;

  const render = (index) => {
    const q = quotes[index];
    quoteEl.textContent = `「${q.text}」`;
    sourceEl.textContent = q.source;
  };

  const todayIndex = Math.floor((new Date().setHours(0,0,0,0) / 86400000) % quotes.length);
  render(todayIndex);

  if (btn) {
    btn.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      render(randomIndex);
    });
  }
}

function setupNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const opened = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(opened));
  });
}

function setupForm() {
  const form = document.getElementById('consult-form');
  const status = document.getElementById('form-status');
  if (!form || !status) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const endpoint = form.dataset.formspreeEndpoint?.trim();
    const data = Object.fromEntries(new FormData(form).entries());

    if (!endpoint) {
      status.textContent = '表單前端已正常運作。若要真正收件，請在 README 指示下填入 Formspree 或 Google Forms 端點。';
      form.reset();
      return;
    }

    status.textContent = '送出中…';
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error('Network response was not ok');
      status.textContent = '已成功送出，我們會盡快與你聯繫。';
      form.reset();
    } catch (error) {
      status.textContent = '送出失敗，請稍後再試，或改用 Email / LINE 聯絡。';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupDailyQuote();
  setupNav();
  setupForm();
});
