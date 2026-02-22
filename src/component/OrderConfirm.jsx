

function OrderConfirm({ cart, startOrder }) {
    return (
        <div className="p-4 translate-y-[20%] min-h-[80vh] rounded-2xl md:absolute  md:top-[28%] md:translate-x-[-70%] md:left-[50%] md:translate-[-50%] bg-white">
            <img src="images/icon-order-confirmed.svg" alt="" />
            <h1 className="font-bold text-2xl mb-2">Order Confirmed</h1>
            <p className="mb-2">We hope you enjoy your food!</p>
            <div className="bg-[#fcf9f7] p-1">
                {cart.map((item) => (
                    <div key={item.id} className="border-b-2 border-gray-200 w-full mb-3 pb-3 flex place-items-center gap-2">
                        <img className="w-15 h-15" src={item.image.thumbnail} alt={item.name} />
                        <div className="w-full gap-5 flex justify-between place-items-center">
                            <div>
                                <h3 className="font-bold">{item.name}</h3>
                                <div>
                                    <span className="mr-2 text-[#c73a0f] font-bold">{item.qty}X</span>
                                    <span>@${item.price.toFixed(2)}</span>
                                </div>
                            </div>
                            <span className="text-[#87635a] font-medium text-xl ml-2">${(item.price * item.qty).toFixed(2)}</span>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="flex justify-between mt-5">Order Total <span className="font-bold text-2xl">${cart.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2)}</span></h2>

            <button className="bg-[#c73a0f] grid place-self-center text-white text-2xl px-4 py-2 rounded-full my-5 cursor-pointer transition hover:bg-[#9e2c09]" onClick={startOrder}>Start New Order</button>
        </div>
    );
}

export default OrderConfirm;