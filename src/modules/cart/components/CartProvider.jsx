import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
    items: [],
};


function cartReducer(state, action) {
    switch (action.type) {
        case "addToCart": {
            const existing = state.items.find(item => item.id === action.payload.id);
            if (existing) {

                // Si el producto ya existe, actualiza la cantidad
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + action.payload.quantity }
                            : item
                    ),
                };
            }
            
            // Si es nuevo, lo agrega
            return {
                ...state,
                items: [...state.items, { ...action.payload }],
            };
        }
        case "removeToCart":
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
        case "updateQuantity":
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
            };
        case "clearCart":
            return initialState;
        default:
            return state;
    }
}

const CartContext = createContext();

// Proveedor del contexto
export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Funciones para manipular el carrito
    const addToCart = (product, quantity = 1) => {
        dispatch({
            type: "addToCart",
            payload: { ...product, quantity },
        });
    };

    const removeFromCart = (id) => {
        dispatch({
            type: "removeToCart",
            payload: id,
        });
    };

    const updateQuantity = (id, quantity) => {
        dispatch({
            type: "updateQuantity",
            payload: { id, quantity },
        });
    };

    const clearCart = () => {
        dispatch({ type: "clearCart" });
    };

    const getTotal = () => {
        return state.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    return (
        <CartContext.Provider
            value={{
                cart: state.items,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                getTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}