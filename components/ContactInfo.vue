<template>
    <div class="kontakt-info">
        <div class="info-item" v-for="item in info" :key="item.label">
            <div class="icon" v-html="item.icon" aria-hidden="true"></div>
            <div class="text-wrapper">
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
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" fill="#ffffff"/></svg>`
    },
    {
        label: 'Telefon',
        value: '+385 52 500 590',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" fill="#ffffff"/></svg>`
    },
    {
        label: 'E-Mail',
        value: 'info@moding-junior.hr',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" fill="#ffffff" /></svg>`
    }
]
</script>

<style scoped>
.kontakt-info {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
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

.text-wrapper {
  display: flex;
  flex-direction: column;
}


.label {
  font-weight: 700;
  font-size: 1.8rem;
  margin: 0;
}


.value {
  color: #000000a0;
  line-height: 1.4;
  margin: 0.3rem 0 0 0;
}

@media (max-width: 640px) {
    .kontakt-info {
        gap: 2rem;
    }

    .info-item {
        grid-template-columns: 1fr;
    }

    .icon {
        margin-bottom: 0.5rem;
        width: 44px;
    }
}
@media (max-width: 480px) {
  .kontakt-info {
    align-items: flex-start;
  }

  .info-item {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  .label {
    font-size: 1.2rem;
  }

  .value {
    font-size: 0.9rem;
  }
}
</style>