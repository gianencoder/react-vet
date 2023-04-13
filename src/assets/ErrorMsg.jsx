const ErrorMsg = ({ children }) => {
    return (
        <div className='bg-red-800 text-white text-center rounded-xl p-1  mb-3 transition-transform text-sm font-bold uppercase '>
            {children}
        </div>
    )
}
export default ErrorMsg