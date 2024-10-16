import { React } from 'react';

const ItemOrderOverview = ({ item, quantity }) => {

    return (
        <div>
            <div className='flex flex-row'>
                <img src={item.img} alt={item.name} style={{ width: "150px", height: "150px" }}></img>

                <div className='flex flex-column justify-content-center gap-0'>
                    <p className='m-0'>Quantity: {quantity}</p>
                    <p className='m-0'>Price: ${item.price}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemOrderOverview;