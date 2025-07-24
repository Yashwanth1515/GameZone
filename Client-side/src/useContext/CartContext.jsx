import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartitems, setCartitems] = useState(() => {
        const savedcart = localStorage.getItem('cartitems');
        return savedcart ? JSON.parse(savedcart) : [];
    });
    useEffect(() => {
        localStorage.setItem('cartitems', JSON.stringify(cartitems));
    }, [cartitems])
    const addtoCart = (product) => {
        setCartitems((previtems) => {
            const existingitem = previtems.find((item) => item.id === product.id);
            if (existingitem) {
                return previtems.map((item) =>
                    item.id === product.id ?
                        { ...item, quantity: item.quantity + 1 }
                        : item
                );

            }
            return [...previtems, { ...product, quantity: 1 }];
        });

    };
    const handleRemove = (idtoremove) => {
        const updatecart = cartitems.filter((item => item.id != idtoremove));
        setCartitems(updatecart)
        localStorage.setItem('cartitems', JSON.stringify(updatecart))
    };
    const value = {
        cartitems,
        addtoCart,
        handleRemove
    }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

}