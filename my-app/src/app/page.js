import Image from "next/image";
import Imielist from "@/components/imielist";
import Listalist from "@/components/lista";

export default function Home() {
  const lista = [{imie:"Kajetan",ok:true},{imie:"Kuba",ok:false},{imie:"Pablo",ok:true},{imie:"Ryszard",ok:false}]
  
  const lista2 = [{item:"Kajetan"},{item:"Kuba"},{item:"Pablo"},{item:"Ryszard"}]
  
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      
        {
        lista.map((osoba,index)=>(
            <Imielist key={index} imie={osoba.imie} ok={osoba.ok}/>
        ))}
       <Listalist lista={lista2}/>
       
    </div>
  );
}
