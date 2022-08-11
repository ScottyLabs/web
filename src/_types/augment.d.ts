declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "dev" | "prod";
      PORT: string;
      GOOGLE_ANALYTICS_ID: string; // Google Analytics ID
    }
  }
}
