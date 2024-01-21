import React, {useState}  from "react";
import "./MoreForms.css"
const MoreForms = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [titleError, setTitleError] = useState("");
  const [lnError, setLnError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [confPassError, setConfPassError] = useState("");

  const name = (e) => {
    setFirstName(e.target.value);
    if(e.target.value.length < 1) {
        setTitleError("");
    } else if(e.target.value.length < 2) {
        setTitleError("First Name must be 2 characters or longer!");
    } else {
        setTitleError("");
    }
}
  const lname = (e) => {
    setLastName(e.target.value);
    if(e.target.value.length < 1) {
        setLnError("");
    } else if(e.target.value.length < 2) {
        setLnError("Last Name must be 2 characters or longer!");
    } else {
        setLnError("");
    }
}
  const mail = (e) => {
    setEmail(e.target.value);
    if(e.target.value.length < 1) {
        setEmailError("");
    } else if(e.target.value.length < 5) {
        setEmailError("Email must be 5 characters or longer!");
    } else {
        setEmailError("");
    }
}
  const passw = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 1) {
        setPassError("");
    } else if(e.target.value.length < 8) {
        setPassError("Password must be 8 characters or longer!");
    } else {
        setPassError("");
    }
}
  const confirmPass = (e) => {
    setConfPassword(e.target.value);
    if(e.target.value.length < 1) {
        setConfPassError("");
    } else if(e.target.value !== password) {
        setConfPassError("Passwords Must Match")
    } else {
        setConfPassError("");
    }
}
  
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      { titleError ? 
      <p>{titleError}</p> :
      '' 
      }
      <div className="border">
        <label>First Name</label>
        <input type="text" value={firstName} onChange={name} />
      </div>
      <p>First Name must be at  least 2 characters</p>
      { lnError ? 
      <p>{lnError}</p> :
      '' 
      }
      <div className="border">
        <label>Last Name</label>
        <input type="text"  onChange={lname}/>
      </div>
      <p>Last Name must be at  least 2 characters</p>
      { emailError ? 
      <p>{emailError}</p> :
      '' 
      }
      <div className="border">
        <label>Email</label>
        <input type="email" onChange={mail} />
      </div>
      <p>Email must be at  least 5 characters</p>
            { passError ? 
      <p>{passError}</p> :
      '' 
            }
      <div className="border">
        <label>Password</label>
        <input type="password" onChange={passw} />
      </div>
      <p>Passwords must be at  least 8 characters</p>
      <div className="border">
        <label>Confirm Password</label>
        <input type="password" onChange={confirmPass} />
      </div>
      { confPassError ? 
      <p>{confPassError}</p> :
      '' 
      }
    </form>
  )
}

export default MoreForms;