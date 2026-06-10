import Header from "@/shared/ui/Header";
import styles from "./Venue.module.css"

export default function Page(){
function WayToTeach(){
    return(
    <li>
        
    </li>
    )
}

    return(
        <>
        <section>
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

                    </div>

                 </div>
                </div>

            </div>
        </section>
        </>
    )
}