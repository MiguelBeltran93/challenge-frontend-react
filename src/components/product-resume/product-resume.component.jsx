import {useDispatch, useSelector} from "react-redux";
import './product-resume.component.css';
import ProductResumeDataComponent from "./product-resume-data/product-resume-data.component";
import {useEffect, useId} from "react";
import BreadcrumbComponent from "../commons/breadcrumb/breadcrumb.component";
import {useNavigate} from "react-router-dom";
import {cleanState} from "../../store";

const ProductResumeComponent = () => {
    const product = useSelector(state => state.product.value);
    const status = useSelector(state => state.product.status);
    const id = useId();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log('resume status', status)

    const detailRedirection = (itemDetail) => {
        navigate(`/items/${itemDetail}`);
    }

    useEffect(()=>{
        return ()=>{
            dispatch(cleanState())
        }
    },[])

    return (
        <section className={'resume-product'}>
            {status === 'loading' && <span>Cargando...</span> }
            <section className={'resume-product-breadcrumb'}>
                <BreadcrumbComponent breadcrumbData={product?.categories}/>
            </section>
            {product && <section className={'resume-product-container'}>
                {product.items.map(element=>{
                    return(<ProductResumeDataComponent product={element} id={id} action={detailRedirection}/>)
                })}
            </section>}
        </section>)

}

export default ProductResumeComponent;
