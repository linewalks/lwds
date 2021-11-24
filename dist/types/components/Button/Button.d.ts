import React from 'react';
import '@components/Button/Button.scss';
interface ButtonProps {
    disabled: boolean;
    variant: string | 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger_primary' | 'danger_tertiary';
    ghostType: string | 'default' | 'important' | 'danger';
    size: string | 'sm' | 'md' | 'lg' | 'xlg';
    bold: boolean;
    icon: boolean;
    responsiveHeight: boolean;
    id?: string;
    style?: object;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement>;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
//# sourceMappingURL=Button.d.ts.map