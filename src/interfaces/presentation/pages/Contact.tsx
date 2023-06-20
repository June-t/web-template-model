import { Link } from 'react-router-dom'

export const Contact = ({ isPhone, isEmail, isSocial }) => {
  type SocialMedia = {
    [key: string]: string
  }

  const SocialMediaLinks = ({ SocialMedia }: SocialMedia) => {
    const socialLinks = Object.entries(SocialMedia)

    return (
      <>
        {socialLinks.map(([key, value]) => (
          <a key={crypto.randomUUID()} href={value}>
            {key}
          </a>
        ))}
      </>
    )
  }

  return (
    <>
      <main className="contact">
        <div className="contact__background">
          <nav className="header__desktop">
            <Link to="/">Home</Link>
          </nav>
        </div>
        <div className="contact__information">
          <div className="information__links">
            <div className="links__address">
              <a href={isPhone}>{isPhone}</a>
              <a href={isEmail}>{isEmail}</a>
            </div>
            <div className="links__social">
              <SocialMediaLinks SocialMedia={isSocial} />
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
