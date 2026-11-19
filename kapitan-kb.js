/* Kapitan knowledge for Likha Studio (data-site="likha").
   Each entry: q = ways people ask it (English / Filipino / Taglish), a = the answer (markdown links OK). */
(function () {
  var home = location.href.replace(/[#?].*$/, '').replace(/[^\/]*$/, '').replace(/demo\/$/, '');
  var EMAIL = 'rlawrencegarcia03@gmail.com';
  var faq = [];
  function add(q, a) { faq.push({ site: 'likha', q: q, a: a }); }

  // first entry = overview
  add(['what is likha studio', 'who are you', 'about likha', 'what do you do', 'ano ang likha', 'ano ginagawa nyo', 'services', 'what services do you offer', 'anong serbisyo'],
    '**Likha Studio** builds 4 things:\n- **Websites that sell** (business, personal brand, event pages)\n- **Business systems** (school attendance kiosk, logins, records, Excel import/export)\n- **Kapitan AI assistant** — like me! — answering your customers 24/7\n- **Dashboards & data** from your Excel files\n[See live projects](' + home + '#work) · [Pricing](' + home + '#pricing)');

  add(['how much', 'price', 'pricing', 'magkano', 'magkano website', 'how much is a website', 'cost', 'rates', 'packages', 'presyo', 'quotation', 'quote'],
    'Packages (starting prices):\n- **Launch** — ₱25,000 / $500 (about 1 week)\n- **Website + Kapitan** ⭐ — ₱45,000 / $800 (about 2 weeks)\n- **Business System** — from ₱60,000 / $1,200 (3–6 weeks)\nAdd-ons: Care plan ₱2,500/mo · Event page ₱8,000 · Kapitan for an existing site ₱1,500/mo.\n[Get a free quote](' + home + '#contact)');

  add(['launch package', 'cheapest', 'basic website', 'simple website', 'one page website', 'pinakamura', 'small business website'],
    '**Launch — from ₱25,000 / $500:** up to 5 sections, mobile-first, motion design, your own domain connected, free hosting setup and 2 rounds of revisions. Ready in about 1 week.');

  add(['website with chatbot', 'website and kapitan', 'most popular', 'website + kapitan', 'chatbot price', 'website with ai'],
    '**Website + Kapitan — from ₱45,000 / $800** (most popular): everything in Launch plus multiple pages, Kapitan AI trained on your business, an event/menu/booking section and 1 month of free updates. About 2 weeks.');

  add(['school system', 'attendance system', 'attendance kiosk', 'system for school', 'business system', 'payroll', 'enrollment system', 'records system', 'clinic system', 'may system ba kayo', 'pin attendance'],
    '**Business System — from ₱60,000 / $1,200:** logins for admin, staff and parents; PIN attendance kiosk; records or bookings; dashboards and reports; Excel import & export; staff training + 1 month support. 3–6 weeks.\nTry the [School Suite demo](' + home + 'demo/school.html) — PIN 1234.');

  add(['kapitan', 'chatbot', 'ai assistant', 'what is kapitan', 'chat bot', 'ai chat', 'does kapitan need chatgpt', 'monthly ai fee', 'may bayad ba ang ai'],
    "I'm **Kapitan** 👋 an assistant that learns a business's prices, schedule, location and contacts, then answers customers instantly in English, Filipino or Taglish — even at 2 AM. No AI subscription needed. Already on an existing site? Kapitan add-on is **₱1,500/mo ($30)**.");

  add(['hosting', 'monthly fee', 'monthly cost', 'may monthly ba', 'hosting fee', 'server cost', 'buwanang bayad'],
    'Most websites run on **free hosting — ₱0 a month**. You only pay for your domain (about ₱900 / $15 a year). Systems with logins and a database may need a small hosting fee, always quoted upfront.');

  add(['domain', 'own domain', '.com', 'website name', 'dot com'],
    'Your domain (like yourbusiness.com) is about **₱900 / $15 a year**, registered in **your name**. Setup is included in every package.');

  add(['how long', 'timeline', 'gaano katagal', 'kailan matatapos', 'turnaround', 'how many days', 'ilang araw'],
    'Launch website: about **1 week**. Website + Kapitan: about **2 weeks**. Business system: **3–6 weeks**. You see a working preview within the first few days.');

  add(['payment', 'how to pay', 'downpayment', 'down payment', 'gcash', 'paypal', 'bank transfer', 'paano magbayad', 'installment'],
    '**50% to start, 50% at launch.** Bank transfer, GCash, or PayPal for clients abroad.');

  add(['own the website', 'who owns', 'ownership', 'akin ba', 'can i move'],
    'Yes, it is **all yours** — the domain, the site and the content. You can take everything with you anytime.');

  add(['update', 'maintenance', 'care plan', 'changes after launch', 'can i edit', 'edit myself', 'magpabago', 'support'],
    '**Care plan — ₱2,500/mo ($45):** updates, new events, fixes — just send the changes. Or edit it yourself: content lives in one simple file and I show you how.');

  add(['event page', 'show page', 'ticket page', 'concert', 'countdown page'],
    '**Event / show page — ₱8,000 / $150:** countdown, ticket info, poster and venue map. See it on [Joseph Gelito\'s site](https://garciaralphlawrence-svg.github.io/Comedian-Demo/#event).');

  add(['portfolio', 'examples', 'sample work', 'previous work', 'projects', 'past projects', 'who are your clients', 'your clients', 'halimbawa', 'mga gawa'],
    'All live right now:\n- [Future Minds Academy](https://futuremindsacademyph.com/) — school site + system\n- [Joseph Gelito](https://garciaralphlawrence-svg.github.io/Comedian-Demo/) — performer site\n- [KMM Travel](https://garciaralphlawrence-svg.github.io/KMM/) · [IslaKeys](https://garciaralphlawrence-svg.github.io/IslaKeys/) · [BizBuddy](https://garciaralphlawrence-svg.github.io/BizBuddy/)\n- [CareSight](https://garciaralphlawrence-svg.github.io/CareSight/) · [AI Analytics Studio](https://garciaralphlawrence-svg.github.io/AI-Analytics-Studio/) · [SPC Studio](https://garciaralphlawrence-svg.github.io/SPC-Studio/)');

  add(['dashboard', 'excel', 'data analysis', 'analytics', 'reports', 'spreadsheet', 'forecast'],
    'Likha turns Excel files into dashboards, forecasts and plain-English reports. Try [AI Analytics Studio](https://garciaralphlawrence-svg.github.io/AI-Analytics-Studio/) — drop in a spreadsheet and see.');

  add(['contact', 'email', 'how to reach', 'talk to ralph', 'paano kayo makontak', 'message', 'hire', 'inquire', 'book a call', 'free call'],
    'Email **' + EMAIL + '** or use the [contact form](' + home + '#contact) — the first call is free. You can also reach Ralph on [LinkedIn](https://www.linkedin.com/in/ralph-garcia-b57814401).');

  add(['who is ralph', 'founder', 'developer', 'who will build', 'sino gagawa'],
    '**Ralph Garcia** is the developer and data analyst behind Likha Studio. You talk directly to the person who designs and writes your code. [Full portfolio](https://garciaralphlawrence-svg.github.io/Ralph-Portfolio/)');

  add(['us clients', 'work with us clients', 'do you work with clients abroad', 'clients in the us', 'american clients', 'abroad', 'usa', 'america', 'outside philippines', 'dollar', 'usd', 'international'],
    'Yes! Likha works with clients in the **Philippines and the US**, quotes in PHP or USD, and meets over Zoom, Google Meet or Messenger.');

  add(['what do you need from me', 'requirements', 'what to prepare', 'ano kailangan'],
    'Just your logo, a few photos, your prices or services and your contact details. No logo or photos yet? Likha can help with that too.');

  add(['revisions', 'dont like the design', 'changes', 'pwede ipabago'],
    'You see a working preview before the full build, and revisions are included in every package.');

  window.KAPITAN_KB = {
    v: 2,
    sites: {
      likha: {
        name: 'Likha Studio',
        url: home,
        greeting: "Hi! I'm Kapitan 👋 Likha Studio's assistant. Ask me about prices, timelines or what we build — English or Taglish!",
        suggestions: ['How much is a website?', 'Magkano ang school system?', 'Do I pay monthly for hosting?', 'How do I contact Ralph?'],
        aliases: ['likha', 'likha studio', 'ralph']
      }
    },
    faq: faq,
    chunks: []
  };
})();
