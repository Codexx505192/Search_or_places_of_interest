import Link from "next/link";

export default function Footer(){
    return(
        <footer>
                  <div className="logo_footer">
                    <img src="./img/logo_footer.png" alt="logo_footer" />
                  </div>

                  <div className="footer_left">
                    <ul className="ul_footer">
                      <li>
                        <Link href="#" className="lnk9">
                        О проекте
                        </Link>
                      </li>

                       <li>
                        <Link href="#" className="lnk9">
                        Площадкам
                        </Link>
                      </li>

                       <li>
                        <Link href="#" className="lnk9">
                        Гостям
                        </Link>
                      </li>

                       <li>
                        <Link href="#" className="lnk9">
                        Контакты
                        </Link>
                      </li>

                       <li>
                        <Link href="#" className="lnk9">
                        Помощь
                        </Link>
                      </li>

                       <li>
                        <Link href="#" className="lnk9">
                        Вакансии
                        </Link>
                      </li>

                       <li>
                        <Link href="#" className="lnk9">
                        Texподдержка
                        </Link>
                      </li>
                    </ul>
                  </div>
                </footer>
    )
}