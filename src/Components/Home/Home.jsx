import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import WishList from '../WishList/WishList'
import OrderSummary from '../OrderSummary/OrderSummary'
import { useState } from 'react'
import OrderPlaced from '../OrderPlaced/OrderPlaced'

const Home = () => {

    const [activePanel, setActivePanel] = useState(null)
    const [cart, setCart] = useState([])
    const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false);
    const [isOrderPlaced, setIsOrderPlaced] = useState(false); 
    const [wishList, setWishlist] = useState([]) 

    const subTotal = cart.reduce((acc, item) => {
        const priceValue = parseFloat(item.Price?.toString().replace('$', '') || 0);
        const quantity = item.quantity || 1;
        return acc + (priceValue * quantity);
    }, 0); 
    
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
    const totalWishlistItems = wishList.length;
    const shippingFee = totalItems * 2
    const orderTotal = subTotal + shippingFee 

    const handlePanel = (tabName) => { 
        setActivePanel(prev => (
            prev === tabName ? null : tabName
        ))
    }

    const toggleOrderSummary = () => {
        setIsOrderSummaryOpen(prev => !prev);
    }

    const handlePlaceOrder = () => {
        setIsOrderSummaryOpen(false); 
        setActivePanel(null); 
        setIsOrderPlaced(true); 
    }

    const removeItem = (product) => {
        setCart(cart.filter(item => item.id !== product.id))
    }

    const quantityIncrement = (product) => {
        setCart(cart.map(item =>
            item.id === product.id ?
                { ...item, quantity: item.quantity + 1 } : item
        ))
    }

    const quantityDecrement = (product) => {
        setCart(cart.map(item =>
            item.id === product.id && item.quantity > 1 ?
                { ...item, quantity: item.quantity - 1 } : item
        ))
    }

    const addToCart = (product) => {
        const alreadyAdded = cart.find(item => item.id === product.id)
        if (alreadyAdded) {
            alert('Item is already in the cart')
            return;
        }
        setCart([...cart, { ...product, quantity: 1, price: parseFloat(product.Price?.toString().replace('$', '') || 0) }])
    }


    const addToWishlist = (product) => {
        const alreadyInWishlist = wishList.find(item => item.id === product.id)
        if (alreadyInWishlist) {
            alert('Item is already in your wishlist')
            return;
        }
        setWishlist([...wishList, product])
    }

    const removeWishlistItem = (product) => {
        setWishlist(wishList.filter(item => item.id !== product.id));
    }


    return (
        <div>
            <Navbar
                handlePanel={handlePanel}
                totalItems={totalItems}
                totalWishlistItems={totalWishlistItems} 
            />
            <Banner />
            <Product
                addToCart={addToCart}
                addToWishlist={addToWishlist}
                wishList={wishList} 
            />

            <Cart
                activePanel={activePanel}
                handlePanel={handlePanel}
                cart={cart}
                removeItem={removeItem}
                quantityIncrement={quantityIncrement}
                quantityDecrement={quantityDecrement}
                subTotal={subTotal} 
                shippingFee={shippingFee}
                orderTotal={orderTotal}
                setIsOrderSummaryOpen={setIsOrderSummaryOpen}
            />
        
            <WishList
                activePanel={activePanel}
                handlePanel={handlePanel}
                wishlistItems={wishList}
                removeWishlistItem={removeWishlistItem}
                addToCart={addToCart}
                setWishlist={setWishlist}
            />
            
            
            {isOrderSummaryOpen && (
                <OrderSummary
                    cart={cart}
                    subTotal={subTotal}
                    shippingFee={shippingFee}
                    orderTotal={orderTotal}
                    onClose={toggleOrderSummary} 
                    onPlaceOrder={handlePlaceOrder}
                />
            )}

            {
                isOrderPlaced &&
                <OrderPlaced
                    onClose={() => setIsOrderPlaced(false)}
                />
            }
        </div>
    )
}

export default Home