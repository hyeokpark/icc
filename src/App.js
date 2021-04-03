import logo from './images/logo.jpeg';
import bornTo from './images/1.png';
import './App.css';



function App() {
  return (
    <div className="main">
      <div style={{ height: '100%' }} className="content">
        <div style={{ width: '100%', marginTop: '0px' }}>
          <div style={{ isplay: 'flex', flexDirection: 'column' }}>
          <img src={bornTo}/> 
          <div class="jzEppV"><label style={{color:"#3c2212"}}>크리스천</label> <br /> <label style={{color:"#8e4d2d"}}>연애 </label><label style={{color:"#3c2212"}}>준비학교</label></div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
