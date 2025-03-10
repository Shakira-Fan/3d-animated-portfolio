import './contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <div className="cSection">
        <form action="">
          <h1 className="cTitle">Let&apos;s keep in touch</h1>
          <div className="formItem">
            <label htmlFor="">Name</label>
            <input type="text" placeholder='John Doe' />
          </div>
          <div className="formItem">
            <label htmlFor="">Email</label>
            <input type="email" placeholder='john@gmail.com' />
          </div>
          <div className="formItem">
            <label htmlFor="">Message</label>
           <textarea rows={10} placeholder='Write your message...'/>
          </div>
          <button className='formButton'>Send</button>
        </form>
      </div>
      <div className="cSection">
        SVG
      </div>
    </div>
  )
}

export default Contact