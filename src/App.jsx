import "./App.css";
import Header from "./components/header";
import Hero from "./pages/hero/hero";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/footer";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<About />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
