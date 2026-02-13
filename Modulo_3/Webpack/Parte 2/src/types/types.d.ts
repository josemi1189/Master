declare module "*.module.scss";
declare module "*.scss";
declare module "*.css";
declare module "*.png";
declare module "*.jpg";
declare module "*.svg";
declare module "*.ico";
declare module "*.tsx";
declare module "*.jsx";

declare namespace NodeJS {
  interface ProcessEnv {
    WEBPACK_API_BASE: string;
  }
}
