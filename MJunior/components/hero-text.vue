<template>
    <div class="main-text">
        <h2>MODING JUNIOR</h2>
        <h1>Čelične konstrukcije • Proizvodnja • Montaža</h1>
        <p>Ferrocentar - trgovina crnom i obojenom metalurgijom te proizvodnja i montaža čeličnih konstrukcija.</p>
    </div>
    <div class="buttons">
        <Hero-Button buttonText="Naši radovi →" customClass="blue-button" />
        <Hero-Button buttonText="Kontakt" customClass="yellow-button" />
    </div>
  
    <div class="stats-section">
  <div class="stats-wrapper">
    <div class="gradient-line"></div>
    <div class="stats">
      <div class="stat">
        <div class="stat-number">30+</div>
        <div class="stat-label">Godina</div>
      </div>
      <div class="stat">
        <div class="stat-number">750+</div>
        <div class="stat-label">Projekata</div>
      </div>
      <div class="stat">
        <div class="stat-number">60 000+</div>
        <div class="stat-label">Zadovoljnih klijenata</div>
      </div>
    </div>
  </div>
</div>
    </template>

    <script>

    </script>


<style scoped>

.main-text {
    text-align: left;
}

.main-text h2 {
    font-size: 4rem;
    width: 100%;
    max-width: 500px;
    font-weight: 500;
}

.main-text h1 {
    font-size: 1.4rem;
}

.main-text p {
    font-size: 1.3rem;
    width: 100%;
    max-width: 300px;
}

.buttons{
    display: flex;
    gap: 1rem;
}

.blue-button {
    background-color: #2463EB;
    color: white;
    border: none;
    cursor: pointer;
}

.blue-button:hover {
    background-color: #1d4aab;
}

.yellow-button{
    background-color: #ffc107;
    color: black;
    border: none;
    cursor: pointer;
}
.yellow-button:hover {
    background-color: #e0a800;
}

.gradient-line {
  height: 4px;
  width: 100%;
  background: linear-gradient(to right, #00C9FF, #92FE9D, #fdfd00);
}

.stats-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: max-content;
}

.stats-section {
  margin-top: 2rem;
}

.stats {
  display: flex;
  gap: 5rem;
  margin-top: 1rem;
  width: 100%;
  max-width: fit-content;
}

.stats {
  display: flex;
  gap: 5rem;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: bold;
  
}

.stat-label {
  font-size: 0.9rem;
}




</style>