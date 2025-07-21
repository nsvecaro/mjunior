<template>

    <section id="hero">
        <div class="container">
            <div class="left">
                <hero-text />
            </div>
            <div class="right">
                <hero-slideshow />
            </div>

        </div>


    </section>

    <section id="partners" class="section-with-wave">
        <div class="decorative-line-top">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
                <path d="M0,60 C240,-40 1200,160 1440,60" stroke="#246bfb" stroke-width="4" fill="none" />
            </svg>
        </div>
        <SectionTitle title="Partneri" subtitle="Naši partneri - suradnje koje govore više od riječi" />

        <PartnerGrid />
        <div class="decorative-line">
  <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
    <path d="M0,0 C300,150 900,-50 1440,60" stroke="#86adfd" stroke-width="4" fill="none" />
  </svg>
</div>
    </section>

    <section id="offers">
        <SectionTitle title="Što nudimo"
            subtitle="Sve što vam treba za gradnju i obradu metala - brzo, precizno i pouzdano" />
        <ServiceCards />
    </section>

    <section id="numbers">

        <Numbers />
    </section>

    <section id="contact">
        <SectionTitle title="Kontaktirajte nas"
            subtitle="Spremni smo odgovoriti na sva vaša pitanja i pomoći vam u vašim projektima" />
        <Contact />
    </section>

</template>

<style scoped>
#partners,
#offers,
#contact {
    scroll-margin-top: 110px;
}

#hero {
    margin-top: 30px;
    padding: 80px 120px 0px 120px;
    height: 100%;
    min-height: 90vh;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.section-with-wave {
    position: relative;
    overflow: hidden;
}

.decorative-line-top {
    position: absolute;
    top: 20px;
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
    bottom: -1px;
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
    bottom: 20px;
    /* koliko visoko od dna želiš liniju */
    left: 0;
    width: 100%;
    pointer-events: none;
    z-index: 0;
}

.decorative-line svg {
    width: 100%;
    height: 100px;
}

@media (max-width: 768px) {
    #hero {
        padding: 40px 20px 0px 20px;
    }

    .container {
        flex-direction: column;
        gap: 2rem;
    }
}
</style>