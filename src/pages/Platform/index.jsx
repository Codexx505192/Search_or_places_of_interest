import Header from "@/shared/ui/Header";
import styles from "./Plarform.module.css"
import Link from "next/link";

export default function Page(){
    return(
        <>
        <section id="platfotm-page">
         <div className="container">
            <Header/>
            
            <div className={styles.plarform_block}>
             
             <div className={styles.plarform_top}>
               
               <div className={styles.ty}>
                <span className={styles.txt_platform2}>
                  Главная
                </span>
                <p className={styles.txt_platform}>
                 / О платформе
               </p>
               </div>
               <p className={styles.txt_platform3}>
                 О платформе Guest & Place
               </p>

               <p className={styles.txt_platform4}>
               Платформа, позволяющая общаться напрямую!  <br />
               Помогаем каждому  Гостю найти “свое” место. <br />
               Мы за «прозрачные отношения»!
               </p>


               <p className={styles.txt_platform5}>
               Возможности GP Platform
               </p>
             </div>
            </div>
         </div>
        </section>

        <section>
            <div className="container">
                <div className={styles.platform_block}>
                 <div className={styles.platform_itm}>
                  <div className={styles.plarform_tp}>
                  <div className={styles.platform_icn}>
                    <img src="./platform_img/usr.png" alt="" />
                  </div>
                     
                   <p className={styles.txt_platform6}>
                    Guest
                   </p>
                  </div>

                    <ul className={styles.plarform_ul}>
                       <li>
                        Прямая связь с площадкой в режиме реального времени
                       </li>

                       <li>
                        Актуальная информация, меню, цены, свободные даты
                       </li>

                       <li>
                        Прямое онлайн бронирование и оплата
                       </li>

                       <li>
                        Заказ столика, банкета, доставка еды, аренда помещения под  <br />
                         мероприятия — все в одном месте
                       </li>

                       <li>
                        Онлайн просмотр
                       </li>


                       <li>
                        Общение в чатах, видео-встречи, консультации менеджеров <br />
                         площадок
                       </li>

                       <li>
                        Личный кабинет и вся информация в одном месте
                       </li>
                    </ul>

                    <button className={styles.plarform_btn}>
                   <Link href="#" className={styles.plarform_lnk}>
                   Зарегистрироваться 
                   </Link>
                    </button>
                 </div>

                 <div className={styles.platform_itm}>
                  <div className={styles.plarform_tp}>
                  <div className={styles.platform_icn}>
                    <img src="./platform_img/coffe.png" alt="" />
                  </div>
                     
                   <p className={styles.txt_platform6}>
                    Place
                   </p>
                  </div>

                    <ul className={styles.plarform_ul}>
                       <li>
                        Прямая связь с площадкой в режиме реального времени
                       </li>

                       <li>
                        Актуальная информация, меню, цены, свободные даты
                       </li>

                       <li>
                        Прямое онлайн бронирование и оплата
                       </li>

                       <li>
                        Заказ столика, банкета, доставка еды, аренда помещения под  <br />
                         мероприятия — все в одном месте
                       </li>

                       <li>
                        Онлайн просмотр
                       </li>


                       <li>
                        Общение в чатах, видео-встречи, консультации менеджеров <br />
                         площадок
                       </li>

                       <li>
                        Личный кабинет и вся информация в одном месте
                       </li>
                    </ul>

                    <button className={styles.plarform_btn}>
                   <Link href="#" className={styles.plarform_lnk}>
                   Добавить место
                   </Link>
                    </button>
                 </div>
                </div>
            </div>
        </section>

        <section>
          <div className="container">
            <div className={styles.plt_bl}>
              <div className={styles.plarform_i}>
                 <div className={styles.p_logo}>
                  <img src="./platform_img/Logo.png" alt="" />
                 </div>

                 <p className={styles.txt_platform7}>
                Лидерство на рынке обеспечивается нашей талантливой командой, <br />
                 экспертами своего дела
                 </p>

                 <div className={styles.platform_inf}>
                   <div className={styles.plarform_inf_itm}>
                     <div className={styles.pl_icon_s}>
                      <img src="./platform_img/nn.png" alt="" />
                     </div>

                     <p className={styles.txt_platform8}>
                      постоянный поиск новых решений и внедрение <br />
                       новых технологий
                     </p>
                   </div>
                   
                   <div className={styles.plarform_inf_itm}>
                     <div className={styles.pl_icon_s}>
                      <img src="./platform_img/kk.png" alt="" />
                     </div>

                     <p className={styles.txt_platform8}>
                      мы хотим превзойти ожидания пользователей <br />
                       свои тоже :)
                     </p>
                   </div>
                 </div>

              </div>

            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className={styles.plarform_b}>
             <div className={styles.plarform_grd}>
             <div className={styles.pl_grd_itm}>
               <div>
                <p className={styles.txt_platform9}>
                  наша Миссия
                </p>

                <p className={styles.txt_platform10}>
                 Соединяем гостей (людей) и места, создавая простоту <br />
                 и прозрачность в “отношениях”. Предоставляем самые  <br />
                 современные технологии и инструменты для простого и легкого <br />
                  общения. <br />
                  Наши эксперты помогают Гостям найти «то самое» место.
                </p>
               </div>

               <div className={styles.pltfrm_img}>
               <img src="./platform_img/pl_img.png" alt="" />
               </div>
             </div>
               
              <div className={styles.pl_grd_itm}>
                <div className={styles.pltfrm_img}>
               <img src="./platform_img/image 2.png" alt="" />
               </div>

               <div className={styles.btm}>
                <p className={styles.txt_platform9}>
                  История создания
                </p>

                <p className={styles.txt_platform10}>
                 Соединяем гостей (людей) и места, создавая простоту <br />
                 и прозрачность в “отношениях”. Предоставляем самые  <br />
                 современные технологии и инструменты для простого и легкого <br />
                  общения. <br />
                  Наши эксперты помогают Гостям найти «то самое» место.
                </p>
               </div>

             </div>
             </div>

            
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className={styles.plt_block}>
             <p className={styles.txt_platform11}>
              наши Новости
             </p>

             <div className={styles.nws_flex}>
              <div className={styles.nws_itm}>
              <div className={styles.pl_elm}>
                <img src="" alt="" />
              </div>

                <p className={styles.txt_platform12}>
                 Площадкам
                </p>
              </div>
             </div>
              
            </div>
          </div>
        </section>
        </>
    )
}