import IndividualContact from "./IndividualContact";

function Contacts({contacts}) {

    const contactList = contacts.map((element) => {
        return <IndividualContact contact={element.name} key={element.id}/>
    });

    return (
        <nav>
        <h2>Contacts</h2>
        <ul className="contacts">
            {contactList}
        </ul>
      </nav>
    );
}

export default Contacts