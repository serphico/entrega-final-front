import Logout from '../buttonLogout/Logout'

export default function AccountInfo({username, avatar}){

    return(
        <>
            <div className='mx-50 flex flex-row justify-around items-center bg-gray-200 shadow-2xl shadow-slate-500 w-1/5'>
                <img width="50" src={'uploads/'+avatar} alt="imagen de avatar" />
                <p>{username}</p>
                <Logout/>
            </div>
        </>
    )
}