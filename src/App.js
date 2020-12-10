import { makeStyles } from '@material-ui/core/styles';
import Layout from './pages/Layout/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/index';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  container:{
    marginTop: '5%'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <Layout>
        <Container className={classes.container}>
          <Switch>
              <Route exact path="/"  component={Home}/>
          </Switch>
        </Container>
      </Layout>
    </Router>
  );
}

export default App;
