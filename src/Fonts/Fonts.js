import { createGlobalStyle } from 'styled-components';

import LatoLight from './Lato-Light.woff';
import LatoLight2 from './Lato-Light.woff2';
import LatoRegular from './Lato-Regular.woff';
import LatoRegular2 from './Lato-Regular.woff2';
import LatoBold from './Lato-Bold.woff';
import LatoBold2 from './Lato-Bold.woff2';

export default createGlobalStyle`
    @font-face {
      font-family: 'Lato';
      src: local('LatoLight'), local('Lato Light'),
      url(${LatoLight2}) format('woff2'),
      url(${LatoLight}) format('woff');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'Lato';
      src: local('LatoRegular'), local('Lato Regular'),
      url(${LatoRegular2}) format('woff2'),
      url(${LatoRegular}) format('woff');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'Lato';
      src: local('LatoBold'), local('Lato Bold'),
      url(${LatoBold2}) format('woff2'),
      url(${LatoBold}) format('woff');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }
`;
