import Header from "@/shared/ui/Header"
import styles from "./Guestst.module.css"
import { ws } from "@/data"
import Link from "next/link"
import Reservations from "@/shared/ui/Reservations"
import Plt from "@/shared/ui/plt/indes"
import Footer from "@/shared/ui/Footer"

export default function Guests(){
function WaToTech2({description}){
   return(
     <li>
       {description}
     </li>
   )
}

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
                            <WaToTech2 description={ws[0].description}/>
                            <WaToTech2 {...ws[1]}/>
                            <WaToTech2 {...ws[2]}/>
                            <WaToTech2 {...ws[3]}/>
                            <WaToTech2 {...ws[4]}/>
                            <WaToTech2 {...ws[5]}/>
                            <WaToTech2 {...ws[6]}/>
                        </ul>

                        <button className={styles.guest_btn}>
                        <Link href="#" className={styles.gst_lnk}>
                        Зарегистрироваться 
                        </Link>
                        </button> 
                     </div>
                </div>

              </div>
            </div>
        </section>

        <section>
            <div className="container">
                <Reservations/>
            </div>
        </section>
        
        <section>
            <div className="container">
                <Plt/>
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