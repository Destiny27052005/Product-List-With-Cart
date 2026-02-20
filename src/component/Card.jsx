import { useState } from "react"

function Card({ product }) {
    const [isSelected, setIsSelected] = useState(false);
    const [num, setNum] = useState(0);

    const handleChange = () => {
        setIsSelected(true)
    }

    const borderClass = isSelected ? "border-[#c73a0f] border-3" : "border-transparent border-2";

    return (
        <div className="my-5">
            <div className="relative mb-8">
                <img className={`block rounded-2xl md:hidden ${borderClass}`} src={product.image.mobile} alt={product.name} />
                <img className={`hidden md:block lg:hidden ${borderClass}`} src={product.image.tablet} alt={product.name} />
                <img className={`hidden lg:block ${borderClass}`} src={product.image.desktop} alt={product.name} />
                <div className={`absolute place-self-center -bottom-6 ${isSelected ? "bg-[#c73a0f]" : "bg-white"} py-2 px-3 rounded-3xl border-[#ad8985] border-[1.5px] cursor-pointer`} onClick={handleChange}>
                    {
                        isSelected ?
                            <div className="w-full h-full text-2xl font-medium text-white flex items-center gap-5">
                                <img src="/images/icon-decrement-quantity.svg" alt="Decrement" onClick={() => setNum(prev => Math.max(0, prev - 1))} />
                                {num}
                                <img src="/images/icon-increment-quantity.svg" alt="Increment" onClick={() => setNum(prev => prev + 1)} />
                            </div> :
                            <p className="text-2xl font-medium">Add to Cart</p>
                    }

                </div>
            </div>
            <h2 className='text-[#87635a] my-2'>{product.category}</h2>
            <h3 className='text-xl font-semibold mb-4'>{product.name}</h3>
            <p className="text-[#c73a0f] font-medium">${product.price.toFixed(2)}</p>
        </div>
    )
}

export default Card