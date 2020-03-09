import React from 'react';
import Navbar from './Components/Navbar'
import {Route} from 'react-router-dom';
import Home from './Components/Home';
import Shoplist from './Components/Shoplist';
import VegRec from './Components/VegRec';
import FruitIng from './Components/FruitIng'


function App(){

 

  return(
   
     <div >
       <Navbar />
       <Route exact path = '/' component ={Home} />
       <Route path = '/Shoplist' component ={Shoplist} />
       <Route path = '/VegRec' component={VegRec} />
       <Route path = '/FruitIng' component={FruitIng} />


     </div>
  );
}
export default App;
