import type { ReactElement } from "react";

export interface ButtonProps {
    variant: "primary" | "secondary",
    text: string,
    startIcon?: ReactElement,
    onClick?: () => void,
    fullWidth?: boolean
}

const variantStyles = {
    primary: "bg-purple-600 text-white",
    secondary: "bg-purple-300 text-purple-600"
}

const defaultStyles = "px-4 py-2 rounded-md font-light";


export const Button = (props: ButtonProps) => {
    return <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${defaultStyles} m-2 ${props.fullWidth ? " w-full flex justify-center" : ""} `} >
        <div className="flex items-center">
            {props.startIcon}  
            <div className="pl-1 pr-1">
                {props.text} 
            </div>
        </div>
        </button>
}
