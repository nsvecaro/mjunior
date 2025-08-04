<template>
    <section id="header" class="no-overflow">
      <Header />
    </section>
  
    <section id="website" class="no-overflow">
      <slot />
    </section>
  
    <section id="footer" class="no-overflow">
      <Footer /> 
    </section>
  </template>
  
  <style scoped>
  .no-overflow {
    overflow: visible;
  }
  </style>