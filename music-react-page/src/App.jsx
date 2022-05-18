import './App.css'
import Header from './components/Header/Header'
import NavBarLeft from './components/NavBarLeft/NavBarLeft'
import NavBarRight from './components/NavBarRight/NavBarRight'
import Home from './components/PlayerHome/Home'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {


  return (
    <div className="App">
     <div className="player-main">
       <Header />
       <div className='content'>

       <NavBarLeft />
       <Home />
       <NavBarRight />
       </div>
     </div>
      <GlobalStyles />
    </div>
  )
}

export default App
