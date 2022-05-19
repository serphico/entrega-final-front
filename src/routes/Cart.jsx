import { useState, useEffect } from "react";
import CartContent from '../components/cart/CartContent'
import { useNavigate } from "react-router-dom";

export default function Cart() {
  let navigate = useNavigate();

  const [isLogin, setIsLogin]= useState(null);
  useEffect(()=>{
    fetch("/api")
    .then((res)=> res.json())
    .then((data) => {
      !data.isLogin ? navigate("/login") :
      setIsLogin(data.isLogin)})
  }, [])

  return (
    !isLogin ? <>...loading</> :
    <CartContent style={{ padding: "1rem 0" }}/>
  );

  }