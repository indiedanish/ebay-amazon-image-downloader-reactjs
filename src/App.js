import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { About, Header, Footer} from './container'

import {Navbar} from './components'

const App = () => {
  return (
    <div style={{  
      backgroundImage: "url(" + "https://static.vecteezy.com/system/resources/previews/004/299/808/large_2x/podium-white-show-product-minimal-add-object-natural-plant-background-mockup-cosmetic-free-vector.jpg" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: "100vh"
    }} className='app'>


        <Navbar/>
        <Header/>
        {/* <About/>
        <Footer/> */}

    </div>
  );
}

export default App