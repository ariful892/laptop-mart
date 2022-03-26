import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop/Shop';
import ReactConcept from './components/ReactConcept/ReactConcept';
import Header from './components/Header/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Shop></Shop>
      <ReactConcept></ReactConcept>
    </div>
  );
}

export default App;
