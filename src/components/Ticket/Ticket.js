import './Ticket.css';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

function Ticket() {
    return(
        <div className='ticket_box'>
            <p className='payment_ready'>Payment made successfully</p>
            <p className='download_ticket'>Download ticket :</p>
            <ConfirmationNumberIcon sx={{
                marginLeft:"25%",
                width:"50%",
                paddingTop:"10%",
                height:"auto"
            }}/>
    </div>
    )
}
export default Ticket;