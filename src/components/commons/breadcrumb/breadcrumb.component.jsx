import {formatCategories} from "../../utils";
import './breadcrumb.component.css'
import PropTypes from "prop-types";

const BreadcrumbComponent = ({breadcrumbData}) => {

    return(
        <section className={'breadcrumb-container'}>
            {formatCategories(breadcrumbData)}
        </section>
    )
}

BreadcrumbComponent.propTypes = {
    breadcrumbData: PropTypes.array
};

export default BreadcrumbComponent;
