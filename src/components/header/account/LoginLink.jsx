import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AccountInfo from './AccountInfo/AccountInfo';

export default function Login() {

  const [data, setData]= useState(null);
  const [isLogin, setIsLogin]= useState(null)
    useEffect(()=>{
    fetch("/login")
    .then((res)=> res.json())
    .then((data) => {
      setIsLogin(data.isLogin)
      setData(data.infoAccount)})
  }, [])


  return (
      <>
      {!data && !isLogin ? <Link to="/login">login </Link> :
          <AccountInfo key={data._id} username={data.username} avatar={data.avatar}/>
      }
      </>
  );
}