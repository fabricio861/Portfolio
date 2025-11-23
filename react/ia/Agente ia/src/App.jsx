import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './cafe.module.css'

function App() {

  return (
    <>
      <header>
        <div className={styles.nav}>
          <p>Café Aroma</p>
          <ul className={styles.li}>
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Produtos</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#contatos">Contatos</a></li>
          </ul>
        </div>
      </header>

      <section id="home" className={styles.heros}>
        <div>
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
              <div className={styles.iconcafe}>☕</div>
              <h3>Espresso</h3>
              <p>Café puro e intenso, preparado na pressão perfeita</p>
              <span className={styles.preco}>R$8,00</span>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
