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
  const [langague, setLanguage] = useState('languageEn');
  const handleChange = () => {
    setLanguage(langague === 'languageEn' ? 'languagePt' : 'languageEn');
  };

  //------------------------------------------------------
  // ! link de apoio
  // ! https://dev.to/cesareferrari/higher-order-components-and-currying-in-react-fep

  // @ Para demonstrar do que se trata a sintaxe utilizada foi criado essa pequena explicação:

  // # Basicamente se usa um recurso chamado currying, que no react se associa a um component de
  // # alta olrde (HOC), que recebe um componente e melhora suas capacidades.

  const funcCurrying = (x) => (y) => {
    const recebido = y();
    console.log(recebido);
    return `Recebido '${x}' : ${recebido.props.children}`;
  };

  const Componente = () => {
    return <h1>texto no componente</h1>;
  };
  //------------------------------------------------------

  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <TranslatorProvider
          translations={langague === 'languageEn' ? languagePt : languageEn}
        >
          <Home />
        </TranslatorProvider>
        <br />
        <br />
        <br />

        <select onChange={handleChange}>
          <option value="pt-BR">PT</option>
          <option value="en-us">EN</option>
        </select>
        <br />
        <br />
        <br />
        {/*
            basicamente já se chama a função passando ambos os parâmetros esperados pelas
            duas camadas de funções.
        */}
        <h1>{funcCurrying('Componente')(Componente)}</h1>
      </Conteiner>
    </>
  );
}

export default App;
