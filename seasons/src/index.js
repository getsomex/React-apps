import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
  // state = { lat: null, errorMessage: '' };
  const [latErr, setLatErr] = useState({ lat: null, errorMessage: '' });
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLatErr({ lat: position.coords.latitude }),
      err => setLatErr({ errorMessage: err.message })
    );
  }, []);

  const renderContent = () => {
    if (latErr.errorMessage && !latErr.lat) {
      return <div> Error: {latErr.errorMessage}</div>;
    }
    if (!latErr.errorMessage && latErr.lat) {
      return <SeasonDisplay lat={latErr.lat} />;
    }
    return <Spinner message="please accept location request" />;
  };

  return <div className="border red">{renderContent()}</div>;
};
ReactDom.render(<App />, document.querySelector('#root'));
