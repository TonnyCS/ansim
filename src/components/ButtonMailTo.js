import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
            <p className="text-indigo-600 text-xl">
                {label}
            </p>
        </Link>
    );
};

export default ButtonMailto;