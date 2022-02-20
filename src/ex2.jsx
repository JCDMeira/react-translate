/*
  Exemplo completo em um único arquivo usando a forma mais antiga (legado), com o translate

*/

import React, { useState } from 'react';
import { GlobalStyle, Conteiner } from './global';
import { TranslatorProvider, translate } from 'react-translate';

const languageEn = {
  locale: 'en-US',
  Home: {
    HELLO: 'Hello world!',
  },
};
const languagePt = {
  locale: 'pt-BR',
  Home: {
    HELLO: 'Olá mundo!',
  },
};

// eslint-disable-next-line react/prop-types
let Home = function ({ t }) {
  return <h1> {t('HELLO')} </h1>;
};

Home = translate('Home')(Home);

function App() {
  const [language, setLanguage] = useState('languageEn');
  const handleChange = () => {
    setLanguage(language === 'languageEn' ? 'languagePt' : 'languageEn');
  };

  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <TranslatorProvider
          translations={language === 'languageEn' ? languagePt : languageEn}
        >
          <Home />
        </TranslatorProvider>

        <select onChange={handleChange}>
          <option value="pt-BR">PT</option>
          <option value="en-us">EN</option>
        </select>
      </Conteiner>
    </>
  );
}

export default App;
