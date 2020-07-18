import React, { Fragment, Component } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/layout/Home';
import pollution from './components/layout/pollution1';
import disease from './components/layout/disease';
import diet from './components/layout/diet';
import exercise from './components/layout/exercise';

import upperexercise from './components/layout/upperexercise';
import CurrentTrends from './components/layout/currentTrends';
import HomeAdmin from './components/layout/HomeAdmin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<Navbar />
				<div>
					<Route exact path='/' component={Landing} />
					<section className='container'>
						<Switch>
							<Route exact path='/register' component={Register} />
							<Route exact path='/login' component={Login} />
							<Route exact path='/Home' component={Home} />
							<Route exact path='/pollution' component={pollution} />
							<Route exact path='/disease' component={disease} />
							<Route exact path='/diet' component={diet} />
							<Route exact path='/exercise' component={exercise} />
							<Route exact path='/upperexercise' component={upperexercise} />
							<Route exact path='/currenttrends' component={CurrentTrends} />
							<Route exact path='/HomeAdmin' component={HomeAdmin} />
						</Switch>
					</section>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
