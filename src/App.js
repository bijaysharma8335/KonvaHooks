import React from 'react';
import Circle1 from './circle';
import {HashRouter,Route} from 'react-router-dom';
import Header from './header';
import Animation from './animation';

 import Filtering from './filter';
import Counter from './color';
import Zindex from './zindexrect';
import FourShape from './fourshape';
import DragRectCir from './circledrag';
import ColoredRect from './companimation';
// import Image1 from './imagerotation';

function App() {
  return<HashRouter>
    
  <Header/>
<Route path="/circle" component={Circle1}/>
<Route path="/animation" component={Animation}/>
 <Route path="/filter" component={Filtering}/> 
<Route path="/color" component={Counter}/>
<Route path="/zindexrect" component={Zindex}/>
<Route path="/fourshape" component={FourShape}/>
<Route path="/circledrag" component={DragRectCir}/>
<Route path="/companimation" component={ColoredRect}/>
{/* <Route path="/imagerotation" component={Image1}/> */}


  </HashRouter>
  
}

export default App;
