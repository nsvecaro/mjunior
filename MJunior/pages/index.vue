<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue';

</script>

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
        <SectionTitle title="Što nudimo" subtitle="Sve što vam treba za gradnju i obradu metala - brzo, precizno i pouzdano" />
        <ServiceCards />
    </section>

    <section id="numbers">

        <Numbers />
    </section>

    <section id="contact">
        <SectionTitle title="Kontaktirajte nas" subtitle="Spremni smo odgovoriti na sva vaša pitanja i pomoći vam u vašim projektima" />
        <Contact />
    </section>

    <section id="footer">
        <Footer />
    </section>


</template>

<style scoped>

#hero {
    margin: 80px 120px 0px 120px;
    height: 100%;
    min-height: 80vh;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>