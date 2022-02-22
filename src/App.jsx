import React, { Component } from 'react';
import { GlobalStyle, Conteiner } from './global';
import { TranslatorProvider } from 'react-translate';
import Home from './Components/Home';
import * as lang from './languages/index';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: { ...lang.languagePt },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value } }) {
    if (value === 'pt-BR') this.setState({ language: lang.languagePt });
    if (value === 'en-US') this.setState({ language: lang.languageEn });
    if (value === 'es-ES') this.setState({ language: lang.languageEs });
    if (value === 'zh-CH') this.setState({ language: lang.languageCh });
  }

  render() {
    const { language } = this.state;

    return (
      <>
        <GlobalStyle />
        <Conteiner>
          <TranslatorProvider translations={language}>
            <Home />
          </TranslatorProvider>

          <select onChange={(e) => this.handleChange(e)}>
            <option value="pt-BR">PT</option>
            <option value="en-US">EN</option>
            <option value="es-ES">ES</option>
            <option value="zh-CH">中文</option>
          </select>
        </Conteiner>
      </>
    );
  }
}
