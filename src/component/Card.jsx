
function Card({ product }) {



    return (
        <div className="my-5">
            <div className="relative mb-8">
                <img className="block rounded-2xl md:hidden" src={product.image.mobile} alt={product.name} />
                <img className="hidden md:block lg:hidden" src={product.image.tablet} alt={product.name} />
                <img className="hidden lg:block" src={product.image.desktop} alt={product.name} />
                <div className="absolute place-self-center -bottom-6 bg-white py-2 px-3 rounded-3xl border-[#ad8985] border-2 cursor-pointer">
                    <p className="text-2xl font-medium">Add to Cart</p>
                </div>
            </div>
            <h2 className='text-[#87635a] my-2'>{product.category}</h2>
            <h3 className='text-xl font-semibold mb-4'>{product.name}</h3>
            <p className="text-[#c73a0f] font-medium">${product.price.toFixed(2)}</p>
        </div>
    )
}

export default Card