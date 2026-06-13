import Header from "@/shared/ui/Header";
import styles from "./Product.module.css"
import Link from "next/link";
import { useState } from "react";

export default function Page(){
 const [chat, setOpenChat] = useState(false)

    return(
        <>
        <section id="product-page">
            <div className="container">
                <Header/>

                <div className={styles.product_block}>
                <p className={styles.product_txt}>
                  Банкетный зал лофт Форест Холл <br />
                  <span className={styles.sp_1}> Banquet hall Loft Forest Hall</span> 
                </p>

                <div className={styles.product_btm}>
                 <div className={styles.ll}>
                    <div className={styles.star_l}>
                 <div className={styles.str}>
                    <img src="./prdct_img/star.png" alt="" />
                 </div>

                 <div className={styles.str}>
                    <img src="./prdct_img/star.png" alt="" />
                 </div>

                 <div className={styles.str}>
                    <img src="./prdct_img/star.png" alt="" />
                 </div>

                 <div className={styles.str}>
                    <img src="./prdct_img/star.png" alt="" />
                 </div>
                 
                 <div className={styles.str}>
                    <img src="./prdct_img/star.png" alt="" />
                 </div>
                 </div>
                 
                 <p className={styles.product_txt2}>
                    3 отзыва
                 </p>
                 </div>

                 <div className={styles.prdct_cntr}>
                 
                 <div className={styles.fv}>
                  <div className={styles.fv_icn}>
                     <img src="./prdct_img/favorites.png" alt="" />
                  </div>
                  
                    <Link href="#" className={styles.prdct_lnk}>
                        В избранное
                    </Link>  
                  </div>   

                    <button className={styles.dl_btn}>
                     Поделиться
                    </button>
                 </div>


                </div>

                <div className={styles.select_bi}>
                  <div className={styles.dwn}>
                    <img src="./prdct_img/down.png" alt="" />
                  </div>

                  <select name="" id="" className={styles.prdct_slct}>
                  <option value="">
                    По дате добавления (сначала новые)
                  </option>
                </select>
                </div>

                </div>
            </div>
        </section>

        <section>
         <div className="container">
            <div className={styles.card_block}>
            <div className={styles.card_itm}>
              <div  className={styles.card_left}>
               <div className={styles.card_img}>
                <img src="./prdct_img/card_lft.png" alt="" />
               </div>

               <div className={styles.card_grd}>
                 <div className={styles.crd_itm}>
                  <img src="./prdct_img/mini_ph.png" alt="" />
                 </div>

                 <div className={styles.crd_itm}>
                  <img src="./prdct_img/mini_ph.png" alt="" />
                 </div>

                 <div className={styles.crd_itm}>
                  <img src="./prdct_img/mini_ph.png" alt="" />
                 </div>
               </div>
              </div>

              <div className={styles.dpg}>
                <div className={styles.card_rigth}>
              <div className={styles.crd_b1}>
                <p className={styles.card_txt}>
                <span className={styles.sp_2}>Адрес:</span> г. Москва Волоколамское <br />
                 шоссе, д.13  
                </p>

                <p className={styles.card_txt2}>
                <span className={styles.sp_2}>Метро:</span> Сокольники
                </p>

                <p className={styles.card_txt2}>
                <span className={styles.sp_2}>Время работы:</span> <br />
                Пн - Чт: с 12:00 <br />
                до 22:00, Пт - Вс: с 10:00 <br />
                до 24:00
                </p>


                  <p className={styles.card_txt2}>
                <span className={styles.sp_2}>Средний чек: </span> 
                2500 р.
                </p>

               <p className={styles.card_txt2}>
                <span className={styles.sp_2}>Банкетное меню от: </span> 
                 4000 р.
                </p>

                <p className={styles.card_txt2}>
                <span className={styles.sp_2}>Телефон:</span> 
                 +7 (495) 125 25 25
                </p>

            <button className={styles.card_btn}>
              <Link href='#' className={styles.crd_lnk}>
              Оставить заявку
              </Link>
            </button>
             
             <div className={styles.order_block}>
              <div className={styles.order_top}>
               <p className={styles.card_txt3}>
                Онлайн-показ
               </p>
              </div>

              <p className={styles.card_text4}>
              Вы можете посмотреть площадку не <br />
               выходя из дома! Менеджер площадки  <br />
                проведет онлайн-показ при помощи  <br />
                видеозвонка.  
              </p>
             </div>

              </div>
              </div>

               <div className={styles.card_rigth}>
              <div className={styles.crd_b1}>
                <p className={styles.card_txt}>
                <span className={styles.sp_2}>Адрес:</span> г. Москва Волоколамское <br />
                 шоссе, д.13  
                </p>

                <p className={styles.card_txt2}>
                <span className={styles.sp_2}>Метро:</span> Сокольники
                </p>

                <p className={styles.card_txt2}>
                <span className={styles.sp_2}>Время работы:</span> <br />
                Пн - Чт: с 12:00 <br />
                до 22:00, Пт - Вс: с 10:00 <br />
                до 24:00
                </p>


                  <p className={styles.card_txt2}>
                <span className={styles.sp_2}>Средний чек: </span> 
                2500 р.
                </p>

               <p className={styles.card_txt2}>
                <span className={styles.sp_2}>Банкетное меню от: </span> 
                 4000 р.
                </p>

                <p className={styles.card_txt2}>
                <span className={styles.sp_2}>Телефон:</span> 
                 +7 (495) 125 25 25
                </p>

            <button className={styles.card_btn2} onClick={() => setOpenChat(!chat)}>
             Начать чат
            </button>
             
             <div className={styles.order_block}>
              <div className={styles.order_top}>
               <p className={styles.card_txt3}>
                Онлайн-показ
               </p>
              </div>

              <p className={styles.card_text4}>
              Вы можете посмотреть площадку не <br />
               выходя из дома! Менеджер площадки  <br />
                проведет онлайн-показ при помощи  <br />
                видеозвонка.  
              </p>
             </div>

              </div>
              </div>

              <div className={`${styles.cht_mdl} ${chat ? styles.actvv : ""}`}>
              <div className={styles.cht_top}>
               <button className={styles.model_close}>
                <img src="./prdct_img/cls_mdl.png" alt="" />
               </button>

              <p className={styles.model_txt}>
               Сообщение для менеджера
              </p>
 
                <p className={styles.model_txt2}>
              банкетного зала Форест Холл
              </p>

              <p className={styles.model_txt3}>
                обычно отвечает в течение получаса
              </p>

              <div className={styles.model_input}>
                <input type="date" placeholder="Выберите дату" className={styles.inp_1}/>
                <input type="text" placeholder="Количество гостей" className={styles.inp_1}/>
                <input type="text" placeholder="Ваше сообщение" className={styles.inp_1}/>
              </div>

              </div>
              <div className={styles.mdl_btn}>
                Отправить
              </div>

              </div>

              </div>

            </div>

            </div>
         </div>
        </section>
        </>
    )
}