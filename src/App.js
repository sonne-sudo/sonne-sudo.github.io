import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Box, Grid } from '@mui/material';
import { Avatar } from '@mui/material';

import './App.css';

function App() {
  return (
    <div className="App">

      <Box className="AvatarBox" display="flex">
        <Avatar className="Avatar"
          alt="Evan Julius"
          src={AccountCircleRoundedIcon}
          sx={{ width: 240, height: 240 }}
        />
      </Box>

      <Grid container direction={"column"} >
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>




        <section className="App-intro">
          <h1>Welcome to React</h1>
        </section>
        
        <section className="App-description">
          <p>This is a simple React application.</p>
          <p>Feel free to explore and modify the code!</p>
          <p>Check out my website for more projects.</p>
          <p>Contact me at evan.julius@example.com</p>
        </section>

        {/* Link to resume */}
        {/* <section className="App-resume">
          <button onClick={() => alert('Button clicked!')}>Click Me</button>
        </section> */}

        <footer className="App-footer">
          <p>© 2025 My React App</p>
        </footer>

      </Grid>
    </div>
  );
}

export default App;
