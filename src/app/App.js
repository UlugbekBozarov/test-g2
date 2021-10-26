import { Redirect, Route, Switch } from 'react-router';
import All from './Components/all/All';
import './App.scss';
import Home from './Components/home/Home';
import LeftBar from './Components/LeftBar/LeftBar';

function App() {
  return (
    <div id="app">
      <div className="left">
        <LeftBar />
      </div>
      <div className="right">
        <div className="content">
          <Switch>
            <Route path="/dashboard" component={All} />
            <Route path="/home" component={Home} />
            <Route path="/circle" component={All} />
            <Route path="/pizza" component={All} />
            <Route path="/envelope" component={All} />
            <Route path="/notification" component={All} />
            <Route path="/settings" component={All} />
            <Route path="/log-out" component={All} />

            <Redirect to="/home" />
          </Switch>
        </div>
        <div className="items_content">

        </div>

      </div>
    </div>
  );
}

export default App;
