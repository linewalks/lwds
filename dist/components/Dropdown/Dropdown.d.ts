import React from 'react';
import '@components/Dropdown/Dropdown.scss';
interface DropdownProps {
    isOpen: boolean;
    size?: 'md' | 'lg';
    icon?: boolean;
    direction?: 'left' | 'center' | 'right';
    scrollable?: boolean;
    className?: string;
    onClick?: Function;
    style?: object;
    children?: React.ReactElement;
}
interface DropdownItemProps {
    id: string | number;
    option: string;
    desc?: string;
    type?: 'danger';
    icon?: React.ReactElement | null;
    disabled?: boolean;
    className?: string;
    style?: object;
}
declare const Dropdown: {
    ({ isOpen, size, icon, direction, scrollable, className, onClick, style, children, }: DropdownProps): JSX.Element;
    Item({ id, option, desc, type, icon, disabled, className, style, }: DropdownItemProps): JSX.Element;
    Divider(): JSX.Element;
};
export default Dropdown;
//# sourceMappingURL=Dropdown.d.ts.map