import { Tour, PackagePlan, GalleryItem, FAQItem, Destination } from '../types';

export const LOGO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeL08nT1VgIH9O5uolJVB1NcX0twTevZYkuEmShkvrP9j2VxMWSAW7jRx53GVBc4uQt46cvJbFFgPcnYbZkG2ISF5wqlHqCDhMO2D2mHrxNXpjAdYcB_qhD7ZNEUGbIFRKwT25wDrjDmExTSy97SadtIPtQcZA9tDPexomq5cXO_46aFF4QZg8Srf1lwrzGxfoWcuYhCIMTJMOuX39cGwL3hly74WX67XOr-qBx2T0bDI2tzCnxWfBf4Phh-kwXX_RXjyNwfx7cZux';

export const HERO_BG_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhwXiL0m0xrCFFR07bI64PEPE0as02r8jM8ivx_FvpEGvegrladxqiS1nkC7q9fm5ebsFtzDtc9BgfTPDvw1za5Z4ou5So8SccluivNJZC1jyab942ykh46LMK1MeaEMLks_yN3FQ7lNJSdYezxZW4VQ0BVCFzqZPEEOM-VD7q5i_899a8bTT8gXTTp_cx-4QRTzd9_5D_nhObwzQ3rt_9p1C1YyrLwSwmUSqonvmEut24NTBJ5WbLTsmKtKLNU1lcloikGvw-WKeO';

export const GUIDE_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnWL3KDKnARwBgKjQIEukhyV6lYKYq301HfHoTnTnVBuQ0TFuQDDCWCDO-WyNHh1wqF0dt5y4cU5IWC1qVJ9LbSjMWKjn7p2yOk1J5DuRMx6a-uX8Dk2vv_IHfkDComzFth1NiqqBP82QgH9wlXwfU2VO-fZlX0tnGcrKPpSgWtlyj9aw9Pd8h1Df6NuBWjJDoCUcY1rWkhO3SgWtTpReTXeZsrOemsX74TomVQQ_s9mC5Ey_LTZiR8lY-Xlfqm0tAmmt9PUrjJNOs';

export const MAP_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmXSLS9mBB-vETI3xErM9mDBuCNP_Mwm3pP9IRbsr5UYzT_aLpx0_wh9q5AAeC60bRYp4Widyq0HubKPtVKUaqrYFO5_KANsLxC_-7cMuBlcuKc-ZCfCQKe56JuxvkvvdzbGKX-duLAsMWQCn_VC-ywO2N9YjiSj8k7ueZrSAlMMUa1CagU19sGrXP0iYJD0COnv3Yys1Hlpb5ox90A3eJJrjRNFdMKCfV6aM8n0k2hACGscrDDUn7mXOQhu4EQ4YJx0FFVRD4D75H';

export const TOURS_DATA: Tour[] = [
  {
    id: 'forest-gauntlet',
    title: {
      en: 'Forest Gauntlet',
      es: 'El Guantelete del Bosque',
    },
    subtitle: {
      en: 'High contrast deep pine mud trail & rock crawling challenge',
      es: 'Ruta extrema de lodo profundo y rocas entre pinos milenarios',
    },
    price: 180,
    duration: '4 Hours',
    difficulty: {
      en: 'Pro Level',
      es: 'Nivel Experto',
    },
    tag: {
      en: 'Hardcore',
      es: 'Extremo',
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1sCZYHZe9pi9u5yBDY2_G0R2O56N890dXIB4ViOUBBTSFHxEFaP-a8wR13nVo0qkhtx7QraV4I64zIqSTz3FDEGRhBlo3se_HrxD5aL8Z8P3aLZb2AVW2w26OZuOQ9s6VnGbvuwmcGN9PLiK6hgwbI5VZQ8OEgVENrHDHQExdoevsACvonRszPkwXti_X3jhRqgrchBVoQdKMvdaLxdqty_X1RETfz_Bvd_uXm11nhAkaqZ04CcLdH8kp18cFvkDOxRzOkLsIimK7',
    description: {
      en: 'Conquer steep, mud-drenched mountain passes through Sierra del Tigre. Built for drivers looking for maximum adrenaline, heavy wheel spinning, and steep elevation drops.',
      es: 'Conquista pasos de montaña empinados y llenos de lodo a través de la Sierra del Tigre. Diseñado para pilotos que buscan adrenalina pura y desafíos técnicos.',
    },
    highlights: {
      en: [
        'Deep Mud Pits & River Crossings',
        'Rock Crawling Peak Incline',
        'Certified Extreme Off-Road Lead Guide',
        'HD GoPro Footage Included',
      ],
      es: [
        'Pozos de Lodo Profundo y Cruce de Ríos',
        'Ascenso Técnico en Rocas',
        'Guía Certificado de Off-Road Extremo',
        'Grabación HD GoPro Incluida',
      ],
    },
    vehicleType: '2024 Can-Am Maverick X3 RS / Polaris RZR Turbo R',
    included: {
      en: [
        'DOT Approved Full Helmet & Dust Goggles',
        'Hydration Pack & Energy Snacks',
        'Vehicle Fuel & Clean Up',
        'Passenger Insurance',
      ],
      es: [
        'Casco Certificado DOT y Gafas Anti-Polvo',
        'Paquete de Hidratación y Snacks Energéticos',
        'Combustible y Limpieza del Vehículo',
        'Seguro para Pasajeros',
      ],
    },
  },
  {
    id: 'twilight-run',
    title: {
      en: 'Twilight Run',
      es: 'Ruta del Crepúsculo',
    },
    subtitle: {
      en: 'Sunset mountain ridge pursuit ending with a roaring forest bonfire',
      es: 'Aventura al atardecer culminando en una fogata gigante bajo las estrellas',
    },
    price: 250,
    duration: '6 Hours',
    difficulty: {
      en: 'Intermediate',
      es: 'Intermedio',
    },
    tag: {
      en: 'Most Popular',
      es: 'Más Popular',
    },
    featured: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVjgBOduuCe1SdmFC9U_FVws0EBnprKxss5A7G6L9alxGkkrqkAdpGxsvUqqd9KWbtuYm5KMVE0fCbuQFGN7gC2iEOOUTaPICtGDcXZNPdaY8ko3KCx1eIY6-APeka0wTWytqGXmP9RLjVHyshh_6YL6KpTko7yPib_4SnqECYZ3dQeDJb8lOTa_ldyLuA1gCIwvSE1oWNx3r9IkpZaI7NCgQq01XOi1hU-xqV-TUKtYOLx44IT7x1oUYGY-BsYRwiN5jyXowmPMd5',
    description: {
      en: 'Our signature dusk expedition. Cruise through mist-laden pine canopy with high-power light bars activated, ending at a private mountain campsite with bonfire, artisanal food, and craft drinks.',
      es: 'Nuestra expedición insignia al anochecer. Recorre el bosque húmedo con barras de luz LED activadas y termina en un campamento privado con fogata y comida artesanal.',
    },
    highlights: {
      en: [
        'Golden Hour Panoramic Summit Viewpoint',
        'LED Light-Bar Night Ride',
        'Forest Bonfire & Camp Fireplace Experience',
        'Artisanal BBQ & Beverage Tasting',
      ],
      es: [
        'Mirador Cumbre en Hora Dorada',
        'Paseo Nocturno con Luces LED de Alta Potencia',
        'Experiencia de Fogata en el Bosque',
        'Asado Artesanal y Degustación',
      ],
    },
    vehicleType: '2024 Luxury 4-Seater UTV Can-Am / Polaris',
    included: {
      en: [
        'Thermal Riding Gear & Helmets',
        'Bonfire Barbecue Dinner & Drinks',
        'VIP Camp Setup',
        'Full Digital Photo Gallery',
      ],
      es: [
        'Equipo Térmico y Cascos de Protección',
        'Cena Asada a la Fogata y Bebidas',
        'Instalación VIP en Campamento',
        'Galería Fotográfica Digital Completa',
      ],
    },
  },
  {
    id: 'scenic-ridge',
    title: {
      en: 'Scenic Ridge',
      es: 'Cresta Panorámica',
    },
    subtitle: {
      en: 'Panoramic mountain vistas & forest canopy exploration',
      es: 'Vistas panorámicas impresionantes y exploración del dosel arbóreo',
    },
    price: 140,
    duration: '3 Hours',
    difficulty: {
      en: 'Beginner',
      es: 'Principiante',
    },
    tag: {
      en: 'Relaxed',
      es: 'Relajado',
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEU9w8cdC_qIqW0nfAep3h9HborRztIOLerPcff17XDtjptGHvZtlmfZCJazubkHrHQl8bWKBRp_kTTlkKRpDsuI9XZkxsJ8jPi9msP-rL5kmA5zcd7zZQ1S92aB5MoIhSUyuX_SABoUdze0fZ5UUioGtH1OtnH7zSNyvE0m9HcDgQffLwj8emuZMcdmAwjcUcSLJ43QNLqA4yE9OTNv3wTH9Rrg0vmrBH1_dS6ult8-vfqaUIXlCmPPHy_B4BzzwoSC40s9z-o0ql',
    description: {
      en: 'Ideal for families, couples, and first-time drivers. Cruise smoothly along elevated mountain trails with frequent photo stops at Mazamitla landmark vistas.',
      es: 'Ideal para familias, parejas y conductores principiantes. Disfruta un recorrido fluido por senderos elevados con paradas fotográficas inolvidables.',
    },
    highlights: {
      en: [
        '3 Major Scenic Overlook Stops',
        'Easy-Handling Automatic UTVs',
        'Visit to La Toscana Historical Pine Grove',
        'Local Coffee & Gourmet Pastry Break',
      ],
      es: [
        '3 Paradas en Miradores Espectaculares',
        'Vehículos UTV Automáticos de Fácil Manejo',
        'Visita al Pinar Histórico La Toscana',
        'Pausa de Café Local y Repostería',
      ],
    },
    vehicleType: '2024 Comfort-Series UTV 2-Seater & 4-Seater',
    included: {
      en: [
        'Comprehensive Safety Briefing',
        'Protective Helmets & Dust Masks',
        'Coffee & Snack Break',
        'Full Guide Support',
      ],
      es: [
        'Instrucción de Seguridad Completa',
        'Cascos y Mascarillas Anti-Polvo',
        'Café y Snack en Parada Técnica',
        'Acompañamiento de Guía Experto',
      ],
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
      en: 'Alpine Sunrise Trail',
      es: 'Amanecer Alpino en las Cumbres',
    },
    category: 'Scenery',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjIJxdLGNMYUyjb_VIQaKuVVsfNKfAyfEPd1RIQ5MDBxDJd0Nj3HP9yQMJYfB42JZiYdZ3rkUQbNmAU0P6n67nBql2lEdQYPnTGvjjv8gjt009cZPgiSaev3285ULB-tFNbA6mRa-4lyOIkN1DWw4Agi4ljZtn0IJKtOY33e1JrlaBOrM8vxqh5ZZlFaYuJO6PA3UwBRlMD5Lx9bLQhUPJWL6qIGaf6qhQRmgg1NIVxx4mF3Dern7GOgweGFujwJ7eEChtj8pv7rJt',
    location: 'Sierra del Tigre - Summit Peak',
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
    id: 'hq',
    name: 'Chukyza Basecamp HQ',
    elevation: '2,240 m',
    distanceFromHQ: '0 km',
    difficulty: { en: 'Base', es: 'Base' },
    description: {
      en: 'Main staging area, vehicle briefing zone, equipment fitting, and coffee lounge.',
      es: 'Sede principal, zona de briefing, ajuste de equipo y lounge de bienvenida.',
    },
    image: GUIDE_IMAGE,
    coordinates: { x: 50, y: 55 },
  },
  {
    id: 'toscana',
    name: 'La Toscana Pine Forest',
    elevation: '2,410 m',
    distanceFromHQ: '4.2 km',
    difficulty: { en: 'Intermediate', es: 'Intermedio' },
    description: {
      en: 'Dense ancient pine tree grove with tight technical turns and mud gullies.',
      es: 'Pinar denso y antiguo con curvas técnicas y grietas de lodo.',
    },
    image: TOURS_DATA[0].image,
    coordinates: { x: 72, y: 28 },
  },
  {
    id: 'salto',
    name: 'El Salto Waterfall Viewpoint',
    elevation: '2,180 m',
    distanceFromHQ: '8.5 km',
    difficulty: { en: 'Relaxed', es: 'Relajado' },
    description: {
      en: 'Stunning canyon waterfall drop surrounded by moss-covered rocks and misty trails.',
      es: 'Impresionante cascada rodeada de rocas con musgo y senderos entre la bruma.',
    },
    image: TOURS_DATA[2].image,
    coordinates: { x: 22, y: 40 },
  },
  {
    id: 'sierra-summit',
    name: 'Sierra del Tigre High Ridge',
    elevation: '2,800 m',
    distanceFromHQ: '14.0 km',
    difficulty: { en: 'Hardcore', es: 'Extremo' },
    description: {
      en: 'The highest ridge in Mazamitla with 360-degree vistas above the clouds.',
      es: 'La cresta más alta de Mazamitla con vistas de 360 grados sobre las nubes.',
    },
    image: TOURS_DATA[1].image,
    coordinates: { x: 80, y: 75 },
  },
];
