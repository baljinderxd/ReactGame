import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Icon from "./components/Icon";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {IoReloadCircle} from 'react-icons/io5';
 import {Card,CardBody,Button,Container,Col,Row,Badge} from 'reactstrap';
 const itemArr=new Array(9).fill("empty");

const App=()=> {
  
  const [isCross,setIsCross]=useState(false);
  const[winMessage,setWinMessage]=useState("");
  const[circleScore,setCircleScore]=useState(0);
  const[crossScore,setCrossScore]=useState(0);
  const[draw,setDraw]=useState(0);

 const reloadGame=()=>{

    setIsCross(false);
    setWinMessage("")
    itemArr.fill("empty",0,9);
    //console.log(itemArr);
 }; 
 const checkWinner=()=>{

    if(itemArr[0]===itemArr[1] && itemArr[0]===itemArr[2] && itemArr[0]!=="empty"){

      setWinMessage(`${itemArr[0]} wins`);
      
      if(itemArr[0]==='circle'){
        setCircleScore(circleScore+1);
      }
      else
      setCrossScore(crossScore+1);
    }
    else if(itemArr[3]===itemArr[4] && itemArr[3]===itemArr[5] && itemArr[3]!=="empty"){

      setWinMessage(`${itemArr[3]} wins`);
      if(itemArr[3]==='circle'){
        setCircleScore(circleScore+1);
      }
      else
      setCrossScore(crossScore+1);
    }
    else if(itemArr[6]===itemArr[7] && itemArr[6]===itemArr[8] && itemArr[6]!=="empty"){

      setWinMessage(`${itemArr[6]} wins`);
     if(itemArr[6]==='circle'){
        setCircleScore(circleScore+1);
      }
      else
      setCrossScore(crossScore+1);
    }
    else if(itemArr[0]===itemArr[3] && itemArr[0]===itemArr[6] && itemArr[0]!=="empty"){

      setWinMessage(`${itemArr[0]} wins`);
     if(itemArr[0]==='circle'){
        setCircleScore(circleScore+1);
      }
      else
      setCrossScore(crossScore+1);
    }
    else if(itemArr[1]===itemArr[4] && itemArr[1]===itemArr[7] && itemArr[1]!=="empty"){

      setWinMessage(`${itemArr[1]} wins`);
     if(itemArr[1]==='circle'){
        setCircleScore(circleScore+1);
      }
      else
      setCrossScore(crossScore+1);
    }
    else if(itemArr[2]===itemArr[5] && itemArr[2]===itemArr[8] && itemArr[2]!=="empty"){

      setWinMessage(`${itemArr[2]} wins`);
     if(itemArr[2]==='circle'){
        setCircleScore(circleScore+1);
      }
      else
      setCrossScore(crossScore+1);
    }
    else if(itemArr[0]===itemArr[4] && itemArr[0]===itemArr[8] && itemArr[0]!=="empty"){

      setWinMessage(`${itemArr[0]} wins`);
     if(itemArr[0]==='circle'){
        setCircleScore(circleScore+1);
      }
      else
      setCrossScore(crossScore+1);
    }
    else if(itemArr[2]===itemArr[4] && itemArr[2]===itemArr[6] && itemArr[2]!=="empty"){

      setWinMessage(`${itemArr[2]} wins`);
     if(itemArr[2]==='circle'){
        setCircleScore(circleScore+1);
      }
      else
      setCrossScore(crossScore+1);
    }
    
    else if(itemArr[0]!=="empty"&&itemArr[1]!=="empty"&&itemArr[2]!=="empty"&&itemArr[3]!=="empty"&&itemArr[4]!=="empty"&&itemArr[5]!=="empty"&&itemArr[6]!=="empty"&&itemArr[7]!=="empty"&&itemArr[8]!=="empty" ){
      
      setWinMessage("Match Draw");
      setDraw(draw+1);
      
    }

  //
 } 

//  const changeScore=()=>{
//    if()
//  }

 const changeItem=itemNumber=>{
      if(winMessage){
      return toast(winMessage,{type:"success"});
      }
      if(itemArr[itemNumber]==="empty"){
        itemArr[itemNumber]=isCross? "cross" :"circle"
        setIsCross(!isCross);
      }
      else{
        return toast("already filled",{type:"error"})

        
      }
      checkWinner();
  
 }; 

//  const findCross=()=>{

//     // let x=rgb(66, 186, 150);
//     // let y=rgb(223, 71, 89);
//       if(isCross){
//         style=
//         {
//             color:"rgb(66, 186, 150)"
//         }
//         return("Cross Turn") 

//       }
//       else
//       style={
//         color:"rgb(223, 71, 89)"
//       } 
//       return("Circle Turn") 
//  }
  return (
    
    <Container className="p-5">
       <ToastContainer position="bottom-center"/> 
       <Row>
         <Col>
       <h3 style={{color:"white"}}>Circle Score <Badge color="secondary">{circleScore}</Badge></h3>
       </Col>
       <Col>
       <h3 style={{color:"white"}}>Draw Matches <Badge color="secondary">{draw}</Badge></h3>
       
       </Col>
       <Col>
       <h3 style={{color:"white"}}>Cross Score <Badge color="secondary">{crossScore}</Badge></h3>
       </Col>
       </Row>
       <Row>
          
          <Col md={6} className="offset-md-3">
            {winMessage?(
              <div className="mb-3 mt-3">
                <h1 className="text-primary text-uppercase text-center">
                  {winMessage}
                </h1>
                <Button className="btn btn-info has-spinner" onClick={reloadGame}><span><IoReloadCircle  className="icons" style={{color:"white"}}/> </span>Reload</Button>
              </div>
            ):(
              <div className="mb-4 mt-4 text-center " >
                {isCross?(
                  <h1 className="text-danger">Cross Turn</h1>

                ):<h1 className="text-success">Circle Turn</h1>}
                
              </div>
            )}
            <div className="grid">
              {itemArr.map((item,index)=>(
                   <Card onClick={()=>changeItem(index)}>
                     <CardBody className="box">
                      <Icon name={item}/>
                  </CardBody>
                </Card>

              ))}
            </div>

          </Col>
        </Row>
      
    </Container>
    
  )
}

export default App;
