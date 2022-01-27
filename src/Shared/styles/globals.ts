import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      background-color: #F5F5F5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Lato-Thin';
    src: local('Open Sans'), url('https://assets.wine.com.br/fonts/lato/Lato-Thin.ttf');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Lato-ThinItalic';
    src: local('Open Sans'), url('https://assets.wine.com.br/fonts/lato/Lato-ThinItalic.ttf');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Lato-Regular';
    src: local('Open Sans'), url('https://assets.wine.com.br/fonts/lato/Lato-Regular.ttf');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Lato-Italic';
    src: local('Open Sans'), url('https://assets.wine.com.br/fonts/lato/Lato-Italic.ttf');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Lato-Bold';
    src: local('Open Sans'), url('https://assets.wine.com.br/fonts/lato/Lato-Bold.ttf');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Lato-BoldItalic';
    src: local('Open Sans'), url('https://assets.wine.com.br/fonts/lato/Lato-BoldItalic.ttf');
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Lato-Black';
    src: local('Open Sans'), url('https://assets.wine.com.br/fonts/lato/Lato-Black.ttf');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Lato-BlackItalic';
    src: local('Open Sans'), url('https://assets.wine.com.br/fonts/lato/Lato-BlackItalic.ttf');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'NeoSansStd-Light';
    src: local('Open Sans'), url('https://assets.wine.com.br/fonts/neo-sans/Monotype%20-%20NeoSansStd-Light.otf');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'NeoSansStd-LightItalic';
    src: local('Open Sans'), url('https://assets.wine.com.br/fonts/neo-sans/Monotype%20-%20NeoSansStd-LightItalic.otf');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'NeoSansStd-Regular';
    src: local('Open Sans'), url('https://assets.wine.com.br/fonts/neo-sans/Monotype%20-%20NeoSansStd-Regular.otf');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'NeoSansStd-Italic';
    src: local('Open Sans'), url('https://assets.wine.com.br/fonts/neo-sans/Monotype%20-%20NeoSansStd-Italic.otf');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'NeoSansStd-Medium';
    src: local('Open Sans'), url('https://assets.wine.com.br/fonts/neo-sans/Monotype%20-%20NeoSansStd-Medium.otf');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'NeoSansStd-MediumItalic';
    src: local('Open Sans'), url('https://assets.wine.com.br/fonts/neo-sans/Monotype%20-%20NeoSansStd-MediumItalic.otf');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'NeoSansStd-Bold';
    src: local('Open Sans'), url('https://assets.wine.com.br/fonts/neo-sans/Monotype%20-%20NeoSansStd-Bold.otf');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'NeoSansStd-BoldItalic';
    src: local('Open Sans'), url('https://assets.wine.com.br/fonts/neo-sans/Monotype%20-%20NeoSansStd-BoldItalic.otf');
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'NeoSansStd-Black';
    src: local('Open Sans'), url('https://assets.wine.com.br/fonts/neo-sans/Monotype%20-%20NeoSansStd-Black.otf');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'NeoSansStd-BlackItalic';
    src: local('Open Sans'), url('https://assets.wine.com.br/fonts/neo-sans/Monotype%20-%20NeoSansStd-BlackItalic.otf');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
  }
`;
 
export default GlobalStyle;