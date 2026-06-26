import Header from "@/shared/ui/Header";
import styles from "./Request.module.css"

export default function Page(){
    return(
        <>
        <section>
            <div className="container">
                <Header/>

                <div className={styles.request_block}>
                 <p className={styles.txt_request}>
                  <span>Главная</span> / Добавить место
                 </p>

                 <p className={styles.txt_request2}>
                Добавление места
                 </p>
                 
                <p className={styles.txt_request3}>
                Чтобы ваша площадка стала доступной на <br />
                 платформе Guest&Place, пожалуйста,  <br /> заполните поля ниже
                 </p>

                </div>
            </div>
        </section>
        </>
    )
}