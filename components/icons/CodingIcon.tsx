import { Component, ComponentPropsWithoutRef } from "react";

export const CodingIcon = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
    return (
        <svg
            fill="none"
            stroke="currentColor"
            width={props.size}
            height={props.size}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            {...props}
        >
            <path d="M16 18l6-6-6-6" />
            <path d="M8 6l-6 6 6 6" />
            <path d="M12 2l-2 20" />
        </svg>
    );
};
