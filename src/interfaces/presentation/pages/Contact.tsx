import { Link } from 'react-router-dom'
import { Fragment } from 'react'

export const Contact = ({ isPhone, isEmail, isSocial }) => {
  type SocialMedia = {
    [key: string]: string
  }

  const SocialMediaLinks = ({ SocialMedia }: SocialMedia) => {
    const socialLinks = Object.entries(SocialMedia)

    return (
      <Fragment>
        {socialLinks.map(([key, value]) => (
          <a href={value}>{key}</a>
        ))}
      </Fragment>
    )
  }

  return (
    <>
      <main className="contact">
        <div className="contact__background">
          <nav className="header__desktop">
            <a href="/">Home</a>
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
