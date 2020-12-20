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
import Chat from './pages/Chat/index';
import ChatContextProvider from './contexts/ChatContext';

const useStyles = makeStyles((theme) => ({
  container:{
    marginTop: '5%'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <ChatContextProvider>
        <Layout>
          <Container className={classes.container} fixed>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/rooms/:roomId" component={Chat}/>
            </Switch>
          </Container>
        </Layout>
      </ChatContextProvider>
    </Router>
  );
}

export default App;
