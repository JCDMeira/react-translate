/*
  Exemplo completo em um único arquivo usando a forma mais atual, com o hook
  useTranslate
*/

import React, { useState } from 'react';
import { GlobalStyle, Conteiner } from './global';
import { TranslatorProvider, useTranslate } from 'react-translate';

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

function Home() {
  const t = useTranslate('Home');
  return <h1> {t('HELLO')} </h1>;
}

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
