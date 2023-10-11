import './App.css';
import image from './Climbers.png';
import DataBlock from './Components/DataBlock';

function App() {

  return (
    <div>
      <div className="dashboard">
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <span>Palladium Dashboard</span>
          <span>Welcome Back Dan</span>
          <span></span>
        </div>
      </div>
      <div id="body">
        <div id="data">
          <div id="dataColumn">
            <DataBlock/>
            <DataBlock/>
            <DataBlock/>
            <DataBlock/>
          </div>
          <div id="dataColumn">
            <DataBlock/>
            <DataBlock/>
            <DataBlock/>
            <DataBlock/>
          </div>
          <div>
            <img src={image}></img>
          </div>
        </div>
        <div id="footer">
          <div className='footerColumn'>
            <h3>Week Overview</h3>
            <p>+ new climbers</p>
            <p>+ traffic</p>
            <p>- difficult of climbs completed</p>
            <p>content sharing</p>
          </div>
          <div className='footerColumn'>
            <h3>Suggestions</h3>
            <p>Set higher difficulty</p>
            <p>Repost climber content</p>
          </div>
          <div className='footerColumn'>
            <h3>Month Overview</h3>
            <p>+ new climbers</p>
            <p>- traffic</p>
            <p>= difficult of climbs completed</p>
            <p>content sharing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
