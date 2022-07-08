import React from "react";
import { icons } from "./consts";

const Icon = ({name, width, height}) => {
    const currentIcon = icons[name]
    const { src, alt } = currentIcon

    return (
        <img 
            src={src}
            alt={alt}
            width={width ? width : "24px"}
            height={height ? height : "24px"}
        />
    )
}

export default Icon