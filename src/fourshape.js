import Konva from 'konva';
import React,{useState} from 'react';
import {Stage,Layer,Rect,Circle,Star,RegularPolygon} from 'react-konva';

const pShape=(shape)=>{
    shape.to({
        scaleX:6,
        scaleY:6,

        onFinish:()=>{
    shape.to({
        scaleX:1,
        scaleY:1
       })
    },
    })

}



 const FourShape=()=> {
    
       
        const[color,setColor]=useState('lightgreen');
        const[isDragging,setDrag]=useState(false);
    
    
   
    
     const rectClick=()=>{
     
       const color1=Konva.Util.getRandomColor();
       setColor(color1)
     
   
       

    }
    const cirClick=(e)=>{
        const shape=e.target;
        pShape(shape);
        

    }
    const starClick=(e)=>{
        const shape=e.target;
        pShape(shape);
  }

  const polyClick=(e)=>{
      const shape=e.target;
      pShape(shape);
  }
  const dragStartt=()=>{
    const drag=true;
    setDrag(drag);

  }
      const dragEndd=()=>{
          const drag=false;
          setDrag(drag);
      }
      

  
 
        return(
            <Stage
                width={window.innerWidth}
                height={window.innerHeight}>
                <Layer>
      
                  <Rect  
                //   filters={[Konva.Filters.Noise]} 
                //   noise={1} 
                    x={50}
                    y={50}
                    width={240}
                    height={250}
                    fill={color}
                   
                    draggable
                    // ref={(node)=>{
                    //     rect=node;
                    // }} 
                    onClick={rectClick}
                    />
                   

                   
                     <Circle
                    x={window.innerWidth /2}
                    y={window.innerHeight/2}
                    width={200}
                    height={300}
                    radius={80}
                    fill="green"
                    draggable
                    rotation={+90}
                    onClick={cirClick}/>

                    <RegularPolygon
                    x={200}
                    y={200}
                    sides={6}
                    radius={80} 
                    fill="purple"
                    draggable
                    onClick={polyClick}/>
                     <Star
                    x={100}
                    y={100}
                    innerRadius={70}
                    outerRadius={80}
                    numPoints={20}
                    fill={isDragging?'blue':'red'}
                    draggable
                    onDragStart={dragStartt}
                    onDragEnd={dragEndd}
                    onClick={starClick}
                    />
                </Layer>
            </Stage>
        );


}
export default FourShape;