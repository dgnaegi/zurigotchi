# Zurigotchi 🏛️

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
