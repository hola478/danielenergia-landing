import { useState } from 'react'

const WHATSAPP_URL =
  'https://wa.me/34651388685?text=Hola%20Daniel,%20me%20gustar%C3%ADa%20consultarte%20mi%20caso.'

const INSTAGRAM_URL = 'https://www.instagram.com/danielenergia'
const FACEBOOK_URL = 'https://www.facebook.com/'

const copy = {
  es: {
    langLabel: 'Castellano',
    navServices: 'Servicios',
    navAbout: 'Sobre Daniel',
    navContact: 'Contacto',
    eyebrow: 'Daniel Energía',
    title: 'Asesor energético cercano e independiente',
    subtitle:
      'Te ayudo a entender qué solución energética puede encajar con tu vivienda.',
    heroText:
      'Fotovoltaica, aerotermia, baterías, cargadores para vehículo eléctrico y mantenimiento, explicado de forma clara y sin complicarte.',
    primaryCta: 'Consultar por WhatsApp',
    secondaryCta: 'Ver servicios',
    trust1: 'Atención personal',
    trust2: 'Lenguaje claro',
    trust3: 'Soluciones reales',
    servicesTitle: 'Soluciones energéticas para tu vivienda',
    servicesSubtitle:
      'Una primera orientación sencilla para saber qué puede tener sentido en tu caso.',
    services: [
      {
        title: 'Fotovoltaica',
        text: 'Instalaciones solares para reducir consumo eléctrico y aprovechar mejor la energía de tu vivienda.'
      },
      {
        title: 'Aerotermia',
        text: 'Soluciones eficientes para climatización y agua caliente, especialmente interesantes en viviendas familiares.'
      },
      {
        title: 'Baterías',
        text: 'Acumulación energética para aprovechar mejor los excedentes solares y ganar autonomía.'
      },
      {
        title: 'Cargadores VE',
        text: 'Puntos de carga para vehículo eléctrico en vivienda particular o garaje comunitario.'
      },
      {
        title: 'Mantenimiento',
        text: 'Revisión y seguimiento de instalaciones para conservar rendimiento, seguridad y tranquilidad.'
      }
    ],
    aboutTitle: 'Un asesor que te lo explica sin rodeos',
    aboutText1:
      'Daniel trabaja desde la cercanía y la experiencia. Su objetivo no es venderte una solución compleja, sino ayudarte a entender qué encaja con tu vivienda, tu consumo y tu situación.',
    aboutText2:
      'Si hay una solución interesante, te la explica. Si no tiene sentido, también te lo dice. La idea es que puedas tomar una decisión informada, sin presión y con claridad.',
    processTitle: 'Cómo funciona',
    process: [
      'Le escribes por WhatsApp y le explicas tu caso.',
      'Daniel te llama personalmente para entender la vivienda y tus necesidades.',
      'Te orienta sobre la solución que puede encajar mejor.'
    ],
    finalCtaTitle: '¿Quieres saber si te compensa dar el paso?',
    finalCtaText:
      'Escríbele a Daniel y cuéntale tu caso. Te responderá personalmente.',
    footerText:
      'Daniel Energía · Asesor energético independiente en Cataluña',
    email: 'info@danielenergia.es'
  },
  ca: {
    langLabel: 'Català',
    navServices: 'Serveis',
    navAbout: 'Sobre Daniel',
    navContact: 'Contacte',
    eyebrow: 'Daniel Energia',
    title: 'Assessor energètic proper i independent',
    subtitle:
      'T’ajudo a entendre quina solució energètica pot encaixar amb el teu habitatge.',
    heroText:
      'Fotovoltaica, aerotèrmia, bateries, carregadors per a vehicle elèctric i manteniment, explicat de manera clara i sense complicacions.',
    primaryCta: 'Consultar per WhatsApp',
    secondaryCta: 'Veure serveis',
    trust1: 'Atenció personal',
    trust2: 'Llenguatge clar',
    trust3: 'Solucions reals',
    servicesTitle: 'Solucions energètiques per al teu habitatge',
    servicesSubtitle:
      'Una primera orientació senzilla per saber què pot tenir sentit en el teu cas.',
    services: [
      {
        title: 'Fotovoltaica',
        text: 'Instal·lacions solars per reduir el consum elèctric i aprofitar millor l’energia del teu habitatge.'
      },
      {
        title: 'Aerotèrmia',
        text: 'Solucions eficients per a climatització i aigua calenta, especialment interessants en habitatges familiars.'
      },
      {
        title: 'Bateries',
        text: 'Acumulació energètica per aprofitar millor els excedents solars i guanyar autonomia.'
      },
      {
        title: 'Carregadors VE',
        text: 'Punts de càrrega per a vehicle elèctric en habitatge particular o garatge comunitari.'
      },
      {
        title: 'Manteniment',
        text: 'Revisió i seguiment d’instal·lacions per conservar rendiment, seguretat i tranquil·litat.'
      }
    ],
    aboutTitle: 'Un assessor que t’ho explica sense embuts',
    aboutText1:
      'Daniel treballa des de la proximitat i l’experiència. El seu objectiu no és vendre’t una solució complexa, sinó ajudar-te a entendre què encaixa amb el teu habitatge, el teu consum i la teva situació.',
    aboutText2:
      'Si hi ha una solució interessant, te l’explica. Si no té sentit, també t’ho diu. La idea és que puguis prendre una decisió informada, sense pressió i amb claredat.',
    processTitle: 'Com funciona',
    process: [
      'Li escrius per WhatsApp i li expliques el teu cas.',
      'Daniel et truca personalment per entendre l’habitatge i les teves necessitats.',
      'T’orienta sobre la solució que pot encaixar millor.'
    ],
    finalCtaTitle: 'Vols saber si et compensa fer el pas?',
    finalCtaText:
      'Escriu a Daniel i explica-li el teu cas. Et respondrà personalment.',
    footerText:
      'Daniel Energia · Assessor energètic independent a Catalunya',
    email: 'info@danielenergia.es'
  }
}

function Logo() {
  return (
    <div className="logo" aria-label="Daniel Energía">
      <img src="/logo.png" alt="Daniel Energía" />
    </div>
  )
}

function ServiceIcon({ index }) {
  const icons = ['☀️', '🌡️', '🔋', '🚗', '🛠️']
  return <div className="service-icon">{icons[index]}</div>
}

export default function App() {
  const [lang, setLang] = useState('es')
  const t = copy[lang]

  return (
    <main>
      <header className="site-header">
        <a href="#inicio" className="brand-link">
          <Logo />
        </a>

        <nav className="desktop-nav">
          <a href="#servicios">{t.navServices}</a>
          <a href="#daniel">{t.navAbout}</a>
          <a href="#contacto">{t.navContact}</a>
        </nav>

        <div className="lang-switch" aria-label="Selector de idioma">
          <button
            className={lang === 'es' ? 'active' : ''}
            onClick={() => setLang('es')}
          >
            ES
          </button>
          <button
            className={lang === 'ca' ? 'active' : ''}
            onClick={() => setLang('ca')}
          >
            CA
          </button>
        </div>
      </header>

      <section id="inicio" className="hero section">
        <div className="hero-content">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="subtitle">{t.subtitle}</p>
          <p className="hero-text">{t.heroText}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={WHATSAPP_URL}>
              {t.primaryCta}
            </a>
            <a className="btn btn-secondary" href="#servicios">
              {t.secondaryCta}
            </a>
          </div>

          <div className="trust-row" aria-label="Valores principales">
            <span>{t.trust1}</span>
            <span>{t.trust2}</span>
            <span>{t.trust3}</span>
          </div>
        </div>

        <div className="hero-card">
          <div className="photo-real">
  <img src="/daniel.png" alt="Daniel Gómez Farreny, asesor energético" />
  <div className="photo-text">
    <strong>Daniel Gómez Farreny</strong>
    <span>Asesor energético</span>
  </div>
</div>

          <div className="mini-card">
            <strong>Consulta clara y personal</strong>
            <p>
              Fotovoltaica · Aerotermia · Baterías · Cargadores VE ·
              Mantenimiento
            </p>
          </div>
        </div>
      </section>

      <section id="servicios" className="section services-section">
        <div className="section-heading">
          <p className="eyebrow">{t.navServices}</p>
          <h2>{t.servicesTitle}</h2>
          <p>{t.servicesSubtitle}</p>
        </div>

        <div className="services-grid">
          {t.services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <ServiceIcon index={index} />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="daniel" className="section about-section">
        <div className="about-box">
          <div>
            <p className="eyebrow">{t.navAbout}</p>
            <h2>{t.aboutTitle}</h2>
          </div>

          <div className="about-text">
            <p>{t.aboutText1}</p>
            <p>{t.aboutText2}</p>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading compact">
          <p className="eyebrow">Proceso</p>
          <h2>{t.processTitle}</h2>
        </div>

        <div className="process-grid">
          {t.process.map((step, index) => (
            <div className="process-card" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" className="section final-cta">
        <div>
          <p className="eyebrow">{t.navContact}</p>
          <h2>{t.finalCtaTitle}</h2>
          <p>{t.finalCtaText}</p>
        </div>

        <a className="btn btn-primary large" href={WHATSAPP_URL}>
          {t.primaryCta}
        </a>
      </section>

      <footer className="site-footer">
        <Logo />

        <div className="footer-links">
          <a href={`mailto:${t.email}`}>{t.email}</a>
          <a href={INSTAGRAM_URL}>Instagram</a>
          <a href={FACEBOOK_URL}>Facebook</a>
        </div>

        <p>{t.footerText}</p>
      </footer>
    </main>
  )
}
