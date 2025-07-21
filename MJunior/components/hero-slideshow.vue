<template>
    <div class="slideshow-container">
        <div class="circle-decoration top-right"></div>

        <div class="image-wrapper">
            <img :src="images[currentIndex].src" alt="Slika" class="slideshow-image" />

            <div class="label-box">
                <div class="icon" v-html="images[currentIndex].icon"></div>
                <div class="label-content">
                    <p class="label-title">{{ images[currentIndex].title }}</p>
                    <p class="label-subtitle">{{ images[currentIndex].subtitle }}</p>
                </div>
            </div>
        </div>

        <div class="dots">
            <span v-for="(img, i) in images" :key="i" class="dot" :class="{ active: i === currentIndex }"
                @click="goToSlide(i)"></span>
        </div>
        <div class="circle-decoration bottom-left"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
    {
        src: '/images/ACIRovinj.jpg',
        title: 'Profesionalnost',
        subtitle: 'Napredna tehnološka rješenja',
        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9 5v5c4.03 2.47-.56 4.97-3 6v3h15v-3c-6.41-2.73-3.53-7 1-8V5zM2 6c.81 2.13 2.42 3.5 5 4V6z"/></svg>`
    },
    {
        src: '/images/Bale-Bazen.jpg',
        title: 'Kvaliteta',
        subtitle: 'Robusna konstrukcija po standardima',
        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><g fill="currentColor"><path d="M104 88v128H48V40h32Z" opacity="0.2"/><path d="M240 80H108.94L87.16 36.42A8 8 0 0 0 80 32H48a8 8 0 0 0-8 8v40H24a8 8 0 0 0 0 16h16v112H24a8 8 0 0 0 0 16h104a8 8 0 0 0 0-16h-16V96h96v88h-16v-8a8 8 0 0 0-16 0v8a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V96h16a8 8 0 0 0 0-16M56 48h19.06l16 32H56Zm0 160v-48h40v48Zm40-64H56V96h40Z"/></g></svg>`
    },
    {
        src: '/images/Konstrukcija.jpg',
        title: 'Iskustvo',
        subtitle: 'Više od 750 projekata',
        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6V5a1 1 0 0 0-1-1H9V3H6v1H5v2h1v9H5v-2H3v2H2v2h1v4h2v-4h5v4h2v-4h1v-2h-1v-2h-2v2H9V6h8v4.62c-.47.17-.81.61-.81 1.14c0 .44.24.84.61 1.06V14h.62c.34 0 .61.28.61.62s-.27.62-.61.62c-.22 0-.42-.12-.53-.31a.62.62 0 0 0-.84-.22c-.3.16-.4.54-.23.84c.33.56.94.92 1.6.92c1.01 0 1.84-.83 1.84-1.85c0-.78-.5-1.48-1.23-1.74v-.06c.38-.22.62-.62.62-1.06c0-.46-.27-.85-.65-1.06V6zM8 13.66l-1 1v-1.42l1-1zm0-2.95l-1 1v-1.42l1-1zm-1-2V7.29l1-1v1.42z"/></svg>`
    },
    {
        src: '/images/Umag.jpg',
        title: 'Perfekcija',
        subtitle: 'Detalji koji čine razliku',
        icon:``
    },
    {
        src: '/images/VinjanNadstresnica.jpg',
        title: 'Inovacija',
        subtitle: 'Moderna rješenja za svaki projekt',
        icon:``
    }
]

const currentIndex = ref(0)
let interval = null

onMounted(() => {
    interval = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % images.length
    }, 5000)
})

onUnmounted(() => {
    clearInterval(interval)
})

function goToSlide(index) {
  currentIndex.value = index
}
</script>

<style scoped>
.slideshow-container {
    position: relative;
    border-radius: 20px;
    background: #f4f4f4;
    padding: 30px;
    width: 100%;
    max-width: 720px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}
.circle-decoration.top-right {
  position: absolute;
  top: -30px;
  right: -10px;
  width: 100px;
  height: 100px;
  background: #fff000; 
  border-radius: 50%;
  z-index: -1;
}

.circle-decoration.bottom-left {
  position: absolute;
  bottom: -30px;
  left: -20px;
  width: 70px;
  height: 70px;
  background: #7aa9ff;
  border-radius: 50%;
  z-index: -1;
}

.image-wrapper {
    position: relative;
    z-index: 0;
    overflow: hidden;
    border-radius: 20px;
    aspect-ratio: 16 / 9;
}

.slideshow-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    z-index: 1;
}

.label-box {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: white;
    padding: 12px 16px;
    border-radius: 10px;
    display: flex;
    gap: 10px;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.icon {
    font-size: 24px;
}

.label-title {
    font-weight: 600;
    font-size: 1rem;
}

.label-subtitle {
    font-size: 0.8rem;
    color: #666;
    margin-top: 2px;
}

.dots {
    display: flex;
    justify-content: center;
    gap: 6px;
    margin-top: 12px;
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #a0bcf8;
    transition: background 0.3s ease;
}

.dot.active {
    background: #007BFF;
}


@media (max-width: 768px) {
  .slideshow-container {
    padding: 16px;
    max-width: 100%;
  }

  .label-box {
    flex-direction: column;
    align-items: flex-start;
    bottom: 12px;
    left: 12px;
    padding: 10px 12px;
    width: calc(100% - 24px);
  }

  .label-title {
    font-size: 0.9rem;
  }

  .label-subtitle {
    font-size: 0.75rem;
  }

  .dots {
    margin-top: 8px;
    gap: 4px;
  }

  .dot {
    width: 8px;
    height: 8px;
  }
}
</style>