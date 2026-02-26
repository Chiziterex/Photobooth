
import { useNavigate } from 'react-router-dom';

function Photobooth() {

  const navigate = useNavigate();

  return (
    <>
      <div className='container'>
        <h3>Pose <span>.</span></h3>
        <p>snap and create</p>
        <button onClick={() => navigate("/home")}>start</button>
      </div>
    </>
  );
}

export default Photobooth;
