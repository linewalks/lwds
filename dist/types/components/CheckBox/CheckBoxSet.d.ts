import React from 'react';
import '@components/CheckBox/CheckBox.scss';
interface CheckList {
    id?: string;
    checked?: boolean;
    children: React.ReactElement;
    defaultChecked?: boolean;
}
interface CheckBoxSetProps {
    color?: 'primary' | 'black';
    defaultChecked?: boolean;
    disabled?: boolean;
    id?: string;
    checkList: Array<CheckList>;
    style?: object;
    children: React.ReactElement;
    onChange: (checked: boolean, id: string) => void;
}
declare const CheckBoxSet: ({ color, disabled, id, checkList, style, children, onChange, }: CheckBoxSetProps) => JSX.Element;
export default CheckBoxSet;
//# sourceMappingURL=CheckBoxSet.d.ts.map