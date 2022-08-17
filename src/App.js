import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import { useState } from 'react';

export default function App() {


const [name, setName] = useState("");
const [creditCardNo, setCreditCardNo] = useState("");
const [dateMonth, setDateMonth] = useState("");
const [dateYear, setDateYear] = useState("");
const [cvc, setCvc] = useState("");

function handleName(e){
  setName(e.target.value)
}

    function onCreditCardChange(e) {
        setCreditCardNo(e.target.rawValue);
      }

    function onMonthChange(e) {
        setDateMonth(e.target.rawValue);
      }
    
    function onYearChange(e) {
        setDateYear(e.target.rawValue);
      }

    function onCVCChange(e) {
        setCvc(e.target.value);
      }



function handleClick(){
  if(creditCardNo ===""){
    document.getElementById("cantBeBlank1").classList.remove("invisible")
    document.getElementById("cantBeBlank1").classList.add("block")
  }
  else{
    document.getElementById("cantBeBlank1").classList.remove("block")
    document.getElementById("cantBeBlank1").classList.add("invisible")
  }


  if(dateMonth ==="" || dateYear===""){
    document.getElementById("cantBeBlank2").classList.remove("invisible")
    document.getElementById("cantBeBlank2").classList.add("block")
  }
  else{
    document.getElementById("cantBeBlank2").classList.remove("block")
    document.getElementById("cantBeBlank2").classList.add("invisible")
  }


  if(cvc ===""){
    document.getElementById("cantBeBlank3").classList.remove("invisible")
    document.getElementById("cantBeBlank3").classList.add("block")
  }
  else{
    document.getElementById("cantBeBlank3").classList.remove("block")
    document.getElementById("cantBeBlank3").classList.add("invisible")
  }

  
}

  return(
    <>
      <Navbar
      name = {name}
      atmNumber = {creditCardNo}
      expDateMonth = {dateMonth}
      expDateYear = {dateYear}
      cvc = {cvc}
      />
      <Main
      className="relative"
      handleNameChange = {handleName}
      handleCCChange= {onCreditCardChange}
      handleMonthChange={onMonthChange}
      handleYearChange={onYearChange}
      handleCVCChange={onCVCChange}
      handleClk = {handleClick}
      />
    </>
  )
};
