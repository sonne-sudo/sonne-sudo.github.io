import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Avatar } from '@mui/material';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>

      <Avatar className="Avatar"
        alt="Evan Julius"
        src={AccountCircleRoundedIcon}
        sx={{ width: 120, height: 120 }}
      />


      <section className="App-intro">
        <h1>Welcome to React</h1>
      </section>
      
      <section className="App-description">
        <p>This is a simple React application.</p>
      </section>



      {/* Link to resume */}
      {/* <section className="App-resume">
        <button onClick={() => alert('Button clicked!')}>Click Me</button>
      </section> */}

      <footer className="App-footer">
        <p>© 2025 My React App</p>
      </footer>

    </div>
  );
}

export default App;
