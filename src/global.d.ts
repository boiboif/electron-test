export interface VersionsApi {
  node: () => string;
  chrome: () => string;
  electron: () => string;
  ping: () => Promise<string>;
}

export interface CustomApi {
  quit: () => void;
  minimize: () => void;
  toogleMaximize: () => void;
  onMaximize: (callback: () => void) => void
  onUnmaximize: (callback: () => void) => void
}

declare global {
  interface Window {
    versions: VersionsApi;

    customApi: CustomApi
  }
}
