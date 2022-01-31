import mealful from './mealful.svg';
import './header.css';

function Header() {
    return (
    <div className="header">
    <img src={mealful} alt="Mealful .Inc"></img>
    <ol className="left">
    <li>How it works</li>
    <li>On the measuring</li>
    <li>FAQs?</li>
    </ol>
    <ul className="right">
    <li>Log in </li>
    <li><button>Sign up</button></li>
     </ul>
     </div>
    );
}

export default Header; 