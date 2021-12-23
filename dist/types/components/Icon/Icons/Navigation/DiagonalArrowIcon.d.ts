import { SVGIconProps } from '@components/Icon/Icons/SVGIcon';
interface IconProps extends SVGIconProps {
    direction?: string | 'topRight' | 'bottomRight' | 'bottomLeft' | 'topLeft';
    rotate?: number;
}
declare const DiagonalArrowIcon: {
    (props: IconProps): JSX.Element;
    defaultProps: {
        viewBox: string;
        direction: string;
        rotate: number;
    };
};
export default DiagonalArrowIcon;
//# sourceMappingURL=DiagonalArrowIcon.d.ts.map