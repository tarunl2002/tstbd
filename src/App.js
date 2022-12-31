import React from 'react';
import Home from './pages/home'
import Domain from './pages/domain'
import './App.css';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
import Contactus from './components/Contactus';
import About from './components/About.jsx'

function App() {
return (
		<div className='App'>
	<Router>
	<Navbar/>
	<Home/>

	<Routes>
		<Route path='/' exact component={Home} />
		<Route path='/registration' component={Home} />
		<Route path='/events' component={Home} />
		<Route path='/team' component={Home} />
	</Routes>

	</Router>
	<About />
	<Domain/>
	<Contactus />
	<Footer />
	</div>
);
}

export default App;
