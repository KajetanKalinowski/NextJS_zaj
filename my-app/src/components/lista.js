export default function Listalist({lista}){
    return(
        <ul className="list-disc">
        {
        lista.map((items,index)=>(
            <li key={index}>{items.item}</li>
        ))}
        </ul>
    );

}