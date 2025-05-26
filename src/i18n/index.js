import { createI18n } from 'vue-i18n'

// Mensajes en español
const es = {
  nav: {
    home: 'Inicio',
    about: 'Sobre Nosotros',
    contact: 'Contacto',
    history: 'Nuestra Historia'
  },
  home: {
    welcome: 'Bienvenido a Goikode',
    tagline: 'Especialistas en ciberseguridad y desarrollo seguro',
    learnMore: 'Conoce más',
    features: {
      protection: {
        title: 'Protección Avanzada',
        description: 'Nuestras soluciones de seguridad protegen tu negocio contra las amenazas más sofisticadas.'
      },
      development: {
        title: 'Desarrollo Seguro',
        description: 'Creamos aplicaciones con seguridad integrada desde el diseño hasta la implementación.'
      },
      consulting: {
        title: 'Consultoría Especializada',
        description: 'Nuestro equipo de expertos te guiará en la implementación de las mejores prácticas de seguridad.'
      }
    }
  },
  about: {
    title: 'Sobre Goikode',
    mission: {
      title: 'Nuestra Misión',
      description: 'En Goikode, nuestra misión es ayudar a las empresas a crecer de forma segura en un mundo digital cada vez más complejo y lleno de amenazas.'
    },
    history: {
      title: 'Nuestra Historia',
      description: 'Fundada en 2015 por un grupo de expertos en seguridad informática, Goikode nació con la visión de democratizar el acceso a soluciones de ciberseguridad de alta calidad.'
    },
    team: {
      title: 'El Equipo',
      description: 'Nuestro equipo está formado por profesionales certificados con experiencia en entornos críticos. Nos caracteriza nuestro enfoque práctico y directo, evitando soluciones genéricas en favor de implementaciones precisas.'
    },
    funFact: {
      title: '¿Sabías que...?',
      description: 'El nombre "Goikode" viene de la combinación de "goiko" (que significa "superior" en euskera) y "code" (código en inglés). Aunque nuestro CEO insiste en que se le ocurrió mientras comía un pintxo de tortilla.'
    }
  },
  history: {
    title: 'Nosotros y Nuestro Campo de Trabajo',
    mission: {
      title: 'Nuestros comienzos',
      description: 'Nacimos en 2015, con solo dos trabajadores. Tras mucho esfuerzo, pudimos duplicar la plantilla y obtener clientes mas grandes como Iberdrola.'
    },
    history: {
      title: 'Nuestra Clientela',
      description: 'Destacamos sobre las demás empresas por nuestros clientes. Ellos confian en nosotros, tanto, como nosotros en ellos. Pues la base de una buena empresa es su calidad y confianza.'
    },
    team: {
      title: 'La Programación',
      description: 'A día de hoy, es imposible usar algo que no contenga algo de programación: una web, el movil, el coche. Por eso es imprescindible tener un fuerte control sobre ella, además de alidos confiables.'
    } 
  },
  contact: {
    title: 'Contactanos',
    name: {
      title: 'Nombre',
    },
    email: {
      title: 'Email',
    },
    message: {
      title: 'Asunto',
    },
    send: {
      title: 'Enviar',
    } 
  },
  footer: {
    rights: 'Todos los derechos reservados.'
  },
  languageSelector: {
    label: 'Idioma'
  }
}

// Mensajes en inglés
const en = {
  nav: {
    home: 'Home',
    about: 'About Us',
    contact: 'contact',
    history: 'Our History'
  },
  home: {
    welcome: 'Welcome to Goikode',
    tagline: 'Specialists in cybersecurity and secure development',
    learnMore: 'Learn more',
    features: {
      protection: {
        title: 'Advanced Protection',
        description: 'Our security solutions protect your business against the most sophisticated threats.'
      },
      development: {
        title: 'Secure Development',
        description: 'We create applications with security integrated from design to implementation.'
      },
      consulting: {
        title: 'Specialized Consulting',
        description: 'Our team of experts will guide you in implementing security best practices.'
      }
    }
  },
  about: {
    title: 'About Goikode',
    mission: {
      title: 'Our Mission',
      description: 'At Goikode, our mission is to help companies grow safely in an increasingly complex and threat-filled digital world.'
    },
    history: {
      title: 'Our History',
      description: 'Founded in 2015 by a group of cybersecurity experts, Goikode was born with the vision of democratizing access to high-quality cybersecurity solutions.'
    },
    team: {
      title: 'The Team',
      description: 'Our team consists of certified professionals with experience in critical environments. We are characterized by our practical and direct approach, avoiding generic solutions in favor of precise implementations.'
    },
    funFact: {
      title: 'Did you know...?',
      description: 'The name "Goikode" comes from the combination of "goiko" (which means "superior" in Basque) and "code" (in English). Although our CEO insists that it came to him while eating a Spanish omelette pintxo.'
    }
  },
  history: {
    title: 'Us and Our Field',
    mission: {
      title: 'Our Beginnings',
      description: 'We were born in 2015, with only two employees. After a great effort, we were able to double our team and acquire larger clients, such as Iberdrola.'
    },
    history: {
      title: 'Our Clients',
      description: 'We stand out from other companies because of our clients. They trust us as much as we trust them. After all, the foundation of a good company is quality and trust.'
    },
    team: {
      title: 'Programming',
      description: 'Nowadays, it is impossible to use anything that does not involve programming: a website, a mobile phone, a car. That is why having strong control over it as well as reliable allies is essential.'
    } 
  },
  contact: {
    title: 'Contact Form',
    name: {
      title: 'Name',
    },
    email: {
      title: 'Email',
    },
    message: {
      title: 'Subject',
    },
    send: {
      title: 'Send',
    } 
  },
  footer: {
    rights: 'All rights reserved.'
  },
  languageSelector: {
    label: 'Language'
  }
}

// Mensajes en euskera
const eu = {
  nav: {
    home: 'Hasiera',
    about: 'Guri Buruz',
    contact: 'kontaktua',
    history: 'gure historia'
  },
  home: {
    welcome: 'Ongi etorri Goikode-ra',
    tagline: 'Zibersegurtasunean eta garapen seguruan espezialistak',
    learnMore: 'Gehiago jakin',
    features: {
      protection: {
        title: 'Babes Aurreratua',
        description: 'Gure segurtasun-irtenbideek zure negozioa mehatxu sofistikatuenetatik babesten dute.'
      },
      development: {
        title: 'Garapen Segurua',
        description: 'Diseinutik inplementaziora segurtasuna integratuta duten aplikazioak sortzen ditugu.'
      },
      consulting: {
        title: 'Aholkularitza Espezializatua',
        description: 'Gure adituen taldeak segurtasun-praktika onenak ezartzen lagunduko dizu.'
      }
    }
  },
  about: {
    title: 'Goikode-ri Buruz',
    mission: {
      title: 'Gure Misioa',
      description: 'Goikoden, gure misioa enpresak gero eta konplexuagoa eta mehatxuz betetako mundu digitalean seguru hazten laguntzea da.'
    },
    history: {
      title: 'Gure Historia',
      description: '2015ean zibersegurtasuneko aditu talde batek sortua, Goikode kalitate handiko zibersegurtasun-irtenbideetarako sarbidea demokratizatzeko ikuspegiarekin jaio zen.'
    },
    team: {
      title: 'Taldea',
      description: 'Gure taldea ingurune kritikoetan esperientzia duten profesional ziurtatuek osatzen dute. Gure ikuspegi praktiko eta zuzenak ezaugarritzen gaitu, soluzio generikoak saihestuz inplementazio zehatzen alde.'
    },
    funFact: {
      title: 'Ba al zenekien...?',
      description: '"Goikode" izena "goiko" (euskaraz "gorenekoa" esan nahi duena) eta "code" (ingelesez kodea) konbinaziotik dator. Nahiz eta gure CEOk dio tortilla pintxo bat jaten ari zela bururatu zitzaiola.'
    }
  },
  history: {
    title: 'Gu eta gure zelaia',
    mission: {
      title: 'Gure hastapenak',
      description: '2015ean jaio ginen, bi langilerekin bakarrik. Ahalegin handia egin ondoren, plantilla bikoiztu eta bezero handiagoak lortu ahal izan genituen, hala nola Iberdrola.'
    },
    history: {
      title: 'Gure bezeroak',
      description: 'Gure bezeroengatik nabarmentzen gara gainerako enpresen gainetik. Haiek gugan konfiantza dute, guk haiengan bezainbeste. Bada, enpresa on baten oinarria kalitatea eta konfiantza dira.'
    },
    team: {
      title: 'Programazioa',
      description: 'Gaur egun, ezinezkoa da programazio zerbait ez duen zerbait erabiltzea: webgune bat, mugikorra, autoa. Horregatik, ezinbestekoa da haren gaineko kontrol handia izatea, baita alido fidagarriak ere.'
    } 
  },
  contact: {
    title: 'Kontaktuak',
    name: {
      title: 'Izena',
    },
    email: {
      title: 'Emaila',
    },
    message: {
      title: 'Gaia',
    },
    send: {
      title: 'Bidali',
    } 
  },
  footer: {
    rights: 'Eskubide guztiak erreserbatuak.'
  },
  languageSelector: {
    label: 'Hizkuntza'
  }
}

// Determinar el idioma inicial
function getInitialLocale() {
    // Primero, intentar obtener el idioma guardado en localStorage
    const savedLocale = localStorage.getItem('userLocale')
    if (savedLocale && ['es', 'en', 'eu'].includes(savedLocale)) {
      return savedLocale
    }
    
    // Si no hay idioma guardado, intentar usar el idioma del navegador
    const browserLocale = navigator.language.split('-')[0]
    if (['es', 'en', 'eu'].includes(browserLocale)) {
      return browserLocale
    }
    
    // Por defecto, usar español
    return 'es'
  }
  
  // Crear instancia de i18n
  const i18n = createI18n({
    legacy: false,
    locale: getInitialLocale(),
    fallbackLocale: 'es',
    messages: {
      es,
      en,
      eu
    }
  })
  
  export default i18n