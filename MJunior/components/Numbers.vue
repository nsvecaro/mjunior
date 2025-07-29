<template>
    <div class="stats">
      <div class="stat" v-for="(item, index) in stats" :key="index">
        <div class="stat-number" ref="statNumbers">{{ item.current }}</div>
        <div class="stat-label">{{ item.label }}</div>
      </div>
    </div>
  </template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const stats = ref([
  { target: 30, label: 'Godina', current: 0 },
  { target: 750, label: 'Projekata', current: 0 },
  { target: 60000, label: 'Zadovoljnih klijenata', current: 0 },
])

const statNumbers = ref([])

onMounted(async () => {
  await nextTick()

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateNumbers()
        observer.disconnect()
      }
    })
  }, {
    threshold: 0.5
  })

  if (statNumbers.value.length) {
    observer.observe(statNumbers.value[0]) // možeš bilo koji jer su svi u viewportu skupa
  }
})

function animateNumbers() {
  stats.value.forEach((stat, i) => {
    const duration = 2000
    const start = performance.now()

    function update(now) {
      const progress = Math.min((now - start) / duration, 1)
      stat.current = Math.floor(stat.target * progress)

      if (progress < 1) {
        requestAnimationFrame(update)
      } else {
        stat.current = stat.target.toLocaleString()
      }
    }

    requestAnimationFrame(update)
  })
}
</script>

<style scoped>
.stats {
    height: 100%;
    padding: 2rem 1rem;
    display: flex;
    gap: clamp(2rem, 10vw, 12rem);
    margin-top: 0rem;
    width: 100%;
    background: linear-gradient(145deg, #ffff00a7, #2686c1a7);
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
}

.stat {
    text-align: center;
}

.stat-number {
    font-size: 3rem;
    color: #2463EB;
    font-weight: bold;


}

.stat-label {
    font-size: 1rem;
}

@media (max-width: 768px) {
  .stats {
    flex-direction: row;
    gap: 3rem;
    padding: 2rem 1rem;
  }
  .stat-number{
    font-size: 2.2rem;
  }
  .stat-label {
    font-size: 0.8rem;
  }

}
</style>