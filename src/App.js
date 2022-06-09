import './App.css';
import RecursiveCategories from './components/RecursiveCategories';
import mockCategories from './mockData';
import {useState} from 'react';

function App() {

  const [categories, setCategories] = useState(mockCategories);

  return (
    <div className="App">
      <header className="App-header">
        <h1>WIX.com exercise</h1>
        <textarea defaultValue={JSON.stringify(categories)} onChange={(e) => setCategories(JSON.parse(e.target.value))}/>
        <p>Recursive rendering</p>
        <RecursiveCategories categories={categories}/>
        <p>Imperative rendering</p>
        {/*  TODO: imperative*/}
      </header>
    </div>
  );
}

export default App;
