<template>
<main>
  <section id="hero">
    <div class="container">
      <div class="hero-container">
        <div class="left">
          <Hero-text />
        </div>
        <div class="right">
          <hero-slideshow />
        </div>

      </div>

    </div>
  </section>

  <section id="offers" class="section-with-wave">
    <Reveal>
      <div class="decorative-line-top">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true" role="presentation" focusable="false">
          <path d="M0,60 C240,-40 1200,160 1440,60" stroke="#a4c1fd" stroke-width="4" fill="none" />
        </svg>
      </div>
      <SectionTitle title="Što nudimo"
        subtitle="Sve što vam treba za gradnju i obradu metala - brzo, precizno i pouzdano" />
    </Reveal>
    <Reveal>
      <ServiceCards />
    </Reveal>
    <div class="decorative-line">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true" role="presentation" focusable="false">
        <path d="M0,0 C300,150 900,-50 1440,60" stroke="#a4c1fd" stroke-width="4" fill="none" />
      </svg>
    </div>
  </section>
  <section id="partners">

    <SectionTitle title="Partneri" subtitle="Naši partneri - suradnje koje govore više od riječi" />
    <div class="container">
      <Reveal>
        <PartnerGrid />
      </Reveal>
    </div>

  </section>

  <section id="numbers">

    <Numbers />
  </section>

  <section id="contact">
    <reveal>
      <SectionTitle title="Kontaktirajte nas"
        subtitle="Spremni smo odgovoriti na sva vaša pitanja i pomoći vam u vašim projektima" />
    </reveal>
    <div class="container">
      <Reveal>
        <Contact />
      </Reveal>
    </div>

  </section>
</main>
</template>

<script setup>
useHead({
  title: 'Čelične konstrukcije, paneli i željezo | Moding Junior Pula',
  meta: [
    {
      name: 'description',
      content: 'Moding Junior iz Pule – više od 30 godina iskustva u proizvodnji i montaži čeličnih konstrukcija, prodaji željeza, krovnih i zidnih panela, te metalnih ograda i kapija.'
    },
    {
      property: 'og:title',
      content: 'Čelične konstrukcije, paneli i željezo | Moding Junior Pula'
    },
    {
      property: 'og:description',
      content: 'Specijalizirani za izradu čeličnih konstrukcija, krovne panele, metalne ograde i kapije. Poslujemo diljem Istre, s bazom u Puli.'
    },
    {
      property: 'og:image',
      content: 'https://moding-junior.hr/images/og-image.jpg'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://moding-junior.hr'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      name: 'keywords',
      content: 'čelične konstrukcije, prodaja željeza, željezne konstrukcije, čelične hale, paneli za krov, sendvič paneli, metalne ograde, aluminijske kapije, Pula, Istra, Moding Junior'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://moding-junior.hr'
    }
  ]
})
</script>



<style scoped>
#partners,
#offers,
#contact {
  scroll-margin-top: 110px;
}

.container {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

#numbers {
  margin-block: 4rem 6rem;
}

#contact {
  margin-block: 4rem 6rem;
}

#offers {
  margin-block: 0rem 6rem;
  padding: 50px 40px;
  margin-bottom: 0px;
  background-color: rgb(255, 255, 251);
}

#hero {
  margin-top: 30px;
  padding: 80px 120px 30px 120px;
  position: relative;
  background-color: rgb(255, 255, 248);
}

#partners {

  background: linear-gradient(to bottom right, rgb(255, 255, 251), rgb(255, 255, 255));
}


.hero-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.left {
  box-sizing: border-box;
  max-width: 50%;
}

.right {
  display: flex;
  justify-content: flex-end;
  max-width: 50%;
}


.section-with-wave {
  position: relative;
  overflow: hidden;
  padding-top: 5rem;
  padding-bottom: 5rem;
  min-height: 500px;
}


.decorative-line-top {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  pointer-events: none;
  z-index: -1;
}

.decorative-line-top svg {
  width: 100%;
  height: 100px;
}

.wave-bottom {
  position: absolute;
  bottom: -50px;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: -1;
}

.wave-bottom svg {
  display: block;
  width: 100%;
  height: 100%;
}

.decorative-line {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  pointer-events: none;
  z-index: 0;
}

.decorative-line svg {
  width: 100%;
  height: 100px;
}

.decorative-line-top,
.decorative-line {
  height: 100px;
  min-height: 100px;
}

.decorative-line-top svg,
.decorative-line svg {
  display: block;
  height: 100px;
  width: 100%;
}


/* Tablet */
@media (max-width: 768px) {
  #hero {
    padding: 40px 20px;
    scroll-margin-top: 140px;
  }
  #partners,
  #offers,
  #contact {
    scroll-margin-top: 140px;
  }
}

/* Mobile */
@media (max-width: 480px) {
  #hero {
    padding: 30px 15px;
    scroll-margin-top: 140px;
  }
  #partners,
  #offers,
  #contact {
    scroll-margin-top: 140px;
  }
}

@media (max-width: 1299px) {
  .hero-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .left,
  .right {
    max-width: 100%;
  }

  .right {
    order: 2;
    margin-top: 2rem;
  }

  .left {
    order: 1;
  }
}

@media (min-width: 1300px) and (max-width: 1500px) {
  .hero-container {
    display: flex;
    flex-direction: column;
  }

}
</style>