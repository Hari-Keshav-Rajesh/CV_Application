import { v4 } from "uuid"
import "./CVcontent.css"

const CVeducation = (props) => {
    return(
        
        <div className="contentCV">
            <div className="titleCV">Education</div>

            {props.educationList.map((education) => {
                return(
                    <div className="infoCV" key={v4} >

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