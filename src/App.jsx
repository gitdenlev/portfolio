import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import MyStack from "./components/MyStack";
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <MyStack />
        <Projects />
        <Education />
        {/* <Footer /> */}
        <Counter />
    </>
  );
}

export default App;
