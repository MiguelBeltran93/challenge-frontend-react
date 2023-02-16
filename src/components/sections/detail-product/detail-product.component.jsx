import BoxSearchComponent from "../../commons/box-search/box-search.component";
import { useParams } from 'react-router';
import {cleanState, getProductDetailActionAsync} from "../../../store";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import ProductDetailComponent from "../../commons/product-detail/product-detail.component";

const DetailProductComponent = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const productDetail = useSelector(state => state.product.detail);
    const status = useSelector(state => state.product.status);
    console.log('detalle status', status)

    const getProductDetail = () =>{
        dispatch(getProductDetailActionAsync(id));
    }

    useEffect(()=>{
        getProductDetail()
        return ()=>{
            dispatch(cleanState());
        }
    },[])

    return (
        <section>
            <BoxSearchComponent/>
            {status === 'loading' && <span>Cargando...</span> }
            {productDetail && <ProductDetailComponent productDetail={productDetail?.item}/>}
        </section>
    )
}

export default DetailProductComponent;
