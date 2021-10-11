import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Child from './components/Child';

function App() {

  //just an array
  const coolObject = [
    //element 0
    {
      name: "James Hetfield",
      email: "metallica@aol.com",
      city: "San Fransisco",
      state: "CA",
      worth: 3000000,
      likes: 0
    },
    //element 1
    {
      name: "Kirk Hammett",
      email: "theRipper@aol.com",
      city: "San Fansisco",
      state: "CA",
      worth: 1000000,
      likes:0
    },
    //element 2
    {
      name: "Lars Ulrich",
      email: "cantDrum@aol.com",
      city: "San Fransisco",
      state: "CA",
      worth: 4000000,
      likes:0
    }
  ];



  //props is object remember
  //think of props like this
  // it will have key value pairs inside.This is just to undersand better when we passing object into child
  // const props = {
  //coolObject:{
  //   name:"James Hetfield",
  //   email:"metallica@aol.com",
  //   city:"San Fransisco",
  //   state:"CA",
  // },

  //coolObject:
  //this is way when we passing object to child.js


  const [James, Kirk, Lars] = coolObject;

  return (
    <div className="App">
      <Header />

      {/* this is another way to destruct */}
      {/* <Child coolObject={coolObject[0]}/>
      <Child coolObject={coolObject[1]}/>
      <Child coolObject={coolObject[2]}/> */}

      {/* this three bottom example is another way also */}
      {/* <Child 
      name={coolObject[0].name}
      email={coolObject[0].email}
      city={coolObject[0].city}
      state={coolObject[0].stat0}
      />

      <Child
      name={coolObject[1].name}
      email={coolObject[1].email}
      city={coolObject[1].city}
      state={coolObject[1].state}
      />

      <Child
      name={coolObject[2].name}
      email={coolObject[2].email}
      city={coolObject[2].city}
      state={coolObject[2].state}
      /> */}



      {/* this is another way we created array names on top first */}
      {/* <Child
      name={James.name}
      email={James.email}
      city={James.city}
      state={James.state}
      />

      <Child
      name={Kirk.name}
      email={Kirk.email}
      city={Kirk.city}
      state={Kirk.state}
      />

      <Child
      name={Lars.name}
      email={Lars.email}
      city={Lars.city}
      state={Lars.state}
      /> */}


{
    coolObject.map((object, index) => (
      <Child key={index}
        name={object.name}
        email={object.email}
        city={object.city}
        state={object.state}
        worth={object.worth}
        likes={object.likes}
      />
    ))
}

    </div>
  );
}



export default App;
