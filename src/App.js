import Navbar from './components/Navbar'
import Routes from './components/Routes'
import BlogContextWrapper from './components/BlogContextWrapper'

function App() {
  return (
    <div className="App">
      <BlogContextWrapper>
          <Navbar/>
          <Routes/>
      </BlogContextWrapper>
    </div>
  );
}

export default App;
