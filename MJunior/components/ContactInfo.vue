<template>
    <div class="kontakt-info">
        <div class="info-item" v-for="item in info" :key="item.label">
            <div class="icon" v-html="item.icon"></div>
            <div class="text">
                <h3 class="label">{{ item.label }}</h3>
                <p class="value" v-html="item.value"></p>
            </div>
        </div>
    </div>
</template>

<script setup>
const info = [
    {
        label: 'Adresa',
        value: 'Valica 7<br>52100, Pula, Istra',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M20.5 3l-8.5 5.3L3.5 3v17h17z"/><path fill="currentColor" d="M20.5 3H3.5l8.5 5.3z"/></svg>`
    },
    {
        label: 'Telefon',
        value: '+385 52 500 590',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="white"><path fill="currentColor" d="M6.62 10.79a15.464 15.464 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.05-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.24 1.05z"/></svg>`
    },
    {
        label: 'E-Mail',
        value: 'info@moding-junior.hr',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="white"><path fill="currentColor" d="M4 4h16v16H4zm8 7l8-5H4z"/></svg>`
    }
]
</script>

<style scoped>
.kontakt-info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.info-item {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    align-items: flex-start;
}

.icon {
    background: #246bfb;
    padding: 0.1rem;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 44px;
    min-height: 44px;
}

.label {
    font-weight: 700;
    font-size: 1.8rem;
    margin: 0;
}

.value {
    color: #000000a0;
    line-height: 1.4;
    margin-top: 0.3rem;
}
</style>