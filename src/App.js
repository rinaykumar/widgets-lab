import React from 'react';

// Import external components 
import TextClicker from './widgets/TextClicker';
import ListViewer from './widgets/ListViewer';
import WebWidget from './widgets/WebWidget';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <TextClicker />
        <ListViewer />
        <WebWidget />
      </div>
    </div>
  );
}

export default App;
