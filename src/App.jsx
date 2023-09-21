import "./App.css";
import Header from "./components/header";
import Hero from "./pages/hero/hero";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/footer";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
