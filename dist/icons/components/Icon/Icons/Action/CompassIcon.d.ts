import { SVGIconProps } from '@components/Icon/Icons/SVGIcon';
interface IconProps extends SVGIconProps {
    rotate?: number;
}
declare const CompassIcon: {
    (props: IconProps): JSX.Element;
    defaultProps: {
        viewBox: string;
        rotate: number;
    };
};
export default CompassIcon;
//# sourceMappingURL=CompassIcon.d.ts.map