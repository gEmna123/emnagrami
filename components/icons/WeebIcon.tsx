import { ComponentPropsWithoutRef } from "react";

export const WebIcon = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
    return (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 256 250"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            {...props}
        >
            <g
                id="layer1"
                transform="translate(-231.54 -388.91)"
            >
                <path
                    style={{
                        fontSize: "medium",
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: "normal",
                        fontStretch: "normal",
                        textIndent: 0,
                        textAlign: "start",
                        textDecoration: "none",
                        lineHeight: "normal",
                        letterSpacing: "normal",
                        wordSpacing: "normal",
                        textTransform: "none",
                        direction: "ltr",
                        textAnchor: "start",
                        baselineShift: "baseline",
                        color: "#000000",
                        fill: "currentColor",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: 14,
                        marker: "none",
                        visibility: "visible",
                        display: "inline",
                        overflow: "visible",
                        fontFamily: "Sans",
                        // @ts-ignore
                        inkscapeFontSpecification: "Sans",
                    }}
                    d="m 375.03883,397.11536 c -62.10215,0 -114.98713,39.99067 -132.58532,95.10479 l 19.64838,0 c 2.04121,-5.44734 4.48183,-10.69634 7.30623,-15.72696 l 37.81076,0 c -1.64902,5.14437 -3.00473,10.40635 -4.12781,15.72696 l 19.15305,0 c 1.33811,-5.36185 2.93309,-10.62727 4.82954,-15.72696 l 36.48986,0 0,15.72696 18.4926,0 0,-15.72696 39.4206,0 c 2.12114,5.10417 3.90354,10.36057 5.40744,15.72696 l 19.15304,0 c -1.2867,-5.32622 -2.78458,-10.57799 -4.62315,-15.72696 l 39.2555,0 c 2.82493,5.03156 5.26479,10.27854 7.30623,15.72696 l 19.6071,0 C 489.98464,437.1061 437.14093,397.11536 375.03883,397.11536 z m 27.90401,21.75357 c 25.88412,5.95181 48.49057,19.90963 64.84793,39.13166 l -34.30211,0 c -7.66084,-14.82119 -17.81131,-28.19775 -30.54582,-39.13166 z m -61.21545,1.36218 c -11.46375,10.64102 -20.5058,23.52526 -27.24356,37.76948 l -32.19694,0 c 15.20927,-17.87286 35.81635,-31.19251 59.4405,-37.76948 z m 40.32873,5.94405 c 12.19218,8.34586 22.03011,19.35188 29.84408,31.82543 l -29.84408,0 0,-31.82543 z m -18.4926,0.12383 0,31.7016 -27.86274,0 c 7.15826,-12.50217 16.29659,-23.4805 27.86274,-31.7016 z m -115.57875,83.79459 c -1.84012,4e-5 -3.37731,0.41533 -4.62315,1.27962 -1.24584,0.86437 -1.85751,1.94126 -1.85751,3.17842 0,0.9258 0.26658,2.20869 0.86684,3.88014 l 9.82419,28.23423 c 0.29927,0.84427 0.64374,1.79601 1.03196,2.80692 0.38819,1.01092 0.93066,1.90998 1.56856,2.68307 0.63787,0.7731 1.50601,1.36674 2.60053,1.81624 1.09447,0.4495 2.46894,0.66045 4.12781,0.66045 2.05729,0 3.67307,-0.37305 4.91209,-1.11451 1.23898,-0.74146 2.12337,-1.53883 2.60053,-2.43541 0.4771,-0.89656 1.07058,-2.2774 1.81623,-4.16909 l 8.79224,-24.76687 8.75097,24.89071 c 0.72847,1.84424 1.30889,3.20517 1.77496,4.08653 0.46596,0.88137 1.32018,1.70429 2.55924,2.43541 1.23895,0.73112 2.88746,1.07323 4.95337,1.07323 2.17183,0 3.87406,-0.35661 5.07721,-1.11451 1.20303,-0.75789 2.04505,-1.61097 2.51797,-2.55924 0.47279,-0.94827 1.02709,-2.39395 1.6924,-4.29293 l 9.82419,-28.23423 c 0.60874,-1.77242 0.90804,-3.05531 0.90812,-3.88014 -8e-5,-1.25906 -0.63763,-2.325 -1.89879,-3.17842 -1.26131,-0.85334 -2.77432,-1.27958 -4.58187,-1.27962 -1.81283,4e-5 -3.21148,0.32103 -4.16909,0.99067 -0.95775,0.66974 -1.61545,1.39766 -1.98135,2.18774 -0.36604,0.79017 -0.74347,1.83438 -1.11451,3.09586 l -6.93473,24.02387 -7.76028,-22.49658 c -0.72516,-1.8892 -1.31412,-3.24641 -1.77496,-4.12781 -0.46093,-0.88132 -1.35131,-1.73631 -2.60052,-2.51796 -1.24931,-0.78157 -2.99181,-1.15575 -5.24233,-1.15579 -2.21297,4e-5 -3.94178,0.36153 -5.24232,1.11451 -1.3006,0.75306 -2.22953,1.63587 -2.76563,2.60052 -0.53617,0.96473 -1.12171,2.30682 -1.77496,4.08653 l -7.71901,22.49658 -6.976,-24.18898 c -0.54556,-1.83447 -1.25355,-3.29388 -2.10519,-4.41676 -0.85166,-1.1228 -2.53593,-1.69236 -5.07721,-1.6924 z m 95.06352,0 c -1.84013,4e-5 -3.3773,0.41533 -4.62315,1.27962 -1.24585,0.86437 -1.85752,1.94126 -1.85752,3.17842 0,0.9258 0.30785,2.20869 0.90812,3.88014 l 9.8242,28.23423 c 0.29926,0.84427 0.64374,1.79601 1.03195,2.80692 0.38819,1.01092 0.88939,1.90998 1.52729,2.68307 0.63788,0.7731 1.50601,1.36674 2.60052,1.81624 1.09449,0.4495 2.46895,0.66045 4.12781,0.66045 2.05729,0 3.71435,-0.37305 4.95338,-1.11451 1.23898,-0.74146 2.08208,-1.53883 2.55924,-2.43541 0.47711,-0.89656 1.07058,-2.2774 1.81624,-4.16909 l 8.79224,-24.76687 8.75096,24.89071 c 0.72848,1.84424 1.30889,3.20517 1.77496,4.08653 0.46596,0.88137 1.32019,1.70429 2.55924,2.43541 1.23896,0.73112 2.88746,1.07323 4.95338,1.07323 2.17184,0 3.87405,-0.35661 5.07721,-1.11451 1.20302,-0.75789 2.04504,-1.61097 2.51796,-2.55924 0.47279,-0.94827 1.0271,-2.39395 1.69241,-4.29293 l 9.82419,-28.23423 c 0.60874,-1.77242 0.90804,-3.05531 0.90812,-3.88014 -8e-5,-1.25906 -0.63764,-2.325 -1.8988,-3.17842 -1.26131,-0.85334 -2.77431,-1.27958 -4.58187,-1.27962 -1.81283,4e-5 -3.21147,0.32103 -4.16909,0.99067 -0.95774,0.66974 -1.61544,1.39766 -1.98135,2.18774 -0.36603,0.79017 -0.74347,1.83438 -1.11451,3.09586 l -6.93472,24.02387 -7.76029,-22.49658 c -0.72515,-1.8892 -1.31412,-3.24641 -1.77496,-4.12781 -0.46093,-0.88132 -1.31003,-1.73631 -2.55924,-2.51796 -1.24931,-0.78157 -2.99181,-1.15575 -5.24232,-1.15579 -2.21297,4e-5 -3.98307,0.36153 -5.2836,1.11451 -1.3006,0.75306 -2.22954,1.63587 -2.76564,2.60052 -0.53616,0.96473 -1.1217,2.30682 -1.77496,4.08653 l -7.719,22.49658 -6.97601,-24.18898 c -0.54556,-1.83447 -1.21227,-3.29388 -2.0639,-4.41676 -0.85167,-1.1228 -2.57721,-1.69236 -5.11849,-1.6924 z m 95.06352,0 c -1.84014,4e-5 -3.37731,0.41533 -4.62315,1.27962 -1.24585,0.86437 -1.85752,1.94126 -1.85752,3.17842 0,0.9258 0.30785,2.20869 0.90812,3.88014 l 9.82419,28.23423 c 0.29926,0.84427 0.64374,1.79601 1.03195,2.80692 0.38819,1.01092 0.88939,1.90998 1.5273,2.68307 0.63787,0.7731 1.50601,1.36674 2.60052,1.81624 1.09448,0.4495 2.46894,0.66045 4.12781,0.66045 2.05729,0 3.71434,-0.37305 4.95337,-1.11451 1.23898,-0.74146 2.08209,-1.53883 2.55925,-2.43541 0.47711,-0.89656 1.11185,-2.2774 1.85751,-4.16909 l 8.75096,-24.76687 8.75097,24.89071 c 0.72847,1.84424 1.30889,3.20517 1.77496,4.08653 0.46596,0.88137 1.32018,1.70429 2.55924,2.43541 1.23895,0.73112 2.88746,1.07323 4.95337,1.07323 2.17184,0 3.87406,-0.35661 5.07721,-1.11451 1.20303,-0.75789 2.04505,-1.61097 2.51797,-2.55924 0.47279,-0.94827 1.02709,-2.39395 1.6924,-4.29293 l 9.82419,-28.23423 c 0.60874,-1.77242 0.90804,-3.05531 0.90812,-3.88014 -8e-5,-1.25906 -0.59636,-2.325 -1.85751,-3.17842 -1.26132,-0.85334 -2.81559,-1.27958 -4.62315,-1.27962 -1.81283,4e-5 -3.21148,0.32103 -4.16909,0.99067 -0.95775,0.66974 -1.61545,1.39766 -1.98135,2.18774 -0.36604,0.79017 -0.74347,1.83438 -1.11451,3.09586 l -6.89345,24.02387 -7.80156,-22.49658 c -0.72515,-1.8892 -1.31413,-3.24641 -1.77496,-4.12781 -0.46093,-0.88132 -1.31003,-1.73631 -2.55925,-2.51796 -1.2493,-0.78157 -2.99181,-1.15575 -5.24232,-1.15579 -2.21297,4e-5 -3.98307,0.36153 -5.2836,1.11451 -1.30059,0.75306 -2.22953,1.63587 -2.76563,2.60052 -0.53617,0.96473 -1.12171,2.30682 -1.77496,4.08653 l -7.71901,22.49658 -6.93472,-24.18898 c -0.54556,-1.83447 -1.25355,-3.29388 -2.10519,-4.41676 -0.85166,-1.1228 -2.57721,-1.69236 -5.11848,-1.6924 z m -196.36003,59.97711 c 16.80022,56.35893 70.27253,97.5402 133.28705,97.5402 63.0154,0 116.48763,-41.18006 133.28706,-97.5402 l -19.52455,0 c -1.8618,5.31527 -4.08692,10.45425 -6.68706,15.39674 l -39.62699,0 c 1.68704,-5.03918 3.07962,-10.19033 4.25164,-15.39674 l -18.8641,0 c -1.31696,5.26458 -2.89483,10.4082 -4.82954,15.39674 l -40.98917,0 0,-15.39674 -18.4926,0 0,15.39674 -37.43926,0 c -1.69763,-4.97007 -3.15821,-10.11908 -4.37548,-15.39674 l -18.98794,0 c 1.06386,5.21244 2.36219,10.3578 3.83887,15.39674 l -38.63632,0 c -2.60015,-4.94249 -4.86654,-10.08147 -6.72834,-15.39674 l -19.48327,0 z m 38.34737,33.88934 33.14634,0 c 6.76508,15.6485 15.73453,29.62402 27.28483,40.24617 -24.31799,-7.03398 -45.27665,-21.30768 -60.43117,-40.24617 z m 53.74412,0 29.72025,0 0,34.54979 c -12.00974,-7.61313 -22.05465,-19.75001 -29.72025,-34.54979 z m 48.21285,0 31.78415,0 c -8.06954,13.48908 -18.56352,25.15887 -31.78415,33.68295 l 0,-33.68295 z m 53.04238,0 34.88002,0 c -16.69091,20.8585 -40.45863,36.04549 -67.94379,42.14496 14.10356,-11.40404 25.06185,-25.92381 33.06377,-42.14496 z"
                    id="path3592-4-4-3-8"
                    inkscapeConnectorCurvature="0"
                />
            </g>
        </svg>
    );
};