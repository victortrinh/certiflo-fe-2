import 'lazysizes';

import { certifloTheme, certipropaneTheme, petromaxTheme } from './themes/themes';

import { Routing } from './Routing';
import { ThemeProvider } from 'styled-components';
import { initializeAndGetClient } from './client/client-provider';
import { useEffect } from 'react';

const App = () => {
  const client = initializeAndGetClient();

  const theme = client === 'Petro-max' ? petromaxTheme : client === 'Certipropane' ? certipropaneTheme : certifloTheme;

  useEffect(() => {
    if (client === 'Petro-max') {
      require('./themes/Secondary.scss');
    } else {
      require('./themes/Primary.scss');
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  );
};

export default App;
