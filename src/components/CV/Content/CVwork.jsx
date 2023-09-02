import { v4 } from "uuid"
import "./CVcontent.css"

const CVwork = (props) => {
    return(
        
        <div className="contentCV">
            <div className="titleCV">Work Experience</div>

            {props.workList.map((work) => {
                return(
                    <div className="infoCV" key={v4} >

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