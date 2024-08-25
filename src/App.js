import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
  const count = useSelector(state=>state.count);
  const id = useSelector(state=>state.id);
  const passwd = useSelector(state=>state.passwd);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({type: "INCREAMENT", payload:{num:5}});
  }
  const decrease = () => {
    dispatch({type: "DECREAMENT", payload:{num:-10}});
  }
  const login = () => {
    dispatch({type: "LOGIN", payload: {id: "luk", passwd: "1234"}});
  }

  return (
    <div>
      <h1>{count}</h1>
      <h1>{id} {passwd}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
      <button onClick={login}>로그인</button>
      <Box />
    </div>
  );
}

export default App;
