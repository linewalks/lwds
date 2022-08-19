import React from 'react';
import '@components/CheckBox/CheckBox.scss';
interface CheckBoxProps {
    color?: 'primary' | 'black';
    checked: boolean;
    className?: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    id: string;
    mixed?: boolean;
    size?: 'sm' | 'md';
    style?: object;
    children: React.ReactElement;
    onChange: (checked: boolean, id: string) => void;
}
declare const CheckBox: ({ color, className, defaultChecked, disabled, id, mixed, checked: propsChecked, size, style, children, onChange, }: CheckBoxProps) => JSX.Element;
export default CheckBox;
//# sourceMappingURL=CheckBox.d.ts.map