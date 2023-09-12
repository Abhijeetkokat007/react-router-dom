import "./Loginform.css";
import Button from "../Button/Button";

export default function Loginform() {
    return (
      <div className="form">
        <h1 className="heading-2">Contact Form</h1> 
        <h3 className="helding-1">Name :</h3>
        <input type="text" className="input" placeholder="Enter Your Name"></input>

        <h3 className="helding-1">Email :</h3>
        <input type="text" className="input" placeholder="Enter Your Email"></input>

        <h3 className="helding-1">Number :</h3>
        <input type="text" className="input" placeholder="Enter Your Number"></input>

        <h3 className="helding-1">Address :</h3>
        <input type="text" className="input" placeholder="Enter Your Address"></input> <br/>

        <input type="submit" className="sub-btn" value={'Submit'}></input>

        
      </div>
    );
  }