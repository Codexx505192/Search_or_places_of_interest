import styles from "./Plt.module.css"

export default function Plt(){
    return(
        <div className={styles.plt_block}>
             <p className={styles.txt_platform11}>
              наши Новости
             </p>

             <div className={styles.nws_flex}>
              <div className={styles.nws_itm}>
              <div className={styles.pl_elm}>
                <img src="./platform_img/people.png" alt="" />
              </div>

                <p className={styles.txt_platform12}>
                 Площадкам
                </p>
              </div>


              <div className={styles.nws_itm}>
              <div className={styles.pl_elm}>
                <img src="./platform_img/rotate.png" alt="" />
              </div>

                <p className={styles.txt_platform12}>
                 Площадкам
                </p>
              </div>

              <div className={styles.nws_itm}>
              <div className={styles.pl_elm}>
                <img src="./platform_img/str.png" alt="" />
              </div>

                <p className={styles.txt_platform12}>
                 Новые продукты GP
                </p>
              </div>
             </div>
              
            </div>
    )
}