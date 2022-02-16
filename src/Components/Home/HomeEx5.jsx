/*
  É possível usar a forma legado sem reatribuir o componente
  passando por translate. Para isso é só exportar ele com o
  translate já sendo evocado. Dessa forma o componente terá naturalmente o
  acesso a prop t, que pode ser usada no escopo da função.
*/

import React from 'react';
import { translate } from 'react-translate';

// eslint-disable-next-line react/prop-types
function HomeEx5({ t }) {
  return <h1> {t('HELLO')} </h1>;
}

export default translate('Home')(HomeEx5);
