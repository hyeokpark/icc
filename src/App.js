import './App.css';
import { useState } from 'react';
import MainContents from './contents/MainContents';



function App() {

  const [isInitValue, setIsInitValue] = useState(null);

  return (
    <div className="main">
      <div style={{ height: '100%', marginTop: '50px' }} className="content">
        <div style={{ width: '100%', marginTop: '0px' }}>
          <div style={{ isplay: 'flex', flexDirection: 'column' }}>
            {!isInitValue && <MainContents onClick={(value)=>{
              setIsInitValue(value);
            }}/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
