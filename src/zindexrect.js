import Konva from 'konva';
import React,{useState} from 'react';
import { Stage,Layer,Rect } from 'react-konva';
const generateItems=()=>{
    const items=[];
    for(let i=0;i<10;i++){
        items.push({
            x:Math.random()*100,
            y:Math.random()*300,
            id:'node-'+i,
            color:Konva.Util.getRandomColor()
        })

    }
    return items;
}

const Zindex=()=>{
    const[items,setItem]=useState(generateItems());

    const handleDrag=(e)=>{
        const id=e.target.name();
        const items=generateItems();
        const item =items.find(i=>i.id===id);
        const index=items.indexOf(item);
        items[index]={
            ...item,
            x:e.target.x(),
            y:e.target.y()
        }
        setItem(items)
    }
    return(
        <Stage 
        width={window.innerWidth}
        height={window.innerHeight}>
            <Layer>
                {items.map(item=>(
                     <Rect
                     key={item.id}
                     name={item.id}
                     x={item.x}
                     y={item.y}
                     width={item.x}
                     height={item.x}
                     fill={item.color}
                     draggable
                     onDragMove={handleDrag}/>

                ))}
            </Layer>
        </Stage>
    );

}
export default Zindex;