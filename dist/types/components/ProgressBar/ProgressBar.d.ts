import React from 'react';
import './ProgressBar.scss';
declare type InnerNumberType = number | string;
declare type PlacementType = 'top' | 'right' | 'bottom' | 'left';
declare type SizeType = 'sm' | 'md';
export declare const validateNumber: (num: any) => boolean;
export declare const getMax: (val: InnerNumberType, max: InnerNumberType) => number;
interface ProgressBarProps {
    placement?: PlacementType;
    value: InnerNumberType;
    size?: SizeType;
    width?: InnerNumberType;
    thickness?: InnerNumberType;
    strokeColor?: string;
    max?: InnerNumberType;
    isInfinite?: boolean;
    children?: React.ReactNode;
}
declare const ProgressBar: {
    ({ placement, value, size, width, thickness, strokeColor, max, isInfinite, children, ...rest }: ProgressBarProps): JSX.Element;
    defaultProps: {
        placement: string;
        value: number;
        size: string;
        width: number;
        thickness: number;
        isInfinite: boolean;
    };
};
export default ProgressBar;
//# sourceMappingURL=ProgressBar.d.ts.map