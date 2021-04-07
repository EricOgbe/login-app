import React,{useState} from "react"




function Input(props) {
  
  const [fname,setFname] = useState("")
  const [text,setText] = useState(`hello ${fname}`)
  const [mouseover,setMouseover] = useState(false)

 

  function first(event) {
    setFname(event.target.value)
  }


 
  function submitted(event) {
    setText("Thank you, you are registered.");

    event.preventDefault();
  }
  function black() {
    setMouseover(true)
  }
  function white() {
    setMouseover(false)
  }
    return <div>
        <h1>{text} {fname}</h1>
        <input type="text" placeholder="username" onChange={first} />
      <input type="password" placeholder="password" />
      <input type="password" placeholder="confirm password" />
      <button type="submit" onMouseOver={black} onMouseOut={white} style={{backgroundColor: mouseover ? "black" : "white"}} onClick={submitted}>Register</button>
    </div>
}

export default Input;