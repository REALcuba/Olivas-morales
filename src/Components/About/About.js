import React from 'react';

//style
import {Text } from './About.styles';
import Slider from "./Slider/Slider";
//data
import Data from "../Image/Data.json";

 const About = () => (

    
       
         <Slider >
           <Text>
           {Data.map( prop => {
               return(
                   <>
                     <h1>{prop.title}</h1>
                     <p>{prop.text}</p> 
                  </>
          ) } )
           }  
          </Text>
         
      </Slider>
        

     

    );

export default About;