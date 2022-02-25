import { SVGIconProps } from '@components/Icon/Icons/SVGIcon';
interface IconProps extends SVGIconProps {
    direction?: string | 'right' | 'down' | 'left' | 'up';
    rotate?: number;
}
declare const ArrowIcon: {
    (props: IconProps): JSX.Element;
    defaultProps: {
        viewBox: string;
        direction: string;
        rotate: number;
    };
};
export default ArrowIcon;
//# sourceMappingURL=ArrowIcon.d.ts.map