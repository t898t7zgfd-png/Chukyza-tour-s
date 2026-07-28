import { Tour, PackagePlan, GalleryItem, VideoItem, FAQItem, Destination } from '../types';

export const MIRADOR_SIERRA_TIGRE_IMAGE = '/mirador_sierra_tigre.jpg';
export const LOGO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeL08nT1VgIH9O5uolJVB1NcX0twTevZYkuEmShkvrP9j2VxMWSAW7jRx53GVBc4uQt46cvJbFFgPcnYbZkG2ISF5wqlHqCDhMO2D2mHrxNXpjAdYcB_qhD7ZNEUGbIFRKwT25wDrjDmExTSy97SadtIPtQcZA9tDPexomq5cXO_46aFF4QZg8Srf1lwrzGxfoWcuYhCIMTJMOuX39cGwL3hly74WX67XOr-qBx2T0bDI2tzCnxWfBf4Phh-kwXX_RXjyNwfx7cZux';

export const HERO_BG_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhwXiL0m0xrCFFR07bI64PEPE0as02r8jM8ivx_FvpEGvegrladxqiS1nkC7q9fm5ebsFtzDtc9BgfTPDvw1za5Z4ou5So8SccluivNJZC1jyab942ykh46LMK1MeaEMLks_yN3FQ7lNJSdYezxZW4VQ0BVCFzqZPEEOM-VD7q5i_899a8bTT8gXTTp_cx-4QRTzd9_5D_nhObwzQ3rt_9p1C1YyrLwSwmUSqonvmEut24NTBJ5WbLTsmKtKLNU1lcloikGvw-WKeO';

export const GUIDE_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnWL3KDKnARwBgKjQIEukhyV6lYKYq301HfHoTnTnVBuQ0TFuQDDCWCDO-WyNHh1wqF0dt5y4cU5IWC1qVJ9LbSjMWKjn7p2yOk1J5DuRMx6a-uX8Dk2vv_IHfkDComzFth1NiqqBP82QgH9wlXwfU2VO-fZlX0tnGcrKPpSgWtlyj9aw9Pd8h1Df6NuBWjJDoCUcY1rWkhO3SgWtTpReTXeZsrOemsX74TomVQQ_s9mC5Ey_LTZiR8lY-Xlfqm0tAmmt9PUrjJNOs';

export const MAP_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmXSLS9mBB-vETI3xErM9mDBuCNP_Mwm3pP9IRbsr5UYzT_aLpx0_wh9q5AAeC60bRYp4Widyq0HubKPtVKUaqrYFO5_KANsLxC_-7cMuBlcuKc-ZCfCQKe56JuxvkvvdzbGKX-duLAsMWQCn_VC-ywO2N9YjiSj8k7ueZrSAlMMUa1CagU19sGrXP0iYJD0COnv3Yys1Hlpb5ox90A3eJJrjRNFdMKCfV6aM8n0k2hACGscrDDUn7mXOQhu4EQ4YJx0FFVRD4D75H';

export const TOURS_DATA: Tour[] = [
  {
    id: 'sierra-del-tigre-1h',
    title: {
      en: '-MAZAVENTURA- / Mirador de la Sierra del Tigre',
      es: '-MAZAVENTURA- / "Mirador de la Sierra del Tigre"',
    },
    subtitle: {
      en: 'Scenic mountain climb to the highest summit viewpoint in Mazamitla',
      es: 'Ascenso directo hacia el mirador panorámico más alto de la serranía',
    },
    price: 110,
    duration: '1 Hora',
    difficulty: {
      en: 'Family / Beginner',
      es: 'Familiar / Principiante',
    },
    tag: {
      en: '1 Hour Express',
      es: 'Ruta 1 Hora',
    },
    image: MIRADOR_SIERRA_TIGRE_IMAGE,
    description: {
      en: 'A 1-hour mountain route heading straight to the iconic Mirador de la Sierra del Tigre. Enjoy fresh pine air and panoramic vistas over the cloud forest.',
      es: 'Ruta de 1 Hora con dirección directa al majestuoso "Mirador de la Sierra del Tigre". Disfruta del aire puro de pinar y vistas panorámicas sobre el bosque de montaña.',
    },
    highlights: {
      en: [
        'Mirador de la Sierra del Tigre viewpoint',
        'Ancient pine tree canopy drive',
        'Summit photo stop',
        'Easy automatic UTV driving',
      ],
      es: [
        'Visita al Mirador de la Sierra del Tigre',
        'Recorrido entre pinos milenarios',
        'Parada fotográfica en la cumbre',
        'Manejo ágil y seguro en UTV',
      ],
    },
    vehicleType: '2024 UTV / ATV Off-Road',
    included: {
      en: ['DOT Certified Helmet & Goggles', 'Hydration & Safety Briefing', 'Fuel Included'],
      es: ['Casco Certificado y Antiparras', 'Hidratación e Instrucciones', 'Combustible Incluido'],
    },
  },
  {
    id: 'sierra-tigre-valle-juarez-2h',
    title: {
      en: '-MAZAVENTURA- / Sierra del Tigre & Valle de Juárez Boardwalk',
      es: '-MAZAVENTURA- / "Mirador de la Sierra del Tigre" / "Mirador Sierra del Tigre"-Valle de Juárez / Malecón "Presa" Valle de Juárez',
    },
    subtitle: {
      en: 'Grand 2-hour circuit from mountain ridge overlooks down to the lakefront boardwalk',
      es: 'Circuito de 2 horas desde las cumbres de la Sierra hasta el Malecón de la Presa en Valle de Juárez',
    },
    price: 190,
    duration: '2 Horas',
    difficulty: {
      en: 'Intermediate',
      es: 'Intermedio',
    },
    tag: {
      en: 'Most Popular 2H',
      es: 'Más Popular 2H',
    },
    featured: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVjgBOduuCe1SdmFC9U_FVws0EBnprKxss5A7G6L9alxGkkrqkAdpGxsvUqqd9KWbtuYm5KMVE0fCbuQFGN7gC2iEOOUTaPICtGDcXZNPdaY8ko3KCx1eIY6-APeka0wTWytqGXmP9RLjVHyshh_6YL6KpTko7yPib_4SnqECYZ3dQeDJb8lOTa_ldyLuA1gCIwvSE1oWNx3r9IkpZaI7NCgQq01XOi1hU-xqV-TUKtYOLx44IT7x1oUYGY-BsYRwiN5jyXowmPMd5',
    description: {
      en: 'Complete 2-hour tour linking Mirador de la Sierra del Tigre, Mirador Sierra del Tigre-Valle de Juárez, and arriving at the picturesque Malecón Presa Valle de Juárez.',
      es: 'Recorrido completo de 2 Horas que conecta el "Mirador de la Sierra del Tigre", el "Mirador Sierra del Tigre"-Valle de Juárez y culmina en el animado Malecón "Presa" Valle de Juárez.',
    },
    highlights: {
      en: [
        'Mirador de la Sierra del Tigre',
        'Mirador Sierra del Tigre - Valle de Juárez',
        'Malecón "Presa" Valle de Juárez',
        'Panoramic mountain and lake views',
      ],
      es: [
        'Mirador de la Sierra del Tigre',
        'Mirador Sierra del Tigre - Valle de Juárez',
        'Malecón "Presa" Valle de Juárez',
        'Vistas espectaculares de montaña y presa',
      ],
    },
    vehicleType: '2024 Can-Am / Polaris UTV 2-4 Seater',
    included: {
      en: ['Full Gear x Passengers', 'Lakefront Rest Break', 'Passenger Insurance'],
      es: ['Equipo Completo de Seguridad', 'Pausa en Malecón de la Presa', 'Seguro de Pasajeros'],
    },
  },
  {
    id: 'corazon-aguacatera-hacienda-1h',
    title: {
      en: '-MAZAVENTURA- / Corazón de la Aguacatera & Abandoned Hacienda',
      es: '-MAZAVENTURA- / "Mirador Corazón de la Aguacatera" / "Hacienda Abandonada"',
    },
    subtitle: {
      en: 'Historic & scenic 1-hour route exploring avocado valley vistas and mysterious hacienda ruins',
      es: 'Recorrido histórico de 1 hora entre miradores de huertas y ruinas místicas',
    },
    price: 120,
    duration: '1 Hora',
    difficulty: {
      en: 'Relaxed / Historic',
      es: 'Relajado / Histórico',
    },
    tag: {
      en: 'History & Views',
      es: 'Cultura y Vistas',
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEU9w8cdC_qIqW0nfAep3h9HborRztIOLerPcff17XDtjptGHvZtlmfZCJazubkHrHQl8bWKBRp_kTTlkKRpDsuI9XZkxsJ8jPi9msP-rL5kmA5zcd7zZQ1S92aB5MoIhSUyuX_SABoUdze0fZ5UUioGtH1OtnH7zSNyvE0m9HcDgQffLwj8emuZMcdmAwjcUcSLJ43QNLqA4yE9OTNv3wTH9Rrg0vmrBH1_dS6ult8-vfqaUIXlCmPPHy_B4BzzwoSC40s9z-o0ql',
    description: {
      en: 'A captivating 1-hour expedition through Mirador "Corazón de la Aguacatera" with a visit to the historic "Hacienda Abandonada" hidden among the pine trees.',
      es: 'Inolvidable expedición de 1 Hora visitando el Mirador "Corazón de la Aguacatera" y adentrándose en las ruinas históricas de la "Hacienda Abandonada" dentro del bosque.',
    },
    highlights: {
      en: [
        'Mirador "Corazón de la Aguacatera"',
        'Exploration of "Hacienda Abandonada"',
        'Orchard & pine valley photos',
        'Historic mountain storytelling',
      ],
      es: [
        'Mirador "Corazón de la Aguacatera"',
        'Exploración de la "Hacienda Abandonada"',
        'Fotografía de cañadas y huertos',
        'Historia y relatos de la montaña',
      ],
    },
    vehicleType: '2024 UTV Off-Road Automatic',
    included: {
      en: ['Safety Gear Included', 'Hacienda Walk & Photos', 'Bottled Water'],
      es: ['Cascos y Lentes', 'Caminata Fotográfica en Hacienda', 'Agua Embotellada'],
    },
  },
  {
    id: 'cascada-el-salto-2h',
    title: {
      en: '-MAZAVENTURA- / El Salto Waterfall',
      es: '-MAZAVENTURA- / "Cascada el Salto"',
    },
    subtitle: {
      en: '2-hour waterfall off-road drive crossing mountain streams and rocky gorges',
      es: 'Ruta de 2 horas hacia la majestuosa caída de agua en el cañón de la montaña',
    },
    price: 185,
    duration: '2 Horas',
    difficulty: {
      en: 'Adventurous',
      es: 'Aventurero',
    },
    tag: {
      en: 'Waterfall Tour 2H',
      es: 'Cascada 2H',
    },
    featured: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjIJxdLGNMYUyjb_VIQaKuVVsfNKfAyfEPd1RIQ5MDBxDJd0Nj3HP9yQMJYfB42JZiYdZ3rkUQbNmAU0P6n67nBql2lEdQYPnTGvjjv8gjt009cZPgiSaev3285ULB-tFNbA6mRa-4lyOIkN1DWw4Agi4ljZtn0IJKtOY33e1JrlaBOrM8vxqh5ZZlFaYuJO6PA3UwBRlMD5Lx9bLQhUPJWL6qIGaf6qhQRmgg1NIVxx4mF3Dern7GOgweGFujwJ7eEChtj8pv7rJt',
    description: {
      en: 'Drive 2 hours through mountain gullies and pine trails to reach the impressive "Cascada El Salto" waterfall in Mazamitla.',
      es: 'Emocionante recorrido de 2 Horas atravesando brechas de montaña y veredas entre pinos para llegar a la majestuosa "Cascada El Salto".',
    },
    highlights: {
      en: [
        'Cascada El Salto waterfall site',
        'Stream & river bed crossings',
        'Lush canyon views',
        'Free photo time at the waterfall',
      ],
      es: [
        'Visita a la Cascada El Salto',
        'Cruce de arroyos y cauces naturales',
        'Vistas del cañón y la cañada',
        'Tiempo libre para fotos junto al agua',
      ],
    },
    vehicleType: '2024 High-Performance UTV 4x4',
    included: {
      en: ['Protective Helmets & Goggles', 'Waterfall Access', 'Guide Support'],
      es: ['Equipo de Protección', 'Acceso a Zona de Cascada', 'Acompañamiento de Guía'],
    },
  },
  {
    id: 'mirador-dos-aguas-1h',
    title: {
      en: '-MAZAVENTURA- / Dos Aguas Viewpoint',
      es: '-MAZAVENTURA- / (Mirador "Dos Aguas")',
    },
    subtitle: {
      en: 'Crisp 1-hour mountain ridge drive to the watershed overlook',
      es: 'Paseo panorámico de 1 hora al mirador de la divisoria de aguas',
    },
    price: 115,
    duration: '1 Hora',
    difficulty: {
      en: 'Family / Beginner',
      es: 'Familiar / Principiante',
    },
    tag: {
      en: 'Panoramas 1H',
      es: 'Vistas 1H',
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZZeKv6_HDEzDPxYVwln7j-Cgpx-kBc_XQ9jWI46SFQnDV02hWIay_2k9itm1VBjDzHNhq2ZI-wUj3ZjfKjtOswdD7fMkRP1RZMgDHN-gFn8Vzuv-dby19Yiyo6X0nbEdL10FwOTVEkRtPKHmI9dfTGusSXHD1iLGxVcvE4A7zdjiZMdsWSrFfjCJLJ5f6svC8CVs6Gzf6_rncgoqfZWR1U_f0D13EACVoPv5h9rWtuKLC7h3dDSktvu05yfJoOZ9No_WFwTl2-JPM',
    description: {
      en: 'Discover Mirador "Dos Aguas" on a crisp 1-hour UTV ride overlooking two vast mountain watersheds in Jalisco.',
      es: 'Descubre el Mirador "Dos Aguas" en un recorrido ágil de 1 Hora contemplando la unión de dos cuencas de montaña en la Sierra del Tigre.',
    },
    highlights: {
      en: [
        'Mirador "Dos Aguas" point',
        'Dual mountain valley scenery',
        'Pine forest breeze',
        'Great photo opportunity',
      ],
      es: [
        'Mirador "Dos Aguas"',
        'Vistas a las dos vertientes de la serranía',
        'Brisa de pinar alto',
        'Punto fotográfico de altura',
      ],
    },
    vehicleType: '2024 Comfort UTV Automatic',
    included: {
      en: ['Helmets & Masks', 'Guide Lead', 'Refreshments'],
      es: ['Cascos y Mascarillas', 'Guía al Frente', 'Hidratación'],
    },
  },
  {
    id: 'dos-aguas-barranca-hacienda-2h',
    title: {
      en: '-MAZAVENTURA- / Dos Aguas, Barranca Verde & Abandoned Hacienda',
      es: '-MAZAVENTURA- / (Mirador "Dos Aguas") / "Barranca Verde" / "Hacienda Abandonada"',
    },
    subtitle: {
      en: 'Action-packed 2-hour circuit uniting mountain views, deep green canyon trails and historic ruins',
      es: 'Aventura completa de 2 horas uniendo miradores de altura, cañada verde y la mística hacienda',
    },
    price: 200,
    duration: '2 Horas',
    difficulty: {
      en: 'Intermediate Pro',
      es: 'Intermedio Pro',
    },
    tag: {
      en: 'Circuit 2H',
      es: 'Ruta Completa 2H',
    },
    featured: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHrhzQDcU2-8uu6fWfdrAkhagJ_EfdJSQeD8rjw7H39PFYS2LsimWWDWc5-kjYgMCLvz07De4cGjgGjo6XDyE-kmAaLFmnz4ueqbYayKALBFSliqKKTLGXcjfHRNaeIluf3rftgCVZILgw6Tps9hWh--Sq-lfhJxDFYSmeqRgyDE6DXudfiJsy4iqfVeBu8-JWrSP4VypEY8-S6V_6_GXm330y9PNwGX_Ct0M_MyRVWow54WQtY4pgHOt_ZfRS74ncFqTFwp7mhFyX',
    description: {
      en: 'A 2-hour multi-destination expedition visiting Mirador "Dos Aguas", riding through the lush "Barranca Verde" canyon, and exploring the "Hacienda Abandonada".',
      es: 'Expedición de 2 Horas visitando el Mirador "Dos Aguas", recorriendo el denso paisaje de "Barranca Verde" y explorando la mística "Hacienda Abandonada".',
    },
    highlights: {
      en: [
        'Mirador "Dos Aguas"',
        'Barranca Verde green canyon path',
        'Abandoned Hacienda ruins',
        'Mix of mud and mountain pass driving',
      ],
      es: [
        'Mirador "Dos Aguas"',
        'Recorrido en Barranca Verde',
        'Exploración de la Hacienda Abandonada',
        'Combinación de lodo y brecha de pinar',
      ],
    },
    vehicleType: '2024 UTV Maverick / RZR 4x4',
    included: {
      en: ['Complete Riding Gear', 'Guided Ruins Exploration', 'Hydration Pack'],
      es: ['Equipo Completo de Conducción', 'Caminata Guiada en Ruinas', 'Paquete de Hidratación'],
    },
  },
  {
    id: 'camino-real-del-tigre-3h',
    title: {
      en: '-MAZAVENTURA- / CAMINO REAL DEL TIGRE',
      es: '-MAZAVENTURA- / "CAMINO REAL DEL TIGRE"',
    },
    subtitle: {
      en: 'The ultimate 3-hour off-road expedition along the ancient royal mountain trail',
      es: 'La gran travesía off-road de 3 horas por la ruta histórica de la serranía',
    },
    price: 275,
    duration: '3 Horas',
    difficulty: {
      en: 'Expert / Extreme',
      es: 'Experto / Extremo',
    },
    tag: {
      en: 'Grand Expedition 3H',
      es: 'Gran Travesía 3H',
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR3C-z4Dc48OYhexaqQx9PIbWFNLenMdyl9QRgSbAH_A7ibcuhjSf0Su-oADqhchLfrJaoYGIeUwp1wayfGnPA8Hdgs9lAZ38w0S92SBn4zHyfezazSZcHaWt0vRjLkvRnKfNKLSYjt8pIVOf29MdQT3DjLLXpYm-vbryEIX39xNKrCM2T7ocJpNTOerQttqM2vAFlXYVQZDt57HzS6K7elOT_NfmTYCNJPM2ReJ0nVq7OnkEwtVC5P4IUXR4k3LQWtu_eHETjZICS',
    description: {
      en: 'Our longest 3-hour journey through "Camino Real del Tigre". Pure off-road driving, deep mud, remote mountain wilderness, and high altitude crests.',
      es: 'Nuestra expedición estelar de 3 Horas a lo largo del "CAMINO REAL DEL TIGRE". Manejo técnico, lodo profundo, paisajes vírgenes y aire puro en lo alto de la Sierra.',
    },
    highlights: {
      en: [
        'Historic Camino Real del Tigre route',
        'Deep mountain ridge wilderness',
        'Technical mud & rock driving challenges',
        'Mountain break with refreshments',
      ],
      es: [
        'Ruta histórica del Camino Real del Tigre',
        'Zonas más remotas de la serranía',
        'Desafíos de conducción extrema y lodo pro',
        'Refrigerio y bebidas en la montaña',
      ],
    },
    vehicleType: '2024 Pro-Series UTV Turbo 4x4',
    included: {
      en: ['Pro Helmets & Goggles', 'HD GoPro Footage', 'Mountain Refreshments', 'Full Insurance'],
      es: ['Cascos Profesionales y Antiparras', 'Grabación HD GoPro', 'Snacks y Bebidas', 'Seguro Total'],
    },
  },
  {
    id: 'puerta-del-cielo-la-chuta',
    title: {
      en: '-MAZAVENTURA- / Puerta del Cielo & Cantina La Chuta',
      es: '-MAZAVENTURA- / (Mirador "Puerta del Cielo") / (Cantina "La Chuta Parada Obligatoria")',
    },
    subtitle: {
      en: 'Heavenly sky-high overlook with a traditional essential stop at Cantina La Chuta',
      es: 'Mirador de altura celestial con parada obligatoria en la tradicional Cantina La Chuta',
    },
    price: 210,
    duration: '2 Horas',
    difficulty: {
      en: 'Traditional / Scenic',
      es: 'Tradicional / Panorámico',
    },
    tag: {
      en: 'Parada Obligatoria',
      es: 'Parada Obligatoria',
    },
    featured: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnWL3KDKnARwBgKjQIEukhyV6lYKYq301HfHoTnTnVBuQ0TFuQDDCWCDO-WyNHh1wqF0dt5y4cU5IWC1qVJ9LbSjMWKjn7p2yOk1J5DuRMx6a-uX8Dk2vv_IHfkDComzFth1NiqqBP82QgH9wlXwfU2VO-fZlX0tnGcrKPpSgWtlyj9aw9Pd8h1Df6NuBWjJDoCUcY1rWkhO3SgWtTpReTXeZsrOemsX74TomVQQ_s9mC5Ey_LTZiR8lY-Xlfqm0tAmmt9PUrjJNOs',
    description: {
      en: 'Experience heavenly vistas at Mirador "Puerta del Cielo" followed by a mandatory fun pitstop at Cantina "La Chuta", the most iconic tradition in Mazamitla off-roading.',
      es: 'Combina paisajes celestiales en el Mirador "Puerta del Cielo" con la infaltable parada tradicional en la Cantina "La Chuta (Parada Obligatoria)", leyenda de la Sierra.',
    },
    highlights: {
      en: [
        'Mirador "Puerta del Cielo" viewpoint',
        'Mandatory Stop at Cantina "La Chuta"',
        'Regional drinks & mountain atmosphere',
        'Cloud forest panorama photos',
      ],
      es: [
        'Mirador "Puerta del Cielo"',
        'Parada Obligatoria en Cantina "La Chuta"',
        'Ambiente serrano y bebidas tradicionales',
        'Fotografías panorámicas sobre las nubes',
      ],
    },
    vehicleType: '2024 UTV 2-Seater & 4-Seater Luxury',
    included: {
      en: ['Safety Gear & Helmets', 'Traditional Cantina Pitstop', 'Guide Escort'],
      es: ['Cascos y Equipo de Seguridad', 'Parada en Cantina Tradicional', 'Acompañamiento de Guía'],
    },
  },
];

export const PACKAGES_DATA: PackagePlan[] = [
  {
    id: 'individual',
    name: {
      en: 'Individual',
      es: 'Individual',
    },
    category: {
      en: 'Solo Rider',
      es: 'Piloto Solitario',
    },
    price: 120,
    unit: '/ pp',
    features: {
      en: [
        '1 High-Perf Vehicle (ATV/UTV)',
        'Safety Gear Included',
        'Certified Lead Guide',
        'Bottled Water & Energy Bar',
      ],
      es: [
        '1 Vehículo de Alto Rendimiento',
        'Equipo de Seguridad Incluido',
        'Guía Certificado al Frente',
        'Agua Embotellada y Barrita Energética',
      ],
    },
    recommendedFor: {
      en: 'Solo thrill seekers and independent racers',
      es: 'Buscadores de adrenalina individuales',
    },
  },
  {
    id: 'couple',
    name: {
      en: 'Couple',
      es: 'Pareja',
    },
    category: {
      en: 'Best Value',
      es: 'Mejor Valor',
    },
    price: 200,
    unit: '/ pair',
    featured: true,
    features: {
      en: [
        'Premium 2-Seater UTV',
        'Full Safety Kit x2',
        'VIP Trail Route Access',
        'Gourmet Snack Pack & Drinks',
      ],
      es: [
        'UTV Biplaza Premium',
        'Kit de Seguridad Completo x2',
        'Acceso a Ruta VIP',
        'Paquete Gourmet de Snacks y Bebidas',
      ],
    },
    recommendedFor: {
      en: 'Couples and pairs seeking unforgettable mountain memories',
      es: 'Parejas que buscan memorias inolvidables en la montaña',
    },
  },
  {
    id: 'family',
    name: {
      en: 'Family',
      es: 'Familiar',
    },
    category: {
      en: 'Core Group',
      es: 'Grupo Nucleo',
    },
    price: 350,
    unit: '/ 4 pax',
    features: {
      en: [
        'Luxury 4-Seater UTV',
        'Complete Gear x4',
        'Child-Safe Certified Routes',
        'Traditional Country Lunch Included',
      ],
      es: [
        'UTV de Lujo de 4 Plazas',
        'Equipo Completo x4',
        'Rutas Certificadas para Niños',
        'Almuerzo Campestre Tradicional',
      ],
    },
    recommendedFor: {
      en: 'Families and groups of four wanting comfort and fun',
      es: 'Familias o grupos de 4 personas con comodidad total',
    },
  },
  {
    id: 'corporate',
    name: {
      en: 'Corporate',
      es: 'Empresarial',
    },
    category: {
      en: 'Enterprise',
      es: 'Empresas',
    },
    price: 'Custom',
    unit: '',
    features: {
      en: [
        'Fleet of 10+ Vehicles',
        'Team Building Challenges',
        'Full Catering & Camp Bar',
        'Event Media & Drone Team',
      ],
      es: [
        'Flotilla de 10+ Vehículos',
        'Dinámicas de Integración',
        'Servicio de Catering y Barra',
        'Equipo de Fotografía y Dron',
      ],
    },
    recommendedFor: {
      en: 'Corporate retreats, VIP celebrations, and large clubs',
      es: 'Eventos corporativos, grupos grandes y celebraciones VIP',
    },
  },
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'alpine-sunrise',
    title: {
      en: 'Mirador de la Sierra del Tigre',
      es: 'Mirador de la Sierra del Tigre',
    },
    category: 'Scenery',
    image: MIRADOR_SIERRA_TIGRE_IMAGE,
    location: 'Sierra del Tigre - Mirador Principal',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2',
  },
  {
    id: 'mud-beast',
    title: {
      en: 'Heavy Tread Action',
      es: 'Tracción Extrema en Lodo',
    },
    category: 'Vehicles',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZZeKv6_HDEzDPxYVwln7j-Cgpx-kBc_XQ9jWI46SFQnDV02hWIay_2k9itm1VBjDzHNhq2ZI-wUj3ZjfKjtOswdD7fMkRP1RZMgDHN-gFn8Vzuv-dby19Yiyo6X0nbEdL10FwOTVEkRtPKHmI9dfTGusSXHD1iLGxVcvE4A7zdjiZMdsWSrFfjCJLJ5f6svC8CVs6Gzf6_rncgoqfZWR1U_f0D13EACVoPv5h9rWtuKLC7h3dDSktvu05yfJoOZ9No_WFwTl2-JPM',
    location: 'La Toscana Trailhead',
  },
  {
    id: 'squad-goals',
    title: {
      en: 'Squad High Energy',
      es: 'Pura Energía en Equipo',
    },
    category: 'Community',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHrhzQDcU2-8uu6fWfdrAkhagJ_EfdJSQeD8rjw7H39PFYS2LsimWWDWc5-kjYgMCLvz07De4cGjgGjo6XDyE-kmAaLFmnz4ueqbYayKALBFSliqKKTLGXcjfHRNaeIluf3rftgCVZILgw6Tps9hWh--Sq-lfhJxDFYSmeqRgyDE6DXudfiJsy4iqfVeBu8-JWrSP4VypEY8-S6V_6_GXm330y9PNwGX_Ct0M_MyRVWow54WQtY4pgHOt_ZfRS74ncFqTFwp7mhFyX',
    location: 'Chukyza Campfire Base',
  },
  {
    id: 'driver-cockpit',
    title: {
      en: 'Cockpit View & LED Trails',
      es: 'Vista desde la Cabina LED',
    },
    category: 'Action',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR3C-z4Dc48OYhexaqQx9PIbWFNLenMdyl9QRgSbAH_A7ibcuhjSf0Su-oADqhchLfrJaoYGIeUwp1wayfGnPA8Hdgs9lAZ38w0S92SBn4zHyfezazSZcHaWt0vRjLkvRnKfNKLSYjt8pIVOf29MdQT3DjLLXpYm-vbryEIX39xNKrCM2T7ocJpNTOerQttqM2vAFlXYVQZDt57HzS6K7elOT_NfmTYCNJPM2ReJ0nVq7OnkEwtVC5P4IUXR4k3LQWtu_eHETjZICS',
    location: 'Mystic Pines Night Path',
    colSpan: 'md:col-span-2',
  },
];

export const VIDEO_GALLERY_DATA: VideoItem[] = [
  {
    id: 'rzr-mud-action',
    title: {
      en: 'RZR Extreme Mud & Rock Crawling',
      es: 'Acción Extrema RZR en Lodo y Rocas',
    },
    category: {
      en: 'Action & Mud',
      es: 'Acción y Lodo',
    },
    duration: '0:45',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZZeKv6_HDEzDPxYVwln7j-Cgpx-kBc_XQ9jWI46SFQnDV02hWIay_2k9itm1VBjDzHNhq2ZI-wUj3ZjfKjtOswdD7fMkRP1RZMgDHN-gFn8Vzuv-dby19Yiyo6X0nbEdL10FwOTVEkRtPKHmI9dfTGusSXHD1iLGxVcvE4A7zdjiZMdsWSrFfjCJLJ5f6svC8CVs6Gzf6_rncgoqfZWR1U_f0D13EACVoPv5h9rWtuKLC7h3dDSktvu05yfJoOZ9No_WFwTl2-JPM',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-buggy-driving-fast-on-a-dirt-road-41550-large.mp4',
    location: 'Sierra del Tigre',
    views: '12.4K',
  },
  {
    id: 'mirador-sierra-tigre-video',
    title: {
      en: 'Mirador Sierra del Tigre Summit Experience',
      es: 'Experiencia Cumbre Mirador Sierra del Tigre',
    },
    category: {
      en: 'Panoramic View',
      es: 'Vistas Panorámicas',
    },
    duration: '1:12',
    thumbnail: MIRADOR_SIERRA_TIGRE_IMAGE,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-quad-bike-driving-on-a-dirt-road-41551-large.mp4',
    location: 'Mirador Sierra del Tigre',
    views: '18.9K',
  },
  {
    id: 'cascada-salto-stream',
    title: {
      en: 'Cascada El Salto River & Canyon Trail',
      es: 'Cruce de Cañadas en Cascada El Salto',
    },
    category: {
      en: 'Waterfalls & Rivers',
      es: 'Cascadas y Ríos',
    },
    duration: '0:58',
    thumbnail: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-car-driving-through-a-muddy-puddle-41553-large.mp4',
    location: 'Cascada El Salto',
    views: '9.3K',
  },
  {
    id: 'night-la-chuta-ride',
    title: {
      en: 'LED Night Ride & Cantina La Chuta Pitstop',
      es: 'Recorrido Nocturno LED & Parada Cantina La Chuta',
    },
    category: {
      en: 'Night Ride',
      es: 'Recorrido Nocturno',
    },
    duration: '1:20',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR3C-z4Dc48OYhexaqQx9PIbWFNLenMdyl9QRgSbAH_A7ibcuhjSf0Su-oADqhchLfrJaoYGIeUwp1wayfGnPA8Hdgs9lAZ38w0S92SBn4zHyfezazSZcHaWt0vRjLkvRnKfNKLSYjt8pIVOf29MdQT3DjLLXpYm-vbryEIX39xNKrCM2T7ocJpNTOerQttqM2vAFlXYVQZDt57HzS6K7elOT_NfmTYCNJPM2ReJ0nVq7OnkEwtVC5P4IUXR4k3LQWtu_eHETjZICS',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-dirt-bike-driving-fast-through-a-forest-41549-large.mp4',
    location: 'Cantina La Chuta & Puerta del Cielo',
    views: '15.1K',
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'license',
    question: {
      en: 'Do I need a driver’s license?',
      es: '¿Necesito licencia de conducir?',
    },
    answer: {
      en: 'Yes, any person operating the vehicle must present a valid driver’s license (from any state or country). Passengers do not require a license.',
      es: 'Sí, cualquier persona que maneje el vehículo debe presentar una licencia de conducir vigente. Los pasajeros no la requieren.',
    },
    category: 'requirements' as any,
  },
  {
    id: 'clothing',
    question: {
      en: 'What should I wear?',
      es: '¿Qué ropa debo vestir?',
    },
    answer: {
      en: 'We recommend long pants, closed-toe shoes or boots, and a jacket or hoodie as mountain temperatures drop in the pine forest. We provide professional helmets, balaclavas, and dust goggles.',
      es: 'Recomendamos pantalones largos, calzado cerrado o botas, y chamarra ya que en el bosque baja la temperatura. Nosotros proporcionamos casco profesional y antiparras.',
    },
    category: 'general',
  },
  {
    id: 'children',
    question: {
      en: 'Is it safe for children?',
      es: '¿Es seguro para niños?',
    },
    answer: {
      en: 'Absolutely. Children ages 5 and up can ride safely as passengers in our 4-seater luxury UTVs equipped with 4-point safety harnesses and child-sized helmets. We offer family-friendly routes.',
      es: 'Totalmente. Los niños de 5 años en adelante pueden viajar seguros como pasajeros en nuestros UTVs de 4 plazas equipados con arneses de seguridad y cascos especiales.',
    },
    category: 'safety',
  },
  {
    id: 'weather',
    question: {
      en: 'What happens if it rains or gets muddy?',
      es: '¿Qué pasa si llueve o hay mucho lodo?',
    },
    answer: {
      en: 'Rain and mud make the experience even better! We operate rain or shine. In case of extreme hazardous weather (e.g. lightning storms), we offer free rescheduling.',
      es: '¡La lluvia y el lodo hacen la aventura aún más emocionante! Operamos con lluvia o sol. En tormentas extremas ofreciendo cambio de fecha sin costo.',
    },
    category: 'booking',
  },
];

export const DESTINATIONS_DATA: Destination[] = [
  {
    id: 'sierra-tigre',
    name: 'Mirador Sierra del Tigre',
    elevation: '2,800 m',
    distanceFromHQ: '6.0 km',
    difficulty: { en: '1 Hour Route', es: 'Ruta 1 Hora' },
    description: {
      en: 'The legendary summit viewpoint offering panoramic cloud forest vistas over Mazamitla.',
      es: 'El icónico mirador cumbre de Mazamitla con vistas panorámicas sobre el bosque de nubes.',
    },
    image: TOURS_DATA[0].image,
    coordinates: { x: 75, y: 30 },
  },
  {
    id: 'valle-juarez',
    name: 'Presa Valle de Juárez',
    elevation: '2,150 m',
    distanceFromHQ: '12.5 km',
    difficulty: { en: '2 Hours Route', es: 'Ruta 2 Horas' },
    description: {
      en: 'Picturesque lakefront boardwalk and overlooks at Presa Valle de Juárez.',
      es: 'Emblemático Malecón de la Presa en Valle de Juárez con brisa y miradores al agua.',
    },
    image: TOURS_DATA[1].image,
    coordinates: { x: 25, y: 70 },
  },
  {
    id: 'hacienda-aguacatera',
    name: 'Corazón de Aguacatera & Hacienda',
    elevation: '2,350 m',
    distanceFromHQ: '5.2 km',
    difficulty: { en: '1 Hour Route', es: 'Ruta 1 Hora' },
    description: {
      en: 'Scenic orchard canyon viewpoint and historical abandoned hacienda ruins.',
      es: 'Mirador a las cañadas de huertos y ruinas de la mística Hacienda Abandonada.',
    },
    image: TOURS_DATA[2].image,
    coordinates: { x: 45, y: 40 },
  },
  {
    id: 'cascada-salto',
    name: 'Cascada El Salto',
    elevation: '2,180 m',
    distanceFromHQ: '8.5 km',
    difficulty: { en: '2 Hours Route', es: 'Ruta 2 Horas' },
    description: {
      en: 'Impressive mountain canyon waterfall with crystal clear streams and rocky passes.',
      es: 'Impresionante caída de agua entre la cañada rocosa de la montaña.',
    },
    image: TOURS_DATA[3].image,
    coordinates: { x: 20, y: 35 },
  },
  {
    id: 'dos-aguas-barranca',
    name: 'Mirador Dos Aguas & Barranca Verde',
    elevation: '2,450 m',
    distanceFromHQ: '7.0 km',
    difficulty: { en: '1-2 Hours Route', es: 'Ruta 1-2 Horas' },
    description: {
      en: 'Dividing ridge between mountain watersheds and lush green canyon trails.',
      es: 'Mirador de la divisoria de cuencas e incursión en la frondosa Barranca Verde.',
    },
    image: TOURS_DATA[5].image,
    coordinates: { x: 60, y: 65 },
  },
  {
    id: 'camino-real',
    name: 'Camino Real del Tigre',
    elevation: '2,850 m',
    distanceFromHQ: '18.0 km',
    difficulty: { en: '3 Hours Route', es: 'Ruta 3 Horas' },
    description: {
      en: 'Historic muleteer trail deep in the mountain wilderness for extreme off-road enthusiasts.',
      es: 'Ruta histórica de travesía profunda por la serranía para amantes del off-road extremo.',
    },
    image: TOURS_DATA[6].image,
    coordinates: { x: 85, y: 80 },
  },
  {
    id: 'puerta-cielo-la-chuta',
    name: 'Puerta del Cielo & Cantina La Chuta',
    elevation: '2,720 m',
    distanceFromHQ: '9.0 km',
    difficulty: { en: '2 Hours Route', es: 'Ruta 2 Horas' },
    description: {
      en: 'Heavenly mountain ridge viewpoint paired with the iconic pitstop at Cantina La Chuta.',
      es: 'Mirador celestial de altura y la parada obligatoria tradicional en Cantina La Chuta.',
    },
    image: TOURS_DATA[7].image,
    coordinates: { x: 35, y: 85 },
  },
];
