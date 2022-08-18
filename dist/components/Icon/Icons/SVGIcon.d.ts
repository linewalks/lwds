import React from 'react';
import '@components/Icon/Icons/Icon.scss';
export interface SVGIconProps {
    color?: string;
    width?: number;
    height?: number;
    viewBox?: string;
    size?: string | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    responsive?: boolean;
    children?: React.ReactNode;
}
declare const SVGIcon: {
    (props: SVGIconProps): JSX.Element;
    defaultProps: {
        color: string;
        width: string;
        height: string;
        viewBox: string;
        responsive: boolean;
    };
};
export default SVGIcon;
//# sourceMappingURL=SVGIcon.d.ts.map