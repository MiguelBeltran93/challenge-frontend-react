import {formatCategories} from "../../utils";
import './breadcrumb.component.css'
const BreadcrumbComponent = ({breadcrumbData}) => {

    return(
        <section className={'breadcrumb-container'}>
            {formatCategories(breadcrumbData)}
        </section>
    )
}

export default BreadcrumbComponent;
