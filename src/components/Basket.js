import React from 'react';

const Basket = ({ cartItems, onAdd, onRemove }) => {
    //가격 구하기
    const itemsPrice = cartItems.reduce((acc, cur) => acc + (cur.qty * cur.price), 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>
                { cartItems.length === 0 && <div>Cart Is Empty</div> }
            </div>
                { cartItems.map(item => (
                    <div key={item.id} className="row">
                        <div className="col-2">{item.name}</div>
                        <div className="col-2">
                            <button className="add" onClick={() => onAdd(item)}>+</button>
                            <button className="remove" onClick={() => onRemove(item)}>-</button>
                        </div>
                        <div className="col-2 text-right">{item.qty} x ${item.price.toFixed(2)}</div>
                    </div>
                ))}
                { cartItems.length !== 0 && (
                    <>
                        <hr />
                        <div className="row">
                            <div className="col-2">Items Price</div>
                            <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2">Tax Price</div>
                            <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2">Shipping Price</div>
                            <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <strong>Total Price</strong>
                            </div>
                            <div className="col-1 text-right">
                                <strong>${totalPrice.toFixed(2)}</strong>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <button onClick={() => alert('Implement Checkout')}>Checkout</button>
                        </div>
                    </>
                )}
        </aside>
    );
};

export default Basket;