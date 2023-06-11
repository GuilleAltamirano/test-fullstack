"use client"
import React from 'react';

export const ProductsComponent = (props: { prods: object[] }) => {
    const addCart = (id: string) => {
        console.log(id);
    }
    console.log(props.prods);
    
    return (
        <ul>
            <li>
                <h3>Photo</h3>
                <h3>Title</h3>
                <h3>Description</h3>
                <h3>Stock</h3>
                <h3>Quantity</h3>
                <h3>Price</h3>
            </li>
        {props.prods.map((prod: any, index: number) => (
            <li key={index}>
                <img src={prod.image} alt="" />
                <h4>{prod.title}</h4>
                <p>{prod.description}</p>
                <p>{prod.stock}</p>
                <p>{prod.quantity}</p>
                <p>${prod.price}</p>
                <button onClick={() => addCart(prod.id)}>Add</button>
            </li>
        ))}
        </ul>
    );
};