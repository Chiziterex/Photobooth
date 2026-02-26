import { FaCamera} from "react-icons/fa";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
import pic1 from "../assets/1pic.png";
import pic2 from "../assets/2pics.png";
import pic3 from "../assets/3pics.png";
import pic4 from "../assets/4pics.png";

function Homestart() {
 const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     <div className="containerr">
        <div className="cameraBox">

        </div>
        <div className="buttons">
            <button onClick={() => setIsOpen(true)}><FaCamera/></button>
            <button onClick={() => setIsOpen(true)}>upload photo</button>
        </div>
     </div>

     {isOpen && (
          <div className="overlay">
            <div className="popup">
              <button className="close" onClick={() => setIsOpen(false)}><FaX/></button>
              <h2>Choose a template</h2>
               <div className="imageBox">
                <div className="box">
                  <img src={pic1} alt="one-pcture template"/>
                  <p>1 photo</p>
                </div>
                <div className="box">
                  <img src={pic2} alt="one-pcture template"/>
                  <p>2 photos</p>
                </div>
                <div className="box">
                  <img src={pic3} alt="one-pcture template"/>
                  <p>3 photos</p>
                </div>
                <div className="box">
                  <img src={pic4} alt="one-pcture template"/>
                  <p>4 photos</p>
                </div>
                </div>
                <button className="continue">continue</button>
            </div>
          </div>
        )}
    </>
  );
}

export default Homestart;
