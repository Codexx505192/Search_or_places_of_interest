import Link from "next/link";

export default function Cart_btn(){
    return(
        <button className="btn">
           <Link href="/Cart" className="lnk3">
           Показать на карте
           </Link>
        </button>
    )
}