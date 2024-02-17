
export const Appbar = ({setIsLoggedIn}) => {
    const handleClick = () => {
        localStorage.clear();
        setIsLoggedIn(() => false) ;
        console.log("logged outs");
    }
    
    return <div className="h-12 shadow flex items-center justify-between">
        <div className="flex flex-col justify-center h-full ml-4">
            PayTM App
        </div>
        <div className="flex  items-center gap-2">
            <div className="flex flex-col justify-center  mr-4">
                Hello
            </div>
            <div className="rounded-full  bg-slate-200 flex justify-center mr-2">
                <div className="flex flex-col justify-center px-3 py-1 text-xl">
                    U
                </div>

            </div>
            <div onClick={handleClick}  className="flex items-center hover:bg-slate-200 border-slate-950  rounded-full p-2 mr-4"> 
            <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clip-rule="evenodd" />
                </svg>

            </div>
        </div>
    </div>
}