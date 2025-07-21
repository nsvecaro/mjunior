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
        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z" fill="#2463EB"/></svg>`
       
    },
    {
        src: '/images/Bale-Bazen.jpg',
        title: 'Kvaliteta',
        subtitle: 'Robusna konstrukcija po standardima',
         icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" fill="#ffc107"/></svg>`
    },
    {
        src: '/images/Konstrukcija.jpg',
        title: 'Iskustvo',
        subtitle: 'Više od 750 projekata',
        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 640 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8l-.7 0c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" fill="#2463EB"/></svg>`
    },
    {
        src: '/images/Umag.jpg',
        title: 'Perfekcija',
        subtitle: 'Detalji koji čine razliku',
        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z" fill="#ffc107"/></svg>`
    },
    {
        src: '/images/VinjanNadstresnica.jpg',
        title: 'Inovacija',
        subtitle: 'Moderna rješenja za svaki projekt',
        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" fill="#2463EB"/></svg>`
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
    min-width: 325px;
    max-width: 100%;
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