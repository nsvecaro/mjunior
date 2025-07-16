<template>
    <footer class="footer">
      <div class="footer-top">
        <div class="column left">
          <h1>Moding Junior</h1>
          <nav class="nav-links">
            <a href="#">O nama</a>
            <a href="#">Reference</a>
            <a href="#">Blog</a>
          </nav>
        </div>
  
        <div class="column middle">
          <h3>Moding Junior - Brčko</h3>
          <p>Brčko - Brka, 76206<br />Industrijska zona bb</p>
          <p>Telefon: +387 49 500 126</p>
        </div>
  
        <div class="column right">
          <h3>Moding Junior - Prijedor</h3>
          <p>Prijedor, 79101<br />Donja Čela bb</p>
          <p>Telefon: +387 52 370 770</p>
          <div class="logos">
            <img src="" alt="Logo 1" />
            <img src="" alt="Logo 2" />
            <img src="" alt="Logo 3" />
            <img src="" alt="Logo 4" />
            <img src="" alt="Logo 5" />
          </div>
        </div>
      </div>
  
      <div class="footer-bottom">
        <div class="bottom-left">
          <p><strong>MODING JUNIOR d.o.o.</strong> za proizvodnju, građevinarstvo, unutarnju i vanjsku trgovinu.<br />OIB: 25897440119</p>
          <nav class="policy-links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>
          </nav>
          <p class="copyright">© 2025. Moding Junior d.o.o. Sva Prava Zadržana.</p>
        </div>
        <div class="bottom-right">
          <p>Designed & coded by <strong>Scope</strong></p>
        </div>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background: #f6f6f6;
    padding: 3rem;
    font-family: 'Lexend', sans-serif;
  }
  
  .footer-top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    border-bottom: 1px solid #ccc;
    padding-bottom: 2rem;
  }
  
  .column {
    flex: 1 1 250px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-links a {
    display: inline-block;
    margin-right: 1.5rem;
    color: #000;
    text-decoration: none;
    font-weight: 500;
  }
  
  .nav-links a:hover {
    text-decoration: underline;
  }
  
  .logos {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  
  .logos img {
    width: 40px;
    height: auto;
  }
  
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    margin-top: 2rem;
    font-size: 0.9rem;
    color: #555;
  }
  
  .policy-links {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
  }
  
  .policy-links a {
    color: #555;
    text-decoration: none;
  }
  
  .policy-links a:hover {
    text-decoration: underline;
  }
  </style>