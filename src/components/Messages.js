import SingleMessage from "./SingleMessage"

function Messages({messages}) {
    const messageList = messages.map((message) => {
      return (
        <SingleMessage type={message.type} name={message.name} content={message.content}/>
      )
    });

    return (
        <main>
        <h2>Messages</h2>
        <section className="messages">
          <ul>
            {messageList}
          </ul>
        </section>
        <form className="message-form">
          <input placeholder="Type a message..." />
        </form>
      </main>
    );
}

export default Messages;