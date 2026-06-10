import Header from "@/shared/ui/Header";
import styles from "./Venue.module.css"
import { wys2 } from "@/data";
import Link from "next/link";
import Footer from "@/shared/ui/Footer";

export default function Page(){
function WayToTeach3(props){
    return(
    <li>
     {props.description}
    </li>
    )
}

    return(
        <>
        <section id="Venue-page">
            <div className="container">
                <Header/>

                <div className={styles.venues_block}>
                 <div className={styles.venus_top}>
                    <p className={styles.vns_txt}>
                    Площадкам Guest & Place
                    </p>

                    <div className={styles.venus_itm}>
                     <div className={styles.vns_imt_top}>
                      <div className="venue_icn">
                        <img src="./vnue_img/coffe.png" alt="" />
                      </div>

                        <p className={styles.vns_txt2}>
                          Place
                        </p>
                     </div>

                     <ul className={styles.venues_ul}>
                     <WayToTeach3 description={wys2[0].description}/>
                     <WayToTeach3 {...wys2[1]}/>
                     <WayToTeach3 {...wys2[2]}/>
                     <WayToTeach3 {...wys2[3]}/>
                     <WayToTeach3 {...wys2[4]}/>
                     <WayToTeach3 {...wys2[5]}/>
                     <WayToTeach3 {...wys2[6]}/>
                     </ul>

                     <button className={styles.venues_btn}>
                      <Link href="#" className={styles.vns_lnk}>
                       Добавить место
                      </Link>
                     </button>
                    </div>

                 </div>
                </div>

            </div>
        </section>

        <section>
            <div className="container">
                <div className={styles.vnm_bi}>
                    <p className={styles.vns_txt3}>
                        Инструменты и сервисы от GP Platform
                    </p>

                    <div className={styles.vnm_ss}>
                     <div className={styles.vnm_s_top}>
                       <div className={styles.vnm_elm}>
                          <p className={styles.vns_txt4}>
                            <span className={styles.vns_txt4s}>
                                Личный кабинет 
                            </span>  <br />
                            с простым интерфейсом,  <br />
                             куда будут приходить все <br />
                              предложения.
                          </p>
                       </div>
                       
                       <div className={styles.vnm_elm}>
                          <p className={styles.vns_txt4}>
                            <span className={styles.vns_txt4s}>
                               Программа поддержки
                               партнеров.
                            </span>  <br />
                                Общение  <br />
                             взаимодействие<br />
                              с другими площадками
                          </p>
                       </div>


                
                     </div>
                      
                      <div className={styles.vnm_s_top}>
                       <div className={styles.vnm_elm}>
                          <p className={styles.vns_txt4}>
                            <span className={styles.vns_txt4s}>
                              Современные технологии
                            </span>  <br />
                            и инструменты для <br />
                            взаимодействия <br />
                            с клиентами  
                          </p>
                       </div>
                       
                       <div className={styles.vnm_elm}>
                          <p className={styles.vns_txt4}>
                            <span className={styles.vns_txt4s}>
                              Круглосуточная 
                              техническая поддержка 
                            </span>  <br />
                            для решения любых <br />
                            возникающих вопросов  
                          </p>
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