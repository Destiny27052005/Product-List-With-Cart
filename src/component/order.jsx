function Order({ total }) {
    return (
        <>
            <img src="" alt="" />
            <h1>Order Confirmed</h1>
            <p>We hope you enjoy your food!</p>
            <div className="contain">
                <img src="" alt="" />
                <h2></h2>
                <h3>$5.50</h3>
            </div>
            <div className="flex">
                <p>Order Total</p>
                <h1>{total}</h1>
            </div>
            <button>Start New Order</button>
        </>
    )
}

export default Order