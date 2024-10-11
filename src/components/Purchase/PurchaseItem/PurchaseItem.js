import { React } from 'react';
import Topbar from '../../topbar/Topbar';
import Footer from '../../footer/Footer';

const PurchaseItem = ({ item, setItemQuantity }) => {
    const handleChange = (e) => {
        const quantity = Number(e.target.value);
        setItemQuantity(item.id, quantity);
    };

    return (
        <div>
            <Topbar />
            <Footer />
            <h4>{item.name}</h4>
            <img src={item.img} alt={item.name} style={{ width: "150px", height: "150px" }}></img>
            <p>${item.price}</p>
            <input type="number" min={0} max={100} onChange={handleChange}></input>
        </div>
    );
}

export default PurchaseItem;
