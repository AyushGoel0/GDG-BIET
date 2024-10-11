import leftlogo from "../assets/leftlogo.svg"
import rightlogo from "../assets/rightlogo.png"

function Herosection(){

    return <div className="flex flex-row justify-between items-center h-full">
       <div className="object-cover h-48 flex justify-center w-auto"><img src={leftlogo}></img></div> 
        <div className="text-center text-6xl font-Lato text-[#656C73]"><strong className="text-[#EA4335]">G</strong>oogle<br/><strong className="text-[#4285F4]">D</strong>eveloper<br/><strong className="text-[#34A853]">G</strong>roups</div>
        <div className="object-cover h-48 flex justify-center w-auto"><img src={rightlogo}></img></div>
    </div>
}

export default Herosection;