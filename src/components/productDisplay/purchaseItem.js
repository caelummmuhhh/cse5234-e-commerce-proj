import { React } from 'react';

const PurchaseItem = ({item, setItemQuantity}) => {
    const handleChange = (e) => {
        const quantity = Number(e.target.value);
        setItemQuantity(item.id, quantity);
    };

    return (
        <div>
            <h4>{item.name}</h4>
            <img src={item.img} alt={item.name} style={{width: "150px", height: "150px"}}></img>
            <p>${item.price}</p>
            <input type="number" min={0} max={100} onChange={handleChange}></input>
        </div>
    );
}

export default PurchaseItem;