/*
  Exemplo completo em um único arquivo usando a forma mais nova, com o hook useTranslate
  O objeto de idiomas vem de forma externa
*/

import React, { useState } from 'react';
import { GlobalStyle, Conteiner } from './global';
import { TranslatorProvider, useTranslate } from 'react-translate';
import * as lang from './languages/translator';

// eslint-disable-next-line react/prop-types
const Home = function () {
  const t = useTranslate('Home');
  return <h1> {t('HELLO')} </h1>;
};

function App() {
  const [langage, setLanguage] = useState(lang.languagePt);

  const handleChange = ({ target: { value } }) => {
    if (value === 'pt-BR') setLanguage(lang.languagePt);
    if (value === 'en-US') setLanguage(lang.languageEn);
    if (value === 'es-ES') setLanguage(lang.languageEs);
    if (value === '中文 ') setLanguage(lang.languageCh);
  };

  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <TranslatorProvider translations={langage}>
          <Home />
        </TranslatorProvider>
        <br />
        <select onChange={(e) => handleChange(e)}>
          <option value="pt-BR">PT</option>
          <option value="en-US">EN</option>
          <option value="es-ES">ES</option>
          <option value="中文 ">中文</option>
        </select>
      </Conteiner>
    </>
  );
}

export default App;
