import './App.css';
import Grid from '@mui/material/Grid';
import Main from './main/Main';
import MuseumContext from './context/MuseumContext';

function App() {
  return (
    <Grid className="App">
      <MuseumContext>
          <Main />
      </MuseumContext>
    </Grid>
  );
}

export default App;
