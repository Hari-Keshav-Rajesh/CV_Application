import "./Header.css"
import phoneIcon from "../../../assets/CV Icons/phoneIcon.png"
import emailIcon from "../../../assets/CV Icons/emailIcon.png"

const Header = (props) => {

    const colorChange = () => {
        if(props.color==="blue"){
            return{
                backgroundColor: 'rgb(0,0,128)',
                color: 'rgb(192,192,192)',
            }
        }
        else if(props.color==="white"){
            return{
                backgroundColor: 'rgb(192,192,192)',
                color: 'black',
            }
        }
        else if(props.color==="green"){
            return{
                backgroundColor: 'rgb(0,100,0)',
                color: 'beige',
            }
        }
        else{
            return{
                backgroundColor: 'rgb(128,0,0)',
                color: 'gold',
            }
        }
    }

    return( 
            <div className="HeaderCV" style={colorChange()}>
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