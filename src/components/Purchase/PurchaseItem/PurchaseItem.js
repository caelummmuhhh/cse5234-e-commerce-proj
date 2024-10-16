import { React } from 'react';

import './purchaseitem.css';

const PurchaseItem = ({ item, setItemQuantity, defaultQuantity }) => {
    const handleChange = (e) => {
        const quantity = Number(e.target.value);
        setItemQuantity(item.id, quantity);
    };

    return (
        <div className="border rounded-3 flex flex-column align-items-center productCard">
            <img className='m-3' src={item.img} alt={item.name} style={{ width: "150px", height: "150px" }}></img>

            <div className='w-100 flex flex-row justify-content-between align-items-center p-2 m-3'>
                <div className='flex flex-column'>
                    <h6 className='m-0'>{item.name}</h6>
                    <p className='m-0'>${item.price}</p>
                </div>

                <input className='rounded-3 border' type="number" min={0} max={100} onChange={handleChange} defaultValue={defaultQuantity}></input>
            </div>
        </div>
    );
}

export default PurchaseItem;
