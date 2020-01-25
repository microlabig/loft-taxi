import React from "react";

import { Typography, Link } from "@material-ui/core";
import './styles.scss';

const DescpriptionForForm = ({ headingText, questionText, actionTextLink, toAction }) => {
    return (
        <div className="description">
            <h2>{headingText}</h2>
            <div>
                <Typography>
                    <span>{questionText}</span>
                    <Link href="#" onClick={toAction}>{actionTextLink}</Link>
                </Typography>
            </div>
        </div>
    );
}

export default DescpriptionForForm;