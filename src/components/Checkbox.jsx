export default function Checkbox({id, required = true, label})
{
    return(
        <>
            <input id={id} type="checkbox" 
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3
            focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 
            dark:focus:ring-blue-600 dark:ring-offset-gray-800 
            dark:focus:ring-offset-gray-800" required={required} />
            <label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
        </>
    );
}