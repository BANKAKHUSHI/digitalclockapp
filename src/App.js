import React, {useState} from 'react';

 const App = () => {
  let newTime= new Date().toLocaleTimeString();
  const [ctime,setCtime]=useState(newTime);
  const UpdateTime = () =>{
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  };
  setInterval(UpdateTime,1000);
  return(
    <>
    <h3>Digital clock</h3>
      <h1>{ctime}</h1>
      
    </>
   


  );

 }
 export default App;
