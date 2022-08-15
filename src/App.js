import { useState } from "react";
import GetCalculators from './Components/GetCalculators';
import NewCalculator from './Components/NewCalculator'

function App() {


  return (
    <div className="App">
      <NewCalculator />
      <GetCalculators />
    </div >
  );
}

export default App;
