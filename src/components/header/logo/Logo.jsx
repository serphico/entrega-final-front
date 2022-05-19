import logoLarge from '../../../assets/img/logo-ml-large.png'
import logoSmall from '../../../assets/img/logo-ml-small.png'


export default function Logo(){
        return(
            <>
                <img className="sm:hidden" src={logoLarge} alt="logo"/>
                <img className="md:hidden lg:hidden xl:hidden 2xl:hidden" src={logoSmall} alt="logo" />
            </>
        )
}