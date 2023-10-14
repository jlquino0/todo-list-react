
import Login from './pages/Auth/Login';
import Home from './pages/Home';
import './styles/App.css';
import {Route, Routes} from 'react-router-dom'
import Singin from './pages/Auth/Singin';
import { ROOT_PATH, HOME_PATH, SINGIN_PATH } from './route/routePaths';
import { connect } from 'react-redux';


function App({ user }) {
  console.log(user);
  return (
    <Routes>
      <Route path={ROOT_PATH} Component={Login} />
      <Route path={HOME_PATH} Component={Home} />
      <Route path={SINGIN_PATH} Component={Singin} />
    </Routes>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(App);
