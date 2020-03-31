import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    console.log(this.context);
    return (
      <div>
        Select language:{' '}
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange('english')}
        ></i>
        <i
          className="flag nl"
          onClick={() => this.context.onLanguageChange('dutch')}
        ></i>
      </div>
    );
  }
}

export default LanguageSelector;
