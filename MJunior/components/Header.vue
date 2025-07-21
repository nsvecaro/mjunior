<template>
    <header class="header">
        <div class="logo">
            <img src="/images/Pokelogo.png" alt="Moding Junior Logo" />
        </div>

        <nav class="nav">
            <ul class="nav-links">
                <li><a href="/#hero">Početna</a></li>
                <li><a href="/#partners">Partneri</a></li>
                <li><a href="/#offers">Ponuda</a></li>
            </ul>
            <a href="/#contact" class="cta-button">Kontaktirajte nas</a>
        </nav>
    </header>
</template>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 120px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    font-family: 'Lexend', sans-serif;
}

.logo img {
    height: 60px;
    max-height: 80px;
    width: auto;
    object-fit: contain;
}

.nav {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-links a {
    text-decoration: none;
    color: #000;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: #246bfb;
}

.cta-button {
    background-color: #ffc107;
    color: black;
    padding: 1rem 1.4rem;
    border-radius: 8px;
    font-weight: 500;
    text-decoration: none;
    transition: background 0.3s ease;
}

.cta-button:hover {
    background-color: #e0a800;
}

@media (max-width: 768px) {
    .nav {
        flex-direction: column;
        align-items: flex-end;
    }

    .nav-links {
        flex-direction: column;
        gap: 1rem;
    }

    .header {
        flex-direction: column;
        align-items: flex-start;
    }

    .cta-button {
        margin-top: 1rem;
    }
}
</style>