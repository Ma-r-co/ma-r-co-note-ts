import { css, createGlobalStyle, keyframes } from "styled-components";
import { rgba } from "polished";

/* ===============================================
#  color setting
=============================================== */
type Colors = {
  background: string;
  text: string;

  paleGray: string;
  lightGray: string;
  gray: string;
  primaryGray: string;

  primaryPurple: string;
  primary: string;
  primaryLight: string;
  primaryPale: string;

  secondary: string;
  danger: string;
  success: string;
  warn: string;
  info: string;
};
export const colors: Colors = {
  background: "#feffff",
  text: "#17252A",

  paleGray: "#f9f9f9",
  lightGray: "#ddd",
  gray: "#96acb3",
  primaryGray: "#627E8C",

  primaryPurple: "#2B7A78",
  primary: "#3AAFA9",
  primaryLight: rgba("#3AAFA9", 0.15),
  primaryPale: rgba("#3AAFA9", 0.07),

  secondary: "#2B7A78",
  danger: "#FF5C55",
  success: "#4FCE7A",
  warn: "#feaa2e",
  info: "#2490eb",
};

/* ===============================================
#  other variables
=============================================== */

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
  }
`;

export const size = {
  width: "800px",
  topHeight: "370px",
};

/* ===============================================
#  set css variables
=============================================== */
function setColor() {
  let styles = "";
  let key: keyof Colors;
  for (key in colors) {
    styles += `--${key}: ${colors[key]};`;
  }
  return css`
    :root {
      ${styles}
      --width: ${size.width};
      --topHeight: ${size.topHeight};
    }
  `;
}

/* ===============================================
#  font setting
=============================================== */
const font = css`
  font-family: -apple-system, system-ui, "Helvetica Neue", "Segoe UI",
    "Hiragino Kaku Gothic ProN", "Hiragino Sans", "?????????????????? ProN W3", Arial,
    ????????????, Meiryo, sans-serif;
  // font-family: 'Lato', 'Noto Sans JP', '?????????????????? ProN', 'Hiragino Kaku Gothic ProN',
  //      '????????????', Meiryo, '?????? ???????????????', 'MS PGothic', sans-serif;
  word-wrap: break-word;
  word-break: break-all;
  -moz-font-feature-settings: "palt";
  -webkit-font-feature-settings: "palt";
  font-feature-settings: "palt";
  font-variant-ligatures: no-common-ligatures;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: auto;
  -webkit-text-stroke: 1px transparent;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  letter-spacing: 0.05rem;
  font-weight: 400;
  color: var(--text);
`;

/* ===============================================
#  global style
=============================================== */
const GlobalStyle = createGlobalStyle`
  ${setColor}
  html {
    font-size: 16px;
  }
  body {
    ${font}
    font-size: 16px;
    line-height: 1.5;
    padding: 0;
    margin: 0;
    min-height: 100vh;
    position: relative;
    background: var(--background);
    a {
      color: var(--text);
    } 
  }
  * {
    box-sizing: boreder-box;
    margin: 0;
    padding: 0;

  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }
  *:before, *:after {
    box-sizing: border-box;
  }
  input, button, textarea, button, select {
    ${font}
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    background: none;
    line-height: 1.5;
    font-size: 16px;
    -webkit-appearance: none; 
    &:focus {
      border: none;
      outline: none;
    }
  }
  // ::selection {
  //   background: rgba(180, 216, 253, 0.35);
  // }
  .katex {
    font-size: 1.1em;
    .text {
      font-size: 0.9em;
    }
  }
  ins.adsbygoogle { background: transparent; }


  /* ===============================================
  # smart phone
  =============================================== */
  @media screen and (max-width: 780px) { 
    html, body {
      font-size: 15px;
    }
    .pc {
      display: none !important;
    }
  }

  /* ===============================================
  # pc
  =============================================== */
  @media screen and (min-width: 781px) { 
    .sp {
      display: none !important;
    }
  }
`;

export default GlobalStyle;
