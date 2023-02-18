import ProductResumeComponent from '../../commons/product-resume/product-resume.component';
import BoxSearchComponent from '../../commons/box-search/box-search.component';
import {Helmet} from "react-helmet";


const ResumeProductComponent = () => {

    return (
        <section data-testid="resume-component-test">
            <Helmet>
                <title>Lista de Productos</title>}
                <meta name='description' content={'listado de productos resultado de la busqueda '} />
            </Helmet>
            <BoxSearchComponent/>
            <ProductResumeComponent/>
        </section>
    )

}

export default ResumeProductComponent
