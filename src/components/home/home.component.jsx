import './home.component.css'
import BoxSearchComponent from "../box-search/box-search.component";
import {useSelector} from "react-redux";

const HomeComponent = () => {
    const count = useSelector(state => state.product.value);

    return(
        <div className={'home-container'}>
            <BoxSearchComponent/>
            <div>
               aqui va el detalle
                {count && <div>{count.author.name}</div>}
            </div>
        </div>
    )

}

export default HomeComponent;
