<template>
  <form class="kontakt-form" @submit.prevent="submitForm">
    <input v-model="ime" type="text" placeholder="Vaše ime" required />
    <input v-model="email" type="email" placeholder="Vaš e-mail" required />
    <textarea v-model="poruka" rows="4" placeholder="Vaša poruka" required></textarea>
    <button type="submit">Pošalji nam poruku</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const ime = ref('')
const email = ref('')
const poruka = ref('')

function submitForm() {
  console.log('Ime:', ime.value)
  console.log('Email:', email.value)
  console.log('Poruka:', poruka.value)

  //backend soon

}
</script>

<style scoped>
.kontakt-form {
  background: #e8f0ff;
  padding: 1.5rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  width: 100%;
}

.kontakt-form input,
.kontakt-form textarea {
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.kontakt-form textarea {
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  max-height: 300px;
}

.kontakt-form button {
  background-color: #246bfb;
  color: white;
  font-weight: 300;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.kontakt-form button:hover {
  background-color: #154ae0;
}

.kontakt-form input:focus,
.kontakt-form textarea:focus {
  border-color: #246bfb;
  outline: none;
}

.kontakt-form input:hover,
.kontakt-form textarea:hover {
  border-color: #999;
}
.kontakt-form input,
.kontakt-form textarea {
  transition: border 0.2s ease;
}
.kontakt-form input::placeholder,
.kontakt-form textarea::placeholder {
  color: #888;
}


@media (max-width: 480px) {
  .kontakt-form {
    padding: 1rem;
    font-size: 0.95rem;
  }
}

</style>