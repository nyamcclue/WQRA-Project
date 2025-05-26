import React from "react";
import FooterContent from "./FooterContent";

const FooterSection = () => {
    
    return (
        <>
        <div 
        className="relative h-[900px] bg-[#547ca3]"
        style={{clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)"}}
        > 
            <div className="relative h-[calc(100vh+800px)] -top-[100vh] ">
                <div className="sticky top-[calc(100vh-800px)] h-[800px]">
                <FooterContent />  
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
                <img 
                    src="/river.svg" 
                    alt="Footer Decoration" 
                    className="w-full h-auto opacity-40"
                />
            </div> 
        </div>
        </>
    )
}

export default FooterSection;