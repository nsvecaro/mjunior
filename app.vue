<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  link: [
    {
      rel: 'preload',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
      as: 'style'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
      media: 'all',
      onload: "this.onload=null;this.rel='stylesheet'"
    }
  ],
  noscript: [
    {
      children: `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap">`
    }
  ]
})
</script>

<style>
html, body, * {
  font-family: 'Inter', sans-serif !important;
}
html {
  scroll-behavior: smooth;
}
body {
  background: #fafeff;
}
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
</style>