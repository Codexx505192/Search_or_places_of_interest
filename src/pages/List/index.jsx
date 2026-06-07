
import Header from "@/shared/ui/Header"
import styles from "./List.module.css"
import Filtr from "@/shared/ui/Filtr"
import Cart_btn from "@/shared/ui/Cart_btn"

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