import styles from "./Button.module.css"

export default function Button({children}){
   return(
    <button className={styles.btn_f}>
     {children}
    </button> 
   )
}