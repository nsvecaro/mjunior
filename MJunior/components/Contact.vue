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
    gap: 20rem;
    padding: 2rem;
    margin-top: 10vh;
    
  }
  </style>