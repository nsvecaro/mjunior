<template>
    <div class="section-title" :class="alignment">
      <h2 class="title">{{ title }}</h2>
      <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
      <div class="gradient-line"></div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    alignment: {
      type: String,
      default: 'center' // 'left' | 'center' | 'right'
    }
  })
  </script>
  
  <style scoped>
  .section-title {
    margin-bottom: 2rem;
  }
  
  .section-title.center {
    text-align: center;
    align-items: center;
  }
  
  .section-title.left {
    text-align: left;
    align-items: flex-start;
  }
  
  .section-title.right {
    text-align: right;
    align-items: flex-end;
  }
  
  .title {
    font-size: 4rem;
    font-weight: 500;
    color: #000;
    margin-bottom: 0.5rem;
  }
  
  .subtitle {
    font-size: 1.4rem;
    color: #444;
    margin-bottom: 1rem;
  }
  
  .gradient-line {
    height: 2px;
    width: 200px;
    margin: 0 auto;
    background: linear-gradient(to right, #00C9FF, #92FE9D, #fdfd00);
    border-radius: 2px;
  }
  </style>