// import { useState } from 'react';
// import Header from './Components/Header';
// import UserInput from './Components/UserInput';
// import Results from './Components/Results';

 import AlterName from "./Components/AlterName"
import ChangeColor from "./Components/ChangeColor"
//import Counter from "./Components/Counter"
import DigitalClock from "./Components/DigitalClock"
 //import Counter from "./Components/Counter"
import LoginForm from "./Components/LoginForm"
 import NameChange from "./Components/NameChange"

// import TableView from "./Components/TableView"

function App() {
  // const[userInput,setUserInput]=useState({
  //   initialInvestment: 10000,
  //   annualInvestment:1200,
  //   expectedReturn:6,
  //   duration:10,
  // })

  // function handleChange(inputIdentifier,newValue){
  //   setUserInput(prevUserInput=>{
  //       return{
  //       ...prevUserInput,[inputIdentifier]: +newValue,
  //       };
  //   })
  // }

  return(
    <>
        {/* <Header /> */}
        {/* <UserInput userInput={userInput} onChange={handleChange}/>
        <Results input={userInput}/> */}

        <ChangeColor/>
         {/* <TableView/> */}
        
        <NameChange/>
      
        <LoginForm /> 
        {/* <Counter/> */}
        <AlterName/> 
        <DigitalClock/>
    </>
  )
}

export default App
