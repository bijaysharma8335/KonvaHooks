import React, {useState,useEffect} from 'react';
import Konva from 'konva';

const Counter=()=> {
  const [count, setCount] = useState(0)
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
   const [prevCount, setPrevCount] = useState(count);
  const [color, setColor] = useState('pink')

   useEffect(() => {
    if (count > prevCount) {
       setPrevCount(count - 1);
    }
 }, [count])

 const handleColorChange=()=> {
      const nextColor=Konva.Util.getRandomColor();
      setColor(nextColor)
 }

  return (
    <div className="container mt-5">
      <br/>
      <br/>

       {console.log(prevCount)} 
      <button className="btn btn-primary" onClick={increase}>
         increase
      </button>
      <button  className="btn btn-danger" onClick={handleColorChange}>
         toggle color
      </button>
      <button  className="btn btn-warning" disabled={count <= 0} onClick={decrease}>
         decrease
      </button>
      <br/>
      <p style={{color, fontSize: "50px", fontWeight: "bold"}}>{count}</p>
    </div>
  );
}

export default Counter;
