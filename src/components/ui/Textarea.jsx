function Textarea({ 
  label, 
  name, 
  value, 
  onChange, 
  placeholder, 
  error,
  required = false,
  rows = 4,
  className = '',
}) {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-gold font-fantasy font-semibold mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={`w-full px-4 py-3 bg-gray-800 bg-opacity-50 border-2 rounded-lg text-white font-fantasy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none ${
          error ? 'border-red-500' : 'border-gray-700'
        }`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500 font-fantasy">{error}</p>
      )}
    </div>
  )
}

export default Textarea
