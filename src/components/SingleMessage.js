
function SingleMessage({type, name, content}) {
    return (
        <li className={`message ${type}`}>
              <div className="icon">{name.slice(0,1)}</div>
              <span className="content">{content}</span>
            </li>
    )
}

export default SingleMessage;