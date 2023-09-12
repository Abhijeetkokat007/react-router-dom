import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
     <div>
     <span className="heding">Get to Know Us</span> <br/><br/>
      
      <Link to="/Home" className=" name-foot">Home</Link><br/>
      <Link to="/About" className="name-foot">About</Link><br/>
      <Link to="/Contact" className="name-foot">Contact</Link><br/>
     </div>

     <div>
     <span className="heding">Connect with Us</span> <br/><br/>
      
      <Link to="/" className=" name-foot">GitHub</Link><br/>
      <Link to="/" className="name-foot">Linkedin</Link><br/>
      <Link to="/" className="name-foot">Twitter</Link><br/>
      <Link to="/" className="name-foot">Instagram</Link><br/>
     </div>

     <div>
     <span className="heding">Let Us Help You</span> <br/><br/>
      
      <Link to="/" className=" name-foot">COVID-19 </Link><br/>
      <Link to="/" className="name-foot">Your Account</Link><br/>
      <Link to="/" className="name-foot">Return Centre</Link><br/>
      <Link to="/" className="name-foot">100% Purchase Protcted</Link><br/>
     <Link to="/" className="name-foot">Help</Link><br/>
    
     </div>




      
    </div>
  );
}