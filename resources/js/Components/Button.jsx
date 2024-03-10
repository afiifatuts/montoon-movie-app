import PropTypes from 'prop-types';

Button.propTypes={
    type:PropTypes.oneOf(['button','submit','reset']),
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        'primary',
        'warning',
        'danger',
        'light-outline',
        'white-outline',
    ]),
    processing:PropTypes.bool,
    disabled:PropTypes.bool,
    children:PropTypes.node,
}


export default function Button({
    type='submit',
    className = '',
    variant ='primary',
    disabled,
    children,
    processing,
    ...props }) {
    return (
        <button
            {...props}
            className={
                `rounded-2xl py-[13px] text-center w-full btn-${variant} ${
                    disabled && 'opacity-30'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
