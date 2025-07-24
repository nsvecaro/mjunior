<script setup lang="ts">
import Reveal from '~/components/Reveal.vue';

</script>

<template>

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
    <section id="partners" class="section-with-wave">
        <div class="decorative-line-top">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
                <path d="M0,60 C240,-40 1200,160 1440,60" stroke="#a4c1fd" stroke-width="4" fill="none" />
            </svg>
        </div>
        <SectionTitle title="Partneri" subtitle="Naši partneri - suradnje koje govore više od riječi" />
        <div class="container">
            <Reveal>
                <PartnerGrid />
            </Reveal>
        </div>
        <div class="decorative-line">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
                <path d="M0,0 C300,150 900,-50 1440,60" stroke="#a4c1fd" stroke-width="4" fill="none" />
            </svg>
        </div>
    </section>

    <section id="offers">
        <Reveal>
            <SectionTitle title="Što nudimo"
                subtitle="Sve što vam treba za gradnju i obradu metala - brzo, precizno i pouzdano" />
        </Reveal>
        <Reveal>
            <ServiceCards />
        </Reveal>
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

</template>


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

#hero {
    margin-top: 30px;
    padding: 80px 120px 30px 120px;
    height: 100%;
    position: relative;
}

.hero-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
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
}

.decorative-line-top {
    position: absolute;
    top: 80px;
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

@media (max-width: 768px) {
    #hero {
        padding: 40px 20px 0px 20px;
    }

    .container {
        flex-direction: column;
        gap: 2rem;
    }

    #contact {
        margin-bottom: 4rem;
    }

    .decorative-line-top {
        top: 95px;
    }

    .decorative-line {
        bottom: -40px;
    }
}
</style>