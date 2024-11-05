import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import PurchaseItem from './PurchaseItem/PurchaseItem';
import './purchase.css';

async function fetchInventory(name = '', inStock = '') {
  let url = `https://1zpl4u5btg.execute-api.us-east-2.amazonaws.com/Test/inventory-management/inventory`;
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (e) {
    console.error("Error fetching inventory:", e);
    return [];
  }
}

const Purchase = ({ orderProp, setOrderProp }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(orderProp.items.buyQuantity).length === 0) {
      console.log("cart is empty...");
      return;
    };

    navigate('/purchase/paymentEntry');
  };

  const setItemQuantity = (itemId, quantity) => {
    setOrderProp((prevOrder) => {
      const updatedQuantity = {
        ...Object.fromEntries(
          Object.entries(prevOrder.items.buyQuantity).filter(([k, v]) => v > 0)
        ),
        ...(quantity > 0 ? { [itemId]: quantity } : {}),
      };

      if (quantity === 0) {
        delete updatedQuantity[itemId];
      }

      return ({
        ...prevOrder,
        items: {
          ...prevOrder.items,
          buyQuantity: updatedQuantity,
        },
      });
    });
  };

  // Fetch inventory and set products on component mount
  useEffect(() => {
      fetchInventory().then(items => {
          setProducts(items);  // Set products fetched from API
      }).catch(err => {
          console.error("Error fetching inventory:", err);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>

      <form onSubmit={handleSubmit} className="flex flex-column align-items-center">
        <div id="products-container">
          {products.length > 0 ? (
            products.map((item) => (
              <PurchaseItem
                key={item.item_id}
                item={item}
                setItemQuantity={setItemQuantity}
                defaultQuantity={orderProp.items.buyQuantity[item.item_id] || 0}
              />
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>

        <button className="my-3 w-25 fw-bold rounded-pill border" type="submit">Checkout</button>
      </form>
    </div>
  );
};

export default Purchase;
