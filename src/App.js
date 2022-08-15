import './App.css';
import NavBar from './components/NavBar';
import "./style/style.css"
import Intro from './components/Intro';
import Trending from './components/Trending';
import Superhero from './components/Superhero';

function App() {
  return (
    <div>
      {/* start inro */}
      <div className="mybg">
        <NavBar/>
        <Intro/>
      </div>
      {/* end intro */}

      {/* start trending */}
      <div className='trending'>
        <Trending/>
      </div>
      {/* end trending */}

      {/* start superhero */}
      <div className='superhero'>
        <Superhero/>
      </div>
      {/* end superhero */}
    </div>
  )
}

export default App;
