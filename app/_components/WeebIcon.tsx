import { ComponentPropsWithoutRef } from "react";

export const WeebIcon = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
    return (
        <svg width={props.size}
            height={props.size} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 339.033 339.033" xmlSpace="preserve">
            <g>
                <circle style={{ fill: "currentColor" }} cx="169.517" cy="169.517" r="162.016"/>
                <path style={{ fill: "#071C2C" }} d="M169.517,0C76.045,0,0.001,76.045,0.001,169.517c0,93.471,76.044,169.516,169.516,169.516
                    s169.516-76.044,169.516-169.516S262.989,0,169.517,0z M143.367,17.224c-13.76,11.78-26.933,26.445-37.516,42.056
                    c-4.766,7.031-9.051,14.291-12.856,21.737H42.93C66.134,47.926,101.963,24.312,143.367,17.224z M33.629,96.017H86.09
                    c-8.754,21.293-13.708,43.833-14.594,66.79H15.156C16.19,138.717,22.757,116.037,33.629,96.017z M15.225,177.807H71.49
                    c0.863,23.317,5.768,45.651,14.643,66.79H34.511C23.36,224.625,16.507,201.944,15.225,177.807z M44.051,259.596h49.157
                    c3.749,7.149,7.968,14.15,12.671,20.988c12.478,18.143,25.89,31.638,37.218,41.179C102.469,314.734,67.229,291.787,44.051,259.596z
                    M162.017,317.587c-16.754-12.269-36.477-31.838-51.588-57.991h51.588V317.587z M162.017,244.596h-59.372
                    c-8.934-19.363-15.104-41.7-16.14-66.79h75.511L162.017,244.596L162.017,244.596z M162.017,162.807H86.505
                    c0.934-23.32,6.239-45.666,15.834-66.79h59.678L162.017,162.807L162.017,162.807z M162.017,81.017h-52.026
                    c2.556-4.502,5.31-8.944,8.276-13.32c15.442-22.78,32.369-37.697,43.75-46.15L162.017,81.017L162.017,81.017z M323.878,162.807
                    h-56.341c-0.886-22.957-5.84-45.497-14.594-66.79h52.461C316.276,116.037,322.844,138.717,323.878,162.807z M296.104,81.017H246.04
                    c-3.805-7.446-8.091-14.706-12.856-21.737c-10.583-15.612-23.76-30.273-37.521-42.057
                    C237.068,24.311,272.898,47.925,296.104,81.017z M177.017,21.546c11.381,8.453,28.308,23.37,43.75,46.15
                    c2.966,4.376,5.72,8.818,8.276,13.32h-52.026V21.546z M177.017,96.017h59.678c9.595,21.124,14.9,43.47,15.834,66.79h-75.512
                    L177.017,96.017L177.017,96.017z M177.017,177.807h75.511c-1.035,25.09-7.206,47.427-16.14,66.79h-59.372L177.017,177.807
                    L177.017,177.807z M177.017,259.596h51.588c-15.111,26.152-34.834,45.722-51.588,57.991V259.596z M195.939,321.763
                    c11.327-9.54,24.738-23.038,37.215-41.178c4.703-6.838,8.922-13.839,12.671-20.988h49.157
                    C271.805,291.786,236.566,314.733,195.939,321.763z M304.523,244.596H252.9c8.875-21.139,13.78-43.472,14.643-66.79h56.265
                    C322.526,201.944,315.674,224.625,304.523,244.596z"/>
            </g>
        </svg>
    );
};