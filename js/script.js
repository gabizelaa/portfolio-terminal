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
  about: getAboutMeText,
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
var pongAudio = new Audio("./assets/pong.wav");

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
      <h2>Alguns tópicos sobre mim!</h2>
      > tenho <strong>19 anos</strong> e sou uma sagitariana de 2004.<br>
      > me chamo <strong>Gabriela, mas meus amigos de chamam de gabizela</strong>.<br>
      > o que mais me mantem estável é ir a academia, algo que muitos deveriam ter na rotina!<br>
      > durante minha infância, mexer com tecnologia era um hobby, porém, comecei a levar como algo mais sério depois dos <strong>15 anos</strong>.<br>
      > meu primeiro contato com programação foi com <strong>Python</strong>, porém, acabei seguindo para o desenvolvimento web com <strong>HTML/CSS e JavaScript.</strong><br>
      > quando no ensino médio, eu gostava de dar aula de física e matemática aos meus colegas após o horário de aula...<br>
      
      `;
}

function getPetsText() {
  return `
  <h2>VOCÊ PEDIU! AQUI VAI A LISTA DOS MEUS PETS</h2>
      <section id="images">
        <div class="container text-center">
          <div class="row">
            <div class="col-6">
              <img class="image img-fluid" src="./img/elsa.png" alt="foto da Elsa"/>
              <p>Elsa</p>
            </div>
            <div class="col-6">
              <img class="image img-fluid" src="./img/lindsey.png" alt="foto da Lindsey"/>
              <p>Lindsey</p>
            </div>
            <div class="col-6">
              <img class="image img-fluid" src="./img/pink.png" alt="foto da Pink"/>
              <p>Pink</p>
            </div>
            <div class="col-6">
              <img class="image img-fluid" src="./img/pingo.png" alt="foto do Pingo"/>
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
      <strong>&lt;Landing Page&gt;</strong> ----------------- <a href="https://github.com/gabizelaa/landing-page-fs" target="_blank">gabizelaa/landing-page-fs</a><br>
      <strong>&lt;FinTech Salt&gt;</strong> ----------------- <a href="https://github.com/gabizelaa/fiap-fintech" target="_blank">gabizelaa/fiap-fintech</a><br>
      <strong>&lt;YourAge Android&gt;</strong> -------------- <a href="https://github.com/gabizelaa/android-yourage" target="_blank">gabizelaa/android-yourage</a><br>
      <strong>&lt;Cafeteria Serenatto&gt;</strong> ---------- <a href="https://github.com/gabizelaa/serenatto" target="_blank">gabizelaa/serenatto</a><br>
      <strong>&lt;Meteora&gt;</strong> ---------------------- <a href="https://github.com/gabizelaa/meteora" target="_blank">gabizelaa/meteora</a><br>
      `;
}

function getHabilitiesText() {
  return `
      <h2>Aqui vão algumas das minhas <strong>Hard Skills</strong></h2>
      linguagens ---------------------- Java, Python e Kotlin<br>
      frameworks ---------------------- Maven, Spring e Jetpack Compose<br>
      desenvolvimento Web ------------- HTML, CSS, Bootstrap e JavaScript<br>
      banco de Dados ------------------ OracleSQL, PostgreSQL e MySQL<br>
      IDEs ---------------------------- VScode, IntelliJ, PyCharm e Figma<br>
      ferramentas de versionamento ---- Git e Github<br>
      metodologias Ágeis -------------- Scrum e Kanban<br>
      `;
}

function getStudiesText() {
  return `
      <h2>Um pouco sobre minha formação acadêmica:</h2>
      Esta é minha primeira graduação da vida, e já estou em meu terceiro semestre em Análise e Desenvolvimento de Sistemas pela <strong>FIAP</strong><br>
      Também ando fazendo alguns cursos e bootcamps paralelos pela <a href="alura.com.br" target="_blank">Alura</a> e <a href="dio.me" target="_blank">DIO</a>.(◠‿◠✿)<br>
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
      Esta é a minha primeira chance de ter uma experiência no mercado de trabalho <3
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
      ping --------------- ヘ(^_^ヘ)<br>
      about -------------- sobre mim<br>
      pets --------------- meus bebês<br>
      projetos ----------- meus projetos<br>
      skills ------------- principais habilidades<br>
      estudos ------------ formação acadêmica<br>
      social ------------- minhas redes sociais<br>
      carreira ----------- experiência profissional<br>
      playlist ----------- um pouco do meu gosto musical<br>
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
