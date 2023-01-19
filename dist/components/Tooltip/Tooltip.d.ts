import React from 'react';
import './Tooltip.scss';
interface TooltipProps {
    placement: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'left-top' | 'left-bottom' | 'right' | 'right-top' | 'right-bottom';
    align: 'left' | 'right' | 'center';
    text: string | React.ReactElement;
    variant?: 'default' | 'white';
    isAdjust?: boolean;
    open?: boolean;
    hasCaret?: boolean;
    zIndex?: number;
    className?: string;
    parentContainer?: () => HTMLElement;
    style?: object;
    children: React.ReactElement;
}
declare const _default: React.MemoExoticComponent<(props: TooltipProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>>;
export default _default;
//# sourceMappingURL=Tooltip.d.ts.map