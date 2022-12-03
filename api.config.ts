import { PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig = {
  testDir: "test/api",
  use: {
    baseURL: 'https://reqres.in/api/',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
    },
  },
};

export default config;