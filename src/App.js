import { useState } from "react";
import BillInput from "./components/billInput";
import Output from "./components/output";
import PercService from "./components/percService";
import Reset from "./components/reset";

function App() {
  const [input, setInput] = useState(null)
  const [serv1, setServ1] = useState(0)
  const [serv2, setServ2] = useState(0)

  const tipCal = ((Number(serv1) + Number(serv2))/2 * (input/100))

  function resetHandler() {
    setInput(null);
    setServ1(0)
    setServ2(0)
  }

  return (
    <div >
      <BillInput input={input} setInput={setInput}/>
      <PercService serv = {serv1} setServ = {setServ1}>
      How do you like the service ?
      </PercService>
      <PercService serv = {serv2} setServ = {setServ2}>
      How do your friend like the service ?
      </PercService>
      <Output tip = {tipCal} bill = {input}/>
      <Reset resetHandler={resetHandler}/>
    </div>
  );
}

export default App;
