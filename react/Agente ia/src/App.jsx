import { useState } from 'react'


import styles from './cafe.module.css'

function App() {

  return (
    <>
      <navbar className={styles.cnavbar}>
        <div className={styles.nav}>
          <p className={styles.logo}>Café Aroma</p>
          <ul className={styles.li}>
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#localizacao">Localizacao</a></li>
          </ul>
        </div>
      </navbar>

      <section id="home" className={styles.hero}>
        <div className={styles.conthero}>
          <h1>Bem-Vindo ao Café Aroma</h1>
          <p>Descubra o sabor autêntico do café artesanal</p>
          <a href="#produtos" className={styles.btn}>Conheça nossos cafés</a>
        </div>
      </section>

      <section id="sobre" className={styles.sobre}>
        <div className={styles.container}>
          <h2>Sobre Nós</h2>
          <p>No Café Aroma, acreditamos que cada xícara conta uma história. Somos apaixonados por café artesanal e dedicados a trazer até você sabores únicos, selecionados com cuidado desde a origem até o preparo final.

            Trabalhamos com grãos especiais, cultivados por pequenos produtores que valorizam qualidade, tradição e sustentabilidade. Cada lote passa por um processo criterioso de torra artesanal, garantindo aroma intenso, sabor equilibrado e uma experiência incomparável.

            Nossa cafeteria nasceu do desejo de criar um ambiente acolhedor, onde cada cliente possa sentir o calor, o charme e a simplicidade de um bom café feito com carinho. Aqui, você encontra não apenas bebidas incríveis, mas também um espaço feito para relaxar, conversar, estudar ou apenas apreciar um bom momento.

            No Café Aroma, o café é mais do que uma bebida — é uma paixão compartilhada. Seja bem-vindo ao nosso mundo de aromas, sabores e experiências únicas.</p>
        </div>
      </section>

      <section id="produtos" className={styles.produtos}>
        <div className={styles.container}>
          <h2>Nossos Produtos</h2>
          <div className={styles.produtosgrid}>
            <article className={styles.article}>
              <div className={styles.iconcafe}>☕</div>
              <h3>Espresso</h3>
              <p>Café puro e intenso, preparado na pressão perfeita</p>
              <span className={styles.preco}>R$8,00</span>
            </article>
          </div>
        </div>

        <div className={styles.container}>
          <h2>Nossos Produtos</h2>
          <div className={styles.produtosgrid}>
            <article className={styles.article}>
              <div className={styles.iconcafe}>🥤</div>
              <h3>Capucciono</h3>
              <p>Cremoso e suave, com espuma de leite perfeita</p>
              <span className={styles.preco}>R$12,00</span>
            </article>
          </div>
        </div>

        <div className={styles.container}>
          <h2>Nossos Produtos</h2>
          <div className={styles.produtosgrid}>
            <article className={styles.article}>
              <div className={styles.iconcafe}>🧋</div>
              <h3>Espresso</h3>
              <p>Refrescante e saboroso para os dias quentes </p>
              <span className={styles.preco}>R$10,00</span>
            </article>
          </div>
        </div>
      </section>
    
      <section id="localizacao" className={styles.localizaçao}>
         <div className={styles.container}>
          <h2>Onde estamos</h2>
          <div className={styles.contatoinfo}>
            <p>Rua do Café, 123 - Centro,São Paulo - SP</p>
            <p>(11) 996712-5432</p>
            <p>contato@cafearoma.com.br</p>
            
          </div>
          <div className={styles.mapa}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470948.5353418217!2d-48.241477710937495!3d-22.754786199999973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c631ff4c35397f%3A0x1ef6f7edde4333f!2sCaf%C3%A9%20Aroma%20Piracicaba!5e0!3m2!1spt-BR!2sbr!4v1765217971449!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      <footer>
        <p>2025 Café Aroma -Todos os direitos reservados</p>
      </footer>
    </>
  )
}

export default App
