import mainimage from '../src/Scarecrow.png';
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="container">
        <h1 className="head">404 NOT FOUND</h1>
        <div className="item1">
            <img className="image" src={mainimage} alt="scarecrow" />
        </div>
        <div className="item2">
            <h2 className="info">I have bad news <br /> for you</h2>
            <p className="statement">The page you are looking <br />for might be removed or is <br /> temporary unavailable</p>
            <button className="btn">BACK TO HOMEPAGE</button>
        </div>
        <p className="created">created by Faith Biketi - devChallenges.io</p>
    </section>

    </div>
  );
}

export default App;
