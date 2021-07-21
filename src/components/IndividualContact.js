
function IndividualContact({contact}) {
    return (
        <li className="contact">
            <div className="icon">{contact.slice(0,1)}</div>
            {contact}
        </li>
    );
}

export default IndividualContact;