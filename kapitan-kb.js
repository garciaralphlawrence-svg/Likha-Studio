/* Kapitan knowledge for Likha Studio (data-site="likha").
   Each entry: q = ways people ask it (English / Filipino / Taglish), a = the answer (markdown links OK).
   Kapitan only answers from these entries; anything else gets a polite "I can only answer about Likha Studio". */
(function () {
  var home = location.href.replace(/[#?].*$/, '').replace(/[^\/]*$/, '').replace(/demo\/$/, '');
  var G = 'https://garciaralphlawrence-svg.github.io/';
  var EMAIL = 'rlawrencegarcia03@gmail.com';
  var faq = [];
  function add(q, a) { faq.push({ site: 'likha', q: q, a: a }); }

  // first entry = overview
  add(['what is likha studio', 'who are you', 'about likha', 'what do you do', 'ano ang likha', 'ano ginagawa nyo', 'services', 'what services do you offer', 'anong serbisyo', 'what can you build'],
    '**Likha Studio** builds:\n- **Websites & web apps** (business sites, event pages, booking forms, portals)\n- **Business systems** (attendance, documents, KPIs, QR feedback)\n- **Work automation** (Excel, receipts, email reports, bulk PDFs)\n- **Dashboards & data** (reports, forecasting)\n- **Chat assistants (chatbots)** with your own name and branding\n[See all services](' + home + '#services)');

  add(['how much', 'price', 'pricing', 'magkano', 'magkano website', 'how much is a website', 'cost', 'rates', 'packages', 'presyo', 'quotation', 'quote', 'budget'],
    'Every project is quoted based on what you need, and the quote is **free**. Tell Ralph what you want to build in the [contact form](' + home + '#contact) or email **' + EMAIL + '**.');

  add(['automation', 'automate', 'what can you automate', 'work automation', 'excel automation', 'google sheets', 'repetitive tasks', 'save time', 'ma-automate', 'automatic'],
    '**Work automation** Likha can build:\n- Excel and Google Sheets automation\n- Receipts and invoices (like [Resibo Maker](' + G + 'AI-Analytics-Studio/receipts/))\n- Automatic email reports\n- Certificates, IDs and PDFs in bulk\n- Data entry, cleaning and file sorting');

  add(['receipt', 'resibo', 'resibo maker', 'invoice', 'billing', 'official receipt', 'vat'],
    '**Resibo Maker:** type a sale in English or Taglish and it makes the receipt, with VAT and senior/PWD discounts computed. [Try it](' + G + 'AI-Analytics-Studio/receipts/). Likha can build a receipt or invoice tool for your business too.');

  add(['email report', 'automatic report', 'weekly report', 'monthly report', 'report automation'],
    'Likha can set up **automatic reports**: your data is collected, summarized and sent by email on a schedule, e.g. every Monday morning.');

  add(['certificates', 'ids', 'bulk pdf', 'generate pdf', 'mail merge', 'certificate generator'],
    'Likha can generate **certificates, IDs and PDFs in bulk** from a spreadsheet, so you don\'t make them one by one.');

  add(['website', 'web app', 'landing page', 'booking', 'reservation', 'online menu', 'catalog', 'portal', 'event page', 'ticket page'],
    '**Websites & web apps:** business and personal websites, event and ticket pages, booking and reservation forms, online menus and catalogs, and client or student portals. All mobile-friendly, on your own domain.');

  add(['school system', 'attendance system', 'attendance kiosk', 'system for school', 'business system', 'enrollment system', 'records system', 'clinic system', 'may system ba kayo', 'pin attendance', 'inventory'],
    '**Business systems:** attendance with a PIN kiosk, document management, KPI tracking, QR customer feedback, and records, inventory or requests. Try the [School Suite demo](' + home + 'demo/school.html) — PIN 1234.');

  add(['dashboard', 'excel', 'data analysis', 'analytics', 'reports', 'spreadsheet', 'forecast', 'prediction', 'charts'],
    '**Dashboards & data:** sales, school and KPI dashboards, forecasting, survey analysis and quality charts. Try [AI Analytics Studio](' + G + 'AI-Analytics-Studio/) — upload an Excel file and see.');

  add(['chatbot', 'chat assistant', 'ai assistant', 'chat bot', 'ai chat', 'can you make a chatbot', 'own chatbot', 'chatbot for my business', 'monthly ai fee', 'may bayad ba ang ai', 'do i need to pay for ai'],
    'Yes! Likha builds a **chat assistant (chatbot)** for your business, with **your own name and branding**. It learns your prices, schedule, location and contacts, and answers customers 24/7 in English, Filipino or Taglish, only about your business.');

  add(['kapitan', 'what is kapitan', 'who are you kapitan', 'are you a bot'],
    "I'm **Kapitan** 👋 Likha Studio's own assistant. I answer questions about Likha Studio. Likha can build a chat assistant like me for your business, with your own name.");

  add(['tools', 'demo', 'try', 'ready made tools', 'sample', 'can i try'],
    'Try these now:\n- [Resibo Maker](' + G + 'AI-Analytics-Studio/receipts/) — receipts with VAT\n- [AI Analytics Studio](' + G + 'AI-Analytics-Studio/) — Excel to dashboard\n- [School Suite demo](' + home + 'demo/school.html) — attendance kiosk\n- [SPC Studio](' + G + 'SPC-Studio/) — quality charts\n- [CareSight](' + G + 'CareSight/) — forecasting');

  add(['hosting', 'do i pay monthly', 'monthly payment', 'monthly fee', 'monthly cost', 'may monthly ba', 'hosting fee', 'server cost', 'buwanang bayad'],
    'Most websites can run on **free hosting**. Systems with logins and a database may need a small hosting fee, which Ralph explains in the quote.');

  add(['domain', 'own domain', '.com', 'website name', 'dot com'],
    'Your domain (like yourbusiness.com) is registered in **your name**, and Ralph sets it up for you.');

  add(['how long', 'timeline', 'gaano katagal', 'kailan matatapos', 'turnaround', 'how many days', 'ilang araw'],
    'A website takes about **1 to 2 weeks** and a business system about **3 to 6 weeks**. You see a working preview within the first few days.');

  add(['payment', 'how to pay', 'downpayment', 'down payment', 'gcash', 'paypal', 'bank transfer', 'paano magbayad', 'installment'],
    'Payment terms are explained in your free quote. Send a message through the [contact form](' + home + '#contact).');

  add(['own the website', 'who owns', 'ownership', 'akin ba', 'can i move', 'my data'],
    'Yes, it is **all yours**: the domain, the website or system, and your data.');

  add(['update', 'maintenance', 'support', 'changes after launch', 'can i edit', 'edit myself', 'magpabago', 'after launch'],
    'Ralph stays with you after launch: content and event updates, new features, and training for your staff.');

  add(['portfolio', 'examples', 'sample work', 'previous work', 'projects', 'past projects', 'who are your clients', 'your clients', 'halimbawa', 'mga gawa'],
    'See Ralph\'s work:\n- [Ralph Garcia Portfolio](' + G + 'Ralph-Portfolio/)\n- [Future Minds Academy](https://futuremindsacademyph.com/) — school site + system\n- [CareSight](' + G + 'CareSight/) · [AI Analytics Studio](' + G + 'AI-Analytics-Studio/) · [SPC Studio](' + G + 'SPC-Studio/)\n- [IslaKeys](' + G + 'IslaKeys/) · [BizBuddy](' + G + 'BizBuddy/) · [KMM Travel](' + G + 'KMM/)\n[All projects](' + home + '#work)');

  add(['hospital', 'hospital system', 'healthcare', 'medical center', 'uerm', 'quality management system', 'qms', 'iso 9001', 'case study'],
    'Ralph built the **Quality Management System** used daily by UERM Medical Center\'s Quality Assurance Office (ISO 9001). Highlights:\n- **Customer Experience:** patients scan a QR code to give feedback\n- **Knowledge Hub (K-Hub):** every document in one searchable place\n- **KPI Generator:** monthly results marked Achieved / Not achieved automatically\n[See it](' + home + '#hospital)');

  add(['qr code', 'qr feedback', 'customer feedback', 'patient feedback', 'satisfaction survey', 'complaints', 'scan qr'],
    '**QR feedback:** customers scan a QR code with their own phone and rate their experience, with no app or login. Each concern gets an owner and is tracked until resolved. [See it](' + home + '#hospital)');

  add(['document management', 'k-hub', 'khub', 'knowledge hub', 'centralize documents', 'policies', 'sop', 'file storage'],
    '**Knowledge Hub (K-Hub):** all policies, procedures and forms in one searchable library by department, always the latest approved version. [See it](' + home + '#hospital)');

  add(['kpi', 'performance', 'measure performance', 'kpi dashboard', 'key performance indicators', 'targets'],
    '**KPI Generator:** departments enter monthly results and the system marks each one Achieved / Not achieved automatically. Missed targets need an approved action plan. [See it](' + home + '#hospital)');

  add(['contact', 'email', 'how to reach', 'talk to ralph', 'paano kayo makontak', 'message', 'hire', 'inquire', 'book a call', 'free call'],
    'Email **' + EMAIL + '** or use the [contact form](' + home + '#contact). You can also reach Ralph on [LinkedIn](https://www.linkedin.com/in/ralph-garcia-b57814401).');

  add(['who is ralph', 'founder', 'developer', 'who will build', 'sino gagawa'],
    '**Ralph Garcia** is the developer and data analyst behind Likha Studio. You work directly with the person who designs and writes your code. [Full portfolio](' + G + 'Ralph-Portfolio/)');

  add(['us clients', 'work with us clients', 'do you work with clients abroad', 'clients in the us', 'american clients', 'abroad', 'usa', 'america', 'outside philippines', 'international'],
    'Yes! Likha works with clients in the **Philippines and the US**, and meets over Zoom, Google Meet or Messenger.');

  add(['what do you need from me', 'requirements', 'what to prepare', 'ano kailangan'],
    'Just tell Ralph what you want to build or automate. For websites: your logo, a few photos, your services and contact details.');

  add(['revisions', 'dont like the design', 'changes', 'pwede ipabago'],
    'You see a working preview before the full build, and revisions are included.');

  add(['secure', 'security', 'safe', 'hack', 'is it safe', 'privacy', 'data privacy'],
    'Security is built in: sites run on HTTPS, no secret keys are ever put in the website code, logins use hashed passwords, and your data stays yours.');

  window.KAPITAN_KB = {
    v: 2,
    sites: {
      likha: {
        name: 'Likha Studio',
        url: home,
        greeting: "Hi! I'm Kapitan 👋 Likha Studio's assistant. Ask me what Likha can build or automate — English or Taglish!",
        suggestions: ['What can you automate?', 'Magkano ang website?', 'What is the Resibo Maker?', 'How do I contact Ralph?'],
        aliases: ['likha', 'likha studio']
      }
    },
    faq: faq,
    chunks: []
  };
})();
