/*
Usa um arquivo centralizado que força o arquivo a depender da
biblioteca, enquanto o projeto depende apenas do arquivo próprio.
em caso de mudanças e maioria das vezes é só mudar o arquivo
próprio e não mexer em toda a aplicação.
*/
import React from 'react';
import useTextTranslate from '../../hooks/useTextTranslate.hook';

function Home() {
  return <h1> {useTextTranslate('Home', 'HELLO')} </h1>;
}

export default Home;
