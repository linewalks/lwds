import React from 'react';
import '@components/Dropdown/Dropdown.scss';
interface DropdownProps {
    triggerNode?: React.ReactElement;
    isOpen?: boolean;
    size?: 'md' | 'lg';
    icon?: boolean;
    placement?: 'left' | 'center' | 'right';
    scrollable?: boolean;
    className?: string;
    ref?: React.RefObject<HTMLElement>;
    onClick?: Function;
    onClose?: Function;
    style?: object;
    children?: React.ReactElement;
}
interface DropdownItemProps {
    label?: string | number | React.ReactElement;
    id?: string | number;
    desc?: string;
    type?: 'danger';
    icon?: React.ReactElement;
    disabled?: boolean;
    className?: string;
    ref?: React.RefObject<HTMLDivElement>;
    onClick?: Function;
    style?: object;
}
declare const Dropdown: {
    ({ triggerNode, isOpen: propsIsOpen, size, icon, placement, scrollable, className, ref, onClick, onClose, style, children, }: DropdownProps): JSX.Element;
    defaultProps: {
        size: string;
        icon: boolean;
        placement: string;
        scrollable: boolean;
    };
    Item({ id, label, desc, type, icon, disabled, className, ref, onClick, style, }: DropdownItemProps): JSX.Element;
    Divider(): JSX.Element;
};
export default Dropdown;
//# sourceMappingURL=Dropdown.d.ts.map