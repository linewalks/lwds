import React from 'react';
import '@components/Button/Button.scss';
interface ButtonProps {
    disabled?: boolean;
    variant?: string | 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger_primary' | 'danger_tertiary';
    ghostType?: string | 'default' | 'important' | 'danger';
    size?: string | 'sm' | 'md' | 'lg' | 'xl';
    bold?: boolean;
    icon?: boolean;
    loading?: boolean;
    responsiveHeight?: boolean;
    id?: string;
    className?: string;
    style?: object;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement>;
}
declare function renderButton<T extends ButtonProps, U extends React.RefObject<HTMLButtonElement>>(props: T, ref: U): React.JSX.Element;
declare const _default: typeof renderButton;
export default _default;
//# sourceMappingURL=Button.d.ts.map