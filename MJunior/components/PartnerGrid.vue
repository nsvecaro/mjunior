<template>
  <div class="grid">
    <img v-for="(logo, index) in logos" :key="index" :src="logo" alt="Partner logo" class="logo" />
  </div>
</template>

<script setup>
const logos = [
  '/images/partneri/CantopyHiltonLogo.png',
  '/images/partneri/MinistarstvoFinancijaRHLogo.png',
  '/images/partneri/InaLogo.png',
  '/images/partneri/MonPerinLogo.png',
  '/images/partneri/BaltenspergerLogo.png',
  '/images/partneri/HidroingLogo.png',
  '/images/partneri/JedinstvoKrapinaLogo.png',
  '/images/partneri/KudumijaLogo.png',
  '/images/partneri/GradPulaLogo.png',
  '/images/partneri/KolektorLogo.png',
  '/images/partneri/MDKLogo.png',
  '/images/partneri/MonterraLogo.png',
]
</script>

<style scoped>
.grid {
  height: 100%;
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  padding: 3rem;
  max-width: 1500px;
  margin: 0 auto;
}

.logo {
  width: 100%;
  max-width: 200px;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  transition: opacity 0.3s ease;
  filter: grayscale(100%);
}

.logo:hover {
  opacity: 0.5;
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 1.5rem;
  }

  .logo {
    max-width: 140px;
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    padding: 1rem;
  }

  .logo {
    max-width: 100px;
  }
}
</style>