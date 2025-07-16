<template>

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


</template>

<style scoped>
.stats {
    height: 100%;
    min-height: 15vh;
    display: flex;
    gap: 25rem;
    margin-top: 3rem;
    width: 100%;
    background: linear-gradient(to right, #ffff73, #a3fbac, #76e0fe);
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
}

.stat {
    text-align: center;
}

.stat-number {
    font-size: 3rem;
    color: #2463EB;
    font-weight: bold;

}

.stat-label {
    font-size: 1.2rem;
}
</style>