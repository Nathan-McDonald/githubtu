import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>
        CS 230L
      </h1>
      <h2>
        Section 002
      </h2>
      <p>
        WVU ID: 800368871
      </p>
      <p>
        Hi, I am Nathan McDonald
      </p>
      <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Card name="Google" description="Just takes you to Google." link="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiIqO-GzN6EAxUKMlkFHZxWC2kQPAgJ"/>
                    </div>
                    <div className="col-md-4">
                        <Card name="First Card" description="Description for the first card." link="/page1"/>
                    </div>
                    <div className="col-md-4">
                        <Card name="First Card" description="Description for the first card." link="/page1"/>
                    </div>
                </div>
            </div>

    </div>
  );
}

export default App;
