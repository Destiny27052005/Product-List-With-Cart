

function Cart({ cart, setCart, setConfirm }) {
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div className="bg-white h-fit p-4 mt-5 rounded-t-2xl md:rounded-b-2xl md:py-6">
            <h1 className="text-2xl text-[#c73a0f] font-bold mb-6">Your Card({cart.reduce((total, item) => total + item.qty, 0)})</h1>

            {cart.length === 0 ?
                (<div>
                    <img className="place-self-center" src="images/illustration-empty-cart.svg" alt="empty cart" />
                    <p className="text-center font-medium text-[#87635a]">Your added items will appear here</p>
                </div>)
                :
                (<div>

                    {cart.map((item) => (
                        <div key={item.id} className="border-b-2 border-gray-200 w-full mb-3 pb-3 flex justify-between place-items-center">
                            <div>
                                <h3 className="font-bold mb-5">{item.name}</h3>
                                <div className="flex items-center">
                                    <span className="mr-2 text-[#c73a0f] font-bold">{item.qty}X</span>
                                    <span>@${item.price.toFixed(2)}</span>
                                    <span className="text-[#87635a] font-medium text-xl ml-2">${(item.price * item.qty).toFixed(2)}</span>
                                </div>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className='cursor-pointer w-6 p-1 h-6 border border-[#87635a] rounded-[50%]'
                            >
                                <img className="w-5 " src="images/icon-remove-item.svg" alt="Icon remve item" />
                            </button>
                        </div>
                    ))}
                    <h2 className="flex justify-between mt-5">Order Total <span className="font-bold text-2xl">${cart.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2)}</span></h2>
                    <div className="flex gap-2 w-full rounded-2xl place-content-center py-3 bg-[#fcf9f7] my-3">
                        <img src="images/icon-carbon-neutral.svg" alt="icon carbon neutral" />
                        <p>This is a <b>carbon-neutral</b> delivery</p>
                    </div>
                    <button className="bg-[#c73a0f] grid place-self-center text-white text-2xl px-4 py-2 rounded-full my-5 cursor-pointer transition hover:bg-[#9e2c09]" onClick={() => setConfirm(true)}>Confirm Order</button>
                </div>)
            }
        </div>
    )
}

export default Cart