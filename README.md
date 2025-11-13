# FGTS App

Aplicativo para simulação de saque-aniversário utilizando o saldo do FGTS.

O projeto é desenvolvido com:
- React Native 0.81.5
- Expo 54
- TypeScript
- Expo Router

## Dependências

- Node.js >= 20.19.4
- npm >= 10.8.2 ou Yarn >= 1.22.17
- Java Development Kit >= 17 (apenas para desenvolvimento Android)
- Expo CLI (instalado globalmente via `npm install -g expo-cli`)

## Pré-requisitos

Certifique-se de ter um ambiente de desenvolvimento configurado para React Native. Abaixo estão os requisitos específicos para cada plataforma.

### Android

- [Node.js](https://nodejs.org/en/) instalado globalmente
- [JDK 17](https://adoptium.net/temurin/releases/) ou superior
- [Android Studio](https://developer.android.com/studio) configurado com:
  - Android SDK
  - Android SDK Platform
  - Android Virtual Device

### iOS (apenas em macOS)

- [Node.js](https://nodejs.org/en/) instalado globalmente
- [Xcode](https://apps.apple.com/br/app/xcode/id497799835?mt=12) (disponível na App Store)
- [CocoaPods](https://cocoapods.org/)
- [Watchman](https://facebook.github.io/watchman/)

## Configuração do Projeto

1. Clone o repositório:
   ```bash
   git clone [https://github.com/matheus-jsc/fgts-app]
   cd fgts-app
   ```

2. Instale as dependências:
   ```bash
   # Usando npm (recomendado)
   npm install --legacy-peer-deps

   # ou usando Yarn
   yarn
   ```

3. Instale o Expo CLI globalmente (caso ainda não tenha):
   ```bash
   npm install -g expo-cli
   ```

## Executando o Projeto

### Desenvolvimento

```bash
# Iniciar o servidor de desenvolvimento
npm start
# ou
npx expo start
```

Isso abrirá o Metro Bundler e o gerenciador de tarefas do Expo no navegador. A partir daí, você pode:

- Pressionar `a` para abrir no emulador Android
- Pressionar `i` para abrir no simulador iOS
- Escanear o QR code com o app Expo Go no seu dispositivo físico
- Pressionar `w` para abrir na web

## Estrutura do Projeto

```
fgts-app/
├── app/
│   ├── features/          # Funcionalidades do aplicativo
│   ├── navigation/        # Configuração de navegação (Expo Router)
│   ├── shared/            # Componentes compartilhados
│   └── theme/             # Tema e estilos globais
├── assets/               # Recursos estáticos (imagens, fontes, etc.)
├── .expo/                # Configurações do Expo
├── node_modules/         # Dependências
├── .gitignore
├── app.json             # Configuração do Expo
├── babel.config.js      # Configuração do Babel
├── package.json         # Dependências e scripts
└── tsconfig.json        # Configuração do TypeScript
├── assets/                # Recursos como imagens e fontes
└── App.tsx                # Ponto de entrada do aplicativo
```

## Variáveis de Ambiente

O projeto utiliza variáveis de ambiente para configurações sensíveis. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
BASE_URL=https://api.exemplo.com
API_KEY=1234567890
```

## Dependências Principais

- React Native 0.81.5
- Expo 54
- Expo Router
- TypeScript
- Styled Components
- React Native Gesture Handler
- Expo Fonts
- Expo Constants
- Expo Status Bar
