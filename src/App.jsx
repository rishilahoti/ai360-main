import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Services from './components/pages/Services';
import Industries from './components/pages/Industries';
import Products from './components/pages/Products';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';

function App() {
	return (
		<>
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<Hero />} />
						<Route path="/services" element={<Services />} />
						<Route path="/industries" element={<Industries />} />
						<Route path="/products" element={<Products />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Layout>
			</Router>
		</>
	);
}

export default App;
