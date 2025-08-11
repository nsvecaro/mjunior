<template>
  <form class="kontakt-form" action="https://formspree.io/f/xyzpdqoj" method="POST">
    <label for="ime" class="sr-only">Vaše ime</label>
    <input id="ime" name="ime" type="text" placeholder="Vaše ime" required />

    <label for="email" class="sr-only">Vaš e-mail</label>
    <input id="email" name="email" type="email" placeholder="Vaš e-mail" required />

    <label for="poruka" class="sr-only">Vaša poruka</label>
    <textarea id="poruka" name="poruka" rows="4" placeholder="Vaša poruka" required></textarea>

    <input type="text" name="_gotcha" style="display:none" />
    <button type="submit">Pošalji nam poruku</button>
    <input type="hidden" name="_next" value="https://moding-junior.hr/hvala" />
  </form>
</template>

<style scoped>
.kontakt-form {
  background: #e8f0ff;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 550px;
  width: 100%;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.kontakt-form input,
.kontakt-form textarea {
  padding: 1rem 1.2rem;
  border: 1px solid #ccc;
  border-radius: 7px;
  font-size: 1.025rem;
  line-height: 1.5;
}

.kontakt-form textarea {
  resize: vertical;
  min-height: 140px;
  max-height: 350px;
}

.kontakt-form button {
  background-color: #246bfb;
  color: white;
  font-weight: 400;
  font-size: 1.05rem;
  padding: 0.9rem 1.2rem;
  border: none;
  border-radius: 7px;
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

.kontakt-form input::placeholder,
.kontakt-form textarea::placeholder {
  color: #8888888a;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 480px) {
  .kontakt-form {
    padding: 1.2rem;
    font-size: 0.9rem;
  }

  .kontakt-form input,
  .kontakt-form textarea {
    font-size: 0.85rem;
    padding: 0.8rem;
  }

  .kontakt-form button {
    font-size: 0.9rem;
    padding: 0.9rem 1rem;
  }
}
</style>