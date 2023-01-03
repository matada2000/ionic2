import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'my-app',
  webDir: 'dist/my-app',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.1.187:4200',
    cleartext: true,
  }
};

export default config;
