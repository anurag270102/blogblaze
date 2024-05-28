const Errormessage = (message) => {
    return <>
        <div className="bg-red-100 w-[50%] items-center mx-auto my-3 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{message.message}</span>
        </div>
    </>
}
const Successmessage = (message) => {
    return <>
        <div className="bg-red-100 w-[50%] items-center mx-auto my-3 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{message.message}</span>
        </div>
    </>
}
export {Errormessage,Successmessage}