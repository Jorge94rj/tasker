import React from "react";
import { Tag } from "./style";

const ErrorTag = ({children}) => {
    return (
        <Tag>
            <span className="form-error">
                {children}
            </span>
        </Tag>
    )
}

export default ErrorTag