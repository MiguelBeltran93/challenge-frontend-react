const ProductResumeDataComponent = ({product, id, action}) => {

    return(
        <>
            <section id={`container-${id}`} className={'resume-product-item'}>
                <picture id={`picture-${id}`} className={'image-product-container'} onClick={()=>{action(product?.id)}}>
                    <img id={`img-${id}`} className={'image-product'} src={product && product?.picture}
                         alt={`image about ${product && product.title}`} title={` ${product && product.title}`}/>
                </picture>
                <section id={`resume-${id}`} className={'resume-product-section'}>
                    <div>
                        <strong>
                            {product && product.price.currency}
                            {product && product.price.amount}
                            {product && product.price.decimals}
                        </strong>
                        {product && product.free_shipping &&
                        <i className='fas fa-grin-beam icon' title={'envio gratis'}/>}
                    </div>

                    <div id={`resume-text-${id}`} className={'product-resume-text'} onClick={()=>{action(product?.id)}}>
                        <span> {product && product.title}</span>
                    </div>

                </section>
            </section>
        </>
    )
}

export default ProductResumeDataComponent;
