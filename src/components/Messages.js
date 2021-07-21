import SingleMessage from "./SingleMessage"
import MessageForm from "./MessageForm"

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
        <MessageForm />
      </main>
    );
}

export default Messages;