import { Routes, Route, useNavigate } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { appRoutes } from './routes/Router'
import Home from './pages/home'

function App() {

  const allRoutes = appRoutes.map(({ path, component }) => <Route exact path={path} element={component} key={path} />);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Routes>
          {allRoutes}
        </Routes>
      </main>
    </div>
  );
}

export default App;
