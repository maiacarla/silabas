# Desdobráveis da Alfabetização: Casos de Leitura & Sílabas Complexas 📚✨

Jogo educativo interativo para aprendizagem, aplicação e consolidação de consoantes, casos de leitura e sílabas complexas, voltado para crianças em fase de alfabetização inicial (1º Ano / 1º Ciclo do Ensino Básico).

Inspirado nas fichas e desdobráveis pedagógicos de **Eliana Ernesto** (*Português 1º ano - Desdobráveis: de A a Z + Casos de leitura*).

---

## 🌟 Principais Funcionalidades

- **📄 Desdobráveis Interativos**: Folhas dobráveis virtuais inspiradas nos trabalhos manuais (recorta, dobra, cola), com os 9 vocábulos ilustrados por caso fonético.
- **🖍️ Pincel Mágico / Marcador**: Atividade interativa para rodear e pintar o grafema/fonema nas palavras (amarelo, azul, cor-de-rosa, verde e roxo).
- **🔊 Leitura por Síntese de Voz**: Pronúncia de todas as palavras, sílabas e regras fonéticas em Português com fala pausada para primeiros leitores.
- **🧩 Oficina de Sílabas (Monta-Palavras)**: Desafio de construção e ordenação de sílabas complexas com confetes e recompensas.
- **🔍 Detetive dos Casos de Leitura**: Quiz de discernimento fonético (ex.: *R forte vs. R brando*, *S com som de Z vs. SS*, *GUE/GUI vs. GE/GI*, *M antes de P e B*, *Valores do X*).
- **✨ Sílabas Secretas**: Exercícios de completar palavras com a sílaba que falta.
- **🔤 Alternador de Letras**: Alternância instantânea entre **LETRAS MAIÚSCULAS** (bastão) e **minúsculas/cursiva**.
- **🏆 Álbum de Cromos**: Mascotes desbloqueáveis à medida que a criança ganha estrelas a jogar.
- **🖨️ PDF Original Integrado**: Visualização, download e instruções de impressão do caderno de 48 páginas para atividades práticas na sala de aula.

---

## 🚀 Como Publicar no GitHub e Ativar o Deploy (GitHub Pages)

Este projeto já inclui um fluxo de trabalho do **GitHub Actions** (`.github/workflows/deploy.yml`) pré-configurado para publicação automática e gratuita no **GitHub Pages**!

### 1. Criar repositório no GitHub
1. Entra na tua conta no [GitHub](https://github.com) e clica em **New repository** (Novo repositório).
2. Dá um nome ao repositório (ex.: `desdobraveis-alfabetizacao`).
3. Deixa-o como **Public** e **não** marques "Initialize with README" (já temos todos os ficheiros).
4. Clica em **Create repository**.

### 2. Enviar o código para o GitHub (pelo terminal)
No terminal da tua máquina local, dentro da pasta do projeto, executa:

```bash
git init
git add .
git commit -m "feat: lancamento do jogo dos desdobraveis de alfabetizacao"
git branch -M main
git remote add origin https://github.com/TEU_UTILIZADOR/TEU_REPOSITORIO.git
git push -u origin main
```

### 3. Ativar o GitHub Pages (Automático)
1. No teu repositório no GitHub, vai ao separador **Settings** (Definições).
2. Na barra lateral esquerda, clica em **Pages**.
3. Em **Build and deployment** > **Source**, seleciona **GitHub Actions**.
4. Pronto! O GitHub irá compilar o projeto e em cerca de 1 a 2 minutos o teu jogo estará online e jogável no link:  
   `https://TEU_UTILIZADOR.github.io/TEU_REPOSITORIO/`

---

## 💻 Como Executar Localmente

Se quiseres rodar e testar o projeto no teu computador:

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) no teu navegador.

3. **Gerar a versão de produção (Build)**:
   ```bash
   npm run build
   ```
   Os ficheiros prontos para qualquer servidor estático serão gerados na pasta `dist/`.

---

## 🛠️ Tecnologias Utilizadas

- **React 19** + **TypeScript**
- **Vite** (com suporte a caminhos relativos para qualquer alojamento)
- **Tailwind CSS v4**
- **Lucide Icons**
- **Canvas-Confetti**
- **Web Speech API & Web Audio API** (sons e voz sem necessidade de servidores externos)
