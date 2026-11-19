/* Likha Studio — page logic. Edit CONTACT and WORK below to update the site. */
const CONTACT = {
  email: 'rlawrencegarcia03@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ralph-garcia-b57814401',
  github: 'https://github.com/garciaralphlawrence-svg',
  // Optional: fill these in and the buttons appear automatically.
  phone: '',      // e.g. '+63 917 123 4567'  (also used for Viber)
  messenger: '',  // e.g. 'https://m.me/yourpage'
  whatsapp: '',   // e.g. '639171234567' (digits only)
};

const G = 'https://garciaralphlawrence-svg.github.io/';
const WORK = [
  { id: 'fma', big: true, cat: 'sys web', client: true, type: 'School website + system', name: 'Future Minds Academy', url: 'https://futuremindsacademyph.com/',
    desc: 'Public school website plus a full management system: one login for every role, a PIN attendance kiosk for teachers and Excel account import.',
    feats: ['Attendance kiosk', 'Admin dashboard', 'Role logins', 'Excel import'] },
  { id: 'joseph', big: true, cat: 'web', client: true, type: 'Performer website', name: 'Joseph Gelito', url: G + 'Comedian-Demo/',
    desc: 'Show-business site for a Filipino comedian: curtain intro, live countdown, ticket hotlines, YouTube videos and a Kapitan fan assistant.',
    feats: ['Motion design', 'Countdown', 'Kapitan AI', 'YouTube'] },
  { id: 'kmm', cat: 'web', type: 'Travel agency', name: 'KMM Travel Co.', url: G + 'KMM/',
    desc: 'Travel agency website with tour packages and inquiry flow for Philippine destinations.', feats: ['Tour packages', 'Inquiry form'] },
  { id: 'islakeys', cat: 'sys web', type: 'Real-estate platform', name: 'IslaKeys', url: G + 'IslaKeys/',
    desc: 'Property platform with separate portals for buyers, brokers and admins.', feats: ['3 portals', 'Listings'] },
  { id: 'bizbuddy', cat: 'sys', type: 'VA marketplace', name: 'BizBuddy', url: G + 'BizBuddy/',
    desc: 'Virtual-assistant marketplace with client, VA and admin dashboards.', feats: ['Dashboards', 'Bookings'] },
  { id: 'caresight', cat: 'ai', type: 'Hospital analytics', name: 'CareSight', url: G + 'CareSight/',
    desc: 'Predicts patient readmissions and no-shows with machine learning, right in the browser.', feats: ['Machine learning', 'Forecasts'] },
  { id: 'studio', cat: 'ai', type: 'Excel → dashboard', name: 'AI Analytics Studio', url: G + 'AI-Analytics-Studio/',
    desc: 'Drop in a spreadsheet and get charts, insights and answers in seconds.', feats: ['Auto dashboards', 'Smart Analyst'] },
  { id: 'spc', cat: 'ai', type: 'Quality control', name: 'SPC Studio', url: G + 'SPC-Studio/',
    desc: 'Control charts and process-capability reports explained in plain English.', feats: ['Six Sigma', 'Reports'] },
  { id: 'resibo', cat: 'sys ai', type: 'Receipt maker', name: 'Resibo Maker', url: G + 'AI-Analytics-Studio/receipts/',
    desc: 'Type a sale in Taglish and get a proper receipt with PH VAT and Senior/PWD discounts.', feats: ['PH VAT', 'Taglish input'] },
  { id: 'portfolio', cat: 'web', type: 'Personal brand', name: 'Ralph Garcia Portfolio', url: G + 'Ralph-Portfolio/',
    desc: 'Interactive developer portfolio with a floating cut-out hero and project gallery.', feats: ['Motion design', 'Gallery'] },
];

const FAQ = [
  ['Do I own the website?', 'Yes. The domain is registered in your name, and the site and all content are yours. If you ever want to move, you take everything with you.'],
  ['How much is hosting every month?', 'Most websites run on free hosting, so ₱0 a month. You only pay for your domain (about ₱900 or $15 a year). Systems with logins and a database may need a small hosting fee, and I tell you that upfront in the quote.'],
  ['Do I have to pay for AI to use Kapitan?', 'No. Kapitan answers from your own business information with no AI subscription. If you later want fully conversational AI, that is an optional upgrade with a small usage fee.'],
  ['How long does it take?', 'A Launch website takes about 1 week, Website + Kapitan about 2 weeks, and a business system 3 to 6 weeks depending on features. You see a working preview within the first few days.'],
  ['What do you need from me?', 'Your logo, a few photos, your prices or services, and your contact details. No logo or photos yet? I can help with that too.'],
  ['Can I update the site myself?', 'Yes. Content is kept in one simple file, and I show you how to edit it. Or choose the Care plan and just send me the changes.'],
  ['Do you work with clients abroad?', 'Yes. I work with clients in the Philippines and the US, quote in PHP or USD, and meet over Zoom, Google Meet or Messenger.'],
  ['How does payment work?', '50% to start and 50% at launch. Bank transfer, GCash, or PayPal for clients abroad.'],
];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const still = location.search.includes('still');
if (still) document.documentElement.classList.add('still');
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ---------- intro ---------- */
setTimeout(() => document.body.classList.add('ready'), still || reduce ? 0 : 1900);
$('#year').textContent = new Date().getFullYear();

/* ---------- nav ---------- */
const nav = $('#nav'), burger = $('#burger'), links = $('#navLinks');
burger.addEventListener('click', () => { const o = links.classList.toggle('open'); burger.setAttribute('aria-expanded', o); });
$$('a', links).forEach(a => a.addEventListener('click', () => { links.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }));

/* ---------- rotating words ---------- */
(() => {
  const words = $$('#rotator b'); let i = 0;
  words[0].classList.add('on');
  if (reduce || still) return;
  setInterval(() => {
    words[i].classList.replace('on', 'off');
    const prev = words[i]; setTimeout(() => prev.classList.remove('off'), 700);
    i = (i + 1) % words.length; words[i].classList.add('on');
  }, 2300);
})();

/* ---------- hero stack of live sites ---------- */
(() => {
  const picks = ['joseph', 'fma', 'kmm', 'caresight', 'islakeys', 'studio'].map(id => WORK.find(w => w.id === id));
  const stack = $('#stack');
  stack.innerHTML = picks.map(w => `<div class="browser"><div class="bar"><i></i><i></i><i></i><span>${esc(w.url.replace(/^https?:\/\//, ''))}</span></div><img src="assets/work/${w.id}-top.webp" alt="${esc(w.name)} website" width="960" height="600"><span class="caption">${esc(w.name)}</span></div>`).join('');
  const cards = $$('.browser', stack); let front = 0;
  const place = () => cards.forEach((c, i) => { const d = (i - front + cards.length) % cards.length; c.dataset.pos = d < 3 ? d : 'hide'; });
  place();
  if (reduce || still) return;
  setInterval(() => {
    const leaving = cards[front]; leaving.dataset.pos = 'out';
    front = (front + 1) % cards.length;
    setTimeout(place, 60);
  }, 3200);
})();

/* ---------- work grid ---------- */
(() => {
  const grid = $('#workGrid');
  grid.innerHTML = WORK.map((w, i) => `
    <article class="work reveal${w.big ? ' big' : ''}" data-cat="${w.cat}" style="transition-delay:${(i % 3) * .08}s">
      <div class="shot"><div class="bar"><i></i><i></i><i></i></div>
        <img src="assets/work/${w.id}.webp" alt="${esc(w.name)} homepage" loading="lazy">
        <span class="tag${w.client ? ' client' : ''}">${w.client ? 'Client · Live' : 'Live'}</span></div>
      <div class="info">
        <span class="type">${esc(w.type)}</span><h3>${esc(w.name)}</h3><p>${esc(w.desc)}</p>
        <div class="feats">${w.feats.map(f => `<span>${esc(f)}</span>`).join('')}</div>
        <span class="go">Visit live site <i class="fa-solid fa-arrow-up-right"></i></span>
      </div>
      <a class="cover" href="${w.url}" target="_blank" rel="noopener" aria-label="Open ${esc(w.name)} (new tab)"></a>
    </article>`).join('');
  // hovering a card scrolls the full-page screenshot inside its frame
  $$('.work .shot img', grid).forEach(img => {
    const set = () => { const frame = img.naturalWidth * 10 / 16; img.parentElement.parentElement.style.setProperty('--scroll', (-(1 - Math.min(1, frame / img.naturalHeight)) * 100).toFixed(1) + '%'); };
    img.complete ? set() : img.addEventListener('load', set);
  });
  $$('.filters button').forEach(b => b.addEventListener('click', () => {
    $$('.filters button').forEach(x => x.classList.toggle('on', x === b));
    const f = b.dataset.filter;
    $$('.work', grid).forEach(card => {
      const show = f === 'all' || card.dataset.cat.split(' ').includes(f);
      card.classList.toggle('hide', !show);
      if (show && !reduce) card.animate([{ opacity: 0, transform: 'translateY(20px) scale(.97)' }, { opacity: 1, transform: 'none' }], { duration: 500, easing: 'cubic-bezier(.2,.8,.2,1)' });
    });
  }));
})();

/* ---------- FAQ ---------- */
$('#faqList').innerHTML = FAQ.map(([q, a], i) => `<details class="reveal"${i === 0 ? ' open' : ''}><summary>${esc(q)}</summary><div class="ans">${esc(a)}</div></details>`).join('');

/* ---------- contact buttons ---------- */
(() => {
  const items = [];
  items.push(['mailto:' + CONTACT.email, 'fa-solid fa-envelope', 'Email', CONTACT.email, 'background:rgba(255,181,71,.14);color:#ffb547']);
  if (CONTACT.messenger) items.push([CONTACT.messenger, 'fa-brands fa-facebook-messenger', 'Messenger', 'Chat with me', 'background:rgba(0,132,255,.16);color:#4aa3ff']);
  if (CONTACT.whatsapp) items.push(['https://wa.me/' + CONTACT.whatsapp, 'fa-brands fa-whatsapp', 'WhatsApp', '+' + CONTACT.whatsapp, 'background:rgba(37,211,102,.14);color:#25d366']);
  if (CONTACT.phone) items.push(['tel:' + CONTACT.phone.replace(/[^\d+]/g, ''), 'fa-solid fa-phone', 'Call / Viber', CONTACT.phone, 'background:rgba(115,96,242,.18);color:#a99bff']);
  items.push([CONTACT.linkedin, 'fa-brands fa-linkedin-in', 'LinkedIn', 'Ralph Garcia', 'background:rgba(10,102,194,.2);color:#4ea1f3']);
  items.push(['#kapitan', 'fa-solid fa-comments', 'Ask Kapitan', 'Instant answers, 24/7', 'background:rgba(139,123,255,.16);color:#b7adff']);
  $('#cDirect').innerHTML = items.map(([href, ic, label, val, st]) => `<a href="${esc(href)}"${/^https?:/.test(href) ? ' target="_blank" rel="noopener"' : ''}${href === '#kapitan' ? ' data-kapitan' : ''}><span class="ci" style="${st}"><i class="${ic}"></i></span><span><small>${label}</small><b>${esc(val)}</b></span><i class="fa-solid fa-arrow-right arrow"></i></a>`).join('');
  $$('[data-contact="linkedin"]').forEach(a => a.href = CONTACT.linkedin);
})();

/* plan buttons pre-fill the form */
$$('[data-plan]').forEach(b => b.addEventListener('click', () => {
  const map = { 'Launch': 'A new website', 'Website + Kapitan': 'Website + Kapitan AI', 'Business System': 'A school / business system' };
  $('#cNeed').value = map[b.dataset.plan] || $('#cNeed').value;
}));
$('#cForm').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const subject = `Project inquiry: ${f.get('need')}${f.get('biz') ? ' for ' + f.get('biz') : ''}`;
  const body = `Hi Ralph,\n\nName: ${f.get('name')}\nBusiness / school: ${f.get('biz') || '-'}\nI need: ${f.get('need')}\nBudget: ${f.get('budget')}\n\n${f.get('msg') || ''}\n`;
  location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

/* ---------- Kapitan open buttons ---------- */
function openKapitan() {
  const host = document.getElementById('kapitan-root');
  const btn = host && host.shadowRoot && host.shadowRoot.querySelector('.launcher');
  if (btn) btn.click();
}
$('#openKapitan').addEventListener('click', openKapitan);
document.addEventListener('click', e => { const a = e.target.closest('[data-kapitan]'); if (a) { e.preventDefault(); openKapitan(); } });

/* ---------- pricing currency ---------- */
$$('.currency button').forEach(b => b.addEventListener('click', () => {
  const cur = b.dataset.cur, box = $('.currency');
  $$('button', box).forEach(x => x.classList.toggle('on', x === b));
  box.classList.toggle('usd', cur === 'usd');
  $$('.price b').forEach(el => { el.classList.remove('flip'); void el.offsetWidth; el.classList.add('flip'); setTimeout(() => el.textContent = (cur === 'usd' ? '$' : '₱') + el.dataset[cur], 220); });
  $$('.addons span[data-php]').forEach(el => el.textContent = el.dataset[cur]);
}));

/* ---------- demo tabs ---------- */
const started = {};
function startDemo(name) {
  if (name === 'chat') runChat();
  if (name === 'dash') runDash();
}
$$('.demo-tabs button').forEach(b => b.addEventListener('click', () => {
  $$('.demo-tabs button').forEach(x => x.classList.toggle('on', x === b));
  $$('.demo-panel').forEach(p => p.classList.toggle('on', p.dataset.panel === b.dataset.tab));
  startDemo(b.dataset.tab);
}));

/* kiosk */
(() => {
  const PEOPLE = { '1234': 'Ms. Ana Santos', '2468': 'Mr. Carlo Reyes', '1357': 'Ms. Bea Cruz' };
  const pad = $('#kPad'), dots = $$('#kDots i'), msg = $('#kMsg'), log = $('#kLog');
  const inside = {}; let pin = '';
  pad.innerHTML = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => `<button data-k="${n}">${n}</button>`).join('') + '<button class="k-fn" data-k="c">Clear</button><button data-k="0">0</button><button class="k-fn" data-k="b"><i class="fa-solid fa-delete-left"></i></button>';
  const tick = () => $('#kClock').textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  tick(); setInterval(tick, 1000);
  const show = () => dots.forEach((d, i) => d.classList.toggle('f', i < pin.length));
  const say = (t, cls) => { msg.textContent = t; msg.className = 'k-msg ' + (cls || ''); };
  const time = () => new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  function submit() {
    const who = PEOPLE[pin];
    if (!who) { say('PIN not found. Try 1234', 'bad'); const box = $('#kDots'); box.classList.remove('shake'); void box.offsetWidth; box.classList.add('shake'); }
    else {
      const empty = $('.empty', log); if (empty) empty.remove();
      const now = new Date(), mins = now.getHours() * 60 + now.getMinutes();
      let st, label;
      if (inside[pin]) { const worked = Math.max(1, Math.round((now - inside[pin]) / 60000)); delete inside[pin]; st = 'out'; label = 'Time out'; say(`Goodbye, ${who.split(' ').pop()}! Worked ${Math.floor(worked / 60)}h ${worked % 60}m`, 'ok'); }
      else { inside[pin] = now; const late = mins > 480 && mins < 720; st = late ? 'late' : 'in'; label = late ? 'Late' : 'Time in'; say(`Good ${now.getHours() < 12 ? 'morning' : now.getHours() < 18 ? 'afternoon' : 'evening'}, ${who.split(' ').pop()}! ${time()}`, late ? 'late' : 'ok'); }
      const ini = who.replace(/^(Ms|Mr)\. /, '').split(' ').map(s => s[0]).join('');
      log.insertAdjacentHTML('afterbegin', `<li><span class="av">${ini}</span><span><b>${who}</b><br><small style="color:var(--dim)">${time()}</small></span><span class="st ${st}">${label}</span></li>`);
    }
    pin = ''; setTimeout(show, 250);
    setTimeout(() => { if (!pin) say('Enter your PIN'); }, 3200);
  }
  pad.addEventListener('click', e => {
    const k = e.target.closest('button'); if (!k) return;
    const v = k.dataset.k;
    if (v === 'c') pin = ''; else if (v === 'b') pin = pin.slice(0, -1); else if (pin.length < 4) pin += v;
    show(); if (pin.length === 4) setTimeout(submit, 180);
  });
})();

/* chat demo: a school's Kapitan */
let chatRun = 0;
function runChat() {
  const run = ++chatRun, box = $('#chatDemo');
  const SCRIPT = [
    ['u', 'Hello po! Magkano tuition for Grade 1?'],
    ['a', 'Hi! 👋 Grade 1 tuition is <b>₱38,500 a year</b>, payable monthly or quarterly. Want the full fee list?'],
    ['u', 'Kailan po enrollment?'],
    ['a', 'Enrollment for SY 2027–2028 opens <b>March 1</b>. You can reserve a slot online, no need to line up! 📝'],
    ['u', 'Where are you located?'],
    ['a', '📍 123 Mabini St., Mandaluyong City. Open Mon–Sat, 7 AM to 5 PM. Here is the map →'],
  ];
  box.innerHTML = '<div class="msg a" style="font-size:.72rem;color:var(--dim);align-self:center;background:none;border:0">Example: Kapitan for a school</div>';
  if (reduce || still) { box.innerHTML += SCRIPT.map(([w, t]) => `<div class="msg ${w}">${t}</div>`).join(''); return; }
  let i = 0;
  (function next() {
    if (run !== chatRun) return;
    if (i >= SCRIPT.length) { setTimeout(() => { if (run === chatRun && $('[data-panel="chat"]').classList.contains('on')) runChat(); }, 5000); return; }
    const [who, text] = SCRIPT[i++];
    const add = () => { if (run !== chatRun) return; box.insertAdjacentHTML('beforeend', `<div class="msg ${who}">${text}</div>`); while (box.children.length > 6) box.children[1].remove(); setTimeout(next, who === 'u' ? 500 : 1500); };
    if (who === 'a') { box.insertAdjacentHTML('beforeend', '<div class="msg a typing"><i></i><i></i><i></i></div>'); setTimeout(() => { if (run !== chatRun) return; const t = $('.typing', box); t && t.remove(); add(); }, 1100); }
    else setTimeout(add, 700);
  })();
}

/* dashboard demo */
let dashRun = 0;
function runDash() {
  const run = ++dashRun;
  const vals = [42, 38, 51, 47, 55, 63, 58, 66, 61, 72, 79, 96];
  const bars = $('#dBars'); bars.innerHTML = vals.map(() => '<i></i>').join('');
  const path = $('#dLine'); path.classList.remove('draw');
  const pts = vals.map((v, i) => `${(i + .5) * 300 / vals.length},${100 - (v * .75 + 10)}`);
  path.setAttribute('d', 'M' + pts.join(' L'));
  const st = $('#dStatus'); st.textContent = 'Reading…';
  const ins = $('#dInsight span'); ins.textContent = '';
  $$('.d-kpis b').forEach(b => b.textContent = (b.dataset.prefix || '') + '0');
  setTimeout(() => {
    if (run !== dashRun) return;
    st.textContent = '✓ 9,614 rows';
    $$('i', bars).forEach((b, i) => setTimeout(() => b.style.height = vals[i] + '%', i * 60));
    void path.getBoundingClientRect(); path.classList.add('draw');
    $$('.d-kpis b').forEach(b => countTo(b, +b.dataset.to, b.dataset.prefix || ''));
    const text = 'December sales are your biggest month, and iced drinks grew 32% since summer. Tip: restock oat milk on Thursdays — it sold out 3 of the last 4 Fridays.';
    let k = 0; (function type() { if (run !== dashRun) return; ins.textContent = text.slice(0, ++k); if (k < text.length) setTimeout(type, 18); })();
  }, reduce || still ? 0 : 700);
}
$('#reDash').addEventListener('click', runDash);

function countTo(el, end, pre = '', suf = '') {
  if (reduce || still) { el.textContent = pre + end.toLocaleString() + suf; return; }
  const t0 = performance.now();
  (function step(t) { const k = Math.min(1, (t - t0) / 1500); el.textContent = pre + Math.round(end * (1 - Math.pow(1 - k, 3))).toLocaleString() + suf; if (k < 1) requestAnimationFrame(step); })(t0);
}

/* ---------- headings rise word by word ---------- */
$$('.sec-head h2').forEach(h => {
  h.classList.add('split');
  const wrap = node => [...node.childNodes].forEach(ch => {
    if (ch.nodeType === 3) {
      const frag = document.createDocumentFragment();
      ch.textContent.split(/(\s+)/).forEach(part => {
        if (!part) return;
        if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
        const w = document.createElement('span'); w.className = 'w'; const s = document.createElement('span'); s.textContent = part; w.appendChild(s); frag.appendChild(w);
      });
      node.replaceChild(frag, ch);
    } else if (ch.nodeType === 1) wrap(ch);
  });
  wrap(h);
  $$('.w > span', h).forEach((s, i) => s.style.transitionDelay = (.06 * i + .1) + 's');
});

/* ---------- reveal on scroll ---------- */
const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (!en.isIntersecting) return;
  en.target.classList.add('in'); io.unobserve(en.target);
  if (en.target.classList.contains('demo-panels')) startDemo($('.demo-tabs .on').dataset.tab);
}), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
$$('.reveal').forEach(el => still ? el.classList.add('in') : io.observe(el));
if (still) startDemo('chat'), startDemo('dash');

/* hero numbers count up once the intro finishes */
setTimeout(() => $$('.hero-proof b[data-count]').forEach(b => { const n = +b.dataset.count; if (n) countTo(b, n, b.dataset.prefix || '', b.dataset.suffix || ''); }), still || reduce ? 0 : 2300);

/* active nav link */
const secIO = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) $$('a', links).forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
$$('main section[id]').forEach(s => secIO.observe(s));

/* ---------- scroll effects ---------- */
const progress = $('#progress'), stackEl = $('#stack'), steps = $('#steps'), fill = $('#stepsFill'), stepItems = $$('#steps li');
let ticking = false;
function onScroll() {
  const y = scrollY;
  nav.classList.toggle('scrolled', y > 30);
  progress.style.transform = `scaleX(${Math.min(1, y / Math.max(1, document.documentElement.scrollHeight - innerHeight))})`;
  if (!reduce && y < innerHeight * 1.2) {
    const k = y / innerHeight;
    stackEl.style.transform = `rotateY(${-14 + k * 16}deg) rotateX(${6 - k * 4}deg) translateY(${k * 60}px)`;
  }
  const r = steps.getBoundingClientRect();
  const p = Math.max(0, Math.min(1, (innerHeight * .6 - r.top) / r.height));
  fill.style.transform = `scaleY(${p})`;
  stepItems.forEach(li => li.classList.toggle('lit', li.getBoundingClientRect().top < innerHeight * .6));
  ticking = false;
}
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();
