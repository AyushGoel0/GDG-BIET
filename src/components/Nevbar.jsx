import logo from "../assets/logo_dark.svg"

function Nevbar(){

    

    return<div className="bg-white w-11/12 h-full rounded-full shadow-lg backdrop-blur-md flex justify-between items-center p-5 border-2 border-gray-200">
        <Logo></Logo>
        <Menu></Menu>
    </div>
}

export default Nevbar;


function Logo(){
    return<div>
        <img src={logo} className="h-7"></img>
        <h1 className="ml-16 text-gray-500"><i>On Campus BIET, Lucknow.</i></h1>
    </div>
}

function Menu(){

    return<div className="w-1/3">
        <ul className="flex flex-row justify-around">
            <li className="text-lg font-bold text-gray-500 hover:border-b-4 hover:text-black border-blue-600 duration-100 "><a href="#">About</a></li>
            <li className="text-lg font-bold text-gray-500 hover:border-b-4 hover:text-black border-green-600 duration-100 "><a href="#">Projects</a></li>
            <li className="text-lg font-bold text-gray-500 hover:border-b-4 hover:text-black border-yellow-400 duration-100 "><a href="#">Events</a></li>
        </ul>
    </div>
}