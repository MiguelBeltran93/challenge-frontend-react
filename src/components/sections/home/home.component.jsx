import './home.component.css'
import BoxSearchComponent from '../../commons/box-search/box-search.component';
import {Helmet} from "react-helmet";

const HomeComponent = () => {

    return(
        <div className={'home-container'}>
            <Helmet>
                <title>Busqueda</title>}
                <meta name='description' content={'pagina inicio'} />
            </Helmet>
            <BoxSearchComponent/>
        </div>
    );
}

export default HomeComponent;
