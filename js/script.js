document
  .getElementById("command-input")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const input = event.target.value.trim().toLowerCase();
      handleCommand(input);
      event.target.value = ""; // Clean the input
    }
  });

// Map commands to their corresponding functions
const commandMap = {
  ping: getPongFunction,
  sobre: getAboutMeText,
  pets: getPetsText,
  projetos: getProjectsText,
  skills: getHabilitiesText,
  estudos: getStudiesText,
  social: getSocialsText,
  carreira: getCareerText,
  playlist: getPlaylistText,
  help: getHelpText,
  clear: clearTerminal,
};

function handleCommand(input) {
  const output = document.getElementById("output");
  const commandOutput = document.createElement("div");

  if (commandMap[input]) {
    if (input === "clear") {
      clearTerminal();
      return;
    }
    commandOutput.innerHTML = commandMap[input]();
  } else {
    commandOutput.textContent = `Comando inválido. Use 'help' para ver os comandos disponíveis.`;
  }

  output.appendChild(commandOutput);
  output.scrollTop = output.scrollHeight; //Automatic scrolling
}

// Clear terminal
function clearTerminal() {
  document.getElementById("output").textContent = "";
}

// Ping Pong
var pongAudio = new Audio("./assets/sounds/pong.wav");

function getPongFunction() {
  playPongAudio()
    .then(() => console.log("Áudio reproduzido com sucesso"))
    .catch((error) => console.error("Erro ao reproduzir o áudio:", error));

  return `PONG! ヘ(^_^ヘ)`;
}

function playPongAudio() {
  return pongAudio.play();
}

// Functions
function getAboutMeText() {
  return `
      <h2>Alguns tópicos sobre mim!</h2><hr>
      > tenho <strong>19 anos</strong> e sou uma sagitariana de 2004.<br><hr>
      > me chamo <strong>Gabriela, mas meus amigos de chamam de gabizela</strong>.<br><hr>
      > o que mais me mantem estável é ir a academia, algo que muitos deveriam ter na rotina!<br><hr>
      > durante minha infância, mexer com tecnologia era um hobby, porém, comecei a levar como algo mais sério depois dos <strong>15 anos</strong>.<br><hr>
      > aprendi lógica de programação um pouco com <strong>Python</strong> e muuuito com <strong>Java</strong>, porém, agora estou interessada em me aprofundar em desenvolvimento web com <strong>React.</strong><br><hr>
      > quando no ensino médio, eu gostava de dar aula de física e matemática aos meus colegas após o horário de aula...<br>
      `;
}

function getPetsText() {
  return `
  <h2 class="text-start text-md-center">VOCÊ PEDIU! AQUI VAI A LISTA DOS MEUS PETS</h2>
      <section id="images">
        <div class="container text-center">
          <div class="row">
            <div class="col-md-3">
              <img class="image img-fluid" src="/assets/images/elsa.png" alt="foto da Elsa"/>
              <p>Elsa</p>
            </div>
            <div class="col-md-3">
              <img class="image img-fluid" src="/assets/images/lindsey.png" alt="foto da Lindsey"/>
              <p>Lindsey</p>
            </div>
            <div class="col-md-3">
              <img class="image img-fluid" src="/assets/images/pink.png" alt="foto da Pink"/>
              <p>Pink</p>
            </div>
            <div class="col-md-3">
              <img class="image img-fluid" src="/assets/images/pingo.png" alt="foto do Pingo"/>
              <p>Pingo</p>
            </div>
          </div>
        </div>
      </section>

  `;
}

function getProjectsText() {
  return `
      <h2>Alguns dos meus projetos:</h2><br>
      <strong>&lt;Portfolio Terminal&gt;</strong> ----------- <a href="https://github.com/gabizelaa/portfolio-terminal" target="_blank">gabizelaa/portfolio-terminal</a><br>
      <strong>&lt;Organo&gt;</strong> ----------------------- <a href="https://github.com/gabizelaa/react-organo" target="_blank">gabizelaa/react-organo</a><br>
      <strong>&lt;Landing Page&gt;</strong> ----------------- <a href="https://github.com/gabizelaa/landing-page-fs" target="_blank">gabizelaa/landing-page-fs</a><br>
      <strong>&lt;FinTech Salt&gt;</strong> ----------------- <a href="https://github.com/gabizelaa/fiap-fintech" target="_blank">gabizelaa/fiap-fintech</a><br>
      <strong>&lt;Cafeteria Serenatto&gt;</strong> ---------- <a href="https://github.com/gabizelaa/serenatto" target="_blank">gabizelaa/serenatto</a><br>
      <strong>&lt;WhatsApp Bot&gt;</strong> ----------------- <a href="https://github.com/gabizelaa/whatsapp-bot" target="_blank">gabizelaa/whatsapp-bot</a><br>
      `;
}

function getHabilitiesText() {
  return `
      <h2>Aqui vão algumas das minhas <strong>Hard Skills</strong></h2>
      backend ----------------------- Java, Python e NodeJS<br>
      frontend ---------------------- HTML, CSS, Bootstrap, JavaScript e React<br>
      frameworks -------------------- Maven e Spring <br>
      database ---------------------- OracleSQL, PostgreSQL, MySQL e SQLite<br>
      tools ------------------------- VScode, IntelliJ, Oracle, Figma, Git e GitHub<br>
      language ---------------------- inglês fluente<br>
      `;
}

function getStudiesText() {
  return `
      <h2>Um pouco sobre minha formação acadêmica:</h2>
      Esta é minha primeira graduação da vida, já estou em meu terceiro semestre em Análise e Desenvolvimento de Sistemas pela <strong><a href="https://www.fiap.com.br/" target="_blank">FIAP</a></strong><br>
      Também, andei fazendo alguns cursos e bootcamps paralelos pela <a href="https://www.alura.com.br/" target="_blank">Alura</a> e <a href="https://www.dio.me/" target="_blank">DIO</a>.(◠‿◠✿)<br>
      Tive aulas de inglês desde os meus 11 anos, pela Yázigi, portanto, após manter um aprendizado contínuo na internet, hoje em dia sou fluente no idioma.
      `;
}

function getSocialsText() {
  return `
      <h2>Minhas redes sociais:<br></h2>
      &lt;github&gt; -------------- <a href="github.com/gabizelaa" target="_blank">github.com/gabizelaa</a><br>
      &lt;instagram&gt; ----------- <a href="instagram.com/gabibmartinz" target="_blank">instagram.com/gabibmartinz</a><br>
      &lt;linkedin&gt; ------------ <a href="linkedin.com/gabriela-b-martins" target="_blank">linkedin.com/gabriela-b-martins</a><br>
      `;
}

function getCareerText() {
  return `<h2>Sobre minha carreira:<br></h2>
      Atualmente, estou em busca de uma vaga de estágio para desenvolver minhas habilidades e avançar profissionalmente.<br>
      Esta é a minha primeira chance de ter uma experiência no mercado de trabalho e estou animada para me aprofundar na área da tecnologia!<3
      `;
}

function getPlaylistText() {
  return `<h2>Então você quer saber um pouco do que ouço?（⌒_⌒）<br></h2>
      nessa playlist que vou te enviar há mais de 900 músicas<br>
      aqui é o link da minha playlist no Spotify: <a href="https://open.spotify.com/playlist/2rwYlOQRBOMqT5j2IZjliQ?si=2dc0d02330ed4f6d" target="_blank">Clique!</a>
      `;
}

function getHelpText() {
  return `
      projetos ----------- meus projetos<br>
      skills ------------- principais habilidades<br>
      carreira ----------- experiência profissional<br>
      estudos ------------ formação acadêmica<br>
      sobre -------------- sobre mim<br>
      pets --------------- meus bebês<br>
      social ------------- minhas redes sociais<br>
      playlist ----------- um pouco do meu gosto musical<br>
      ping --------------- ヘ(^_^ヘ)<br>
      help --------------- exibe uma lista de comandos disponíveis<br>
      clear -------------- limpa o terminal<br>
      `;
}

// Date and time on screen
function updateDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString("pt-BR");
  const time = now.toLocaleTimeString("pt-BR");

  document.getElementById("date").textContent = `Data: ${date}`;
  document.getElementById("time").textContent = `Hora: ${time}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);
