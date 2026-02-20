function Card({ product, cart, setCart }) {
     const quantity = cart.find((item) => item.id === product.id)?.qty || 0;
    const isSelected = quantity > 0;

    const updateCart = (amount) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);

            if (existing) {
                if (existing.qty + amount <= 0) {
                    return prev.filter((item) => item.id !== product.id);
                }
                return prev.map((item) =>
                    item.id === product.id ? { ...item, qty: item.qty + amount } : item
                );
            }

            if (amount > 0) {
                return [...prev, { ...product, qty: 1 }];
            }
            return prev;
        });
    };

    const borderClass = isSelected ? "border-[#c73a0f] border-3" : "border-transparent border-2";

    return (
        <div className="my-5">
            <div className="relative mb-8">
                <img className={`block rounded-2xl md:hidden ${borderClass}`} src={product.image.mobile} alt={product.name} />
                <img className={`hidden md:block lg:hidden ${borderClass}`} src={product.image.tablet} alt={product.name} />
                <img className={`hidden lg:block ${borderClass}`} src={product.image.desktop} alt={product.name} />
                <div className={`absolute place-self-center -bottom-6 ${isSelected ? "bg-[#c73a0f]" : "bg-white"} py-2 px-3 rounded-3xl border-[#ad8985] border-[1.5px] cursor-pointer`} onClick={() => !isSelected && updateCart(1)}>
                    {isSelected ? (
                        <div className="flex items-center justify-between w-full gap-10 text-white">
                            <button
                                className="group border border-white rounded-full p-1 hover:bg-white transition-colors"
                                onClick={(e) => { e.stopPropagation(); updateCart(-1); }}
                            >
                                <img src="/images/icon-decrement-quantity.svg" alt="Decrement" className="w-3 h-3 group-hover:invert" />
                            </button>

                            <span className="font-semibold">{quantity}</span>

                            <button
                                className="group border border-white rounded-full p-1 hover:bg-white transition-colors"
                                onClick={(e) => { e.stopPropagation(); updateCart(1); }}
                            >
                                <img src="/images/icon-increment-quantity.svg" alt="Increment" className="w-3 h-3 group-hover:invert" />
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <img src="/images/icon-add-to-cart.svg" alt="" />
                            <p className="font-semibold text-sm">Add to Cart</p>
                        </div>
                    )}
                </div>
            </div>
            <h2 className='text-[#87635a] my-2'>{product.category}</h2>
            <h3 className='text-xl font-semibold mb-4'>{product.name}</h3>
            <p className="text-[#c73a0f] font-medium">${product.price.toFixed(2)}</p>
        </div>
    )
}

export default Card