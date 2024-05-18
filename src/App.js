import React from 'react'; // Simplified import without unused useState
import "./App.css"; // Keep the CSS import for styling
import ChatComponent from './ChatComponent'; // Import the ChatComponent
import ChatWindow from "./components/ChatWindow"; // Import the ChatWindow component

const App = () => {
  return (
    <div className="App">
      <h1>React ChatGPT Integration</h1>
      <div className="heading">
        Instalily Case Study
      </div>
      <ChatComponent /> // ChatComponent is used here
      <ChatWindow /> // ChatWindow is also included
    </div>
  );
};

export default App;
