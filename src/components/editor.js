import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

function Editor() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const images = state?.images || [];
  const [emojis, setEmojis] = useState([]);

  const addEmoji = (emoji) => {
    setEmojis([...emojis, emoji]);
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const width = 600;
    const height = 800;
    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);

    const imgWidth = width;
    const imgHeight = height / images.length;

    images.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        ctx.drawImage(
          img,
          0,
          index * imgHeight,
          imgWidth,
          imgHeight
        );

        emojis.forEach((emoji, i) => {
          ctx.font = "40px Arial";
          ctx.fillText(emoji, 20 + i * 40, 50);
        });
      };
    });

    setTimeout(() => {
      const link = document.createElement("a");
      link.download = "photobooth.png";
      link.href = canvas.toDataURL();
      link.click();
    }, 500);
  };

  return (
    <div className="editorPage">
      <h2>Edit Your Photos ✨</h2>

      <div className="photoGrid">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`shot-${index}`} />
        ))}
      </div>

      <div className="emojiBar">
        <button onClick={() => addEmoji("😂")}>😂</button>
        <button onClick={() => addEmoji("😍")}>😍</button>
        <button onClick={() => addEmoji("❤️")}>❤️</button>
        <button onClick={() => addEmoji("🔥")}>🔥</button>
      </div>

      <div className="editorButtons">
        <button onClick={() => navigate("/camera")}>Retake</button>
        <button onClick={downloadImage}>Download</button>
      </div>

      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}

export default Editor;