
import { NavLink } from 'react-router-dom';
import {ReactComponent as Fullview} from '../assets/fullflow.svg';

function handleClick() {
    window.location.href='/list'
}
window.onload=function(){
let el = document.getElementsByClassName('b1')
el.addEventListener('click', handleClick, false)
}

export const Flow2 = () => {
        
    return(
    <div className="maincontainer">
        <div className='fullviewcontainer'>
        <Fullview className="ffsvg"/>
        <NavLink to="/list"></NavLink>
        </div>
    </div>
    )
}