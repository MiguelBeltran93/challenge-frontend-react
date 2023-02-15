const ProductResumeDataComponent = ({product}) => {

    return(
        <>
            <section className={'resume-product-item'}>
                <picture className={'image-product-container'}>
                    <img className={'image-product'} src={product && product?.picture}
                         alt={`image about ${product && product.title}`}/>
                </picture>
                <section className={'resume-product-section'}>
                    <div>
                        <strong>
                            {product && product.price.currency}
                            {product && product.price.amount}
                            {product && product.price.decimals}
                        </strong>
                        {product && product.free_shipping &&
                        <i className='fas fa-grin-beam icon' title={'envio gratis'}/>}
                    </div>

                    <div className={'product-resume-text'}>
                        <span> {product && product.title}</span>
                    </div>

                </section>
            </section>
        </>
    )
}

export default ProductResumeDataComponent;
