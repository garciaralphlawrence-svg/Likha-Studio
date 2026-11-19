/* School Suite demo: everything lives in localStorage, seeded with realistic sample data. */
(() => {
  const KEY = 'likha-school-v1';
  const LATE_AFTER = 8 * 60; // 8:00 AM
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const pad = n => String(n).padStart(2, '0');
  const ymd = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const toMin = t => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
  const hm = m => `${pad(Math.floor(m / 60))}:${pad(m % 60)}`;
  const nice = t => { if (!t) return '—'; const m = toMin(t), h = Math.floor(m / 60); return `${(h % 12) || 12}:${pad(m % 60)} ${h < 12 ? 'AM' : 'PM'}`; };
  const nowMin = () => { const d = new Date(); return d.getHours() * 60 + d.getMinutes(); };
  const initials = n => n.replace(/^(Ms|Mr|Mrs|Dr)\.?\s+/, '').split(/\s+/).map(s => s[0]).slice(0, 2).join('').toUpperCase();
  const MON = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const PEOPLE = [
    ['Ms. Ana Santos', 'Primary', '1234'], ['Mr. Carlo Reyes', 'Intermediate', '2468'], ['Ms. Bea Cruz', 'Preschool', '1357'],
    ['Mrs. Liza Domingo', 'Primary', '4821'], ['Mr. Paolo Mendoza', 'Junior High', '5932'], ['Ms. Joy Villanueva', 'Junior High', '6043'],
    ['Mr. Mark Bautista', 'Intermediate', '7154'], ['Ms. Kristine Ramos', 'Preschool', '8265'], ['Mrs. Grace Navarro', 'Primary', '9376'],
    ['Mr. Jerome Castillo', 'Junior High', '1488'], ['Ms. Rica Aquino', 'Intermediate', '2599'], ['Mr. Dennis Flores', 'Admin', '3610'],
    ['Ms. Camille Torres', 'Junior High', '4721'], ['Mrs. Marites Garcia', 'Admin', '5832'], ['Mr. Noel Pascual', 'Intermediate', '6943'],
    ['Ms. Hazel Lim', 'Preschool', '7050'],
  ];

  function rng(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

  function seed() {
    const r = rng(20270301);
    const people = PEOPLE.map(([name, dept, pin], i) => ({ id: 'p' + i, name, dept, pin, habit: 440 + r() * 30, spread: 8 + r() * 14 }));
    const records = [];
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const now = nowMin();
    for (let back = 60; back >= 0; back--) {
      const d = new Date(today); d.setDate(d.getDate() - back);
      const isToday = back === 0;
      if (!isToday && (d.getDay() === 0 || d.getDay() === 6)) continue;
      const date = ymd(d);
      people.forEach((p, i) => {
        if (isToday && i < 3) return; // leave the demo PIN people for the visitor to tap in
        const roll = r();
        if (roll < .035) { if (!isToday) records.push({ date, pid: p.id, in: null, out: null, status: 'Absent' }); return; }
        const tin = Math.round(p.habit + (r() - .45) * p.spread * 2 + (r() < .07 ? 15 + r() * 25 : 0));
        const tout = Math.round(16 * 60 + 25 + r() * 70);
        if (isToday && tin > now) return;
        records.push({ date, pid: p.id, in: hm(tin), out: isToday && tout > now ? null : hm(tout), status: tin > LATE_AFTER ? 'Late' : 'On time' });
      });
    }
    people.forEach(p => { delete p.habit; delete p.spread; });
    return { people, records, seededOn: ymd(today), v: 1 };
  }

  let db;
  try { db = JSON.parse(localStorage.getItem(KEY)); } catch (e) { db = null; }
  if (!db || db.seededOn !== ymd(new Date())) db = seed();
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) { /* private mode */ } };
  save();
  const person = id => db.people.find(p => p.id === id);
  const TODAY = () => ymd(new Date());

  /* ---------- toast ---------- */
  let tt;
  function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('show'), 2600); }

  /* ---------- navigation ---------- */
  const TITLES = { dash: 'Dashboard', kiosk: 'Attendance kiosk', records: 'Attendance records', people: 'Teachers & staff', reports: 'Monthly report' };
  function go(view) {
    $$('#menu button').forEach(b => b.classList.toggle('on', b.dataset.view === view));
    $$('.view').forEach(v => v.classList.toggle('on', v.dataset.view === view));
    $('#viewTitle').textContent = TITLES[view];
    $('#side').classList.remove('open');
    render(view);
    scrollTo({ top: 0, behavior: 'smooth' });
  }
  $$('#menu button').forEach(b => b.addEventListener('click', () => go(b.dataset.view)));
  document.addEventListener('click', e => { const g = e.target.closest('[data-go]'); if (g) go(g.dataset.go); });
  $('#menuBtn').addEventListener('click', e => { e.stopPropagation(); $('#side').classList.toggle('open'); });
  document.addEventListener('click', e => { if (!e.target.closest('#side')) $('#side').classList.remove('open'); });
  $('#today').textContent = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  $('#resetDemo').addEventListener('click', () => { db = seed(); save(); render(currentView()); toast('Demo data reset'); });
  const currentView = () => $('.view.on').dataset.view;

  function render(view) { ({ dash: renderDash, kiosk: renderKiosk, records: renderRecords, people: renderPeople, reports: renderReports })[view](); }

  /* ---------- dashboard ---------- */
  function countUp(el, end, suf = '') {
    const t0 = performance.now();
    (function step(t) { const k = Math.min(1, (t - t0) / 900); el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suf; if (k < 1) requestAnimationFrame(step); })(t0);
  }
  function renderDash() {
    const today = TODAY(), N = db.people.length;
    const todays = db.records.filter(r => r.date === today && r.in);
    const late = todays.filter(r => r.status === 'Late').length;
    countUp($('#kPresent'), todays.length); $('#kPresentSub').textContent = `of ${N} teachers & staff`;
    countUp($('#kLate'), late); countUp($('#kAbsent'), N - todays.length);
    const since = new Date(); since.setDate(since.getDate() - 30); const s = ymd(since);
    const month = db.records.filter(r => r.date >= s && r.date < today);
    const present = month.filter(r => r.in), onTime = present.filter(r => r.status === 'On time');
    const rate = present.length ? Math.round(onTime.length / present.length * 100) : 0;
    countUp($('#kRate'), rate, '%'); $('#kRateSub').textContent = `${present.length - onTime.length} late arrivals in 30 days`;

    // trend: last 15 school days before today
    const days = [...new Set(db.records.map(r => r.date))].filter(d => d < today).sort().slice(-15);
    $('#trend').innerHTML = days.map(d => {
      const rs = db.records.filter(r => r.date === d);
      const on = rs.filter(r => r.status === 'On time').length, lt = rs.filter(r => r.status === 'Late').length, ab = N - on - lt;
      const dd = new Date(d + 'T00:00');
      return `<div class="col" title="${d}: ${on} on time, ${lt} late, ${ab} absent"><div class="stackbar"><i style="background:var(--teal)" data-h="${on / N * 100}"></i><i style="background:var(--sun)" data-h="${lt / N * 100}"></i><i style="background:var(--coral)" data-h="${ab / N * 100}"></i></div><small>${dd.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</small></div>`;
    }).join('');
    requestAnimationFrame(() => requestAnimationFrame(() => $$('#trend i').forEach((b, i) => setTimeout(() => b.style.height = b.dataset.h + '%', i * 12))));

    // donut
    const onT = todays.length - late, notIn = N - todays.length;
    const a = onT / N * 100, b = a + late / N * 100;
    $('#donut').style.background = `conic-gradient(var(--teal) 0 ${a}%, var(--sun) ${a}% ${b}%, rgba(255,255,255,.07) ${b}% 100%)`;
    $('#donutPct').textContent = Math.round(todays.length / N * 100) + '%';
    $('#donutLegend').innerHTML = [['On time', onT, 'var(--teal)'], ['Late', late, 'var(--sun)'], ['Not yet in', notIn, 'rgba(255,255,255,.2)']]
      .map(([l, n, c]) => `<li><i style="background:${c}"></i>${l}<b>${n}</b></li>`).join('');

    // feed
    const feed = db.records.filter(r => r.date === today && r.in).flatMap(r => [
      { r, t: r.in, kind: r.status === 'Late' ? 'late' : 'on', label: r.status === 'Late' ? 'Late' : 'Time in' },
      ...(r.out ? [{ r, t: r.out, kind: 'out', label: 'Time out' }] : []),
    ]).sort((x, y) => toMin(y.t) - toMin(x.t));
    $('#feed').innerHTML = feed.length ? feed.slice(0, 30).map((f, i) => { const p = person(f.r.pid); return `<li class="${i === 0 && f.r.fresh ? 'new' : ''}"><span class="av">${initials(p.name)}</span><span><b>${esc(p.name)}</b><small>${esc(p.dept)}</small></span><span class="pill ${f.kind}">${f.label}</span><span class="t">${nice(f.t)}</span></li>`; }).join('')
      : '<li>No time-ins yet today. Open the kiosk and try PIN 1234.</li>';
    db.records.forEach(r => delete r.fresh);

    // most lates this month
    const ym = today.slice(0, 7);
    const counts = db.people.map(p => ({ p, n: db.records.filter(r => r.pid === p.id && r.date.startsWith(ym) && r.status === 'Late').length })).filter(x => x.n).sort((x, y) => y.n - x.n).slice(0, 6);
    const max = Math.max(1, ...counts.map(c => c.n));
    $('#rank').innerHTML = counts.length ? counts.map(c => `<li><span class="av">${initials(c.p.name)}</span><span><b>${esc(c.p.name)}</b><small>${esc(c.p.dept)}</small></span><span class="bar"><i style="width:${c.n / max * 100}%"></i></span><span class="n">${c.n}×</span></li>`).join('') : '<li>No lates this month 🎉</li>';
  }

  /* ---------- kiosk ---------- */
  let pin = '';
  $('#kPad').innerHTML = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => `<button data-k="${n}">${n}</button>`).join('') + '<button class="fn" data-k="c">Clear</button><button data-k="0">0</button><button class="fn" data-k="b" aria-label="Delete"><i class="fa-solid fa-delete-left"></i></button>';
  const dots = () => $$('#kDots i').forEach((d, i) => d.classList.toggle('f', i < pin.length));
  const say = (t, c) => { const m = $('#kMsg'); m.textContent = t; m.className = 'k-msg ' + (c || ''); };
  function clock() {
    const d = new Date();
    $('#kTime').textContent = d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    $('#kDate').textContent = d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  }
  clock(); setInterval(clock, 1000);
  function punch() {
    const p = db.people.find(x => x.pin === pin);
    if (!p) { say('PIN not found. Please try again.', 'bad'); const k = $('#kDots'); k.classList.remove('shake'); void k.offsetWidth; k.classList.add('shake'); }
    else {
      const today = TODAY(), t = hm(nowMin()), first = p.name.replace(/^(Ms|Mr|Mrs)\.\s+/, '').split(' ')[0];
      let rec = db.records.find(r => r.date === today && r.pid === p.id);
      if (!rec || !rec.in) {
        const status = nowMin() > LATE_AFTER && nowMin() < 12 * 60 ? 'Late' : 'On time';
        if (!rec) { rec = { date: today, pid: p.id }; db.records.push(rec); }
        Object.assign(rec, { in: t, out: null, status, fresh: true });
        say(`Welcome, ${first}! Timed in at ${nice(t)}${status === 'Late' ? ' (late)' : ''}`, status === 'Late' ? 'late' : 'ok');
        toast(`✓ ${p.name} timed in`);
      } else if (!rec.out) {
        rec.out = t; rec.fresh = true;
        const mins = Math.max(0, toMin(t) - toMin(rec.in));
        say(`Goodbye, ${first}! ${Math.floor(mins / 60)}h ${mins % 60}m today.`, 'ok');
        toast(`✓ ${p.name} timed out`);
      } else say(`${first}, you already timed out today.`, 'late');
      save(); renderPins();
    }
    pin = ''; setTimeout(dots, 250);
    setTimeout(() => { if (!pin) say('Enter your 4-digit PIN'); }, 3500);
  }
  $('#kPad').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    const k = b.dataset.k;
    if (k === 'c') pin = ''; else if (k === 'b') pin = pin.slice(0, -1); else if (pin.length < 4) pin += k;
    dots(); if (pin.length === 4) setTimeout(punch, 160);
  });
  document.addEventListener('keydown', e => {
    if (currentView() !== 'kiosk' || /INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) return;
    if (/^\d$/.test(e.key) && pin.length < 4) { pin += e.key; dots(); if (pin.length === 4) setTimeout(punch, 160); }
    if (e.key === 'Backspace') { pin = pin.slice(0, -1); dots(); }
  });
  function renderPins() {
    const today = TODAY();
    $('#pinList').innerHTML = db.people.slice(0, 6).map(p => {
      const r = db.records.find(x => x.date === today && x.pid === p.id);
      const st = !r || !r.in ? '<span class="pill abs state">Not in</span>' : !r.out ? '<span class="pill on state">In</span>' : '<span class="pill out state">Out</span>';
      return `<li data-pin="${p.pin}"><span class="av">${initials(p.name)}</span><span><b>${esc(p.name)}</b><br>${st}</span><code>${p.pin}</code></li>`;
    }).join('');
  }
  $('#pinList').addEventListener('click', e => {
    const li = e.target.closest('li'); if (!li) return;
    pin = ''; [...li.dataset.pin].forEach((d, i) => setTimeout(() => { pin += d; dots(); if (pin.length === 4) setTimeout(punch, 200); }, i * 140));
  });
  function renderKiosk() { renderPins(); }

  /* ---------- records ---------- */
  const fFrom = $('#fFrom'), fTo = $('#fTo'), fWho = $('#fWho'), fStatus = $('#fStatus');
  function fillWho() { fWho.innerHTML = '<option value="">Everyone</option>' + db.people.map(p => `<option value="${p.id}">${esc(p.name)}</option>`).join(''); }
  function filtered() {
    return db.records.filter(r => (!fFrom.value || r.date >= fFrom.value) && (!fTo.value || r.date <= fTo.value) && (!fWho.value || r.pid === fWho.value) && (!fStatus.value || r.status === fStatus.value) && (r.in || r.status === 'Absent'))
      .sort((a, b) => b.date.localeCompare(a.date) || (a.in || '99').localeCompare(b.in || '99'));
  }
  const hours = r => r.in && r.out ? (toMin(r.out) - toMin(r.in)) / 60 : 0;
  const pillClass = s => s === 'Late' ? 'late' : s === 'Absent' ? 'abs' : 'on';
  function renderRecords() {
    if (fWho.options.length !== db.people.length + 1) fillWho();
    if (!fFrom.value) { const d = new Date(); d.setDate(d.getDate() - 14); fFrom.value = ymd(d); fTo.value = TODAY(); }
    const rows = filtered();
    $('#recBody').innerHTML = rows.slice(0, 400).map(r => { const p = person(r.pid); return `<tr><td class="mono">${r.date}</td><td><b>${esc(p.name)}</b></td><td>${esc(p.dept)}</td><td class="mono">${nice(r.in)}</td><td class="mono">${nice(r.out)}</td><td class="mono">${hours(r) ? hours(r).toFixed(2) : '—'}</td><td><span class="pill ${pillClass(r.status)}">${r.status}</span></td></tr>`; }).join('') || '<tr><td colspan="7">No records match these filters.</td></tr>';
    $('#recCount').textContent = `${rows.length} record${rows.length === 1 ? '' : 's'}`;
  }
  [fFrom, fTo, fWho, fStatus].forEach(el => el.addEventListener('change', renderRecords));

  function download(name, rows) {
    const csv = '﻿' + rows.map(r => r.map(v => /[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : v).join(',')).join('\r\n');
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' })); a.download = name; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000); toast('✓ Downloaded ' + name);
  }
  $('#exportRecords').addEventListener('click', () => download(`attendance_${fFrom.value || 'all'}_to_${fTo.value || 'today'}.csv`,
    [['Date', 'Teacher', 'Department', 'Time in', 'Time out', 'Hours', 'Status'], ...filtered().map(r => { const p = person(r.pid); return [r.date, p.name, p.dept, nice(r.in), nice(r.out), hours(r) ? hours(r).toFixed(2) : '', r.status]; })]));

  /* ---------- people ---------- */
  function renderPeople() {
    const q = $('#pSearch').value.trim().toLowerCase();
    $('#people').innerHTML = db.people.filter(p => !q || (p.name + ' ' + p.dept).toLowerCase().includes(q))
      .map(p => `<div class="person"><span class="av">${initials(p.name)}</span><div><b>${esc(p.name)}</b><small>${esc(p.dept)}</small></div><span class="pin">PIN<code>${p.pin}</code></span></div>`).join('') || '<p>No one matches that search.</p>';
  }
  $('#pSearch').addEventListener('input', renderPeople);
  $('#addPerson').addEventListener('click', () => { $('#modal').hidden = false; $('#pinErr').textContent = ''; $('#personForm').reset(); setTimeout(() => $('#personForm [name=name]').focus(), 50); });
  $('#cancelPerson').addEventListener('click', () => $('#modal').hidden = true);
  $('#modal').addEventListener('click', e => { if (e.target.id === 'modal') $('#modal').hidden = true; });
  $('#personForm').addEventListener('submit', e => {
    e.preventDefault();
    const f = new FormData(e.target), pinV = f.get('pin');
    if (db.people.some(p => p.pin === pinV)) { $('#pinErr').textContent = 'That PIN is already used. Choose another.'; return; }
    db.people.push({ id: 'p' + Date.now(), name: f.get('name').trim(), dept: f.get('dept'), pin: pinV });
    save(); $('#modal').hidden = true; renderPeople(); toast(`✓ ${f.get('name')} added. They can use PIN ${pinV} at the kiosk.`);
  });

  /* ---------- monthly report ---------- */
  function months() { return [...new Set(db.records.map(r => r.date.slice(0, 7)))].sort().reverse(); }
  function reportRows(ym) {
    return db.people.map(p => {
      const rs = db.records.filter(r => r.pid === p.id && r.date.startsWith(ym));
      const pres = rs.filter(r => r.in), lates = rs.filter(r => r.status === 'Late').length, abs = rs.filter(r => r.status === 'Absent').length;
      const hrs = pres.reduce((s, r) => s + hours(r), 0);
      const avg = pres.length ? Math.round(pres.reduce((s, r) => s + toMin(r.in), 0) / pres.length) : null;
      return { p, days: pres.length, lates, abs, hrs, avg: avg === null ? '—' : nice(hm(avg)), rate: pres.length ? Math.round((pres.length - lates) / pres.length * 100) : 0 };
    });
  }
  function renderReports() {
    const sel = $('#rMonth'), ms = months();
    if (sel.options.length !== ms.length) sel.innerHTML = ms.map(m => `<option value="${m}">${MON[+m.slice(5) - 1]} ${m.slice(0, 4)}</option>`).join('');
    $('#repBody').innerHTML = reportRows(sel.value).map(x => `<tr><td><b>${esc(x.p.name)}</b><br><small style="color:var(--dim)">${esc(x.p.dept)}</small></td><td class="mono">${x.days}</td><td class="mono">${x.lates}</td><td class="mono">${x.abs}</td><td class="mono">${x.hrs.toFixed(1)}</td><td class="mono">${x.avg}</td><td><span class="rate"><span class="bar"><i style="width:${x.rate}%"></i></span>${x.rate}%</span></td></tr>`).join('');
  }
  $('#rMonth').addEventListener('change', renderReports);
  $('#exportReport').addEventListener('click', () => {
    const ym = $('#rMonth').value;
    download(`monthly_report_${ym}.csv`, [['Teacher', 'Department', 'Days present', 'Lates', 'Absences', 'Total hours', 'Avg time in', 'On-time rate'], ...reportRows(ym).map(x => [x.p.name, x.p.dept, x.days, x.lates, x.abs, x.hrs.toFixed(1), x.avg, x.rate + '%'])]);
  });

  /* start on the view in the URL hash (e.g. school.html#kiosk) */
  const start = location.hash.slice(1);
  if (TITLES[start]) go(start); else renderDash();
  setInterval(() => { if (currentView() === 'dash') renderDash(); }, 60000);
})();
