import Link from "next/link";

export default function Menu(){
    return(
        <div className="flex items-center h-100 flex-col gap-2">
            <Link href="/strona1">Strona1</Link>
            <Link href="/strona2">Strona2</Link>
            <Link href="/strona3">Strona3</Link>
            <Link href="/strona4">Strona4</Link>
            <Link href="/strona5">Strona5</Link>
            <Link href="/">Strona Główna</Link>
        </div>
    );
}