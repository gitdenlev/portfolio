import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import MyStack from "./components/MyStack";
import Projects from './components/Projects'
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <MyStack />
        <Projects />
        {/* <Footer /> */}
        <Counter />
    </>
  );
}

export default App;
