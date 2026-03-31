import { FaCamera } from "react-icons/fa";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
import pic1 from "../assets/1pic.png";
import pic2 from "../assets/2pics.png";
import pic3 from "../assets/3pics.png";
import pic4 from "../assets/4pics.png";

function Homestart() {

  const [isCameraPopupOpen, setIsCameraPopupOpen] = useState(false);
  const [isUploadPopupOpen, setIsUploadPopupOpen] = useState(false);
  const [selectedShots, setSelectedShots] = useState(null);

  return (
    <>
      <div className="containerr">
        <div className="cameraBox"></div>
        <div className="buttons">
          <button onClick={() => setIsCameraPopupOpen(true)}>
            <FaCamera />
          </button>
          <button onClick={() => setIsUploadPopupOpen(true)}>
            upload photo
          </button>
        </div>
      </div>

      {isCameraPopupOpen && (
        <div className="overlay">
          <div className="popup">
            <button
              className="close"
              onClick={() => setIsCameraPopupOpen(false)}
            >
              <FaX />
            </button>
            <h2>How many shots ?</h2>
            <div className="imageBox">
              <div className="box" onClick={() => setSelectedShots(1)}>
                <img src={pic1} alt="one-pcture template" />
                <p>1 shot</p>
              </div>
              <div className="box" onClick={() => setSelectedShots(2)}>
                <img src={pic2} alt="one-pcture template" />
                <p>2 shots</p>
              </div>
              <div className="box" onClick={() => setSelectedShots(3)}>
                <img src={pic3} alt="one-pcture template" />
                <p>3 shots</p>
              </div>
              <div className="box" onClick={() => setSelectedShots(4)}>
                <img src={pic4} alt="one-pcture template" />
                <p>4 shots</p>
              </div>
            </div>
           <button
  className="continue"
>
  continue
</button>
          </div>
        </div>
      )}

      {isUploadPopupOpen && (
        <div className="overlay">
          <div className="popup">
            <button
              className="close"
              onClick={() => setIsUploadPopupOpen(false)}
            >
              <FaX />
            </button>
            <h2>Choose a template</h2>
            <div className="imageBox">
              <div className="box" onClick={() => setSelectedShots(1)}>
                <img src={pic1} alt="one-pcture template" />
                <p>1 photo</p>
              </div>
              <div className="box" onClick={() => setSelectedShots(2)}>
                <img src={pic2} alt="one-pcture template" />
                <p>2 photos</p>
              </div>
              <div className="box" onClick={() => setSelectedShots(3)}>
                <img src={pic3} alt="one-pcture template" />
                <p>3 photos</p>
              </div>
              <div className="box" onClick={() => setSelectedShots(4)}>
                <img src={pic4} alt="one-pcture template" />
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
