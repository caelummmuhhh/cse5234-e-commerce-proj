import { React } from 'react';

const ItemOrderOverview = ({ item, quantity }) => {

    return (
        <div>
            <div className='flex flex-row'>
                <img src={`${process.env.PUBLIC_URL}/images/Toaster${item.item_id}.jpeg`} alt={item.item_name} style={{ width: "150px", height: "150px" }}></img>

                <div className='flex flex-column justify-content-center gap-0'>
                    <p className='m-0'>Quantity: {quantity}</p>
                    <p className='m-0'>Price: ${item.unit_price}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemOrderOverview;