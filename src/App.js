import React from 'react'
import Productos from "./routes/productos";
import { useNavigate } from "react-router-dom";


function App() {
  let navigate = useNavigate();

  const [isLogin, setIsLogin]= React.useState(null);
  React.useEffect(()=>{
    fetch("https://backend-final-coder.herokuapp.com/api")
    .then((res)=> res.json())
    .then((data) => {
      !data.isLogin ? navigate("/login") :
      setIsLogin(data.isLogin)})
  }, [])

  return (
    !isLogin ? <>...loading</> :
    <Productos />
  );
}

export default App;
