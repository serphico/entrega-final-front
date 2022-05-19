
export default function Logout() {


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: ''
    };

    const logoutAction = () =>{
        fetch('/logout',requestOptions)
        .then(response => {response.json()
         window.location.reload(false);   
        })
    }

    return(
        <button className="bg-blue-500 py-2 px-4 text-white font-bold" onClick={logoutAction}>Logout</button>
    )
    
} 