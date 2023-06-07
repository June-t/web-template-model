export const Contact = () => {
  return (
    <>
      <main className="contact">
        <div className="contact__background">
          <a href="/">Home</a>
        </div>
        <div className="contact__information">
          <div className="information__links">
            <div className="links__address">
              <a href="#">(58) 984-123</a>
              <a href="#">allie.razo@hotmail.com</a>
            </div>
            <div className="links__social">
              <a href="#">instragram</a>
              <a href="#">facebook</a>
            </div>
          </div>
          <div className="information__message">
            <hr className="line" />
            <span>Envia un mensaje!</span>
            <h2>Contact</h2>
          </div>
        </div>
      </main>
    </>
  )
}

export default Contact
