import {useSelector} from "react-redux";
import './product-resume.component.css';
import ProductResumeDataComponent from "./product-resume-data/product-resume-data.component";

const ProductResumeComponent = () => {
    const product = useSelector(state => state.product.value);

    return (
        <section className={'resume-product'}>
            <section className={'resume-product-breadcrumb'}>
                {product.categories}
            </section>
            {product && <section className={'resume-product-container'}>
                {product.items.map(element=>{
                    return(<ProductResumeDataComponent product={element}/>)
                })}
            </section>}
        </section>)

}

export default ProductResumeComponent;
