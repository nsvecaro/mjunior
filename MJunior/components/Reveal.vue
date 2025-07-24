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
    transform: translateY(30px);
    transition: all 0.8s ease-out;
    will-change: transform, opacity;
  }
  
  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }
  </style>