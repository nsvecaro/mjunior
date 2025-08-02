<template>
    <div class="thank-you">
      <h1>Hvala Vam na poruci!</h1>
      <p>Uskoro ćemo vam se javiti.</p>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  onMounted(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  })
  </script>
  
  <style scoped>
  .thank-you {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    min-height: 70vh;
    text-align: center;
  }
  </style>