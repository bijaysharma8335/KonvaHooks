import React,{ useEffect, useState} from 'react';
const Image1 =()=>{
   
        const[toggle,setToggle]=useState(false);
        const[rotate,setRotate]=useState(false);
       
      
   useEffect(()=>{
    const imag =image;

   })
    //  componentDidMount() {
    //      const imag = this.image;
    //      imag.addEventListener("animationend", this.rotatingDone);
    //    }

    // componentWillUnmount() {
    //     const elm = this.image;
    //     imag.removeEventListener("animationend", this.rotatingDone);
    //   }
    
    const rotatingDone=()=>{
       
            
            const tog=!false.toggle;
            const rotate=false;
            setToggle(tog);
            setRotate(rotate)
            }
    
    
  
       
        return  <img
        src={
          toggle
            ? "1.jpg"
            : "3.jpg"
            
        }
        
        width={window.innerWidth / 2}
        height={window.innerHeight / 2}
        ref={imag => {
          this.image = imag;
        }}
     
        onClick={() => this.setState({ rotate: true })}
        className={rotate ? "rotate" : ""}
      />

    }
}
export default Image1;