import React  from "react";

function add(){
    const [FirstValue,setFirstValue]=React.useState(0);
    const [SecondValue,setSecondValue]=React.useState(0);
    const [Total,setTotal]=React.useState(0);
  const handleadd=()=>{
    setTotal(parseInt(FirstValue)+parseInt(SecondValue));
  }
  const handlesub=()=>{
    setTotal(parseInt(FirstValue)-parseInt(SecondValue));
  }
  const handlemul=()=>{
    setTotal(parseInt(FirstValue)*parseInt(SecondValue));
  }
  const handlediv=()=>{
    setTotal(parseInt(FirstValue)/parseInt(SecondValue));
  }
    return(
        <div className="add">
            <h1>
                Lets Start To React
            </h1>
            <label>
                First Value
                <input value={FirstValue} onChange={(e)=>setSecondValue(e.target.value)}  />
            </label>
            <br/><br/>
            <label>
                Second Value
                <input value={SecondValue} onChange={(e)=>setSecondValue(e.target.value)}  />
            </label>
            <br/>
            <button onClick={handleadd()}>+</button>
            <button onClick={handlesub()}>-</button>
            <button onClick={handlemul()}>*</button>
            <button onClick={handlediv()}>/</button>
            <label>
                Total
            </label>
        </div>
    )
}