import PropTypes from "prop-types";


const ProductResumeDataComponent = ({product, id, action}) => {

    return(
        <>
            <section id={`container-${id}`} className={'resume-product-item'} data-testid="product-resume-component-test">
                <picture data-testid="product-resume-picture-component-test" id={`picture-${id}`} className={'image-product-container'} onClick={()=>{action(product?.id)}}>
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

                    <div data-testid="product-resume-title-component-test" id={`resume-text-${id}`} className={'product-resume-text'} onClick={()=>{action(product?.id)}}>
                        <span> {product && product.title}</span>
                    </div>

                </section>
            </section>
        </>
    )
}

ProductResumeDataComponent.propTypes = {
    productDetail: PropTypes.object,
    action: PropTypes.func,
};

export default ProductResumeDataComponent;
