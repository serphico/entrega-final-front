import Logo from './logo/Logo'
import Nav from './nav/Nav'
import LoginLink from './account/LoginLink'

export default function Header(){
    return(
        <header className="flex justify-around p-3 bg-white">
            <Logo/>
            <Nav />
            <LoginLink/>
        </header>
    )
}