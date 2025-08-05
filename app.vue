<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P2DQX9R8" height="0" width="0"
      style="display:none;visibility:hidden"></iframe>
  </noscript>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: 'hr'
  },
  link:[
    {
      rel: 'preload',
      as: 'image',
      href: '/images/MonPeriniBale.webp'
    },
    {
      rel: 'preload',
      as: 'image',
      href: '/images/CelicnaKonstrukcijaJablanovec.webp'

    }
  ]
})
</script>

<style>
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter/inter-v19-latin-300.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter/inter-v19-latin-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter/inter-v19-latin-500.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter/inter-v19-latin-600.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter/inter-v19-latin-700.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
html,
body,
* {
  font-family: 'Inter', sans-serif !important;
}

html {
  scroll-behavior: smooth;
}

body {
  background: rgb(255, 255, 251);
}

html,
body {
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