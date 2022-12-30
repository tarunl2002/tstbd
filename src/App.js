import React from 'react';
import Home from './pages/home'
import Domain from './pages/domain'
import './App.css';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
return (
	<Router>
	<Navbar/>
	<Home/>
	
	<Routes>
		<Route path='/' exact component={Home} />
		<Route path='/registration' component={Home} />
		<Route path='/events' component={Home} />
		<Route path='/team' component={Home} />
	</Routes>
	<Domain/>
	
	</Router>
	
);
}

export default App;
