
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meals from './components/Meals/Meals';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import MealDetails from './components/MealDetails/MealDetails';
import About from './components/MealDetails/About/About';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Meals></Meals>
          </Route>
          <Route path="/meals">
            <Meals></Meals>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/mealDetails/:mealId">
            <MealDetails></MealDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div >
  );
}

export default App;
