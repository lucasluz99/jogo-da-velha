import React from 'react';
import './App.css';
import Header from './components/Header';
import Hashtag from './components/Hashtag';
import Label from './objects/Label';
import Input from './objects/Input';
const App = () => {
  return (
    <main className="app">
    <Header/>
    <Hashtag/>
    <Input value="show"/>
    <Label content="Mostar eventos"/>
    
    </main>

  );
}

export default App;
