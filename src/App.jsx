import style from './App.module.css'

function App() {

  return (
    <>


          <div className={style.modal}>
              <a className={style.modalLink} href="https://github.com/adriansito124"><img src="./Imagens/github.png"></img> Github</a>
              <a className={style.modalLink} href="https://www.youtube.com/@adriandepatins5463"><img src="./Imagens/youtube.png"></img>
                  YouTube</a>
              <a className={style.modalLink} href="https://wa.me/5541984938117"><img src="./Imagens/whatsapp.png"></img> WhatsApp</a>
          </div>

          <header>
            <div className={style.header}>
                <img src="./Imagens/menu.png" className={style.menu}></img>
                <div className={style.box}>
                    <a href="#profile" className={style.cresce}>Profile</a>
                    <a href="#projects" className={style.cresce}>Projects</a>
                    <a href="#skills" className={style.cresce}>Skills</a>
                </div>
            </div>
        </header>

        <main>

            <section>
                <h1 className={style.title}>PORTFÓLIO</h1>
                <div className={style.tv}>
                    <div className={style.screen}>
                        <img className={style.cd} id="disco" src="./Imagens/Ibere.jpeg"></img>
                    </div>
                </div>
            </section>

            <section id="profile">
                  <h1 className={style.title}>PROFILE</h1>
                  <div className={style.bloco}>
                      <div className={style.row}>
                          <img className={style.img} src="./Imagens/adrian.jpeg"></img>
                          <div className={style.vida}>
                              <h1 className={style.titulo}>Adrian Gobara Falci</h1>
                              <br></br>
                              <p> Olá, me chamo Adrian, tenho 17 anos e atualmente estou cursando Engenharia de Software
                                  na faculdade UniSenai e trabalhando como aprendiz na Bosch.</p>
                              <br></br>
                              <p> Estou morando com meus pais, minhas duas irmãs e meu cachorro. No meu tempo livre,
                                  costumo jogar e, nos finais de semana, geralmente ando de patins.</p>
                              <br></br>
                              <p> Meu sonho é desenvolver meu próprio jogo. 😁</p>
                          </div>
                      </div>

                      <div className={style.ybet}>
                          <img className={style.photo} src="./Imagens/titus.jpeg"></img>
                          <img className={style.photo} src="./Imagens/Ibere.jpeg"></img>
                          <img className={style.photo} src="./Imagens/patins.jpeg"></img>
                      </div>
                  </div>
            </section>

            <section id="projects">
                <h1 className={style.title}>PROJECTS</h1>
                <div className={style.bloco}>
                    <div className={style.vida2}>
                            <h1 className={style.titulo}>Gênio Quiz Brawl Stars</h1>
                            <br></br>
                            <p>Um jogo realizado com HTML, JavaScript e CSS, inspirado nos jogos de Gênio Quiz de André
                                Birnfeld, com tema central Brawl Stars, um jogo famoso da Supercell.</p>
                            <br></br>
                            <p>O jogo ainda não está completo, mas já está bem desenvolvido, com 43 questões prontas de um total de 50.</p>
                        </div>
                    <div className={style.row2}>
                        <img className={style.img2} id="brau" onClick={() =>  window.location.href = 'https://github.com/adriansito124/GenioQuizBrau'}  src="./Imagens/genioquiz.png"></img>
                    </div>

                    <div className={style.row2}>
                        <div className={style.vida2}>
                            <h1 className={style.titulo}>Regador de plantas automático</h1>
                            <br></br>
                            <p>Um projeto de IoT realizado com HTML, JavaScript, CSS e Python, que rega as plantas quando
                                necessário e fornece dados sobre elas.</p>
                                <br></br>
                            <p>Foram utilizados materiais para a estrutura do projeto, como vasos e mangueiras, além de sensores e motores para a parte funcional, incluindo uma bomba de água e um sensor de umidade do solo. O sistema funciona com base na umidade do solo: se o nível de umidade estiver abaixo da média, o sistema envia água para a planta. Este projeto foi desenvolvido em equipe, com Juliana e Amilton.</p>
                        </div>
                        <img className={style.img2} id="plant" onClick={() => window.location.href = 'https://github.com/juupurcino/Regador-de-planta-'} src="./Imagens/planta.png"></img>
                        
                    </div>
                </div>
            </section>

            <section id="skills">
                <h1 className={style.title}>SKILLS</h1>
                <div className={style.bloco}>
                    <div className={style.ybet}>
                        <img className={style.photo3} src="./Imagens/python.png"></img>
                        <img className={style.photo3} src="./Imagens/C.png"></img>
                        <img className={style.photo3} src="./Imagens/HTML5.png"></img>
                    </div>

                    <div className={style.ybet}>
                        <img className={style.photo3} src="./Imagens/CSS.png"></img>
                        <img className={style.photo3} src="./Imagens/MicroPython.jpg"></img>
                        <img className={style.photo3} src="./Imagens/figma.png"></img>
                    </div>
                </div>
            </section>

            <h1 className={style.title}>FIM</h1>
        </main>
 
    </>
  )
}

export default App

