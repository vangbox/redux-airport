import {useSelector, useDispatch} from 'react-redux'
import React, { useState } from 'react';

function App() {
  const [airlineInput, setAirlineInput] = useState('');

  const airlines= useSelector((store) => store.airlines);
  // console.log(airlines);
  
  const dispatch = useDispatch();

  const addAirline=(event) =>{
    event.preventDefault();

    dispatch({
      type: 'ADD_AIRLINE',
      payload: airlineInput
      })
      setAirlineInput('');
  }

  return (
    <div>
      <h1>Redux Airport</h1>

      <form onSubmit = {addAirline}>
        <input 
        placeholder='Airline Name'
        value={airlineInput}
        onChange={(event => setAirlineInput(event.target.value))}
        />

        <button>Add Airline</button>
      </form>
      <table>{/* Airlines should be listed here */}
        <ul>
          
        {
            airlines.map((airlines) => {
              return (
                <li key={airlines}>
                  {airlines}
                </li>
              )
            })
          }
        </ul>
      </table>
    </div>
  );
}

export default App;
