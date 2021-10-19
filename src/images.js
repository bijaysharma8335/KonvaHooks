import React,{useState} from 'react';
import {Stage,Layer,Image}  from 'react-konva';

const URLImage =()=> {
   const[image,setImage]=useState('');
   

    const handleLoad=()=>{
        setImage(image);
    }
    
     const loadImage=(props)=>{
            image=new window.Image();
            image.src=props.src;
        image.addEventListener('load',(handleLoad)=>{

        })
            
            }


    useEffect(() => {
    loadImage();
       
    }, [image])
    
        return(
            <Image
            x={this.props.x}
            y={this.props.y}
            image={this.state.image}
            draggable="true"
           />
        );
    }
    


const Images =()=>{
    
        return(
            <div className="container ">
        <Stage width={window.innerWidth}
        height={window.innerHeight}
        >
            <Layer>
                <URLImage src = "1.jpg"  x={150} y={100}
                width={500}
                height={500}
                />
            </Layer>

        </Stage>
        </div>
        );
    }
    

export  default Images;