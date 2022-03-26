import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop/Shop';
import ReactConcept from './components/ReactConcept/ReactConcept';

function App() {
  return (
    <div >
      <h1 className='title'>Laptop Mart</h1>
      <Shop></Shop>
      <ReactConcept></ReactConcept>
    </div>
  );
}

export default App;
