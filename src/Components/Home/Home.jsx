import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import WishList from '../WishList/WishList'
import OrderSummary from '../OrderSummary/OrderSummary'
import OrderPlaced from '../OrderPlaced/OrderPlaced'
import Footer from '../Footer/Footer'
import Testimonials from '../Testimonials/Testimonials'
import Lookbook from '../Lookbook/Lookbook'
import Journal from '../Journal/Journal'

const Home = () => {

    const [activePanel, setActivePanel] = useState(null)
    const [cart, setCart] = useState([])
    const [wishList, setWishlist] = useState([])
    const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false);
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);

    
    const subTotal = cart.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
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
        setCart([]); 
    }

    const removeItem = (product) => {
        setCart(prevCart => prevCart.filter(item => item.id !== product.id))
    }

    const quantityIncrement = (product) => {
        setCart(prevCart => prevCart.map(item =>
            item.id === product.id ?
                { ...item, quantity: item.quantity + 1 } : item
        ))
    }

    const quantityDecrement = (product) => {
        setCart(prevCart => prevCart.map(item =>
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
        
       
        const numericPrice = parseFloat(product.Price?.toString().replace('$', '') || 0);

        setCart(prev => [...prev, { 
            ...product, 
            quantity: 1, 
            price: numericPrice 
        }])
    }

    const addToWishlist = (product) => {
        const alreadyInWishlist = wishList.find(item => item.id === product.id)
        if (alreadyInWishlist) {
            alert('Item is already in your wishlist')
            return;
        }
        setWishlist(prev => [...prev, product])
    }

    const removeWishlistItem = (product) => {
        setWishlist(prev => prev.filter(item => item.id !== product.id));
    }

    return (
        <div>
            <Navbar
                handlePanel={handlePanel}
                totalItems={totalItems}
                totalWishlistItems={totalWishlistItems}
            />
            
            <Banner />
            <Lookbook />
            
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

            {isOrderPlaced && (
                <OrderPlaced
                    onClose={() => setIsOrderPlaced(false)}
                />
            )}
                 <Journal/>
            <Testimonials />
       
            <Footer />

        </div>
    )
}

export default Home