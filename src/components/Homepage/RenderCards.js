import React from "react";
import ImgMediaCard from "./cards/cards.js";
import {Col} from "react-bootstrap";
const RenderCards =(props)=>{
    const mydata=props.data.map((value,index)=>{
        return (
            <Col md={4}>
            <ImgMediaCard
         name={value.name}
         contact={value.phone_number}
        //  category={value.category}
         photo={value.photo}
         verified={value.verified}
         role={value.role}
         />
         </Col>
        )
    })
    
    return (
       {mydata}
    )
}
export default RenderCards;