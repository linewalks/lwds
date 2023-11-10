import React from 'react';
import '@components/Tabs/Tabs.scss';
type TSizeType = 'md' | 'lg';
type TVariantType = 'primary' | 'danger' | 'default';
interface ITabsProps {
    selectedIndex?: number;
    size?: TSizeType;
    variant?: TVariantType;
    tickSpeed?: number;
    noIndicator?: boolean;
    className?: string;
    onChange?: Function;
    children?: React.ReactNode;
}
interface ITabListProps {
    className?: string;
    noBorder?: boolean;
    children?: React.ReactNode;
}
export default function Tabs({ selectedIndex, size, variant, tickSpeed, noIndicator, className, onChange, children, ...rest }: ITabsProps): React.JSX.Element;
export declare function TabList({ noBorder, className, children, ...rest }: ITabListProps): React.JSX.Element;
export declare function Tab({ className, disabled, children, ...rest }: {
    [x: string]: any;
    className: any;
    disabled: any;
    children: any;
}): React.JSX.Element;
export declare function TabPanels({ className, children, ...rest }: {
    [x: string]: any;
    className: any;
    children: any;
}): React.JSX.Element;
export declare function TabPanel({ className, children, ...rest }: {
    [x: string]: any;
    className: any;
    children: any;
}): React.JSX.Element;
export {};
//# sourceMappingURL=Tabs.d.ts.map