import {Button as MUIButton,styled} from '@mui/material'
import React, { FC, useState } from 'react'



export interface TagProps {
    label:string;
    active?:boolean;
   
    onChange?:(name:string)=>void 
 
    size?: 'small' | 'medium' | 'large'
    
}


const StyledButton = styled(MUIButton)<TagProps>`
 text-transform:none;
border: 1px solid #D6DADF;
margin-left:8px;
padding: 8px 20px;
margin-bottom:12px;
border-radius: 8px;
background-color:${(props)=>props.active  ? '#474B52': 'white'};
color:${(props)=>props.active  ? 'white': '#666C72;'};
height:35px ;
max-width:169px;



&:hover{
background-color:${(props)=>props.active  ? 'rgba(71,75,82,0.6)': 'rgba(71,75,82,0.2)'};


}


`
const Tag:FC<TagProps>=(props)=>{
   
    const [tagActive,setTagActive]=useState(false)
    const handleTagClick = ()=>{
       setTagActive(!tagActive)
    }
    
    return(
       <StyledButton 
       onClick={props.onChange ? () => props.onChange?.(props.label) : handleTagClick} 
    //    {...props}
       size={props.size}
       active={props.active ?? tagActive} 
       label={props.label}

       >
           {props.label}
       </StyledButton>
    )
}
export default Tag