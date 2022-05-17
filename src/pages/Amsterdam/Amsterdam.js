
import "./Amsterdam.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ams from "../../images/ams.png";
import Alert from "../../components/Alert/Alert";
import { useState } from "react";
import { Link, useNavigate, useRoutes } from "react-router-dom";

const Amsterdam = () => {
    // when we click to  join we first have displayed the alert message 
    //when clicking a second time the user is going to join the lobby
    const [trigger, setTrigger] = useState(false);
    const [buttonClickCount, setCount] = useState(0);
    const router = useNavigate()

    const onClick = () => {
        if (buttonClickCount === 0){
            setCount(1);
            setTrigger(!trigger);
        } else {
            router("/lobby");
        }
    }

    return (
        <div className="amsterdam-wrapper">
            <Link to="/home">
                <ArrowBackIosIcon sx={{
                    zindex:"5!important",
                    position:"absolute",
                    marginLeft:"5%",
                    marginTop:"5%",
                }}/>
            </Link>

            <img className='ams' src={ams} loading="lazy"/>
            <div className="white-square">
                <p>Amsterdam</p>
                <p className="grey" >Currently : 4/7 people </p>
                <p className="grey">Departure : 6 June</p>
                <div className="join">
                <p className="grey">8 euro per </p>
                <button className="joins" onClick={onClick}>Join</button>
                </div>

            </div>

            {trigger
                ? <Alert trigger={setTrigger}/> 
                : <></>
            }
        </div>
    )
}


export default Amsterdam