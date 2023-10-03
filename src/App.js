

import './App.css';

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';


function App() {

  return (

    <>

{/* <BrowserRouter>
<div className="App">

      <Routes>
        <Route path="/" element={<Navbar title="Textutils" />}> */}
        <Navbar title="Textutils" />
        <TextForm heading="Enter Your Text Hear" />
        {/* <Route index element={<TextForm heading="Enter Your Text Hear" />} />
          <Route path="about" element={<About />} />
                    
        </Route>
      </Routes>
      </div>
    </BrowserRouter> */}


    </>


  );
}

export default App;
