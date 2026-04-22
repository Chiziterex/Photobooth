import { FaCamera } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import pic1 from "../assets/1pic.png";
import pic2 from "../assets/2pics.png";
import pic3 from "../assets/3pics.png";
import pic4 from "../assets/4pics.png";

function Homestart() {
  const [isCameraPopupOpen, setIsCameraPopupOpen] = useState(false);
  const [isUploadPopupOpen, setIsUploadPopupOpen] = useState(false);
  const [selectedShots, setSelectedShots] = useState(null);
  const navigate = useNavigate();
  
  const handleCameraContinue = () => {
    if (!selectedShots) {
      alert("Please select the number of shots.");
      return;
    }

    navigate("/camera", {
      state: { shots: selectedShots },
    });
  };

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);

    const readers = files.map(
      (file) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(file);
        })
    );

    Promise.all(readers).then((images) => {
      navigate("/editor", {
        state: { images },
      });
    });
  };

  
  const templates = [pic1, pic2, pic3, pic4];





  return (
    <>
      <div className="containerr">
        <div className="cameraBox"></div>

        <div className="buttons">
          <button onClick={() => setIsCameraPopupOpen(true)}>
            <FaCamera />
          </button>
          <button onClick={() => setIsUploadPopupOpen(true)}>
            Upload Photo
          </button>
        </div>
      </div>

      {/* Camera Popup */}
      {isCameraPopupOpen && (
        <div className="overlay">
          <div className="popup">
            <button
              className="close"
              onClick={() => setIsCameraPopupOpen(false)}
            >
              <FaX />
            </button>
            <h2>How many shots?</h2>

            <div className="imageBox">
              {templates.map((img, index) => (
                <div
                  key={index}
                  className={`box ${
                    selectedShots === index + 1 ? "active" : ""
                  }`}
                  onClick={() => setSelectedShots(index + 1)}
                >
                  <img src={img} alt={`${index + 1} shots`} />
                  <p>{index + 1} Shot{index > 0 ? "s" : ""}</p>
                </div>
              ))}
            </div>

            <button className="continue" onClick={handleCameraContinue}>
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Upload Popup */}
      {isUploadPopupOpen && (
        <div className="overlay">
          <div className="popup">
            <button
              className="close"
              onClick={() => setIsUploadPopupOpen(false)}
            >
              <FaX />
            </button>
            <h2>Upload Photos</h2>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleUpload}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Homestart;