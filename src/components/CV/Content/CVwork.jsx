import { v4 } from "uuid"
import "./CVcontent.css"

const CVwork = (props) => {

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

    const contentColorChange = () => {
        if(props.color==="blue"){
            return{
                backgroundColor: 'lightgray',
            }
        }
        else if(props.color==="white"){
            return{
                backgroundColor: 'white',
            }
        }
        else if(props.color==="green"){
            return{
                backgroundColor: 'brown',
            }
        }
        else{
            return{
                backgroundColor: 'lightblue',
            }
        }
    }

    return(
        
        <div className="contentCV">
            <div className="titleCV" style={colorChange()}>Work Experience</div>

            {props.workList.map((work) => {
                return(
                    <div className="infoCV" key={v4} style={contentColorChange()}>

                        <div className="boxCV">
                            <div className="noDateCV">
                                {work.job}<br></br>{work.place}
                            </div>
                            <div className="DateCV">
                                {work.start} - {work.end}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CVwork