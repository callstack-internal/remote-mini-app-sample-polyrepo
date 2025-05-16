# Super App Showcase con Polyrepo - Mini Apps Remotas

Este proyecto demuestra cómo implementar una super app utilizando una arquitectura polyrepo con React Native. El proyecto muestra cómo las mini apps pueden ser alojadas tanto dentro del monorepo principal como de forma remota.

![Simulator Screen Recording - iPhone 16 Pro - 2025-05-16 at 15 51 40](https://github.com/user-attachments/assets/46fdd09e-2807-47ec-90db-2a62cdd64dfa)


## Descripción General

El proyecto está estructurado de manera que simula un entorno polyrepo real, donde:
- La super app (host) actúa como la aplicación principal
- La mayoría de las mini apps están en el mismo monorepo por simplicidad
- La mini app `techGal` está configurada para ser consumida de forma remota, simulando un escenario real de polyrepo

## Configuración de Mini Apps Remotas

En el archivo `rspack.config.mjs` de la super app, puedes ver la configuración de las mini apps remotas:

- La mayoría de las mini apps se cargan desde `localhost` durante el desarrollo
- `techGal` está configurada para cargarse desde GitHub, simulando un escenario de producción

### Desarrollo Local vs. Remoto

Para alternar entre desarrollo local y remoto de `techGal`:

1. En `packages/host/rspack.config.mjs`, encuentra las siguientes líneas:
```javascript
// Para desarrollo local (descomentar):
// techGal: `techGal@http://localhost:9005/${platform}/mf-manifest.json`,

// Para consumo remoto (comentar durante desarrollo local):
techGal: `techGal@https://raw.githubusercontent.com/callstack-internal/remote-mini-app-sample-polyrepo/refs/heads/main/techGallery/build/generated/${platform}/mf-manifest.json`,
```

2. Comenta/descomenta las líneas según necesites desarrollo local o remoto.

## Mini App TechGal

`techGal` es una aplicación independiente que puede ejecutarse de forma autónoma o como parte de la super app.

### Ejecutar TechGal como Aplicación Independiente

1. Navega al directorio de techGal:
```sh
cd techGallery
```

2. Instala las dependencias:
```sh
pnpm install
```

3. Inicia la aplicación:
```sh
pnpm start
```

4. En otra terminal, ejecuta la aplicación en iOS o Android:
```sh
pnpm ios
# o
pnpm android
```

## Implementación en un Polyrepo Real

Aunque este proyecto mantiene todo en un solo repositorio por simplicidad, está diseñado para funcionar como un polyrepo. Para implementar esto en un escenario real:

1. Mueve el contenido de la carpeta `techGal` a un repositorio separado
2. Ejecuta `pnpm bundle` para generar los archivos remotos
3. Sube la carpeta `build/generated` a cualquier servidor o CDN
4. Actualiza la URL en el `rspack.config.mjs` de la super app para que apunte a la nueva ubicación

---

# Super App Showcase with Polyrepo - Remote Mini Apps

This project demonstrates how to implement a super app using a polyrepo architecture with React Native. It showcases how mini apps can be hosted both within the main monorepo and remotely.

## Overview

The project is structured to simulate a real polyrepo environment, where:
- The super app (host) acts as the main application
- Most mini apps are in the same monorepo for simplicity
- The `techGal` mini app is configured to be consumed remotely, simulating a real polyrepo scenario

## Remote Mini Apps Configuration

In the super app's `rspack.config.mjs` file, you can see the remote mini apps configuration:

- Most mini apps are loaded from `localhost` during development
- `techGal` is configured to load from GitHub, simulating a production scenario

### Local vs. Remote Development

To toggle between local and remote development of `techGal`:

1. In `packages/host/rspack.config.mjs`, find these lines:
```javascript
// For local development (uncomment):
// techGal: `techGal@http://localhost:9005/${platform}/mf-manifest.json`,

// For remote consumption (comment during local development):
techGal: `techGal@https://raw.githubusercontent.com/callstack-internal/remote-mini-app-sample-polyrepo/refs/heads/main/techGallery/build/generated/${platform}/mf-manifest.json`,
```

2. Comment/uncomment the lines as needed for local or remote development.

## TechGal Mini App

`techGal` is an independent application that can run standalone or as part of the super app.

### Running TechGal as Standalone App

1. Navigate to techGal directory:
```sh
cd techGallery
```

2. Install dependencies:
```sh
pnpm install
```

3. Start the application:
```sh
pnpm start
```

4. In another terminal, run the app on iOS or Android:
```sh
pnpm ios
# or
pnpm android
```

## Implementation in a Real Polyrepo

While this project keeps everything in a single repository for simplicity, it's designed to work as a polyrepo. To implement this in a real scenario:

1. Move the `techGal` folder contents to a separate repository
2. Run `pnpm bundle` to generate the remote files
3. Upload the `build/generated` folder to any server or CDN
4. Update the URL in the super app's `rspack.config.mjs` to point to the new location

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
