import "./Home.css";
import Navbar from "./../../components/Navbar/Navbar";
import Button from "./../../components/Button/Button";
import Footer from "./../../components/Footer/Footer";




export default function Home(){
  return(
    <>
    <Navbar/>
    <h1 className="heading">Product Card</h1>
    <div className="box">
     <div className="card">
         <img className="img-card" src="https://m.media-amazon.com/images/I/717obHcoJrL._SX522_.jpg"/>
         <p>
         MAINDAIS 6 in 1 Laptop StandTAB Stand with MacBook Notebook Tablet Tray Desk Table Book with Pan Holder (MDPLS-LS-MP-201-BLACK)
         </p>
         <span className="rate">₹ 799</span>     
         <span className="offer">- 60% OFF</span>
         <Button/>
     </div>

     <div className="card">
         <img className="img-card" src="https://m.media-amazon.com/images/I/41P7GVRxXyL.jpg"/>
         <p>
         Offbeat RIPJAW 2.4Ghz Rechargeable Wireless Gaming Mouse, Silent Click Buttons Mouse - 7D Buttons, DPI : 1600,2400,3200, Mice for PC/Laptop/Smart...
         </p>
         <span className="rate">₹ 999</span>     
         <span className="offer">- 40% OFF</span>
         <Button/>
     </div>

     <div className="card">
         <img className="img-card" src="https://m.media-amazon.com/images/I/61MX3ptRZnL._UL1405_.jpg"/>
         <p>
         IndoPrimo Men's Cotton Casual Regular Fit Checks Shirt with Pocket for Men Long Sleeves - BMW
         </p>
         <span className="rate">₹ 499</span>     
         <span className="offer">- 70% OFF</span>
         <Button/>
     </div>

     

    </div>

    <div className="box">
     <div className="card">
         <img className="img-card" src="https://m.media-amazon.com/images/I/61AabnyMQOL._SL1500_.jpg"/>
         <p>
         Fitkit by Cult.Sport FT200M 4.5HP Peak Treadmill (Max Weight: 110Kg, Auto Incline, Max Speed 16km/hr & Massager) with Free Home Installation,  Led Sessions & 1 Year Warranty
         </p>
         <span className="rate">₹ 15,799</span>     
         <span className="offer">- 0% OFF</span>
         <Button/>
     </div>

     <div className="card">
         <img className="img-card" src="https://m.media-amazon.com/images/I/612NawOA2QL._SL1500_.jpg"/>
         <p>
         Cadbury Celebrations Special Silk Chocolates Potli Gift Pack, 343 g
         </p>
         <span className="rate">₹ 1599</span>     
         <span className="offer">- 30% OFF</span>
         <Button/>
     </div>

     <div className="card">
         <img className="img-card" src="https://m.media-amazon.com/images/I/81KdEE4vmDL._UX679_.jpg"/>
         <p>
         ON TIME OCTUS Analog Girl's and Women's Watch OP_106_to_108 (Multi Color Dial Multi-Colored Strap) (Pack of Two)
         </p>
         <span className="rate">₹ 799</span>     
         <span className="offer">- 60% OFF</span>
         <Button/>
     </div>

     

    </div>
   <Footer/>
    </>
  )
}