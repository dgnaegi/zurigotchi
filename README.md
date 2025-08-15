# Zurigotchi 🏛️

A Tamagotchi-style game with SimCity elements focused on managing Zurich districts (Kreise). Make kommunalpolitik more appealing and engaging through progressive district management!

## 🎮 Game Concept

- **Tamagotchi-style**: Your district is like a digital pet that needs care and attention
- **SimCity elements**: Manage infrastructure, services, and community well-being
- **Zurich-focused**: Choose and maintain one of Zurich's 12 districts
- **Progressive values**: Subtle left-wing progressive messaging through gameplay
- **Educational**: Learn about local politics and community management

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Expo CLI** (will be installed automatically)
- **iOS Simulator** (for iOS development) or **Android Studio** (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd zurigotchi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Expo CLI globally** (if not already installed)
   ```bash
   npm install -g @expo/cli
   ```

## 📱 Running the App

### Development Mode

Start the development server:
```bash
npm start
```

This will open the Expo DevTools in your browser. From there, you can:

- **iOS Simulator**: Press `i` or click "Run on iOS simulator"
- **Android Emulator**: Press `a` or click "Run on Android device/emulator"
- **Web Browser**: Press `w` or click "Run in web browser"
- **Physical Device**: Scan the QR code with the Expo Go app

### Platform-Specific Commands

```bash
# Run on iOS Simulator
npm run ios

# Run on Android Emulator
npm run android

# Run in web browser
npm run web
```

### Using Expo Go App

1. Download **Expo Go** from the App Store (iOS) or Google Play Store (Android)
2. Run `npm start` in your terminal
3. Scan the QR code with your device's camera (iOS) or the Expo Go app (Android)

## 🛠️ Development

### Project Structure

```
zurigotchi/
├── App.tsx              # Main app component
├── app.json             # Expo configuration
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── assets/              # Images, fonts, and other static assets
└── src/                 # Source code (to be created)
    ├── components/      # Reusable UI components
    ├── screens/         # App screens
    ├── types/           # TypeScript type definitions
    └── utils/           # Utility functions
```

### Available Scripts

- `npm start` - Start the Expo development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run in web browser

## 📦 Building for Production

### Using EAS Build (Recommended)

1. **Install EAS CLI**
   ```bash
   npm install -g @expo/eas-cli
   ```

2. **Login to Expo**
   ```bash
   eas login
   ```

3. **Configure EAS**
   ```bash
   eas build:configure
   ```

4. **Build for platforms**
   ```bash
   # Build for iOS
   eas build --platform ios
   
   # Build for Android
   eas build --platform android
   
   # Build for both
   eas build --platform all
   ```

### Manual Build

For manual builds, you'll need to eject from Expo:
```bash
expo eject
```

## 🎯 Game Features (Planned)

- **District Selection**: Choose from Zurich's 12 districts
- **Resource Management**: Balance budget, infrastructure, and services
- **Community Events**: Respond to citizen needs and events
- **Progressive Policies**: Implement sustainable and inclusive policies
- **Visual Feedback**: District appearance changes based on management
- **Educational Content**: Learn about local politics and community issues

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### Common Issues

**Metro bundler issues:**
```bash
npm start -- --clear
```

**iOS Simulator not working:**
- Make sure Xcode is installed and updated
- Run `sudo xcode-select --switch /Applications/Xcode.app`

**Android Emulator not working:**
- Make sure Android Studio is installed
- Create and start an Android Virtual Device (AVD)

**Expo Go app issues:**
- Make sure your device and computer are on the same network
- Try using a tunnel connection: `npm start -- --tunnel`

### Getting Help

- Check the [Expo documentation](https://docs.expo.dev/)
- Visit the [React Native documentation](https://reactnative.dev/)
- Open an issue in this repository

---

**Happy district managing! 🏛️✨**
