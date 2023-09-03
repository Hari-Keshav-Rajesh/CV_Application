import { v4 } from "uuid"
import "./CVcontent.css"

const CVeducation = (props) => {

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
                backgroundColor: 'maroon',
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
                color: 'beige',
            }
        }
        else{
            return{
                backgroundColor: 'lightblue',
                color: 'darkgreen',
            }
        }
    }

    return( 
        
        <div className="contentCV">
            <div className="titleCV" style={colorChange()}>Education</div>

            {props.educationList.map((education) => {
                return(
                    <div className="infoCV" key={v4} style={contentColorChange()}>

                        <div className="boxCV">
                            <div className="noDateCV">
                                {education.degree}<br></br>{education.university}
                            </div>
                            <div className="DateCV">
                                {education.start} - {education.end}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CVeducation