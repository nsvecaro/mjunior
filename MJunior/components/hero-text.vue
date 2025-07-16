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
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
}

.blue-button:hover {
    background-color: #0056b3;
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


.stats {
  display: flex;
  gap: 5rem;
  margin-top: 3rem;
  width: 100%;
  max-width: fit-content;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: bold;
  
}

.stat-label {
  font-size: 0.9rem;
}




</style>