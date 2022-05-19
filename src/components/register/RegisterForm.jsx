export default function RegisterForm() {
    return (

        <>
            <form action="/register" enctype="multipart/form-data" method="POST" className="container mx-auto flex flex-col rounded-[0.5rem] mt-20 p-5 bg-gray-200 shadow-2xl shadow-slate-500 w-1/4">
                <h1 className="font-black text-2xl py-7">Registrate</h1>
                <div className="flex flex-col py-5">
                    <label >
                        Email:
                    </label>
                    <input className="p-2" type="email" name="username" placeholder="email@email.com" required/>
                </div>
                <div className="flex flex-col py-5">
                    <label>
                        password:
                    </label>
                    <input className="p-2" type="password" name="password" required/>

                </div>
                <div className="flex flex-col py-5">
                    <label>
                        Nombre y Apellido:
                    </label>
                    <input className="p-2" type="text" name="fullName" required/>

                </div>
                <div className="flex flex-col py-5">
                    <label>
                        Dirección:
                    </label>
                    <input className="p-2" type="text" name="address" required/>

                </div>
                <div className="flex flex-col py-5">
                    <label>
                        Edad:
                    </label>
                    <input className="p-2" type="number" name="age" pattern="[0-150]"  required/>

                </div>
                <div className="flex flex-col py-5">
                    <label>
                        Nº de Télefono:
                    </label>
                    <input className="p-2" type="tel" name="phone" placeholder="+543794123456" /*pattern="[\+]\d{2}[\]\d{2-3}[\]\d{3}[\-]\d{4}"*/ required/>
                    <small className="p-1">El formato del número de télefono es <strong>+54114123456</strong></small>
                </div>
                <div className="flex flex-col py-5">
                    <label>
                        Avatar
                    </label>
                    <input type="file" name="avatar"/>

                </div>
                <input className="bg-blue-400 rounded-[0.3rem]  text-white font-bold px-3 mt-6 w-1/4" type="submit" value="Finalizar"/>  

                <a className=" mt-10 text-blue-500" href="/login">Ya tengo cuenta.</a>
            </form>


        </>
    );
  }