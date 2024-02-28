import PropTypes from 'prop-types';
Button.propTypes={

}

export default function Button({
    type='submit',
    className = '',
    variant ='primary',
    disabled,
    children,
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
