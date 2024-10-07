import { React } from 'react';

const ItemOrderOverview = ({ item, quantity }) => {

    return (
        <tr>
            <td>
                <img src={item.img} alt={item.name} style={{ width: "150px", height: "150px" }}></img>
            </td>
            <td>
                <p>Quantity: {quantity}</p>
                <p>Price: ${item.price}</p>
            </td>
        </tr>
    );
}

export default ItemOrderOverview;