import React from 'react';
import { useTranslate } from 'react-translate';

function Home() {
  const t = useTranslate('Home');
  return <h1> {t('HELLO')} </h1>;
}

export default Home;
