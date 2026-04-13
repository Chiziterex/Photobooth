import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const shotsRequired = location.state?.shots || 1;

  const [countdown, setCountdown] = useState(null);
  const [capturedImages, setCapturedImages] = useState([]);
  const [isCapturing, setIsCapturing] = useState(false);

  useEffect(() => {
    const startCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });
      videoRef.current.srcObject = stream;
    };
    startCamera();
  }, []);

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);

    return canvas.toDataURL("image/png");
  };

  const runCountdown = () =>
    new Promise((resolve) => {
      let time = 3;
      setCountdown(time);

      const interval = setInterval(() => {
        time--;
        setCountdown(time);

        if (time === 0) {
          clearInterval(interval);
          setCountdown(null);
          resolve();
        }
      }, 1000);
    });

  const startCapture = async () => {
    setIsCapturing(true);
    let images = [];

    for (let i = 0; i < shotsRequired; i++) {
      await runCountdown();
      images.push(capturePhoto());
    }

    setCapturedImages(images);
    setIsCapturing(false);
  };

  const deleteImage = (index) => {
    setCapturedImages(capturedImages.filter((_, i) => i !== index));
  };

  const retakePhotos = () => {
    setCapturedImages([]);
  };

  const proceedToEditor = () => {
    navigate("/editor", {
      state: { images: capturedImages },
    });
  };

  return (
    <div className="cameraPage">
      <h2>Smile! 📸</h2>

      <div className="cameraBox">
        <video ref={videoRef} autoPlay playsInline></video>
        {countdown !== null && <div className="countdown">{countdown}</div>}
      </div>

      {capturedImages.length === 0 ? (
        <button
          className="setcapture"
          onClick={startCapture}
          disabled={isCapturing}
        >
          Start Capture
        </button>
      ) : (
        <>
          <div className="previewGrid">
            {capturedImages.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`shot-${index}`} />
                <button onClick={() => deleteImage(index)}>Delete</button>
              </div>
            ))}
          </div>

          <div className="controls">
            <button onClick={retakePhotos}>Retake</button>
            <button onClick={proceedToEditor}>Continue</button>
          </div>
        </>
      )}

      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}

export default Camera;
