import styles from "./Button.module.css"

export default function Button({children, onClick}){
   console.log("Button component render");
   
   return(
    <button className={styles.btn_f} onClick={onClick}>
     {children}
    </button> 
   )
}