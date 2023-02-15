import './home.component.css'
import BoxSearchComponent from "../../box-search/box-search.component";
import {useSelector} from "react-redux";
import ProductResumeComponent from "../../product-resume/product-resume.component";

const HomeComponent = () => {
    const product = useSelector(state => state.product.value);

    return(
        <div className={'home-container'}>
            <BoxSearchComponent/>

        </div>
    )

}

export default HomeComponent;
