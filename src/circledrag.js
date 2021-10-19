import React,{useState} from 'react';
import { Stage,Layer,Circle, Rect } from 'react-konva';

const DragRectCir=()=> {

   const[isDragging,updateDrag]=useState(false);
    const[x,setX] =useState(30);
    const[y,setY] =useState(50);  
    const[width,setWidth] =useState(500);  
    
    const[height,setHeight] =useState(600);  
    
    const[radius,setRadius] =useState(50);  
     const dragStartt=()=>{
         const drag=true;
         updateDrag(drag)

    }
    const dragEndd=()=>{
        const drag=false;
        updateDrag(drag)

   }
    
    


    return(
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Rect
               
                x={x}
                y={y}
                width={width}
                height={height}


                draggable

                fill={isDragging?'green':'blue'}
                
                onDragStart={dragStartt}
                onDragEnd={dragEndd}
                    
                />
                 <Circle
               
               x={x}
               y={y}
               width={width}
               height={height}
               radius={radius}


               draggable

               fill={isDragging?'red':'purple'}
               
               onDragStart={dragStartt}
               onDragEnd={dragEndd}
                   
               />
               
            </Layer>
        </Stage>
        
    );
}

export default DragRectCir;