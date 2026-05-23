import styles from '../Sobre/styles.module.css'
import cozinheira from "../../assets/Sobre/cozinheira.png";

function Sobre() {
  return (
    <section className={styles.sobre}>
      
      
      <div className={styles.container}>

       
        <div className={styles.imagem}>
          <img src={cozinheira} alt="Chef da Papa da Wal" />
        </div>
      
       
        <div className={styles.container2}>
          
          <div className={styles.texto}>
            <h1>Sobre Nós</h1>
            <p>
              A Papa da da Wal nasceu da vontade de oferecer uma gastronomia saudável e acessível para todas as idades. A ideia surgiu ao perceber a dificuldade em encontrar alimentos realmente saudáveis no mercado, já que muitos produtos são altamente industrializados. Com mais de 22 anos de experiência na gastronomia, a fundadora criou a marca com o propósito de levar refeições práticas, saborosas e nutritivas, atendendo desde crianças em fase de introdução alimentar até pessoas idosas. Há cerca de seis meses no mercado, a Papa da Wal acredita que comer bem é uma forma de cuidado e carinho, oferecendo uma alimentação 100% saudável e preparada com dedicação em cada detalhe.
            </p>
          </div>

          <div className={styles.cards}>
              <div className={styles.card}>
                <h2>Missão</h2>
                <p>
                  Proporcionar saúde, praticidade e sabor no dia a dia dos nossos clientes, oferecendo marmitas fitness personalizadas e produtos saudáveis de qualidade, preparados com carinho e responsabilidade.
                </p>
              </div>

              <div className={styles.card}>
                <h2>Visão</h2>
                <p>
                  Ser referência no mercado de alimentação saudável personalizada, reconhecida por transformar hábitos alimentares e contribuir para uma vida mais equilibrada e cheia de energia.
                </p>
              </div>

              <div className={styles.card}>
                <h2>Valores</h2>
                <p>
                  Saúde em primeiro lugar: promover bem-estar por meio de escolhas nutritivas, equilibradas, frescas e selecionados em todas as preparações.
                </p>
              </div>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Sobre;