/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VIDEO_PASSWORD: string;
  readonly VITE_YOUTUBE_VIDEO_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
