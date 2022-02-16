/*
  Arquivo centralizador de idiomas para muitos componentes.
  Fazendo um arquivo em cada pasta de componente é possível
  isolar todos os textos usados pelo componente, e então
  centralizar no arquivo index de translate
*/
import { homeEn, homePt, homeEs, homeCh } from '../Components/Home/translate';

const languageEn = {
  locale: 'en-US',
  ...homeEn,
};
const languagePt = {
  locale: 'pt-BR',
  ...homePt,
};
const languageEs = {
  locale: 'es-ES',
  ...homeEs,
};
const languageCh = {
  locale: 'pt-BR ',
  ...homeCh,
};

export { languageEn, languagePt, languageEs, languageCh };
