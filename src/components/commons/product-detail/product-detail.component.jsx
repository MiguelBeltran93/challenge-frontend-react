import BreadcrumbComponent from "../breadcrumb/breadcrumb.component";
import {useSelector} from "react-redux";
import {useId} from "react";
import './product-detail.component.css'
import {formatToMoney} from "../../utils";

const ProductDetailComponent = ({productDetail}) => {
    const product = useSelector(state => state.product.value);
    const id = useId();


    return(
        <section className={'detail-product'}>
            <section className={'detail-product-breadcrumb'}>
                <BreadcrumbComponent breadcrumbData={product?.categories}/>
            </section>
            <section className={'detail-product-container'}>
                <picture id={`picture-detail-${id}`} className={'image-product-detail-container'}>
                    <img id={`img-detail-${id}`} className={'image-product-detail'} src={productDetail && productDetail?.picture}
                         alt={`image about ${productDetail && productDetail.title}`} title={` ${productDetail && productDetail.title}`}/>
                </picture>
                <section className={'detail-product-resume'}>
                    <section className={'detail-condition'}>
                        {productDetail?.condition === 'new' ? 'Nuevo':'Usado'} - {productDetail?.sold_quantity} vendidos
                    </section>
                    <section className={'detail-title'}>
                        <strong>
                            {productDetail?.title}
                        </strong>
                    </section>
                    <section className={'detail-price'}>
                        <strong>
                            {productDetail?.price.currency}
                            {formatToMoney(productDetail?.price.amount)}
                        </strong>
                    </section>
                    <section className={'detail-button-buy'}>
                        <button className={'button-buy'} onClick={()=>{alert('Comprar')}}> Comprar</button>
                    </section>
                </section>

                <section className={'detail-description'}>
                    <h1 className={'detail-description-title'}>
                        Descripcion del producto
                    </h1>
                    <span>
                    {productDetail?.description}
                    </span>
                </section>
            </section>
        </section>
    )
}

export default ProductDetailComponent;
