import React,{ useState } from "react";

import {Stage,Layer,Rect}from 'react-konva';




 const MyRectAni =()=>{
   
  const[isDragging,updateDrag]=useState(false);
 

  const changeSize=()=>{
        // this.rect.to({ scaleX:Math.random()+5 , 
        //   scaleY:Math.random()+5 ,
        //    duration:0.2 })
         const drag1=true;
         updateDrag(drag1)
         
     
  }
         return(
             <Rect
          // ref={node =>{
          //     rect=node;}}
           
            width={100}
             height={100}
             fill={isDragging?'orange':'blue'}
            //  stroke="brown"
            //  strokeWidth={10}
             draggable
             onDragEnd={changeSize}
             onDragStart={changeSize}/>
         );
     }



const Animation =()=>{
    
        return(
            <div className="container mt-5">
    
        <Stage
        width={window.innerWidth}
        height={window.innerHeight}>
            <Layer>
            <MyRectAni/>
        
            </Layer>
        </Stage>
</div>
    );
}


export default Animation;