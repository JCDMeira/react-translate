/*
  Exemplo completo em um único arquivo usando a forma mais antiga (legado), com o translate

*/

import React, { useState } from 'react';
import { GlobalStyle, Conteiner } from './global';
import { TranslatorProvider } from 'react-translate';
import * as lang from './languages';
import Home from './Components/Home';

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
