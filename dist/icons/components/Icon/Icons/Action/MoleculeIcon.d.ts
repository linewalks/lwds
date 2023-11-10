import React from 'react';
import { SVGIconProps } from '@components/Icon/Icons/SVGIcon';
interface IconProps extends SVGIconProps {
    rotate?: number;
}
declare const MoleculeIcon: {
    (props: IconProps): React.JSX.Element;
    defaultProps: {
        viewBox: string;
        rotate: number;
    };
};
export default MoleculeIcon;
//# sourceMappingURL=MoleculeIcon.d.ts.map