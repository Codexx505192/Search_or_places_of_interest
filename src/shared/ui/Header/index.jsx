import Link from "next/link";
import { useState } from "react";


export default function Header(){
const [openMenu, setOpenMenu] = useState(false)


    return(
         <header>
               <div className="header_top">
                <div className="header_left">
                     <div className="lctn">
                  <img src="./img/MapPin.png" alt="" />
                </div>

                <select name="" id="">
                  <option value="Ь">Москва</option>
                  <option value="Ь">Москва2</option>
                  <option value="Ь">Москва3</option>
                </select>
                </div>

               <div className="header_rigth">
                 <div className="hdr_itm">
                    <Link href="#">
                    <img src="./img/favorites.png" alt="" />
                    </Link>
                 </div>

                 <div className="hdr_itm">
                   <Link href="#">
                    <img src="./img/ChatCircle.png" alt="" />
                   </Link>
                 </div>

                 <div className="hdr_itm">
                    <Link href="#">
                    <img src="./img/User.png" alt="" />
                    </Link>
                 </div>
               </div>
               </div>
                
                <div className="header_bottom">
                <div className="header_logo">
                   <img src="./img/Logo.png" alt="logo" />
                </div>

                <ul className="ul">
                    <li>
                        <Link href="/Platform" className="lnk">
                        О платформе
                        </Link>
                    </li>

                    <li>
                        <Link href="#" className="lnk">
                        Площадкам
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="lnk">
                        Гостям
                        </Link>
                    </li>
                </ul>

                 <div className="hdr_btm_rigth">
                    <ul className="ul2">
                        <li>
                            <Link href="#" className="lnk2">
                            + Разместить запрос
                            </Link>
                        </li>

                         <li>
                            <Link href="#" className="lnk2">
                            + Добавить место
                            </Link>
                        </li>
                    </ul>


                    <div className="header_menu">
                        <ul className={`header__list ${openMenu ? "_active" : ""}`}>
                            <li>
                                <Link href="/Platform" className="lnkp">
                                О платформе
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className="lnkp">
                                Площадкам
                                </Link>
                            </li>

                            <li>
                                <Link href="#" className="lnkp">
                                Гостям
                                </Link> 
                            </li>

                            <li>
                                <Link href="#" className="lnkp">
                                Чат
                                </Link> 
                            </li>

                            <li>
                                <Link href="#" className="lnkp">
                                Избрнное
                                </Link> 
                            </li>

                            <li>
                                <Link href="#" className="lnkp2">
                                + Разместить запрос
                                </Link> 
                            </li>

                            <li>
                                <Link href="#" className="lnkp2">
                                + Разместить запрос
                                </Link> 
                            </li>



                            <div className="close" onClick={() => setOpenMenu(false)}>
                                <img src="./img/cls.png" alt="" />
                            </div>
                        </ul>


                       <div className="sr">
                          <Link href="#" className="usr">
                          <img src="./img/User.png" alt="" />
                          </Link>

                         <button className="header_button" onClick={() => setOpenMenu(!openMenu)}>
                          <img src="./img/Burger.png" alt="" />
                        </button>
                       </div>
                    </div>

                 </div>
                </div>
              </header>
    )
}