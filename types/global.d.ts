// global.d.ts temporary workaround
export {};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lord-icon': any;
      'lordicon': any;  // adding both variants just in case
    }
  }
  
  interface Window {
    lordIcon: any;
  }
}