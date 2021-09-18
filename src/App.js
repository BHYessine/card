
import './App.css';
import Address from './Component/Profile/Address'
import Photo from './Component/Profile/ProfilePhoto'
import FullName from './Component/Profile/FullName'
function App() {
  return (
    <div className="App">
      <div className="card">
        <Photo></Photo>
        <div className="cord">
          <FullName></FullName>        
          <Address></Address>
        </div>       
      </div>
    </div>
  );
}

export default App;
