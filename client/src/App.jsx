import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';

function App() {
  return (
    <main className="app ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

// transition-all

export default App
