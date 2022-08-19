import { SVGIconProps } from '@components/Icon/Icons/SVGIcon';
interface IconProps extends SVGIconProps {
    direction?: string | 'right' | 'down' | 'left' | 'up';
    rotate?: number;
}
declare const DoubleArrowIcon: {
    (props: IconProps): JSX.Element;
    defaultProps: {
        viewBox: string;
        direction: string;
        rotate: number;
    };
};
export default DoubleArrowIcon;
//# sourceMappingURL=DoubleArrowIcon.d.ts.map