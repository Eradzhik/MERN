
import './App.css';
import Child from './components/Child'

function App() {
  return (
    <div className="App">
      <Child 
        name={"John Wick"}
        age={30}
        colorHair={"Purple"}
      />
      <Child
      name={"Maximus"}
      age={40}
      colorHair={"Black"}
      />
      



    </div>
  );
}

export default App;
