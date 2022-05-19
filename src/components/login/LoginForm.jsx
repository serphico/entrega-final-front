import {useState, useEffect} from 'react'

export default function LoginForm() {
    const [values, setValues] = useState({
        username: '',
        password: '',
      })

    const handleSubmit = (e) => {
        e.preventDefault()
        
        fetch('https://backend-final-coder.herokuapp.com/login', {
            method: 'POST',
            body: JSON.stringify(values)
         })
         .then(res => res.json())
         .then(res => console.log(res))
      }

      const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
      }

      const { username, password } = values


    return (

        <>
            <form onSubmit={handleSubmit} className="container mx-auto flex flex-col rounded-[0.5rem] mt-20 p-5 bg-gray-200 shadow-2xl shadow-slate-500 w-1/4">
                <h1 className="font-black text-2xl py-7">Login</h1>
                <div className="flex flex-col py-5">
                    <label >
                        Email:
                    </label>
                    <input type="text" name="username" value={username} onChange={handleChange}/>
                </div>
                <div className="flex flex-col py-5">
                    <label>
                        Password:
                    </label>
                    <input type="password" name="password" value={password} onChange={handleChange}/>

                </div>
                <button type="submit" className="bg-blue-400 rounded-[0.3rem]  text-white font-bold px-3 mt-6 w-1/4">Enviar</button>

                <a className=" mt-20 text-blue-500" href="/register">No tengo cuenta</a>
            </form>


        </>
    );
  }