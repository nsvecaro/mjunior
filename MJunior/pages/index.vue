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

    <section id="partners">
        <SectionTitle title="Partneri" subtitle="Naši partneri - suradnje koje govore više od riječi" />

        <PartnerGrid />
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

.wave-divider {
    position: relative;
    width: 100%;
    height: 100px;
    overflow: hidden;
    line-height: 0;
}



.wave-divider svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
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