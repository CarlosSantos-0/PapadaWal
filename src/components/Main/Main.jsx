import styles from '../Main/styles.module.css'

function Main() {
    return (
        <main className={styles.main}>
            <div className={styles.heroSection}>
                <div className={styles.titulo}>
                <h1>Como funciona?</h1>
                </div>
                <p className={styles.subtitle}>
                    Escolha alguns de nossos deliciosos kits ou personalize sua dieta com ingredientes frescos.
                </p>
            </div>

            <div className={styles.stepsContainer}>
                <div className={styles.stepCard}>
                    <div className={styles.iconCircle}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </div>
                    <h2>1. Faça seu Pedido</h2>
                    <p>
                        Envie para nós sua dieta feita por um nutricionista ou monte você mesmo.
                    </p>
                </div>

                <div className={styles.stepCard}>
                    <div className={styles.iconCircle}>
                        <i className="fa-solid fa-truck-fast"></i>
                    </div>
                    <h2>2. Entrega Rápida</h2>
                    <p>
                        Entregas realizadas por toda a região de Bragança. Receba toda semana ou mês.
                    </p>
                </div>

                <div className={styles.stepCard}>
                    <div className={styles.iconCircle}>
                        <i className="fa-solid fa-utensils"></i>
                    </div>
                    <h2>3. Aproveite</h2>
                    <p>
                        Se delicie com uma marmita fresca, saudável e ideal para sua rotina!
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Main