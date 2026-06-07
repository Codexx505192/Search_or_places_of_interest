import Header from '@/shared/ui/Header'
import styles from './Cart.module.css'
import Filtr from '@/shared/ui/Filtr'
import Link from 'next/link'

export default function Page(){
    return(
        <>
         <section id="cart-page">
            <div className="container">
                <Header/>
                <div className={styles.cart_block}>
                    <Filtr/>

                    <div className={styles.cart_bottom}>
                       <button className={styles.btn_crt}>
                         <Link href="/List" className={styles.lnk_cart}>
                          Показать списком
                         </Link>
                       </button>
                       
                       <div className={styles.cart_txt_v}>
                           <div className={styles.crt_img}>
                            <img src="./cart_img/hose.png" alt="" />
                           </div>

                           <p className={styles.txt_crt1}>
                              Показать рядом со мной
                           </p>
                         </div>

                       <div className={styles.cart_txt_v}>
                           <div className={styles.crt_img}>
                            <img src="./cart_img/ssl.png" alt="" />
                           </div>

                           <p className={styles.txt_crt1}>
                            Показать в выбранной области
                           </p>
                         </div>

                          <div className={styles.cart_txt_v}>
                           <div className={styles.crt_img}>
                            <img src="./cart_img/Question.png" alt="" />
                           </div>

                           <p className={styles.txt_crt1}>
                            Помощь эксперта
                           </p>
                         </div>
                    </div>

                </div>
            </div>
         </section>
        </>
    )
}