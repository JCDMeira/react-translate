import { useTranslate } from 'react-translate';
import * as P from 'prop-types';

const useTextTranslate = (componentString, textKey) => {
  const t = useTranslate(componentString);
  const textTranslated = t(textKey);

  return textTranslated;
};

export default useTextTranslate;

useTextTranslate.propType = {
  componentString: P.string.isRequired,
  textKey: P.string.isRequired,
};
