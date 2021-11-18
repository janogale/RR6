import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import {Routes, Route, Link} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<ContactPage/>}/>
        <Route path="*" element={<NotFound/>}/>
         

      </Routes>

    </div>
  );
}

function NotFound(){

  return (
    <h2>Sorry page not found</h2>
  )
}


const Navigation = () => {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
        display: "flex",
        justifyContent: "space-around"
      }}
    >
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/noplace">Go</Link>
    </nav>
  );
};
export default App;
