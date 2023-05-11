import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   background: #000428; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #000428, #004e92); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #000428, #004e92);
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

img {
  display: block;
  width: 100%; 
  height: auto;
}

a {
  text-decoration: none;
}
`;
