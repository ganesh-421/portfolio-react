export default function Card({children, className})
{
    return (
        <div className={"w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-900 dark:border-gray-700" + " " + className}>
            {children} 
        </div>        
    );
}