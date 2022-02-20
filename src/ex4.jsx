/*
  Exemplo completo em um único arquivo usando a forma mais antiga (legado), com o translate.
  Mas o objeto de idiomas veem de um arquivo externo. Isolado em uma pasta languages

*/

import React, { useState } from 'react';
import { GlobalStyle, Conteiner } from './global';
import { TranslatorProvider, translate } from 'react-translate';
import * as lang from './languages/translator';

// eslint-disable-next-line react/prop-types
let Home = function ({ t }) {
  return <h1> {t('HELLO')} </h1>;
};

Home = translate('Home')(Home);

function App() {
  const [language, setLanguage] = useState(lang.languagePt);

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
        <TranslatorProvider translations={language}>
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
