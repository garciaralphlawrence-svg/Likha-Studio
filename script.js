/* Likha Studio — page logic. Edit CONTACT, TOOLS and WORK below to update the site. */
const CONTACT = {
  email: 'rlawrencegarcia03@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ralph-garcia-b57814401',
  // Optional: fill these in and the buttons appear automatically.
  phone: '',      // e.g. '+63 917 123 4567'  (also used for Viber)
  messenger: '',  // e.g. 'https://m.me/yourpage'
  whatsapp: '',   // e.g. '639171234567' (digits only)
};

const G = 'https://garciaralphlawrence-svg.github.io/';

// Ready-made tools visitors can try (automation examples).
const TOOLS = [
  { img: 'resibo', tag: 'Automation · Receipts', name: 'Resibo Maker', url: G + 'AI-Analytics-Studio/receipts/',
    desc: 'Type a sale in English or Taglish and it makes the receipt, with VAT and senior/PWD discounts computed.' },
  { img: 'studio', tag: 'Automation · Reports', name: 'AI Analytics Studio', url: G + 'AI-Analytics-Studio/',
    desc: 'Upload an Excel file and get a full dashboard with insights in seconds.' },
  { img: 'school', tag: 'System · Attendance', name: 'School Suite demo', url: 'demo/school.html',
    desc: 'PIN attendance kiosk, live dashboard and monthly reports you can export to Excel.' },
  { img: 'spc', tag: 'Quality · KPIs', name: 'SPC Studio', url: G + 'SPC-Studio/',
    desc: 'Control charts and process-capability reports, explained in plain English.' },
  { img: 'caresight', tag: 'Data · Forecasting', name: 'CareSight', url: G + 'CareSight/',
    desc: 'Predicts patient readmissions and missed appointments, and forecasts admissions.' },
  { kapitan: true, tag: 'AI · Chat assistant', name: 'Chat assistant demo', desc: 'Try the assistant on this site. Ask it about Likha Studio. I can build one like it for your business, with your own name.' },
];

// Projects, most important first. One short line each.
const WORK = [
  { id: 'portfolio', cat: 'web', type: 'Personal brand', name: 'Ralph Garcia Portfolio', url: G + 'Ralph-Portfolio/',
    desc: 'My developer portfolio: projects, research, talks and experience.' },
  { id: 'fma', cat: 'sys web', client: true, type: 'School system', name: 'Future Minds Academy', url: 'https://futuremindsacademyph.com/',
    desc: 'School website plus a management system with logins for every role and a PIN attendance kiosk.' },
  { id: 'caresight', cat: 'ai', type: 'Hospital analytics', name: 'CareSight', url: G + 'CareSight/',
    desc: 'Predicts patient readmissions and missed appointments, and forecasts hospital admissions.' },
  { id: 'studio', cat: 'ai', type: 'Excel → dashboard', name: 'AI Analytics Studio', url: G + 'AI-Analytics-Studio/',
    desc: 'Upload a spreadsheet and get charts, insights and answers in seconds.' },
  { id: 'spc', cat: 'ai', type: 'Quality control', name: 'SPC Studio', url: G + 'SPC-Studio/',
    desc: 'Control charts and process-capability reports, explained in plain English.' },
  { id: 'islakeys', cat: 'sys web', type: 'Real estate', name: 'IslaKeys', url: G + 'IslaKeys/',
    desc: 'Property platform with separate portals for buyers, brokers and admins.' },
  { id: 'bizbuddy', cat: 'sys', type: 'Marketplace', name: 'BizBuddy', url: G + 'BizBuddy/',
    desc: 'Virtual-assistant marketplace with client, assistant and admin dashboards.' },
  { id: 'resibo', cat: 'sys ai', type: 'Receipts', name: 'Resibo Maker', url: G + 'AI-Analytics-Studio/receipts/',
    desc: 'Type a sale in English or Taglish and get a receipt with PH VAT computed.' },
  { id: 'kmm', cat: 'web', type: 'Travel agency', name: 'KMM Travel Co.', url: G + 'KMM/',
    desc: 'Travel website with tour packages, prices and online booking.' },
  { id: 'joseph', cat: 'web', client: true, type: 'Event website', name: 'Joseph Gelito', url: G + 'Comedian-Demo/',
    desc: 'Show website for a performer, with ticket info and a countdown.' },
];

const FAQ = [
  ['What can you automate?', 'Anything your team repeats every week: Excel and Google Sheets work, receipts and invoices, email reports, certificates and IDs in bulk, attendance, document tracking and KPI reports.'],
  ['How much does a project cost?', 'Every project is different, so I quote based on what you need. Send me a message and you will get a free, clear quote.'],
  ['Do I own the website or system?', 'Yes. The domain is registered in your name, and the site, system and data are yours.'],
  ['Is there a monthly fee?', 'Most websites can run on free hosting. Systems with logins and a database may need a small hosting fee, which I explain in the quote.'],
  ['How long does it take?', 'A website takes about 1 to 2 weeks and a business system about 3 to 6 weeks. You see a working preview within the first few days.'],
  ['Can I see the hospital system live?', 'No. It is a private system used inside the hospital, so I show it with screenshots. I can build the same kind of tools for your organization.'],
  ['Do you work with clients abroad?', 'Yes. I work with clients in the Philippines and the US.'],
];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const still = location.search.includes('still');
if (still) document.documentElement.classList.add('still');
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
$('#year').textContent = new Date().getFullYear();

/* nav */
const nav = $('#nav'), burger = $('#burger'), links = $('#navLinks');
burger.addEventListener('click', () => { const o = links.classList.toggle('open'); burger.setAttribute('aria-expanded', o); });
$$('a', links).forEach(a => a.addEventListener('click', () => { links.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }));

/* rotating words in the headline */
(() => {
  const words = $$('#rotator b'); let i = 0;
  words[0].classList.add('on');
  if (reduce || still) return;
  setInterval(() => {
    const prev = words[i]; prev.classList.replace('on', 'off'); setTimeout(() => prev.classList.remove('off'), 700);
    i = (i + 1) % words.length; words[i].classList.add('on');
  }, 2700);
})();

/* count-up numbers */
function countTo(el, end, suf = '') {
  if (reduce || still) return;
  const t0 = performance.now();
  (function step(t) { const k = Math.min(1, (t - t0) / 1200); el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suf; if (k < 1) requestAnimationFrame(step); })(t0);
}
setTimeout(() => $$('.proof b[data-count]').forEach(b => countTo(b, +b.dataset.count, b.dataset.suffix || '')), still || reduce ? 0 : 2300);

/* drifting gold dust in the hero (pauses when the hero is off-screen) */
(() => {
  const cv = $('#dust');
  if (!cv || reduce || still) return;
  const ctx = cv.getContext('2d');
  let W, H, dpr, motes = [], visible = true, raf;
  function size() {
    dpr = Math.min(2, devicePixelRatio || 1);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(70, W * H / 16000));
    motes = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, r: .5 + Math.random() * 1.8, s: .12 + Math.random() * .35, d: Math.random() * Math.PI * 2, a: .25 + Math.random() * .6 }));
  }
  function frame(t) {
    ctx.clearRect(0, 0, W, H);
    for (const m of motes) {
      m.y -= m.s; m.x += Math.sin(t / 2600 + m.d) * .25;
      if (m.y < -6) { m.y = H + 6; m.x = Math.random() * W; }
      const tw = .55 + .45 * Math.sin(t / 700 + m.d * 3);
      const g = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.r * 4);
      g.addColorStop(0, `rgba(246,227,184,${m.a * tw})`); g.addColorStop(1, 'rgba(232,199,138,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(m.x, m.y, m.r * 4, 0, Math.PI * 2); ctx.fill();
    }
    if (visible) raf = requestAnimationFrame(frame);
  }
  size(); addEventListener('resize', size);
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; cancelAnimationFrame(raf); if (visible) raf = requestAnimationFrame(frame); }).observe(cv);
})();

/* tools */
$('#toolsGrid').innerHTML = TOOLS.map((t, i) => `
  <article class="tool reveal" style="--d:${(i % 3) * .08}s">
    ${t.kapitan ? '<div class="shot icon"><span><i class="fa-solid fa-comment-dots"></i></span></div>'
      : `<div class="shot"><img src="assets/work/${t.img}-top.webp" alt="${esc(t.name)}" loading="lazy" width="960" height="600"></div>`}
    <div class="info">
      <span class="tag">${esc(t.tag)}</span><h3>${esc(t.name)}</h3><p>${esc(t.desc)}</p>
      <span class="go">${t.kapitan ? 'Chat now' : 'Try it'} <i class="fa-solid fa-arrow-right"></i></span>
    </div>
    ${t.kapitan ? '<button class="cover" data-kapitan aria-label="Chat with Kapitan"></button>'
      : `<a class="cover" href="${t.url}" target="_blank" rel="noopener" aria-label="Open ${esc(t.name)} (new tab)"></a>`}
  </article>`).join('');

/* projects */
$('#workGrid').innerHTML = WORK.map((w, i) => `
  <article class="work reveal" data-cat="${w.cat}" style="--d:${(i % 3) * .08}s">
    <div class="shot"><img src="assets/work/${w.id}-top.webp" alt="${esc(w.name)} website" loading="lazy" width="960" height="600"></div>
    <div class="info">
      <span class="type">${esc(w.type)}${w.client ? ' · <b>Client</b>' : ''}</span>
      <h3>${esc(w.name)}</h3>
      <p>${esc(w.desc)}</p>
      <span class="go">Open site <i class="fa-solid fa-arrow-up-right-from-square"></i></span>
    </div>
    <a class="cover" href="${w.url}" target="_blank" rel="noopener" aria-label="Open ${esc(w.name)} (new tab)"></a>
  </article>`).join('');
$$('.filters button').forEach(b => b.addEventListener('click', () => {
  $$('.filters button').forEach(x => x.classList.toggle('on', x === b));
  const f = b.dataset.filter;
  $$('.work').forEach(card => {
    const show = f === 'all' || card.dataset.cat.split(' ').includes(f);
    card.classList.toggle('hide', !show);
    card.classList.remove('show'); if (show) { void card.offsetWidth; card.classList.add('show'); }
  });
}));

/* FAQ */
$('#faqList').innerHTML = FAQ.map(([q, a], i) => `<details class="reveal"${i === 0 ? ' open' : ''}><summary>${esc(q)}</summary><div class="ans">${esc(a)}</div></details>`).join('');

/* contact buttons + form */
(() => {
  const items = [['mailto:' + CONTACT.email, 'fa-solid fa-envelope', 'Email', CONTACT.email]];
  if (CONTACT.messenger) items.push([CONTACT.messenger, 'fa-brands fa-facebook-messenger', 'Messenger', 'Chat with me']);
  if (CONTACT.whatsapp) items.push(['https://wa.me/' + CONTACT.whatsapp, 'fa-brands fa-whatsapp', 'WhatsApp', '+' + CONTACT.whatsapp]);
  if (CONTACT.phone) items.push(['tel:' + CONTACT.phone.replace(/[^\d+]/g, ''), 'fa-solid fa-phone', 'Call / Viber', CONTACT.phone]);
  items.push(['#', 'fa-solid fa-comment-dots', 'Chat assistant', 'Instant answers, 24/7']);
  $('#cDirect').innerHTML = items.map(([href, ic, label, val]) => `<a href="${esc(href)}"${/^https?:/.test(href) ? ' target="_blank" rel="noopener"' : ''}${label === 'Chat assistant' ? ' data-kapitan' : ''}><span class="ci"><i class="${ic}"></i></span><span><small>${label}</small><b>${esc(val)}</b></span></a>`).join('');
  $$('[data-contact="linkedin"]').forEach(a => a.href = CONTACT.linkedin);
})();
// Contact form: a normal form post to FormSubmit (no API key). It sends the message to my inbox,
// then FormSubmit sends the visitor back here with ?sent=1, where we show a thank-you note.
$('#cForm').addEventListener('submit', e => {
  const form = e.target, f = new FormData(form), btn = form.querySelector('button[type="submit"]');
  if (f.get('_honey')) { e.preventDefault(); return; } // spam bots fill the hidden field
  $('#cSubject').value = `Likha Studio inquiry: ${f.get('need')}${f.get('biz') ? ' for ' + f.get('biz') : ''}`;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending…';
  btn.style.pointerEvents = 'none';
});
if (new URLSearchParams(location.search).has('sent')) {
  const note = $('#cNote');
  note.innerHTML = '<i class="fa-solid fa-circle-check"></i> Thank you! Your message was sent. I will reply by email.';
  note.className = 'c-note ok';
  history.replaceState(null, '', location.pathname + '#contact');
  setTimeout(() => $('#contact').scrollIntoView(), 300);
}

/* open Kapitan from any [data-kapitan] button */
document.addEventListener('click', e => {
  if (!e.target.closest('[data-kapitan]')) return;
  e.preventDefault();
  const host = document.getElementById('kapitan-root');
  const btn = host && host.shadowRoot && host.shadowRoot.querySelector('.launcher');
  if (btn) btn.click();
});

/* reveal on scroll */
const io = new IntersectionObserver(entries => entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { threshold: .1, rootMargin: '0px 0px -30px 0px' });
$$('.reveal').forEach(el => (reduce || still) ? el.classList.add('in') : io.observe(el));
$$('.svc').forEach((el, i) => el.style.setProperty('--d', (i % 3) * .08 + 's'));
$$('.hl').forEach((el, i) => el.style.setProperty('--d', i * .1 + 's'));
$$('.steps li').forEach((el, i) => el.style.setProperty('--d', i * .12 + 's'));

/* active nav link */
const secIO = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) $$('a', links).forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
$$('main section[id]').forEach(s => secIO.observe(s));

/* scroll: nav shadow, progress bar, process line */
const steps = $('#steps'), flowEl = $('.speak'), heroCopy = $('.hero-copy');
let ticking = false;
function onScroll() {
  nav.classList.toggle('scrolled', scrollY > 10);
  $('#progress').style.transform = `scaleX(${Math.min(1, scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight))})`;
  if (!reduce && scrollY < innerHeight) { flowEl.style.translate = '0 ' + (scrollY * -0.08).toFixed(1) + 'px'; heroCopy.style.translate = '0 ' + (scrollY * 0.06).toFixed(1) + 'px'; }
  const r = steps.getBoundingClientRect();
  steps.style.setProperty('--p', Math.max(0, Math.min(1, (innerHeight * .8 - r.top) / (r.height + innerHeight * .3))).toFixed(3));
  ticking = false;
}
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();

/* real systems tabs (school / hospital); #school or #hospital links open the right tab */
(() => {
  const tabs = document.querySelectorAll('.sys-tabs button');
  const show = (id) => {
    tabs.forEach(t => { const on = t.dataset.tab === id; t.classList.toggle('on', on); t.setAttribute('aria-selected', on); });
    document.querySelectorAll('.sys-panel').forEach(p => { p.hidden = p.id !== id; if (!p.hidden) p.querySelectorAll('.reveal').forEach(r => r.classList.add('in')); });
  };
  tabs.forEach(t => t.addEventListener('click', () => show(t.dataset.tab)));
  const fromHash = () => { const h = location.hash.slice(1); if (h === 'school' || h === 'hospital') { show(h); document.getElementById('systems').scrollIntoView(); } };
  addEventListener('hashchange', fromHash); fromHash();
})();
