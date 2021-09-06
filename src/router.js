import { Router, Route, Switch, BrowserRouter  } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Home from './pages/Home'

const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
    	<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
    </Router>
  );
}

export default App;