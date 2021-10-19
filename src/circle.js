import React from 'react';
import { Stage,Layer,Circle } from 'react-konva';
const pulseShape=(shape)=>{
    shape.to({
        scaleX:6,
        scaleY:6,
        onFinish:()=>{
            shape.to({
            scaleX:1,
            scaleY:1,
            })
        },
    })
};
const Circle1=()=>{

     const handleClick=(e)=>{
        const shape=e.target;
        pulseShape(shape);

    }
return(
    <Stage width={window.innerWidth}
    height={window.innerHeight}>
        <Layer>
            <Circle
            x={50}
            y={100}
            width={200}
            height={500}
            radius={80}
            fill="purple"
            stroke="green"
            strokeWidth={10}
            draggable
            onClick={handleClick}/>
        </Layer>
    </Stage>
);

}
export default Circle1;