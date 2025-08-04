<template>
  <div class="cards-grid">
    <div v-for="(service, i) in services" :key="i" class="card">
      <div class="icon" v-html="service.icon" />
      <h3 class="title">{{ service.title }}</h3>
      <p class="text">{{ service.description }}</p>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 576 512"><path fill="#246bfb" d="M64 32C46.3 32 32 46.3 32 64l0 240 0 48 0 80c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-128 0-151.8c0-18.2-19.4-29.7-35.4-21.1L352 215.4l0-63.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4 160 64c0-17.7-14.3-32-32-32L64 32z"/></svg>`,
    title: 'Prodaja željeza',
    description: 'U našem skladištu možete pronaći sve od crnih, pocinčanih i aluminijskih cijevi.'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 384 512"><path fill="#246bfb" d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"/></svg>`,
    title: 'Paneli i krovište',
    description: 'Najveća ponuda krovnih i zidnih panela, te ostalih vrsta krovišta u Puli.'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><path fill="#246bfb" d="M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>`,
    title: 'Rezanje na mjeru',
    description: 'Uvijek se trudimo olakšati Vam, stoga nudimo rezanje na mjeru, cijevi ili panela.'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 576 512"><path fill="#246bfb" d="M256 32c-17.7 0-32 14.3-32 32l0 2.3 0 99.6c0 5.6-4.5 10.1-10.1 10.1c-3.6 0-7-1.9-8.8-5.1L157.1 87C83 123.5 32 199.8 32 288l0 64 512 0 0-66.4c-.9-87.2-51.7-162.4-125.1-198.6l-48 83.9c-1.8 3.2-5.2 5.1-8.8 5.1c-5.6 0-10.1-4.5-10.1-10.1l0-99.6 0-2.3c0-17.7-14.3-32-32-32l-64 0zM16.6 384C7.4 384 0 391.4 0 400.6c0 4.7 2 9.2 5.8 11.9C27.5 428.4 111.8 480 288 480s260.5-51.6 282.2-67.5c3.8-2.8 5.8-7.2 5.8-11.9c0-9.2-7.4-16.6-16.6-16.6L16.6 384z"/></svg>`,
    title: 'Izrada čeličnih konstrukcija',
    description: 'Izrađujemo konstrukcije od nadstrešnica i ograda, do industrijskih objekata i hala.'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><path fill="#246bfb" d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>`,
    title: 'Montaža čeličnih konstrukcija',
    description: 'Osim izrade, osiguravamo i preciznu montažu na lokaciji.'
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><path fill="#246bfb" d="M176 88l0 40 160 0 0-40c0-4.4-3.6-8-8-8L184 80c-4.4 0-8 3.6-8 8zm-48 40l0-40c0-30.9 25.1-56 56-56l144 0c30.9 0 56 25.1 56 56l0 40 28.1 0c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9l0 92.1-128 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-128 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L0 320l0-92.1c0-12.7 5.1-24.9 14.1-33.9l51.9-51.9c9-9 21.2-14.1 33.9-14.1l28.1 0zM0 416l0-64 128 0c0 17.7 14.3 32 32 32s32-14.3 32-32l128 0c0 17.7 14.3 32 32 32s32-14.3 32-32l128 0 0 64c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64z"/></svg>`,
    title: 'Završna obrada',
    description: 'Završna obrada na jednom mjestu. Od brusnih ploča do vijaka i sitnog materijala.'
  }
]
</script>

<style scoped>
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0px auto;
}

.card {
  background: linear-gradient(to bottom right, #f8f9fa, #e2edff);
  border: 1px solid #77abff9a;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  transition: transform 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.card:hover {
  transform: scale(1.03);
}

.icon {
  color: #246bfb;
  margin-bottom: 0.3rem;
}

.icon svg {
  width: 28px;
  height: 28px;
}

.title {
  font-weight: 500;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.text {
  font-size: 1.1rem;
  color: #000000a0;
}

/* Responsive */
@media (max-width: 960px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1.2rem 1rem;
  }

  .card {
    padding: 1.2rem;
  }

  .title {
    font-size: 1.2rem;
  }

  .text {
    font-size: 1rem;
  }

  .icon svg {
    width: 24px;
    height: 24px;
  }
}

@media (max-width: 480px) {
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    padding: 0.8rem 1rem;
  }

  .card {
    padding: 1rem;
  }

  .title {
    font-size: 1.1rem;
  }

  .text {
    font-size: 0.85rem;
  }

  .icon svg {
    width: 24px;
    height: 24px;
  }
}
</style>