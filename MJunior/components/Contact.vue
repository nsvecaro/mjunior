<template>
    <section class="contact-section">
      <ContactInfo />
      <ContactForm />
    </section>
  </template>
  
  <script setup>
    import ContactInfo from '~/components/ContactInfo.vue';
    import ContactForm from '~/components/ContactForm.vue';
  </script>
  
  <style scoped>
  .contact-section {
    height: 100%;
    min-height: 70vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: clamp(2rem, 8vw, 10rem);
    padding: 2rem;
  }
  </style>