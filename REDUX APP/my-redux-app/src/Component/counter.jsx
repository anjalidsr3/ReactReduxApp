import { useState } from 'react'

import {useDispatch, useSelector} from "react-redux"
import { increment } from './redux/Actions/counterAction'






function counter() {
  const{counterValue} =useSelector((state)=>state.counter);
const dispatch=useDispatch();

const handleIncrement=()=>{
  dispatch(increment());
};

  return (
    <>
       <button onClick={handleIncrement}>count is{counterValue}</button>  
    
    
    </>
  );
};

export default counter;
