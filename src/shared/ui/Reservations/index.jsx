import Link from "next/link"
import { useState } from "react"


export default function Reservations(){
const [requEst, setRequestOpen] = useState(false)
const [help, setOpenHelp] = useState(false)
const [gp, setOpenGp] = useState(false)

    return(
        <>
        <section>
            <div className="container">
              <div className="block_v">
                <p className="txt15">
                  Варианты взаимодействия с <span className="txtg2">GP Platform</span>
                </p>
                 
                 <div className={`request_modal ${requEst ? "active_v" : ""}`}>
                    <div className="request_top">

                      <div className="clls" onClick={() => setRequestOpen(false)}>
                      <img src="./img/cls.png" alt="закрыть" />
                    </div>

                   <p className="txt19">
                    Форма для размещения запроса
                   </p>
                    </div>


                 </div>

                <div className="block_v_frid">
                 <div className="v_itm">
                  <p className="txt16">
                    1
                  </p>

                  <div className="v_left">
                    <p className="txt17">
                      Самостоятельный поиск и бронирование
                    </p>

                    <p className="txt18">
                      С помощью удобного фильтра и карты подбираете  <br />
                       места и сами связываетесь с ними через чат, запрос <br />
                       или звоните. Данную опцию можно использовать без  <br />
                        на платформе (за исключением чата).
                    </p>

                    <button className="btn5 btq">
                      <Link href="#" className="lnk6">
                      Каталог поиска
                      </Link>
                    </button>
                  </div>

                 </div>


                  <div className="v_itm">
                  <p className="txt16">
                    2
                  </p>

                  <div className="v_left">
                    <p className="txt17">
                      Возможность разместить запрос
                    </p>

                    <p className="txt18">
                      Запрос увидят площадки подходящие по  <br />
                      параметрам, указанным вами при заполнении формы.  <br />
                      Они сами свяжутся с вами в удобное время, отправят   <br />
                       предложение в чат личного кабинета...  <Link href="#" className="lnk7">подробнее</Link>
                    </p>

                    <button className="btn6 btq" onClick={() => setRequestOpen(!requEst)}>
                       Разместить запрос
                    </button>
                  </div>

                 </div>

                 <div className={`gp_modal ${gp ? "actv_2" : ""}`}>
                   <div className="cls_tp">
                    <button className="close3" onClick={() => setOpenGp(false)}>
                    <img src="./list_img/cls.png" alt="close" />
                   </button>
                  
                   <p className="txt26">
                       помощь <span className="b_txt">эксперта</span>
                   </p>

                    <form action="#">
                      
                    <div className="gp_input_bl">
                        <input type="text" placeholder="Ваше имя" className="gp_input"/>
                      <input type="tel" placeholder="Ваш номер телефона" className="gp_input"/>
                      <input type="tel" placeholder="Удобное время для звонка" className="gp_input"/>

                      <div className="dt_block">
                      <input type="date" name="Дата" id="" className="date_itm"/>

                      <div className="counter_2">
                        <p className="txt27">Кол-во гостей</p>
                      </div>
                    </div>
                      
                      <input type="text" placeholder="Ваше сообщение (необязательно)" className="gp_input"/>
                        
                        <button className="btn10">
                          Отправить
                        </button>
                    </div>
                    </form>
                   </div>
                 </div> 

                 <div className="v_itm">
                  <p className="txt16">
                    3
                  </p>

                  <div className="v_left">
                    <p className="txt17">
                      Помощь эксперта GP
                    </p>

                    <p className="txt18">
                      Запрос увидят площадки подходящие по  <br />
                      параметрам, указанным вами при заполнении формы.  <br />
                      Они сами свяжутся с вами в удобное время, отправят   <br />
                       предложение в чат личного кабинета...  <Link href="#" className="lnk7">подробнее</Link>
                    </p>

                    <button className="btn7 btq" onClick={() => setOpenGp(!gp)}>
                       Получить помощь
                    </button>
                  </div>

                 </div>

                  <div className={`help_modal ${help ? "ctv" : ""}`}>
                   <div className="help_top">
                     <div className="close2" onClick={() => setOpenHelp(false)}>
                    <img src="./img/cls.png" alt="закрыть" />
                   </div>

                     
                   </div>

                    <p className="txt21">
                      Нужна помощь?
                    </p>

                    <p className="txt22">
                      Воспользуйтесь услугой по подбору от GP!  <br />
                      Стоимость услуги — 1000 р. 
                    </p>

                    <form action="#">
                      <div className="inp_block">
                      <input type="text" className="inpq" placeholder="Ваше имя"/>
                      <input type="tel" className="inpq" placeholder="Ваш номер телефона"/>
                      <input type="text" className="inpq" placeholder="Ваш комментарий (необязательно)"/>

                      <select name="" id="" className="slct">
                        <option value="Выберите вариант">Выберите вариант</option>
                      </select>


                      <div className="in_block">
                        <input type="date" name="" id="" className="date"/>
                      

                        <div className="counter">
                          <p className="txt23">Кол-во гостей</p>
                        </div>
                      </div>

                    </div>
                     

                    </form>

                    <button className="btn9">
                       <Link href="#" className="lnk8">
                       Перейти к оплате
                       </Link>
                     </button>
                  </div>
                     
                 <div className="v_itm">
                  <p className="txt16">
                    4
                  </p>

                  <div className="v_left">
                    <p className="txt17">
                      Дополнительный сервис от GP
                    </p>

                    <p className="txt18">
                      Запрос увидят площадки подходящие по  <br />
                      параметрам, указанным вами при заполнении формы.  <br />
                      Они сами свяжутся с вами в удобное время, отправят   <br />
                       предложение в чат личного кабинета...  <Link href="#" className="lnk7">подробнее</Link>
                    </p>

                    <button className="btn8 btq" onClick={() => setOpenHelp(!help)}>
                       Заказать услугу
                    </button>
                  </div>

                 </div>
                </div>

              </div>
            </div>
           </section>
        </>
    )
}