import React from 'react';
import { SVGIconProps } from '@components/Icon/Icons/SVGIcon';
interface IconProps extends SVGIconProps {
    rotate?: number;
}
declare const InfoIcon: {
    (props: IconProps): React.JSX.Element;
    defaultProps: {
        viewBox: string;
        rotate: number;
    };
};
export default InfoIcon;
//# sourceMappingURL=InfoIcon.d.ts.map