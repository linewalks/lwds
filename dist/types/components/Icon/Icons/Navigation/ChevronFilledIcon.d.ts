import { SVGIconProps } from '@components/Icon/Icons/SVGIcon';
interface IconProps extends SVGIconProps {
    direction?: string | 'right' | 'down' | 'left' | 'up';
    rotate?: number;
}
declare const ChevronFilledIcon: {
    (props: IconProps): JSX.Element;
    defaultProps: {
        viewBox: string;
        direction: string;
        rotate: number;
    };
};
export default ChevronFilledIcon;
//# sourceMappingURL=ChevronFilledIcon.d.ts.map