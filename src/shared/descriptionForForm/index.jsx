import React from "react";
import PropTypes from 'prop-types';
import { Typography, Link } from "@material-ui/core";
import './styles.scss';

const DescpriptionForForm = ({ headingText, questionText, actionTextLink, goToPage }) => {
    return (
        <div className="description">
            <h2 className="description__title" data-testid="descriptionTitle">{headingText}</h2>
            <div>
                <Typography>
                    <span>{questionText}</span>
                    <Link 
                        href="#" 
                        onClick={goToPage}
                        data-testid="linkToregisterForm"
                    >
                        {actionTextLink}
                    </Link>
                </Typography>
            </div>
        </div>
    );
}

DescpriptionForForm.defaultProps = {
    headingText: '', 
    questionText: '', 
    actionTextLink: '', 
    goToPage: () => { }
}

DescpriptionForForm.propTypes = {
    headingText: PropTypes.string, 
    questionText: PropTypes.string, 
    actionTextLink: PropTypes.string, 
    goToPage: PropTypes.func
}

export default DescpriptionForForm;