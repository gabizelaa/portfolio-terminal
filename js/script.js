class TerminalApp {
  constructor() {
    this.commandInput = document.getElementById("command-input");
    this.output = document.getElementById("output");
    this.themeToggle = document.getElementById("theme-toggle");
    this.themeIcon = this.themeToggle.querySelector(".theme-icon");
    this.pongAudio = new Audio("./assets/sounds/pong.wav");
    this.commandHistory = [];
    this.historyIndex = -1;
    this.lastMemeIndex = -1;
    
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.loadTheme();
    this.startDateTimeUpdater();
    this.setupKeyboardShortcuts();
  }

  setupEventListeners() {
    this.commandInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        this.handleCommand(event.target.value.trim().toLowerCase());
        event.target.value = "";
      }
    });

    this.commandInput.addEventListener("keydown", (event) => {
      this.handleHistoryNavigation(event);
    });

    this.themeToggle.addEventListener("click", () => {
      this.toggleTheme();
    });

    this.commandInput.addEventListener("input", (event) => {
      this.historyIndex = -1;
    });
  }

  setupKeyboardShortcuts() {
    document.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.key === "l") {
        event.preventDefault();
        this.clearTerminal();
      }
      
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        this.toggleTheme();
      }
    });
  }

  handleHistoryNavigation(event) {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (this.historyIndex < this.commandHistory.length - 1) {
        this.historyIndex++;
        this.commandInput.value = this.commandHistory[this.commandHistory.length - 1 - this.historyIndex];
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (this.historyIndex > 0) {
        this.historyIndex--;
        this.commandInput.value = this.commandHistory[this.commandHistory.length - 1 - this.historyIndex];
      } else if (this.historyIndex === 0) {
        this.historyIndex = -1;
        this.commandInput.value = "";
      }
    }
  }

  handleCommand(input) {
    if (!input) return;

    this.addToHistory(input);
    this.addCommandToOutput(input);
    
    const commandOutput = document.createElement("div");
    commandOutput.className = "command-result";

    if (this.commandMap[input]) {
      if (input === "clear") {
        this.clearTerminal();
        return;
      }
      commandOutput.innerHTML = this.commandMap[input]();
    } else {
      commandOutput.innerHTML = `
        <span style="color: var(--error-color);">
          Comando inválido. Use 'help' para ver os comandos disponíveis.
        </span>
      `;
    }

    this.output.appendChild(commandOutput);
    this.scrollToBottom();
  }

  addToHistory(command) {
    if (command && command !== this.commandHistory[this.commandHistory.length - 1]) {
      this.commandHistory.push(command);
      if (this.commandHistory.length > 50) {
        this.commandHistory.shift();
      }
    }
  }

  addCommandToOutput(command) {
    const commandLine = document.createElement("div");
    commandLine.className = "command-line";
    commandLine.innerHTML = `
      <span class="prompt">&lt;C:\\Users\\u&gt;</span>
      <span class="command-text">${command}</span>
    `;
    this.output.appendChild(commandLine);
  }

  clearTerminal() {
    this.output.textContent = "";
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.output.scrollTop = this.output.scrollHeight;
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    
    this.themeIcon.textContent = newTheme === "light" ? "🌙" : "☀️";
  }

  loadTheme() {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    this.themeIcon.textContent = savedTheme === "light" ? "🌙" : "☀️";
  }

  startDateTimeUpdater() {
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 1000);
  }

  updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString("pt-BR");
    const time = now.toLocaleTimeString("pt-BR");

    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");
    
    if (dateElement) dateElement.textContent = `Data: ${date}`;
    if (timeElement) timeElement.textContent = `Hora: ${time}`;
  }

  async playPongAudio() {
    try {
      await this.pongAudio.play();
    } catch (error) {
      console.error("Erro ao reproduzir o áudio:", error);
    }
  }

  get commandMap() {
    return {
      ping: () => this.getPongFunction(),
      about: () => this.getAboutMeText(),
      pets: () => this.getPetsText(),
      projects: () => this.getProjectsText(),
      skills: () => this.getHabilitiesText(),
      studies: () => this.getStudiesText(),
      social: () => this.getSocialsText(),
      career: () => this.getCareerText(),
      music: () => this.getPlaylistText(),
      help: () => this.getHelpText(),
      clear: () => this.clearTerminal(),
      theme: () => this.toggleTheme(),
      meme: () => this.getMemeText(),
      sobre: () => this.getAboutMeText(),
      projetos: () => this.getProjectsText(),
      estudos: () => this.getStudiesText(),
      carreira: () => this.getCareerText(),
    };
  }

  getPongFunction() {
    this.playPongAudio();
    return `<span style="color: var(--success-color);">PONG! ヘ(^_^ヘ)</span>`;
  }

  getAboutMeText() {
    return `
      <h2>Alguns tópicos sobre mim!</h2>
      <hr>
      <p>> tenho <strong>20 anos</strong> e sou sagitariana.</p>
      <hr>
      <p>> me nome é <strong>Gabriela, mas meus amigos me chamam de gabizela</strong>.</p>
      <hr>
      <p>> durante minha infância, mexer com tecnologia era um hobby, porém, comecei a levar como algo mais sério depois dos <strong>15 anos, quando montei meu primeiro PC</strong>.</p>
      <hr>
      <p>> quando no ensino médio, eu gostava de dar aula de física e matemática aos meus colegas após o horário de aula...</p>
      <hr>
      <p>> tenho uma paixão enorme por games de puzzle!</p>
      <hr>
    `;
  }

  getPetsText() {
    return `
      <h2>VOCÊ PEDIU! AQUI VAI A LISTA DOS MEUS PETS</h2>
      <div class="pets-grid">
        <div class="pet-item">
          <img class="image" src="/assets/images/elsa.png" alt="foto da Elsa" loading="lazy"/>
          <p>Elsa</p>
        </div>
        <div class="pet-item">
          <img class="image" src="/assets/images/lindsey.png" alt="foto da Lindsey" loading="lazy"/>
          <p>Lindsey</p>
        </div>
        <div class="pet-item">
          <img class="image" src="/assets/images/pink.png" alt="foto da Pink" loading="lazy"/>
          <p>Pink</p>
        </div>
        <div class="pet-item">
          <img class="image" src="/assets/images/pingo.png" alt="foto do Pingo" loading="lazy"/>
          <p>Pingo</p>
        </div>
      </div>
    `;
  }

  getProjectsText() {
    return `
      <h2>Alguns dos meus projetos:</h2>
      <div class="projects-list">
        <p><strong>&lt;GabiBot&gt;</strong> ---------------------- projeto privado da Mottu utilizando Python e OpenAI</p>
        <p><strong>&lt;Portfolio Terminal&gt;</strong> ----------- <a href="https://github.com/gabizelaa/portfolio-terminal" target="_blank" rel="noopener">gabizelaa/portfolio-terminal</a></p>
        <p><strong>&lt;Organo&gt;</strong> ----------------------- <a href="https://github.com/gabizelaa/react-organo" target="_blank" rel="noopener">gabizelaa/react-organo</a></p>
        <p><strong>&lt;Landing Page&gt;</strong> ----------------- <a href="https://github.com/gabizelaa/landing-page-fs" target="_blank" rel="noopener">gabizelaa/landing-page-fs</a></p>
        <p><strong>&lt;FinTech Salt&gt;</strong> ----------------- <a href="https://github.com/gabizelaa/fiap-fintech" target="_blank" rel="noopener">gabizelaa/fiap-fintech</a></p>
        <p><strong>&lt;Cafeteria Serenatto&gt;</strong> ---------- <a href="https://github.com/gabizelaa/serenatto" target="_blank" rel="noopener">gabizelaa/serenatto</a></p>
      </div>
    `;
  }

  getHabilitiesText() {
    return `
      <h2>Aqui vão algumas das minhas <strong>Hard Skills</strong></h2>
      <div class="skills-list">
        <p>backend ----------------------- C#, Python</p>
        <p>frontend ---------------------- HTML, CSS, Bootstrap, JavaScript e React</p>
        <p>database ---------------------- OracleSQL, PostgreSQL, MySQL e SQLite</p>
        <p>cloud ------------------------- AWS, Google Cloud</p>
        <p>tools ------------------------- VScode, Visual Studio, IntelliJ, Docker, Figma, Git e GitHub</p>
        <p>language ---------------------- inglês fluente</p>
      </div>
    `;
  }

  getStudiesText() {
    return `
      <h2>Um pouco sobre minha formação acadêmica:</h2>
      <p>Finalizei recentemente a graduação em Análise e Desenvolvimento de Sistemas pela <strong><a href="https://www.fiap.com.br/" target="_blank" rel="noopener">FIAP</a></strong></p>
      <p>Parte da minha experiência prática em automações foi trabalhando como estagiária de desenvolvimento na <strong><a href="https://mottu.com.br/" target="_blank" rel="noopener">Mottu</a></strong></p>
      <p>Também, ando fazendo alguns cursos e trilhas paralelas pela <a href="https://www.alura.com.br/" target="_blank" rel="noopener">Alura</a>, Udemy <a href="https://www.udemy.com/br/" target="_blank" rel="noopener">Udemy</a> e <a href="https://www.portalhashtag.com/" target="_blank" rel="noopener">Hashtag Treinamentos</a>. (◠‿◠✿)</p>
    `;
  }

  getSocialsText() {
    return `
      <h2>Minhas redes sociais:</h2>
      <div class="socials-list">
        <p>Github -> <a href="https://github.com/gabizelaa" target="_blank" rel="noopener">github.com/gabizelaa</a></p>
        <p>Instagram -> <a href="https://instagram.com/gabizelaaa" target="_blank" rel="noopener">instagram.com/gabizelaaa</a></p>
        <p>Linkedin -> <a href="https://linkedin.com/in/gabriela-b-martins" target="_blank" rel="noopener">linkedin.com/in/gabriela-b-martins</a></p>
      </div>
    `;
  }

  getCareerText() {
    return `
      <h2>Sobre minha carreira:</h2>
      <p>Atualmente, estou em busca de um estágio na área da tecnologia! Muito ansiosa para crescer tanto profissionalmente quanto pessoalmente.</p>
      <p>Possuo experiência em atendimento ao cliente e uso de CRM!</p>
    `;
  }

  getPlaylistText() {
    setTimeout(() => {
      this.loadSpotifyPlayer();
    }, 100);

    return `
      <h2>Então você quer saber um pouco do que ouço?（⌒_⌒）</h2>
      <p>Se liga nessa playlist então!</p>
      <div class="spotify-player-container">
        <div id="spotify-embed-placeholder" class="spotify-embed">
          <p style="color: var(--text-secondary);">Carregando player do Spotify...</p>
        </div>
      </div>
      <p style="margin-top: 0.5rem;">Ou acesse meu perfil aqui: <a href="https://open.spotify.com/user/224kokdb5fzb2ogdfymcfk36i?si=601bcb4cb06d4dfd" target="_blank" rel="noopener">Spotify Profile</a></p>
    `;
  }

  loadSpotifyPlayer() {
    const placeholder = document.getElementById('spotify-embed-placeholder');
    if (!placeholder) return;

    if (!window.spotifyIframeApiLoaded) {
      const script = document.createElement('script');
      script.src = 'https://open.spotify.com/embed/iframe-api/v1';
      script.async = true;
      
      window.onSpotifyIframeApiReady = (IFrameAPI) => {
        window.spotifyIframeApiLoaded = true;
        this.createSpotifyEmbed(IFrameAPI, placeholder);
      };
      
      document.body.appendChild(script);
    } else if (window.SpotifyIFrameAPI) {
      this.createSpotifyEmbed(window.SpotifyIFrameAPI, placeholder);
    }
  }

  createSpotifyEmbed(IFrameAPI, container) {
    container.innerHTML = '';
    
    const options = {
      width: '100%',
      height: '380',
      uri: 'spotify:playlist:2rwYlOQRBOMqT5j2IZjliQ'
    };

    const callback = (EmbedController) => {
      EmbedController.addListener('ready', () => {
        console.log('Spotify player carregado com sucesso!');
      });
    };

    IFrameAPI.createController(container, options, callback);
  }

  getMemeText() {
    const memes = [
      {
        title: "nooooooooo",
        ascii: `
⡴⠒⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠉⠳⡆⠀
⣇⠰⠉⢙⡄⠀⠀⣴⠖⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣆⠁⠙⡆
⠘⡇⢠⠞⠉⠙⣾⠃⢀⡼⠀⠀⠀⠀⠀⠀⠀⢀⣼⡀⠄⢷⣄⣀⠀⠀⠀⠀⠀⠀⠀⠰⠒⠲⡄⠀⣏⣆⣀⡍
⠀⢠⡏⠀⡤⠒⠃⠀⡜⠀⠀⠀⠀⠀⢀⣴⠾⠛⡁⠀⠀⢀⣈⡉⠙⠳⣤⡀⠀⠀⠀⠘⣆⠀⣇⡼⢋⠀⠀⢱
⠀⠘⣇⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⡴⢋⡣⠊⡩⠋⠀⠀⠀⠣⡉⠲⣄⠀⠙⢆⠀⠀⠀⣸⠀⢉⠀⢀⠿⠀⢸
⠀⠀⠸⡄⠀⠈⢳⣄⡇⠀⠀⢀⡞⠀⠈⠀⢀⣴⣾⣿⣿⣿⣿⣦⡀⠀⠀⠀⠈⢧⠀⠀⢳⣰⠁⠀⠀⠀⣠⠃
⠀⠀⠀⠘⢄⣀⣸⠃⠀⠀⠀⡸⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠈⣇⠀⠀⠙⢄⣀⠤⠚⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⢹⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⢘⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⢰⣿⣿⣿⡿⠛⠁⠀⠉⠛⢿⣿⣿⣿⣧⠀⠀⣼⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡀⣸⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⡀⢀⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇⠹⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⡿⠁⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣤⣞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢢⣀⣠⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠲⢤⣀⣀⠀⢀⣀⣀⠤⠒⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        `,
      },
      {
        title: "trololololo",
        ascii: `
⠀⠀⠀⠀⢀⡤⠤⠤⠤⠤⣤⣤⣤⡤⠤⠤⢤⣄⣀⡀⠀⠀⠀⠀
⠀⠀⠀⣠⠏⠀⡠⠐⢌⠐⠂⠀⠐⠒⠀⠀⢀⣒⡚⠉⠳⣄⠀⠀
⠀⠀⣠⠇⠀⠈⠪⢊⣀⣤⣄⣀⠁⠀⠀⢰⠁⠀⠈⠀⠀⠘⡇⠀
⢀⣔⠓⣒⣂⣐⠄⠿⠛⡟⠷⢬⡷⠀⠠⣴⠾⠿⠛⠃⠖⢖⢝⢦
⡞⠀⡞⢁⣴⣍⠙⠒⠋⠀⢀⣀⡀⠀⠀⠸⣄⠀⠶⠶⢋⠓⠁⣾
⢳⡠⡳⠉⢷⣌⠙⡷⠦⣥⣀⠧⠖⠒⢀⣀⠞⠓⠢⣠⣿⡤⢑⡞
⠀⠹⣄⠀⠈⢻⡙⡿⣦⣄⣸⠉⠛⢲⠒⢲⡖⠒⡟⢹⣹⡇⢸⠀
⠀⠀⠘⣆⠀⠀⠙⢧⡀⢈⡟⠛⠿⡿⣿⣿⣿⣿⣿⣿⣿⠇⢸⠀
⠀⠀⠀⠈⠳⣄⠔⡠⢉⠺⠦⣤⣀⣇⣀⣸⣀⣞⣸⡭⠞⠀⢸⠀
⠀⠀⠀⠀⠀⠈⠙⠦⣕⡊⠔⢠⡄⠀⠐⠒⣂⣀⠀⠔⢀⠄⢸⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠓⠦⣄⣈⡉⠀⠀⠀⠀⠀⠁⢀⡼⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠙⠓⠒⠒⠒⠚⠉⠀⠀
        `,
      },
      {
        title: ":o",
        ascii: `
⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢻⣿⡗⢶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣄
⠀⢻⣇⠀⠈⠙⠳⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⠶⠛⠋⣹⣿⡿
⠀⠀⠹⣆⠀⠀⠀⠀⠙⢷⣄⣀⣀⣀⣤⣤⣤⣄⣀⣴⠞⠋⠉⠀⠀⠀⢀⣿⡟⠁
⠀⠀⠀⠙⢷⡀⠀⠀⠀⠀⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠋⠀⠀
⠀⠀⠀⠀⠈⠻⡶⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣠⡾⠋⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣼⠃⠀⢠⠒⣆⠀⠀⠀⠀⠀⠀⢠⢲⣄⠀⠀⠀⢻⣆⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢰⡏⠀⠀⠈⠛⠋⠀⢀⣀⡀⠀⠀⠘⠛⠃⠀⠀⠀⠈⣿⡀⠀⠀⠀⠀
⠀⠀⠀⠀⣾⡟⠛⢳⠀⠀⠀⠀⠀⣉⣀⠀⠀⠀⠀⣰⢛⠙⣶⠀⢹⣇⠀⠀⠀⠀
⠀⠀⠀⠀⢿⡗⠛⠋⠀⠀⠀⠀⣾⠋⠀⢱⠀⠀⠀⠘⠲⠗⠋⠀⠈⣿⠀⠀⠀⠀
⠀⠀⠀⠀⠘⢷⡀⠀⠀⠀⠀⠀⠈⠓⠒⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡇⠀⠀⠀
⠀⠀⠀⠀⠀⠈⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣧⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        `,
      },
      {
        title: "no bitches?",
        ascii: `
⠀⠀⠀⢘⣾⣾⣿⣾⣽⣯⣼⣿⣿⣴⣽⣿⣽⣭⣿⣿⣿⣿⣿⣧
⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⣰⣯⣾⣿⣿⡼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿
⠀⠀⠛⠛⠋⠁⣠⡼⡙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁
⠀⠀⠀⠤⣶⣾⣿⣿⣿⣦⡈⠉⠉⠉⠙⠻⣿⣿⣿⣿⣿⠿⠁⠀
⠀⠀⠀⠀⠈⠟⠻⢛⣿⣿⣿⣷⣶⣦⣄⠀⠸⣿⣿⣿⠗⠀⠀⠀
⠀⠀⠀⠀⠀⣼⠀⠄⣿⡿⠋⣉⠈⠙⢿⣿⣦⣿⠏⡠⠂⠀⠀⠀
⠀⠀⠀⠀⢰⡌⠀⢠⠏⠇⢸⡇⠐⠀⡄⣿⣿⣃⠈⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⣻⣿⢫⢻⡆⡀⠁⠀⢈⣾⣿⠏⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣿⣻⣷⣾⣿⣿⣷⢾⣽⢭⣍⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣼⣿⣿⣿⣿⡿⠈⣹⣾⣿⡞⠐⠁⠀⠀⠀⠁⠀⠀⠀
⠀⠀⠀⠨⣟⣿⢟⣯⣶⣿⣆⣘⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡆⠀⠐⠶⠮⡹⣸⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        `,
      },
      {
        title: "you forgot something...",
        ascii: `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⠶⠞⠛⠛⠉⠉⠉⠉⠉⠙⠛⢦⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠞⠉⠀⠀⠀⠆⠀⠀⠀⠀⠀⠀⠀⠀⠐⢹⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⡾⠋⠀⠀⠀⠀⢀⣀⣤⣤⠴⠶⠶⠶⠶⠶⡶⡾⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣴⠋⠀⠀⢀⡴⠾⠛⠉⠉⠀⠀⠀⠀⠀⠀⠀⣼⠁⠀⠀⠀⠀⠀
⠀⠀⠀⢀⡼⠁⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠃⠀⠀⠀⠀⠀⠀
⠀⠀⢀⡼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀
⠀⢠⡇⠀⠀⠀⠀⠀⠀⠀⠀⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀
⠀⣸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣆⠀⠀⠀⠀⠀⠀⠀⢀⡇⠀⣰⣏🧠⣀⣀
⠀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣆⠀⠀⠀⠀⠀⠀⢸⡇⣠⠏⠉⠛⠛⠋⠁
⢀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⡄⠀⠀⠀⠀⠀⢸⣿⠋⠀⠀⠀⠀⠀⠀
⢸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡄⠀⠀⠀⠀⣼⡇⠀⠀⠀⠀⠀⠀⠀
⣼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡀⠀⠀⣼⠃⣧⠀⠀⠀⠀⠀⠀⠀
        `,
      },
      {
        title: "shrek",
        ascii: `
⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆ 
⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿ 
⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀ 
⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉ 
        `,
      }
    ];

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * memes.length);
    } while (randomIndex === this.lastMemeIndex && memes.length > 1);
    
    this.lastMemeIndex = randomIndex;
    const randomMeme = memes[randomIndex];
    
    return `
      <div class="meme-container">
        <h2>${randomMeme.title}</h2>
        <div class="ascii-meme">${randomMeme.ascii}</div>
      </div>
    `;
  }

  getHelpText() {
    return `
      <h2>Comandos disponíveis:</h2>
      <div class="help-list">
        <p><strong>projects</strong> -> meus projetos</p>
        <p><strong>skills</strong> -> principais habilidades</p>
        <p><strong>career</strong> -> experiência profissional</p>
        <p><strong>studies</strong> -> formação acadêmica</p>
        <p><strong>about</strong> -> sobre mim</p>
        <p><strong>pets</strong> -> meus bebês</p>
        <p><strong>social</strong> -> minhas redes sociais</p>
        <p><strong>music</strong> -> um pouco do meu gosto musical</p>
        <p><strong>ping</strong> -> ヘ(^_^ヘ)</p>
        <p><strong>meme</strong> -> memes aleatórios 🎲✨</p>
        <p><strong>theme</strong> -> alternar tema claro/escuro</p>
        <p><strong>help</strong> -> exibe uma lista de comandos disponíveis</p>
        <p><strong>clear</strong> -> limpa o terminal</p>
      </div>
      <hr>
      <p><strong>Atalhos:</strong></p>
      <p>Ctrl + L -> limpar terminal</p>
      <p>Ctrl + K -> alternar tema</p>
      <p>↑/↓ -> navegar histórico</p>
    `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new TerminalApp();
});
