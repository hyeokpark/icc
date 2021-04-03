import './App.css';
import { useState } from 'react';
import MainContents from './contents/MainContents';
import Love from './contents/Love';
import Apology from './contents/Apology';



function App() {

  const [isInitValue, setIsInitValue] = useState(null);

  return (
    <div className="main">
      <div style={{ height: '100%', marginTop: '50px' }} className="content">
        <div style={{ width: '100%', marginTop: '0px' }}>
          <div style={{ isplay: 'flex', flexDirection: 'column' }}>
            {!isInitValue && <MainContents onClick={(value) => {
              setIsInitValue(value);
            }} />}
            {isInitValue === 'love' && <Love />}
            {isInitValue === 'apology' && <Apology />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
