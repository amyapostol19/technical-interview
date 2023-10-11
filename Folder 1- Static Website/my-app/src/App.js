import './App.css';
import image from './Climbers.png';
import DataBlock from './Components/DataBlock';
import ClimberData from "./data.json";

function App() {

  /* 

  Plan was to import data from json and use data to dynamically make calculations about information to be displayed on dashboard.
  I ran out of time importing data.
  */


  const newclimbers = ClimberData.NewClimbersToday;
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
            <DataBlock text="+6% of climbers compared to same day last week."/>
            <DataBlock text="22 new climbers this week"/>
            <DataBlock text="42 hours of activity tracked this week"/>
            <DataBlock text="positive sentiment on climbs has increased by 10% since last week"/>
          </div>
          <div id="dataColumn">
            <DataBlock text="11 climbers came in today"/>
            <DataBlock text="+3% of climbers since last week"/>
            <DataBlock text="30% of climbers shared there session on social media"/>
            <DataBlock text="Let students know the wall has been reset"/>
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
