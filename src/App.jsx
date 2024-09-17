import style from './App.module.css';
import adrian from './assets/adrian.jpeg';
import c from './assets/C.png';
import css from './assets/CSS.png';
import emoji from './assets/emoji.png';
import figma from './assets/figma.png';
import genio from './assets/genioquiz.png';
import html from './assets/HTML5.png';
import ibere from './assets/Ibere.jpeg';
import micro from './assets/MicroPython.jpg';
import patins from './assets/patins.jpeg';
import planta from './assets/planta.png';
import python from './assets/python.png';
import titus from './assets/titus.jpeg';
import zap from './assets/whatsapp.png';


function App() {


  return (
    <>

      <header>
        <div className={style.header}>
        <a className={style.modalLink} href="https://wa.me/5541984938111"><img src={zap} alt="whatsapp"/> WhatsApp</a>
          <div className={style.box}>
            <a href="#profile" className={style.cresce}>Profile</a>
            <a href="#works" className={style.cresce}>Works</a>
            <a href="#projects" className={style.cresce}>Projects</a>
            <a href="#skills" className={style.cresce}>Skills</a>
          </div>
        </div>
      </header>

      <main>    

        <section id="profile">
          <h1 className={`${style.title} ${style.nunes}`}>PROFILE</h1>
          <div className={style.bloco}>
            <div className={style.row}>
              <img className={style.img} src={adrian} alt="adrian" />
              <div className={style.vida}>
                <h1 className={style.titulo}>Adrian Gobara Falci</h1>
                <p>Olá, me chamo Adrian, tenho 17 anos e atualmente estou cursando Engenharia de Software na faculdade UniSenai e trabalhando como aprendiz na Bosch.</p>
                <p>Estou morando com meus pais, minhas duas irmãs e meu cachorro. No meu tempo livre, costumo jogar e, nos finais de semana, geralmente ando de patins.</p>
                <p>Meu sonho é desenvolver meu próprio jogo. 😁</p>
              </div>
            </div>

            <div className={style.ybet}>
              <img className={style.photo} src={titus} alt="titus" />
              <img className={style.photo} src={ibere} alt="ibere" />
              <img className={style.photo} src={patins} alt="patins" />
            </div>
          </div>
        </section>

        <section id='works'>
          <h1 className={`${style.title} ${style.nunes}`}>WORKS</h1>
          <div className={style.bloco}>
            <div className={style.row}>
              <img className={style.img} src={emoji} alt="emoji" />
              <div className={style.vida}>
                <h1 className={style.titulo}>Histórico Profissional</h1>
                <p>Concluí o ensino médio em 2023 e agora estou trabalhando no meu primeiro emprego como aprendiz na Bosch.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <h1 className={`${style.title} ${style.nunes}`}>PROJECTS</h1>
          <div className={style.bloco}>
            <div className={style.vida2}>
              <h1 className={style.titulo}>Gênio Quiz Brawl Stars</h1>
              <p>Um jogo realizado com HTML, JavaScript e CSS, inspirado nos jogos de Gênio Quiz de André Birnfeld, com tema central Brawl Stars, um jogo famoso da Supercell.</p>
              <p>O jogo ainda não está completo, mas já está bem desenvolvido, com 43 questões prontas de um total de 50.</p>
            </div>
            <div className={style.row2}>
              <img
                className={style.img2}
                id="brau"
                onClick={() => window.location.href = 'https://github.com/adriansito124/GenioQuizBrau'}
                src={genio}
                alt="genio"
              />
            </div>

            <div className={style.row2}>
              <div className={style.vida2}>
                <h1 className={style.titulo}>Regador de plantas automático</h1>
                <p>Um projeto de IoT realizado com HTML, JavaScript, CSS e Python, que rega as plantas quando necessário e fornece dados sobre elas.</p>
                <p>Foram utilizados materiais para a estrutura do projeto, como vasos e mangueiras, além de sensores e motores para a parte funcional, incluindo uma bomba de água e um sensor de umidade do solo. O sistema funciona com base na umidade do solo: se o nível de umidade estiver abaixo da média, o sistema envia água para a planta. Este projeto foi desenvolvido em equipe, com Juliana e Amilton.</p>
              </div>
              <img
                className={style.img2}
                id="plant"
                onClick={() => window.location.href = 'https://github.com/juupurcino/Regador-de-planta-'}
                src={planta}
                alt="planta"
              />
            </div>
          </div>
        </section>

        <section id="skills">
          <h1 className={`${style.title} ${style.nunes}`}>SKILLS</h1>
          <div className={style.bloco}>
            <div className={style.ybet}>
              <img className={style.photo3} src={python} alt="python" />
              <img className={style.photo3} src={c} alt="c" />
              <img className={style.photo3} src={html} alt="html" />
            </div>

            <div className={style.ybet}>
              <img className={style.photo3} src={css} alt="css" />
              <img className={style.photo3} src={micro} alt="micro" />
              <img className={style.photo3} src={figma} alt="figma" />
            </div>
          </div>
        </section>

        <h1 className={style.title}>FIM</h1>

      </main>

    </>
  );
}

export default App;
