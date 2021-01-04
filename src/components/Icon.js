import React from 'react';
import {FaTimes,FaRegCircle,FaPen} from 'react-icons/fa';

const Icon =({name})=>{
    
        switch(name){

            case 'circle':
            return <FaRegCircle className="icons" style={{color:"#0a8029"}}/> 
            case 'cross':
            return <FaTimes className="icons" style={{color:" #e00910"}}/> 
            default:
             return <FaPen className="icons" size={25}/> 
        }
        
    
};

export default Icon;