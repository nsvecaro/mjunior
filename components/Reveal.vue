<template>
    <div ref="el" class="reveal">
      <slot />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const el = ref(null)
  
  onMounted(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )
  
    if (el.value) observer.observe(el.value)
  })
  </script>
  
  <style scoped>
.reveal {
  opacity: 0;
  transition: opacity 0.6s ease-out;
  will-change: opacity;
  visibility: hidden;
}

.reveal.active {
  opacity: 1;
  visibility: visible;
}
  </style>