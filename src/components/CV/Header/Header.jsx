import "./Header.css"
import phoneIcon from "../../../assets/CV Icons/phoneIcon.png"
import emailIcon from "../../../assets/CV Icons/emailIcon.png"

const Header = (props) => {
    return(
            <div className="HeaderCV">
                <div className="nameCV">{props.personal.name}<br></br>Age:{props.personal.age}</div>
               <div className="iconSet">
                    <div className="numberCV">
                            <img src={phoneIcon} alt="phoneIcon" />
                            {props.personal.number}
                        </div>
                        <div className="numberCV">
                            <img src={emailIcon} alt="phoneIcon" />
                            {props.personal.email}
                        </div>
               </div>
            </div>
    )
}

export default Header