import React,{useState} from "react";
import { Stage,Layer,Star } from "react-konva";
import Konva from "konva";
const FilteringShape=()=>{
    const[color,setColor]=useState('blue');
    
    const handleclick=()=>{
        const newcol=Konva.Util.getRandomColor();
        setColor(newcol);
       
    }

    return(
        <Star x={20}
        y={30}
        width={window.innerWidth}
        height={window.innerHeight}
        innerRadius={80}
        outerRadius={60}
        numPoints={20}
        fill={color}
        // stroke="red"
        // strokeWidth={10}
        draggable
        shadowBlur={20}
        onClick={handleclick}/>
    );
        

}

const Filtering=()=>{
    return(
        <Stage width={window.innerWidth}
        height={window.innerHeight}
        >
            <Layer>
               <FilteringShape/>
            </Layer>
        </Stage>
    );

}
export default Filtering;