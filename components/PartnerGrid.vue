<template>
  <div class="grid">
    <img v-for="(logo, index) in logos" :key="index" :src="logo" alt="Partner logo" class="logo" width="200"
      height="200" loading="lazy" />
  </div>
</template>

<script setup>
const logos = [
  '/images/partneri/Cantopy.webp',
  '/images/partneri/MFRH.webp',
  '/images/partneri/Ina.webp',
  '/images/partneri/MonPerin.webp',
  '/images/partneri/BaltenspergerLogo.webp',
  '/images/partneri/Hidroing.webp',
  '/images/partneri/JedinstvoKrapina.webp',
  '/images/partneri/Kudumija.webp',
  '/images/partneri/GradPula.webp',
  '/images/partneri/Kolektor.webp',
  '/images/partneri/MDK.webp',
  '/images/partneri/Monterra.webp',
]
</script>

<style scoped>
.grid {
  height: 100%;
  min-height: 600px;
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

@media (hover: none) {
  .logo:hover {
    opacity: 1;
  }
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
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    padding: 1.5rem;
  }

  .logo {
    max-width: 140px;
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1rem;
  }

  .logo {
    max-width: 100px;
  }

  @media (max-width: 360px) {
    .logo {
      max-width: 80px;
    }
  }
}
</style>