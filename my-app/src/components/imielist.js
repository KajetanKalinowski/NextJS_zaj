
export default function Imielist({imie,ok}){
    return(
        <div className={ok ? "border-black border-2 border-solid w-[200px] text-center bg-green-700":"border-black border-2 border-solid w-[200px] text-center"}> 
        <p>{imie}</p>
        
        </div>
        

    );
}