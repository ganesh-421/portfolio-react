import React, { useRef, useImperativeHandle } from "react";

// React.ForwardRef returns component
export default React.forwardRef(function Input(
  {
    type,
    name = "",
    id,
    value,
    placeholder,
    required = true,
    onChange,
    onBlur = null,
    isValid = true,
    errorMessage = "",
  },
  ref //second argument is ref, can be used only if forwardRef wraps the component function
) {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  //   return object that can be accessed in parent via ref.
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  // let className = isValid
  //   ? `bg-gray-50 border border-gray-300
  //   text-gray-900 text-sm rounded-lg focus:ring-blue-500
  //   focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600
  //   dark:border-gray-500 dark:placeholder-gray-400 dark:text-white`
  //   : `bg-gray-50 border border-gray-300
  //   text-red-900 text-sm rounded-lg focus:ring-blue-500
  //   focus:border-blue-500 block w-full p-2.5 dark:bg-red-400
  //   dark:border-red-500 dark:placeholder-red-50 dark:text-white`;
  let className = isValid
    ? `block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent 
    rounded-lg border border-green-600 appearance-none dark:text-white dark:border-green-500
    dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer`
    : `block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border
    appearance-none dark:text-white dark:border-red-500 border-red-600 dark:focus:border-red-500 focus:outline-none 
    focus:ring-0 focus:border-red-600 peer`;

  let labelClassName = isValid
    ? `absolute text-sm text-green-600 dark:text-green-500 duration-300 
    transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 
    peer-placeholder-shown:scale-100 
    peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75
     peer-focus:-translate-y-4 left-1`
    : `absolute text-sm text-red-600 dark:text-red-500 duration-300 transform 
     -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 
     peer-focus:px-2 peer-placeholder-shown:scale-100
      peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 
     peer-focus:scale-75 peer-focus:-translate-y-4 left-1`;

  let paragraphClassName = isValid
    ? `mt-2 text-xs text-green-600 dark:text-green-400`
    : `mt-2 text-xs text-red-600 dark:text-red-400`;
  return (
    // <input
    //   ref={inputRef}
    //   value={value}
    //   type={type}
    //   name={name}
    //   id={id}
    //   onBlur={onBlur}
    //   className={className}
    //   placeholder={placeholder}
    //   required={required}
    //   onChange={onChange}
    // />
    <div>
      <div className="relative">
        <input
          ref={inputRef}
          value={value}
          type={type}
          name={name}
          id={id}
          onBlur={onBlur}
          aria-describedby={"help-" + id}
          className={className}
          placeholder=""
          required={required}
          onChange={onChange}
        />
        <label htmlFor={id} className={labelClassName}>
          {placeholder}
        </label>
      </div>
      <p id={"help-" + id} className={paragraphClassName}>
        <span className="font-medium">{isValid ? "" : "Error!"}</span>{" "}
        {errorMessage}
      </p>
    </div>
  );
});
