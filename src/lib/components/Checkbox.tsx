import React, { useMemo } from 'react'
import { Typography } from '..'

type CheckboxProps = {
  checked?: boolean
  disabled?: boolean
  label?: string
  onChange?: () => void
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'onChange'>

/**
 * Checkbox component that renders a custom-styled checkbox input alongside a label.
 * It manages different states such as normal, checked, and disabled.
 *
 * This component visually reflects the state of the checkbox and allows the user to interact
 * with it to toggle the checked state unless it is disabled. A label can be provided which
 * is displayed next to the checkbox.
 *
 * @component
 * @example
 * return (
 *   <Checkbox
 *     checked={isChecked}
 *     label="Subscribe to newsletter"
 *     onChange={() => { setIsChecked(!isChecked) }}
 *   />
 * )
 *
 * @param {Object} props - Props for the Checkbox component.
 * @param {boolean} [props.checked=false] - Indicates if the checkbox is initially checked.
 * @param {boolean} [props.disabled=false] - Indicates if the checkbox is disabled and not interactive.
 * @param {string} [props.label] - Text to be displayed next to the checkbox as its label.
 * @param {() => void} [props.onChange] - Callback function that is called when the checkbox is toggled.
 * @param {Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'onChange'>} [props.otherProps] - Additional input HTML attributes, excluding 'type', 'checked', and 'onChange'.
 */
const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  disabled = false,
  label,
  onChange,
  ...otherProps
}) => {
  const checkboxStyles = {
    base: 'w-6 h-6 flex items-center justify-center rounded',
    normal: 'bg-white border-2 border-blue-500',
    checked: 'bg-blue-500 text-white',
    disabled: 'bg-gray-400'
  }

  const getClassName = useMemo((): string => {
    let className = checkboxStyles.base
    if (checked) {
      className += ` ${checkboxStyles.checked}`
    } else {
      className += ` ${checkboxStyles.normal}`
    }
    if (disabled) {
      className += ` ${checkboxStyles.disabled}`
    }
    return className
  }, [checked, disabled])

  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...otherProps}
      />
      <div className={getClassName}>
        {checked && !disabled && <span>✓</span>}
      </div>
      <Typography className='pl-1'>{label}</Typography>
    </label>
  )
}

export default Checkbox
