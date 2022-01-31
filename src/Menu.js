import './Menu.css';
import food from './Cheeseburger.jpg';
function Menu() {
    return (
        <div className="menu">
            <h1 className="center">So what's on the menu?</h1>
            Our delicious meals are served hot and fresh twice daily - 
            no waiting near your microwave, no eating stale meals from your fridge.
            <div className="food">
                <div className="pangoa">
                    <img src={food} alt="Pangoa Bowl"></img>
                    <div className="foodname">Pangoa Bowl</div>
                    <div className="chef">by Freshii</div>
                </div>
            </div>
        </div>
    );
}
export default Menu;