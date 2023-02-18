import ProductResumeComponent from '../../commons/product-resume/product-resume.component';
import BoxSearchComponent from '../../commons/box-search/box-search.component';

const ResumeProductComponent = () => {

    return (
        <section data-testid="resume-component-test">
            <BoxSearchComponent/>
            <ProductResumeComponent/>
        </section>
    )

}

export default ResumeProductComponent
