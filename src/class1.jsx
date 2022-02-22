import React, { Component } from 'react';
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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'languageEn',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      language:
        this.state.language === 'languageEn' ? 'languagePt' : 'languageEn',
    });
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Conteiner>
          <TranslatorProvider
            translations={
              this.state.language === 'languageEn' ? languagePt : languageEn
            }
          >
            <Home />
          </TranslatorProvider>

          <select onChange={this.handleChange}>
            <option value="pt-BR">PT</option>
            <option value="en-us">EN</option>
          </select>
        </Conteiner>
      </>
    );
  }
}
