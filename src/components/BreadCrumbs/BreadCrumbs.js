import React from 'react';
import {Link} from "react-router-dom";
import * as PropTypes from "prop-types";
function Breadcrumbs(props) {
    return null
}

function Typography(props) {
    return null;
}

Typography.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node
};
const BreadCrumbs = () => {
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/google-books">
                    MUI
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    Core
                </Link>
                <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs>
        </div>
    );
};

export default BreadCrumbs;