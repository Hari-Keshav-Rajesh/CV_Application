import "./Top.css"

const Color = (props) => {
    
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

    const handleChange = (event) => {
      props.setColor(event.target.value);
    };
  
    return (
      <div>
        <label htmlFor="color" className="labelDrop">Background Color</label>
        <select id="color" value={props.color} onChange={handleChange} className="menuDrop" style={colorChange()}>
          <option value="blue" className="blue">Navy Blue</option>
          <option value="white"className="white">Gray</option>
          <option value="green"className="green">Dark Green</option>
          <option value="maroon" className="maroon">Maroon</option>
        </select>
      </div>
    );
}



export default Color