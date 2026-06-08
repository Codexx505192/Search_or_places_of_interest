
import Header from "@/shared/ui/Header"
import styles from "./List.module.css"
import Filtr from "@/shared/ui/Filtr"
import Cart_btn from "@/shared/ui/Cart_btn"
import Link from "next/link"
import Footer from "@/shared/ui/Footer"

export default function Page(){
    return(
        <>
        <section>
            <div className="container">
                <Header/>
                <div className={styles.list_block}>
                  <div className={styles.lst_b}>
                   <div className={styles.lst_txts}>
                      <p className={styles.txt_lst}>
                        <span className={styles.sp_lst}>Главная</span> / Поиск (показать списком)
                      </p>
                   </div>
                      <h1 className={styles.txt_g}>
                        Найдено 123 площадки
                      </h1>
                      
                    <Filtr/>

                    <div className={styles.lst_blockk}>
                     <div className={styles.lst_top}>
                       <div className={styles.sl_bl}>
                       <div className="aarrw">
                        <img src="./cart_img/arw.png" alt="" />
                       </div>

                         <select className={styles.sl_itm} name="" id="">
                            <option value="По дате добавления (сначала новые)">По дате добавления (сначала новые)</option>
                        </select>
                       </div>

                         <Cart_btn/>
                     </div>


                     <div className={styles.list_grid}>
                      <div className={styles.list_elm}>
                       <div className={styles.lst_left}>
                          <img src="./list_img/lst_lft.png" alt="" />
                       </div>

                       <div className={styles.lst_rigth}>
                         
                         <div className={styles.lst_l1}>
                             <p className={styles.txt_lst2}>
                                Банкетный зал лофт Форест Холл
                             </p>

                             <div className={styles.lst_star_block}>
                               <div className={styles.lst_str}>
                                <img src="./list_img/str.png" alt="" />
                               </div>

                               <div className={styles.lst_str}>
                                <img src="./list_img/str.png" alt="" />
                               </div>

                               <div className={styles.lst_str}>
                                <img src="./list_img/str.png" alt="" />
                               </div>

                               <p>(23)</p>
                               
                             </div>

                              <ul className={styles.ul_lst}>
                                <li>
                                 <span className={styles.spl}>
                                  Станция метро:
                                 </span>
                                 Сокольники (5 минут пешком)
                                </li>

                                 <li>
                                 <span className={styles.spl}>
                                  Вместимость (чел.):
                                 </span>
                                 35/100/150
                                </li>

                                 <li>
                                 <span className={styles.spl}>
                                  Услуги: 
                                 </span>
                                 
                                 Wi-Fi, Бизнес-ланч, Выездная регистрация, Банкеты, <br />
                                 Анимация, Тимбилдинг, Конференции, Презентации, Номерной...
                                </li>
                               </ul>

                               <div className={styles.lst_menu}>
                                  <div className={styles.mnu}>
                                   <p className={styles.txt_lst3}>
                                        Средний чек
                                   </p>

                                    <p className={styles.txt_lst4}>
                                     2 500 р.
                                   </p>
                                   
                                  </div>

                                  <div className={styles.mnu}>
                                   <p className={styles.txt_lst3}>
                                     Банкетное меню
                                   </p>

                                    <p className={styles.txt_lst4}>
                                     от 4 000 р.
                                   </p>
                                   
                                  </div>

                                  <div className={styles.mnu}>
                                   <p className={styles.txt_lst3}>
                                     Аренда/час
                                   </p>

                                    <p className={styles.txt_lst4}>
                                     от 3 000 р.
                                   </p>
                                   
                                  </div>
                               </div>
                         </div>

                         <div className={styles.lst_l2}>
                           <button className={styles.btn_lst}>
                              <Link href="#" className={styles.lst_lnk}>
                              Оставить заявку
                              </Link>
                           </button>

                           <button className={styles.btn_lst2}>
                              <Link href="#" className={styles.lst_lnk2}>
                              Оставить заявку
                              </Link>
                           </button>

                           <button className={styles.btn_lst3}>
                              <Link href="#" className={styles.lst_lnk3}>
                              Оставить заявку
                              </Link>
                           </button>
                         </div>

                       </div>

                      </div>

                      <div className={styles.list_elm}>
                       <div className={styles.lst_left}>
                          <img src="./list_img/lst_lft.png" alt="" />
                       </div>

                       <div className={styles.lst_rigth}>
                         
                         <div className={styles.lst_l1}>
                             <p className={styles.txt_lst2}>
                                Банкетный зал лофт Форест Холл
                             </p>

                             <div className={styles.lst_star_block}>
                               <div className={styles.lst_str}>
                                <img src="./list_img/str.png" alt="" />
                               </div>

                               <div className={styles.lst_str}>
                                <img src="./list_img/str.png" alt="" />
                               </div>

                               <div className={styles.lst_str}>
                                <img src="./list_img/str.png" alt="" />
                               </div>

                               <p>(23)</p>
                               
                             </div>

                              <ul className={styles.ul_lst}>
                                <li>
                                 <span className={styles.spl}>
                                  Станция метро:
                                 </span>
                                 Сокольники (5 минут пешком)
                                </li>

                                 <li>
                                 <span className={styles.spl}>
                                  Вместимость (чел.):
                                 </span>
                                 35/100/150
                                </li>

                                 <li>
                                 <span className={styles.spl}>
                                  Услуги: 
                                 </span>
                                 
                                 Wi-Fi, Бизнес-ланч, Выездная регистрация, Банкеты, <br />
                                 Анимация, Тимбилдинг, Конференции, Презентации, Номерной...
                                </li>
                               </ul>

                               <div className={styles.lst_menu}>
                                  <div className={styles.mnu}>
                                   <p className={styles.txt_lst3}>
                                        Средний чек
                                   </p>

                                    <p className={styles.txt_lst4}>
                                     2 500 р.
                                   </p>
                                   
                                  </div>

                                  <div className={styles.mnu}>
                                   <p className={styles.txt_lst3}>
                                     Банкетное меню
                                   </p>

                                    <p className={styles.txt_lst4}>
                                     от 4 000 р.
                                   </p>
                                   
                                  </div>

                                  <div className={styles.mnu}>
                                   <p className={styles.txt_lst3}>
                                     Аренда/час
                                   </p>

                                    <p className={styles.txt_lst4}>
                                     от 3 000 р.
                                   </p>
                                   
                                  </div>
                               </div>
                         </div>

                         <div className={styles.lst_l2}>
                           <button className={styles.btn_lst}>
                              <Link href="#" className={styles.lst_lnk}>
                              Оставить заявку
                              </Link>
                           </button>

                           <button className={styles.btn_lst2}>
                              <Link href="#" className={styles.lst_lnk2}>
                              Оставить заявку
                              </Link>
                           </button>

                           <button className={styles.btn_lst3}>
                              <Link href="#" className={styles.lst_lnk3}>
                              Оставить заявку
                              </Link>
                           </button>
                         </div>

                       </div>

                      </div>



                      <div className={styles.list_elm}>
                       <div className={styles.lst_left}>
                          <img src="./list_img/lst_lft.png" alt="" />
                       </div>

                       <div className={styles.lst_rigth}>
                         
                         <div className={styles.lst_l1}>
                             <p className={styles.txt_lst2}>
                                Банкетный зал лофт Форест Холл
                             </p>

                             <div className={styles.lst_star_block}>
                               <div className={styles.lst_str}>
                                <img src="./list_img/str.png" alt="" />
                               </div>

                               <div className={styles.lst_str}>
                                <img src="./list_img/str.png" alt="" />
                               </div>

                               <div className={styles.lst_str}>
                                <img src="./list_img/str.png" alt="" />
                               </div>

                               <p>(23)</p>
                               
                             </div>

                              <ul className={styles.ul_lst}>
                                <li>
                                 <span className={styles.spl}>
                                  Станция метро:
                                 </span>
                                 Сокольники (5 минут пешком)
                                </li>

                                 <li>
                                 <span className={styles.spl}>
                                  Вместимость (чел.):
                                 </span>
                                 35/100/150
                                </li>

                                 <li>
                                 <span className={styles.spl}>
                                  Услуги: 
                                 </span>
                                 
                                 Wi-Fi, Бизнес-ланч, Выездная регистрация, Банкеты, <br />
                                 Анимация, Тимбилдинг, Конференции, Презентации, Номерной...
                                </li>
                               </ul>

                               <div className={styles.lst_menu}>
                                  <div className={styles.mnu}>
                                   <p className={styles.txt_lst3}>
                                        Средний чек
                                   </p>

                                    <p className={styles.txt_lst4}>
                                     2 500 р.
                                   </p>
                                   
                                  </div>

                                  <div className={styles.mnu}>
                                   <p className={styles.txt_lst3}>
                                     Банкетное меню
                                   </p>

                                    <p className={styles.txt_lst4}>
                                     от 4 000 р.
                                   </p>
                                   
                                  </div>

                                  <div className={styles.mnu}>
                                   <p className={styles.txt_lst3}>
                                     Аренда/час
                                   </p>

                                    <p className={styles.txt_lst4}>
                                     от 3 000 р.
                                   </p>
                                   
                                  </div>
                               </div>
                         </div>

                         <div className={styles.lst_l2}>
                           <button className={styles.btn_lst}>
                              <Link href="#" className={styles.lst_lnk}>
                              Оставить заявку
                              </Link>
                           </button>

                           <button className={styles.btn_lst2}>
                              <Link href="#" className={styles.lst_lnk2}>
                              Оставить заявку
                              </Link>
                           </button>

                           <button className={styles.btn_lst3}>
                              <Link href="#" className={styles.lst_lnk3}>
                              Оставить заявку
                              </Link>
                           </button>
                         </div>

                       </div>

                      </div>

                      <div className={styles.list_elm}>
                       <div className={styles.lst_left}>
                          <img src="./list_img/lst_lft.png" alt="" />
                       </div>

                       <div className={styles.lst_rigth}>
                         
                         <div className={styles.lst_l1}>
                             <p className={styles.txt_lst2}>
                                Банкетный зал лофт Форест Холл
                             </p>

                             <div className={styles.lst_star_block}>
                               <div className={styles.lst_str}>
                                <img src="./list_img/str.png" alt="" />
                               </div>

                               <div className={styles.lst_str}>
                                <img src="./list_img/str.png" alt="" />
                               </div>

                               <div className={styles.lst_str}>
                                <img src="./list_img/str.png" alt="" />
                               </div>

                               <p>(23)</p>
                               
                             </div>

                              <ul className={styles.ul_lst}>
                                <li>
                                 <span className={styles.spl}>
                                  Станция метро:
                                 </span>
                                 Сокольники (5 минут пешком)
                                </li>

                                 <li>
                                 <span className={styles.spl}>
                                  Вместимость (чел.):
                                 </span>
                                 35/100/150
                                </li>

                                 <li>
                                 <span className={styles.spl}>
                                  Услуги: 
                                 </span>
                                 
                                 Wi-Fi, Бизнес-ланч, Выездная регистрация, Банкеты, <br />
                                 Анимация, Тимбилдинг, Конференции, Презентации, Номерной...
                                </li>
                               </ul>

                               <div className={styles.lst_menu}>
                                  <div className={styles.mnu}>
                                   <p className={styles.txt_lst3}>
                                        Средний чек
                                   </p>

                                    <p className={styles.txt_lst4}>
                                     2 500 р.
                                   </p>
                                   
                                  </div>

                                  <div className={styles.mnu}>
                                   <p className={styles.txt_lst3}>
                                     Банкетное меню
                                   </p>

                                    <p className={styles.txt_lst4}>
                                     от 4 000 р.
                                   </p>
                                   
                                  </div>

                                  <div className={styles.mnu}>
                                   <p className={styles.txt_lst3}>
                                     Аренда/час
                                   </p>

                                    <p className={styles.txt_lst4}>
                                     от 3 000 р.
                                   </p>
                                   
                                  </div>
                               </div>
                         </div>

                         <div className={styles.lst_l2}>
                           <button className={styles.btn_lst}>
                              <Link href="#" className={styles.lst_lnk}>
                              Оставить заявку
                              </Link>
                           </button>

                           <button className={styles.btn_lst2}>
                              <Link href="#" className={styles.lst_lnk2}>
                              Оставить заявку
                              </Link>
                           </button>

                           <button className={styles.btn_lst3}>
                              <Link href="#" className={styles.lst_lnk3}>
                              Оставить заявку
                              </Link>
                           </button>
                         </div>

                       </div>

                      </div>


                      <div className={styles.list_elm}>
                       <div className={styles.lst_left}>
                          <img src="./list_img/lst_lft.png" alt="" />
                       </div>

                       <div className={styles.lst_rigth}>
                         
                         <div className={styles.lst_l1}>
                             <p className={styles.txt_lst2}>
                                Банкетный зал лофт Форест Холл
                             </p>

                             <div className={styles.lst_star_block}>
                               <div className={styles.lst_str}>
                                <img src="./list_img/str.png" alt="" />
                               </div>

                               <div className={styles.lst_str}>
                                <img src="./list_img/str.png" alt="" />
                               </div>

                               <div className={styles.lst_str}>
                                <img src="./list_img/str.png" alt="" />
                               </div>

                               <p>(23)</p>
                               
                             </div>

                              <ul className={styles.ul_lst}>
                                <li>
                                 <span className={styles.spl}>
                                  Станция метро:
                                 </span>
                                 Сокольники (5 минут пешком)
                                </li>

                                 <li>
                                 <span className={styles.spl}>
                                  Вместимость (чел.):
                                 </span>
                                 35/100/150
                                </li>

                                 <li>
                                 <span className={styles.spl}>
                                  Услуги: 
                                 </span>
                                 
                                 Wi-Fi, Бизнес-ланч, Выездная регистрация, Банкеты, <br />
                                 Анимация, Тимбилдинг, Конференции, Презентации, Номерной...
                                </li>
                               </ul>

                               <div className={styles.lst_menu}>
                                  <div className={styles.mnu}>
                                   <p className={styles.txt_lst3}>
                                        Средний чек
                                   </p>

                                    <p className={styles.txt_lst4}>
                                     2 500 р.
                                   </p>
                                   
                                  </div>

                                  <div className={styles.mnu}>
                                   <p className={styles.txt_lst3}>
                                     Банкетное меню
                                   </p>

                                    <p className={styles.txt_lst4}>
                                     от 4 000 р.
                                   </p>
                                   
                                  </div>

                                  <div className={styles.mnu}>
                                   <p className={styles.txt_lst3}>
                                     Аренда/час
                                   </p>

                                    <p className={styles.txt_lst4}>
                                     от 3 000 р.
                                   </p>
                                   
                                  </div>
                               </div>
                         </div>

                         <div className={styles.lst_l2}>
                           <button className={styles.btn_lst}>
                              <Link href="#" className={styles.lst_lnk}>
                              Оставить заявку
                              </Link>
                           </button>

                           <button className={styles.btn_lst2}>
                              <Link href="#" className={styles.lst_lnk2}>
                              Оставить заявку
                              </Link>
                           </button>

                           <button className={styles.btn_lst3}>
                              <Link href="#" className={styles.lst_lnk3}>
                              Оставить заявку
                              </Link>
                           </button>
                         </div>

                       </div>

                      </div>


                      <div className={styles.list_elm}>
                       <div className={styles.lst_left}>
                          <img src="./list_img/lst_lft.png" alt="" />
                       </div>

                       <div className={styles.lst_rigth}>
                         
                         <div className={styles.lst_l1}>
                             <p className={styles.txt_lst2}>
                                Банкетный зал лофт Форест Холл
                             </p>

                             <div className={styles.lst_star_block}>
                               <div className={styles.lst_str}>
                                <img src="./list_img/str.png" alt="" />
                               </div>

                               <div className={styles.lst_str}>
                                <img src="./list_img/str.png" alt="" />
                               </div>

                               <div className={styles.lst_str}>
                                <img src="./list_img/str.png" alt="" />
                               </div>

                               <p>(23)</p>
                               
                             </div>

                              <ul className={styles.ul_lst}>
                                <li>
                                 <span className={styles.spl}>
                                  Станция метро:
                                 </span>
                                 Сокольники (5 минут пешком)
                                </li>

                                 <li>
                                 <span className={styles.spl}>
                                  Вместимость (чел.):
                                 </span>
                                 35/100/150
                                </li>

                                 <li>
                                 <span className={styles.spl}>
                                  Услуги: 
                                 </span>
                                 
                                 Wi-Fi, Бизнес-ланч, Выездная регистрация, Банкеты, <br />
                                 Анимация, Тимбилдинг, Конференции, Презентации, Номерной...
                                </li>
                               </ul>

                               <div className={styles.lst_menu}>
                                  <div className={styles.mnu}>
                                   <p className={styles.txt_lst3}>
                                        Средний чек
                                   </p>

                                    <p className={styles.txt_lst4}>
                                     2 500 р.
                                   </p>
                                   
                                  </div>

                                  <div className={styles.mnu}>
                                   <p className={styles.txt_lst3}>
                                     Банкетное меню
                                   </p>

                                    <p className={styles.txt_lst4}>
                                     от 4 000 р.
                                   </p>
                                   
                                  </div>

                                  <div className={styles.mnu}>
                                   <p className={styles.txt_lst3}>
                                     Аренда/час
                                   </p>

                                    <p className={styles.txt_lst4}>
                                     от 3 000 р.
                                   </p>
                                   
                                  </div>
                               </div>
                         </div>

                         <div className={styles.lst_l2}>
                           <button className={styles.btn_lst}>
                              <Link href="#" className={styles.lst_lnk}>
                              Оставить заявку
                              </Link>
                           </button>

                           <button className={styles.btn_lst2}>
                              <Link href="#" className={styles.lst_lnk2}>
                              Оставить заявку
                              </Link>
                           </button>

                           <button className={styles.btn_lst3}>
                              <Link href="#" className={styles.lst_lnk3}>
                              Оставить заявку
                              </Link>
                           </button>
                         </div>

                       </div>

                      </div>


                      <div className={styles.list_elm}>
                       <div className={styles.lst_left}>
                          <img src="./list_img/lst_lft.png" alt="" />
                       </div>

                       <div className={styles.lst_rigth}>
                         
                         <div className={styles.lst_l1}>
                             <p className={styles.txt_lst2}>
                                Банкетный зал лофт Форест Холл
                             </p>

                             <div className={styles.lst_star_block}>
                               <div className={styles.lst_str}>
                                <img src="./list_img/str.png" alt="" />
                               </div>

                               <div className={styles.lst_str}>
                                <img src="./list_img/str.png" alt="" />
                               </div>

                               <div className={styles.lst_str}>
                                <img src="./list_img/str.png" alt="" />
                               </div>

                               <p>(23)</p>
                               
                             </div>

                              <ul className={styles.ul_lst}>
                                <li>
                                 <span className={styles.spl}>
                                  Станция метро:
                                 </span>
                                 Сокольники (5 минут пешком)
                                </li>

                                 <li>
                                 <span className={styles.spl}>
                                  Вместимость (чел.):
                                 </span>
                                 35/100/150
                                </li>

                                 <li>
                                 <span className={styles.spl}>
                                  Услуги: 
                                 </span>
                                 
                                 Wi-Fi, Бизнес-ланч, Выездная регистрация, Банкеты, <br />
                                 Анимация, Тимбилдинг, Конференции, Презентации, Номерной...
                                </li>
                               </ul>

                               <div className={styles.lst_menu}>
                                  <div className={styles.mnu}>
                                   <p className={styles.txt_lst3}>
                                        Средний чек
                                   </p>

                                    <p className={styles.txt_lst4}>
                                     2 500 р.
                                   </p>
                                   
                                  </div>

                                  <div className={styles.mnu}>
                                   <p className={styles.txt_lst3}>
                                     Банкетное меню
                                   </p>

                                    <p className={styles.txt_lst4}>
                                     от 4 000 р.
                                   </p>
                                   
                                  </div>

                                  <div className={styles.mnu}>
                                   <p className={styles.txt_lst3}>
                                     Аренда/час
                                   </p>

                                    <p className={styles.txt_lst4}>
                                     от 3 000 р.
                                   </p>
                                   
                                  </div>
                               </div>
                         </div>

                         <div className={styles.lst_l2}>
                           <button className={styles.btn_lst}>
                              <Link href="#" className={styles.lst_lnk}>
                              Оставить заявку
                              </Link>
                           </button>

                           <button className={styles.btn_lst2}>
                              <Link href="#" className={styles.lst_lnk2}>
                              Оставить заявку
                              </Link>
                           </button>

                           <button className={styles.btn_lst3}>
                              <Link href="#" className={styles.lst_lnk3}>
                              Оставить заявку
                              </Link>
                           </button>
                         </div>

                       </div>

                      </div>


                      <div className={styles.list_elm}>
                       <div className={styles.lst_left}>
                          <img src="./list_img/lst_lft.png" alt="" />
                       </div>

                       <div className={styles.lst_rigth}>
                         
                         <div className={styles.lst_l1}>
                             <p className={styles.txt_lst2}>
                                Банкетный зал лофт Форест Холл
                             </p>

                             <div className={styles.lst_star_block}>
                               <div className={styles.lst_str}>
                                <img src="./list_img/str.png" alt="" />
                               </div>

                               <div className={styles.lst_str}>
                                <img src="./list_img/str.png" alt="" />
                               </div>

                               <div className={styles.lst_str}>
                                <img src="./list_img/str.png" alt="" />
                               </div>

                               <p>(23)</p>
                               
                             </div>

                              <ul className={styles.ul_lst}>
                                <li>
                                 <span className={styles.spl}>
                                  Станция метро:
                                 </span>
                                 Сокольники (5 минут пешком)
                                </li>

                                 <li>
                                 <span className={styles.spl}>
                                  Вместимость (чел.):
                                 </span>
                                 35/100/150
                                </li>

                                 <li>
                                 <span className={styles.spl}>
                                  Услуги: 
                                 </span>
                                 
                                 Wi-Fi, Бизнес-ланч, Выездная регистрация, Банкеты, <br />
                                 Анимация, Тимбилдинг, Конференции, Презентации, Номерной...
                                </li>
                               </ul>

                               <div className={styles.lst_menu}>
                                  <div className={styles.mnu}>
                                   <p className={styles.txt_lst3}>
                                        Средний чек
                                   </p>

                                    <p className={styles.txt_lst4}>
                                     2 500 р.
                                   </p>
                                   
                                  </div>

                                  <div className={styles.mnu}>
                                   <p className={styles.txt_lst3}>
                                     Банкетное меню
                                   </p>

                                    <p className={styles.txt_lst4}>
                                     от 4 000 р.
                                   </p>
                                   
                                  </div>

                                  <div className={styles.mnu}>
                                   <p className={styles.txt_lst3}>
                                     Аренда/час
                                   </p>

                                    <p className={styles.txt_lst4}>
                                     от 3 000 р.
                                   </p>
                                   
                                  </div>
                               </div>
                         </div>

                         <div className={styles.lst_l2}>
                           <button className={styles.btn_lst}>
                              <Link href="#" className={styles.lst_lnk}>
                              Оставить заявку
                              </Link>
                           </button>

                           <button className={styles.btn_lst2}>
                              <Link href="#" className={styles.lst_lnk2}>
                              Оставить заявку
                              </Link>
                           </button>

                           <button className={styles.btn_lst3}>
                              <Link href="#" className={styles.lst_lnk3}>
                              Оставить заявку
                              </Link>
                           </button>
                         </div>

                       </div>

                      </div>
                     </div>

                    </div>

                  </div>

                </div>
            </div>
        </section>

        <section>
          <div className="container">
            <Footer/>
          </div>
        </section>
        </>
    )
}