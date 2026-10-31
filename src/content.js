// All text on the site lives here, in English and Arabic.
// To change something on the site, edit it in both languages below.

// Files in /public are served from the site root. BASE_URL keeps the paths
// correct whatever page the browser is on (and if the site moves to a sub-folder).
const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export const links = {
  email: 'mohsalma.mt@gmail.com',
  whatsapp: 'https://wa.me/970597055842',
  phone: '+970 597 055 842',
  linkedin: 'https://www.linkedin.com/in/m0hamed-salma/',
  github: 'https://github.com/Mohammed-Salma',
  storeFrontend: 'https://github.com/Mohammed-Salma/ecommerce-frontend',
  storeBackend: 'https://github.com/Mohammed-Salma/ecommerce-backend',
}

export const content = {
  en: {
    dir: 'ltr',
    switchTo: 'العربية',
    switchLabel: 'Switch to Arabic',
    theme: { toDark: 'Switch to dark mode', toLight: 'Switch to light mode' },
    nav: { projects: 'Projects', experience: 'Experience', skills: 'Skills', contact: 'Contact' },
    cv: { label: 'Download CV', file: asset('cv/Mohammed_Salma_CV_EN.pdf') },

    hero: {
      avatar: asset('img/avatar.webp'),
      name: 'Mohammed Salma',
      role: 'Full-stack developer in Gaza, Palestine',
      status: 'Open to work',
      headline: 'I build web apps from the database to the last button.',
      intro:
        'I work with React on the front end and Laravel behind it. Most recently I shipped an online store with Stripe payments, and before that I led a five-person team building a services map for people in Gaza.',
      primary: 'See my projects',
      secondary: 'Email me',
    },

    board: {
      title: 'Now serving',
      ticket: 'Ticket',
      counter: 'Counter',
      rows: [
        { ticket: 'React', counter: 'Frontend' },
        { ticket: 'Laravel', counter: 'Backend API' },
        { ticket: 'MySQL', counter: 'Database' },
        { ticket: 'Stripe', counter: 'Payments' },
      ],
      caption: 'Styled after the queue displays I set up for clients at Modern Technology.',
    },

    projectsTitle: 'Projects',
    projects: [
      {
        id: 'store',
        title: 'Pure Wear',
        role: 'Online clothing store, built solo',
        period: 'Sep - Oct 2026',
        summary:
          'A complete online store: a React storefront that talks to a Laravel REST API, with card payments through Stripe and an admin dashboard to run the shop.',
        images: [
          { src: asset('projects/store-home.webp'), alt: 'Pure Wear home page' },
          { src: asset('projects/store-product.webp'), alt: 'Product page with image gallery and size picker' },
          { src: asset('projects/store-checkout.webp'), alt: 'Checkout with Stripe card payment' },
          { src: asset('projects/store-admin-orders.webp'), alt: 'Admin dashboard listing orders with payment and delivery status' },
        ],
        points: [
          'Customers browse by category and brand, pick a size, and pay by card through Stripe or cash on delivery, then track their orders.',
          'Admins manage products with image galleries and sizes, plus categories, brands, orders and shipping prices.',
          'Laravel Sanctum tokens and role middleware keep customer and admin areas apart.',
        ],
        stack: ['React 19', 'Vite', 'Laravel 12', 'MySQL', 'Stripe', 'Sanctum'],
        links: [
          { label: 'Frontend code', href: links.storeFrontend },
          { label: 'Backend code', href: links.storeBackend },
        ],
        diagram: {
          title: 'How the store fits together',
          nodes: ['React storefront', 'Laravel REST API', 'MySQL'],
          side: 'Stripe payments',
          note: 'Admin dashboard and storefront share one API, separated by role.',
        },
      },
      {
        id: 'masar',
        title: 'Masar',
        period: 'Graduation project, Dec 2024',
        role: 'Team leader and back-end developer',
        summary:
          'A platform for people in Gaza to find essential services on a map (markets, banks, money exchange, gas and aid points) and to buy and sell locally.',
        points: [
          'Led a team of five from requirements and design through testing, using Agile iterations.',
          'Built the Laravel REST API behind the interactive map and the local marketplace.',
          'Three roles with their own permissions: users, sellers who apply with ID and store details, and admins who approve stores and act on reports.',
        ],
        stack: ['Laravel', 'React', 'MySQL', 'REST API', 'Postman'],
        links: [],
        images: [
          { src: asset('projects/masar-home.webp'), alt: 'Masar home page in Arabic' },
          { src: asset('projects/masar-map.webp'), alt: 'Masar map page showing service points across Gaza' },
          { src: asset('projects/masar-services.webp'), alt: 'Masar services page: restaurants, internet points, gas stations and more' },
        ],
      },
    ],

    experienceTitle: 'Experience',
    experience: [
      {
        period: '2023 - Present',
        role: 'Software & technical engineer',
        place: 'Modern Technology Company, Gaza',
        text: 'Set up and maintain queue management systems for service centers, and install and support banking equipment, office equipment and UPS power systems for business clients.',
      },
      {
        period: 'Dec 2024 - Sep 2025',
        role: 'Back-end developer, intern',
        place: 'Areisto, remote',
        text: 'Completed a 90-hour Laravel program covering planning, database design, implementation and testing, and built authentication, CRUD modules and REST endpoints.',
      },
      {
        period: '2020 - 2025',
        role: 'B.Sc. in Software Engineering',
        place: 'University of Palestine, Gaza',
        text: 'Graduated in 2025. Studied in English.',
      },
    ],

    skillsTitle: 'Skills',
    skills: [
      { group: 'Front end', items: ['React', 'JavaScript (ES6+)', 'HTML & CSS / SCSS', 'Bootstrap', 'Tailwind CSS', 'React Router', 'React Hook Form'] },
      { group: 'Back end', items: ['PHP', 'Laravel', 'REST APIs', 'Laravel Sanctum', 'Eloquent ORM', 'Role-based access'] },
      { group: 'Data', items: ['MySQL', 'Schema design', 'Migrations'] },
      { group: 'Tools', items: ['Git & GitHub', 'Postman', 'Vite', 'Stripe API', 'Figma', 'Agile'] },
    ],

    contactTitle: 'Let’s work together',
    contactText: 'I’m looking for full-stack, React or Laravel roles, remote or on site. The fastest way to reach me is email or WhatsApp.',
    contactLinks: { whatsapp: 'WhatsApp', linkedin: 'LinkedIn', github: 'GitHub' },
    contact: {
      channels: { email: 'Email', whatsapp: 'WhatsApp', linkedin: 'LinkedIn', github: 'GitHub' },
      copy: 'Copy',
      copied: 'Copied',
      based: 'Based in Gaza, Palestine. Open to remote work across time zones.',
      formTitle: 'Send me a message',
      name: 'Your name',
      email: 'Your email',
      subject: 'Subject',
      subjectHint: 'Optional',
      message: 'Message',
      messageHint: 'Tell me about the role or project.',
      send: 'Send message',
      sending: 'Sending…',
      sent: 'Message sent. I’ll reply to the email you gave as soon as I can.',
      sendAnother: 'Send another message',
      failed: 'The message didn’t go through. Check your connection and try again, or email me directly at',
      openMail: 'Open in email app',
      mailOpened: 'Your email app should open with the message filled in. Press send there to deliver it.',
      required: 'Fill in this field.',
      badEmail: 'Enter an email address like name@example.com.',
    },
    footer: 'Built with React and Vite.',
  },

  ar: {
    dir: 'rtl',
    switchTo: 'English',
    switchLabel: 'التبديل إلى الإنجليزية',
    theme: { toDark: 'الوضع الليلي', toLight: 'الوضع النهاري' },
    nav: { projects: 'المشاريع', experience: 'الخبرات', skills: 'المهارات', contact: 'تواصل' },
    cv: { label: 'تحميل السيرة الذاتية', file: asset('cv/Mohammed_Salma_CV_AR.pdf') },

    hero: {
      avatar: asset('img/avatar.webp'),
      name: 'محمد سلمة',
      role: 'مطوّر ويب متكامل من غزة، فلسطين',
      status: 'متاح للعمل',
      headline: 'أبني تطبيقات الويب من قاعدة البيانات حتى آخر زر.',
      intro:
        'أعمل بـ React للواجهات الأمامية و Laravel للواجهات الخلفية. آخر ما أنجزته متجر إلكتروني بدفع إلكتروني عبر Stripe، وقبله قُدت فريقاً من خمسة أعضاء لبناء خريطة خدمات لأهل غزة.',
      primary: 'شاهد مشاريعي',
      secondary: 'راسلني',
    },

    board: {
      title: 'يُخدَم الآن',
      ticket: 'التذكرة',
      counter: 'الشبّاك',
      rows: [
        { ticket: 'React', counter: 'الواجهة الأمامية' },
        { ticket: 'Laravel', counter: 'واجهة API' },
        { ticket: 'MySQL', counter: 'قاعدة البيانات' },
        { ticket: 'Stripe', counter: 'الدفع' },
      ],
      caption: 'مستوحاة من شاشات الطوابير التي أركّبها للعملاء في شركة التكنولوجيا الحديثة.',
    },

    projectsTitle: 'المشاريع',
    projects: [
      {
        id: 'store',
        title: 'Pure Wear',
        role: 'متجر ملابس إلكتروني، طوّرته بالكامل وحدي',
        period: 'سبتمبر - أكتوبر 2026',
        summary:
          'متجر إلكتروني كامل: واجهة React تتواصل مع REST API مبنية بـ Laravel، مع دفع بالبطاقات عبر Stripe ولوحة تحكم لإدارة المتجر.',
        images: [
          { src: asset('projects/store-home.webp'), alt: 'الصفحة الرئيسية لمتجر Pure Wear' },
          { src: asset('projects/store-product.webp'), alt: 'صفحة المنتج مع معرض الصور واختيار المقاس' },
          { src: asset('projects/store-checkout.webp'), alt: 'إتمام الطلب والدفع بالبطاقة عبر Stripe' },
          { src: asset('projects/store-admin-orders.webp'), alt: 'لوحة تحكم المشرف تعرض الطلبات وحالة الدفع والتوصيل' },
        ],
        points: [
          'يتصفح العميل المنتجات حسب التصنيف والعلامة التجارية، ويختار المقاس، ويدفع بالبطاقة عبر Stripe أو عند الاستلام، ثم يتابع طلباته.',
          'يدير المشرف المنتجات بمعرض صور ومقاسات، إضافة إلى التصنيفات والعلامات التجارية والطلبات وأسعار الشحن.',
          'رموز Laravel Sanctum وصلاحيات حسب الدور تفصل بين منطقة العملاء ومنطقة المشرفين.',
        ],
        stack: ['React 19', 'Vite', 'Laravel 12', 'MySQL', 'Stripe', 'Sanctum'],
        links: [
          { label: 'كود الواجهة الأمامية', href: links.storeFrontend },
          { label: 'كود الواجهة الخلفية', href: links.storeBackend },
        ],
        diagram: {
          title: 'كيف تترابط أجزاء المتجر',
          nodes: ['واجهة React', 'Laravel REST API', 'MySQL'],
          side: 'الدفع عبر Stripe',
          note: 'لوحة التحكم وواجهة المتجر تستخدمان نفس الـ API، والفصل بينهما حسب الدور.',
        },
      },
      {
        id: 'masar',
        title: 'مسار',
        period: 'مشروع التخرج، ديسمبر 2024',
        role: 'قائد الفريق ومطوّر الواجهات الخلفية',
        summary:
          'منصة تساعد أهل غزة على إيجاد الخدمات الأساسية على خريطة (الأسواق، البنوك، الصرافة، نقاط الغاز والمساعدات)، وعلى البيع والشراء محلياً.',
        points: [
          'قُدت فريقاً من خمسة أعضاء من جمع المتطلبات والتصميم حتى الاختبار، بمنهجية Agile.',
          'بنيت الـ REST API بـ Laravel التي تشغّل الخريطة التفاعلية والسوق المحلي.',
          'ثلاثة أدوار بصلاحيات مختلفة: مستخدمون، وبائعون يقدّمون طلباً بالهوية وبيانات المتجر، ومشرفون يعتمدون المتاجر ويتابعون البلاغات.',
        ],
        stack: ['Laravel', 'React', 'MySQL', 'REST API', 'Postman'],
        links: [],
        images: [
          { src: asset('projects/masar-home.webp'), alt: 'الصفحة الرئيسية لمنصة مسار' },
          { src: asset('projects/masar-map.webp'), alt: 'صفحة الخريطة في منصة مسار تعرض نقاط الخدمات في غزة' },
          { src: asset('projects/masar-services.webp'), alt: 'صفحة الخدمات في منصة مسار: مطاعم ونقاط إنترنت ومحطات غاز وغيرها' },
        ],
      },
    ],

    experienceTitle: 'الخبرات',
    experience: [
      {
        period: '2023 - حتى الآن',
        role: 'مهندس برمجيات ودعم تقني',
        place: 'شركة التكنولوجيا الحديثة، غزة',
        text: 'تركيب وصيانة أنظمة إدارة الطوابير لمراكز الخدمة، وتركيب ودعم الأجهزة البنكية والمكتبية وأنظمة الطاقة (UPS) لعملاء الشركة.',
      },
      {
        period: 'ديسمبر 2024 - سبتمبر 2025',
        role: 'مطوّر واجهات خلفية، متدرّب',
        place: 'شركة Areisto، عن بُعد',
        text: 'أتممت برنامجاً في Laravel بمدة 90 ساعة شمل التخطيط وتصميم قواعد البيانات والتنفيذ والاختبار، وبنيت المصادقة وعمليات CRUD وواجهات REST.',
      },
      {
        period: '2020 - 2025',
        role: 'بكالوريوس هندسة البرمجيات',
        place: 'جامعة فلسطين، غزة',
        text: 'تخرجت عام 2025، والدراسة باللغة الإنجليزية.',
      },
    ],

    skillsTitle: 'المهارات',
    skills: [
      { group: 'الواجهات الأمامية', items: ['React', 'JavaScript (ES6+)', 'HTML & CSS / SCSS', 'Bootstrap', 'Tailwind CSS', 'React Router', 'React Hook Form'] },
      { group: 'الواجهات الخلفية', items: ['PHP', 'Laravel', 'REST APIs', 'Laravel Sanctum', 'Eloquent ORM', 'الصلاحيات حسب الدور'] },
      { group: 'البيانات', items: ['MySQL', 'تصميم الجداول', 'Migrations'] },
      { group: 'الأدوات', items: ['Git & GitHub', 'Postman', 'Vite', 'Stripe API', 'Figma', 'Agile'] },
    ],

    contactTitle: 'لنعمل معاً',
    contactText: 'أبحث عن فرصة كمطوّر Full-Stack أو React أو Laravel، عن بُعد أو من المكتب. أسرع طريقة للتواصل معي هي الإيميل أو واتساب.',
    contactLinks: { whatsapp: 'واتساب', linkedin: 'LinkedIn', github: 'GitHub' },
    contact: {
      channels: { email: 'الإيميل', whatsapp: 'واتساب', linkedin: 'LinkedIn', github: 'GitHub' },
      copy: 'نسخ',
      copied: 'تم النسخ',
      based: 'أعيش في غزة، فلسطين، ومستعد للعمل عن بُعد مع فرق في مناطق زمنية مختلفة.',
      formTitle: 'أرسل لي رسالة',
      name: 'اسمك',
      email: 'إيميلك',
      subject: 'الموضوع',
      subjectHint: 'اختياري',
      message: 'الرسالة',
      messageHint: 'أخبرني عن الوظيفة أو المشروع.',
      send: 'إرسال الرسالة',
      sending: 'جارٍ الإرسال…',
      sent: 'وصلت رسالتك، وسأرد على الإيميل الذي كتبته في أقرب وقت.',
      sendAnother: 'إرسال رسالة أخرى',
      failed: 'لم تُرسَل الرسالة. تأكد من الاتصال وحاول مرة أخرى، أو راسلني مباشرة على',
      openMail: 'فتح في تطبيق الإيميل',
      mailOpened: 'سيفتح تطبيق الإيميل والرسالة جاهزة فيه، اضغط إرسال هناك لتصلني.',
      required: 'هذا الحقل مطلوب.',
      badEmail: 'اكتب إيميلاً صحيحاً مثل name@example.com.',
    },
    footer: 'صُمّم وبُني بـ React و Vite.',
  },
}
