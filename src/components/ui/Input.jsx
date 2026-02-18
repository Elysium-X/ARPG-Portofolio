import { useCapsLock } from '../../utils/useCapsLock'

function Input({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  required = false,
  className = '',
}) {
  const { isCapsLock, capsLockHandlers } = useCapsLock()
  const errorId = error ? `${name}-error` : undefined

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-gold font-fantasy font-semibold mb-2">
          {label} {required && <span className="text-red-500" aria-label="required">*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={errorId}
        {...capsLockHandlers}
        className={`w-full px-4 py-3 bg-gray-800 bg-opacity-50 border-2 rounded-lg text-white font-fantasy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all ${error ? 'border-red-500' : 'border-gray-700'
          }`}
      />
      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-500 font-fantasy" role="alert">
          {error}
        </p>
      )}
      {!error && isCapsLock && (
        <p className="mt-1 text-sm text-yellow-500 font-fantasy">
          Caps Lock is ON
        </p>
      )}
    </div>
  )
}

export default Input
