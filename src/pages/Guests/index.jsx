import Header from "@/shared/ui/Header"
import styles from "./Guestst.module.css"

export default function Guests(){
    return(
        <>
        <section id="Guests-page">
            <div className="container">
              <Header/>

              <div className={styles.gusts_block}>
                <div className={styles.gusts_top}>
                     <p className={styles.gusts_txt}>
                      <span className={styles.sp}>Главная</span> / Гостям
                     </p>

                     <p className={styles.gusts_txt2}>
                         Гостям Guest & Place
                     </p>

                     <div className={styles.guest_bi}>
                        <div className={styles.guest_tp}>
                             <div class="Plarform-module__91DgpW__platform_icn">
                                <img alt="" src="./platform_img/usr.png"/>
                             </div>

                            <p className={styles.gusts_txt3}>
                                Guest
                            </p>
                        </div>

                        <ul className={styles.guest_ul}>
                              <li>
                                Прямая связь с площадкой в режиме реального времени
                              </li>
                            </ul>
                     </div>
                </div>

              </div>
            </div>
        </section>
        </>
    )
}