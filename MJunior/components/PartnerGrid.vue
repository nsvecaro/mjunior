<template>
    <div class="grid">
      <img
        v-for="(logo, index) in logos"
        :key="index"
        :src="logo"
        alt="Partner logo"
        class="logo"
      />
    </div>
  </template>
  
  <script setup>
  const logos = [
    '/images/avenuemall.png',
    '/images/cantopyhilton.png',
    '/images/gradpula.png',
    '/images/inalogo.png',
    '/images/jamnicalogo.png',
    '/images/maistralogo.png',
    '/images/gradpula.png',
    '/images/avenuemall.png',
    '/images/cantopyhilton.png',
    '/images/avenuemall.png',
    '/images/gradpula.png',
    '/images/cantopyhilton.png'
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
  </style>