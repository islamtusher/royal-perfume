import './App.css';
import Answer from './components/answer/Answer';
import Header from './components/header/Header.js';
import Perfumes from './components/shopping/perfumes/Perfumes';

function App() {
  return (
    <div>
      <Header></Header>
      <Perfumes></Perfumes>
      <Answer></Answer>
    </div>
  );
}

export default App;
