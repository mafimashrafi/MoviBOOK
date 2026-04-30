import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Reusable Navigation Button Component
 * @param {string} label - Button text to display
 * @param {string} to - Route path to navigate to
 * @param {string} variant - Button style variant: 'primary', 'secondary', 'danger', 'success'
 * @param {string} size - Button size: 'sm', 'md', 'lg'
 * @param {boolean} disabled - Whether button is disabled
 * @param {function} onClick - Additional onClick handler
 * @param {string} className - Additional custom CSS classes
 * @returns {JSX.Element} - Navigation button component
 */
export default function RouterBtn({
    label,
    to,
    variant = 'primary',
    size = 'md',
    disabled = false,
    onClick = null,
    className = ''
}) {
    const navigate = useNavigate();

    // Define button styles based on variant
    const variantStyles = {
        primary: 'bg-blue-500 hover:bg-blue-600 text-white',
        secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
        danger: 'bg-red-500 hover:bg-red-600 text-white',
        success: 'bg-green-500 hover:bg-green-600 text-white',
        outline: 'bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-50',
    };

    // Define button sizes
    const sizeStyles = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    // Combine styles
    const baseStyles = 'font-semibold rounded-lg transition duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2';
    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
    const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;

    const handleClick = () => {
        if (!disabled) {
            if (onClick) onClick(); // Call additional onClick if provided
            navigate(to); // Navigate to the specified route
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            className={buttonStyles}
        >
            {label}
        </button>
    );
}

// PropTypes for type checking
RouterBtn.propTypes = {
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success', 'outline']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
};
