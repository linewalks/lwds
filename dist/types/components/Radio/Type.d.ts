export interface IRadioProps {
    id?: string;
    className?: string;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    size?: 'sm' | 'md';
    style?: object;
    value: string;
    children: string | React.ReactNode;
    onChange?: (value: string) => void;
}
export interface IRadioGroupContextProps {
    name: string;
    value: string;
    onChange: (value: string, name?: string) => void;
}
export interface IRadioGroupProps {
    defaultValue?: string;
    name: string;
    value?: string;
    children: React.ReactNode;
    onChange?: (value: string, name?: string) => void;
}
//# sourceMappingURL=Type.d.ts.map