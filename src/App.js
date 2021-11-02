import React from 'react';

import './App.css';



function App() {

  const [fvalue,fv]=React.useState(0);

  const[svalue,sv]=React.useState(0);

  const[output,setoutput]=React.useState();
 
const calculation=(type)=>{   
   switch (type) {   
        case "+":      
          setoutput(parseInt(fvalue)+parseInt(svalue));  
            break;    
        case "-":    
          setoutput(parseInt(fvalue)-parseInt(svalue));   
           break;    
         case "*":    
           setoutput(parseInt(fvalue)*parseInt(svalue));   
            break;    
          case "/":     
             setoutput(parseInt(fvalue)/parseInt(svalue));       
            break;
          default:

        setoutput("error");

        break;

    }

  }

  return (

   

    <div className="App">
    <h1 id="h1">calculator</h1>

    <div id="e1">

      <label id="l1">

        Enter First Number&nbsp;&nbsp;

        <input  placeholder="Enter First value"type="text" id="fvalue" onChange={(f)=>fv(f.target.value)}></input>

      </label> <br></br><br/><br/>

      <label id="l2">

         Enter Second Number&nbsp;&nbsp;<input  placeholder="Enter second value" type="text" id="svalue" onChange={(s)=>sv(s.target.value)}></input>

      </label>

      <br/><br/><br/><br/>

      <label id="l3">

        Result:-&nbsp;&nbsp;

        <span><input placeholder="Result" id="t1"type="text"value={output}/></span>

      </label>

      <br/><br/><br/>

      <input type="button" id="b1" value="+" onClick={()=>calculation("+")} ></input> &nbsp;&nbsp;
      <input type="button" id="b2" value="-" onClick={()=>calculation("-")}></input>&nbsp;&nbsp;

      <input type="button" id="b3" value="*" onClick={()=>calculation("*")}></input>&nbsp;&nbsp;

      <input type="button" id="b4" value="/" onClick={()=>calculation("/")}></input>&nbsp;&nbsp;

      </div>
      <h1 id="h1">THANK YOU</h1>
    </div>

    

   

  );

}



export default App;

