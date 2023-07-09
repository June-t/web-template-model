import { toContactAnimation } from '../../animations/animationAll'
import Header from '../components/Header'

export const Contact = ({ isPhone, isEmail, isBackground, isSocial }) => {
  type SocialMedia = {
    [key: string]: string
  }

  const SocialMediaLinks = ({ SocialMedia }: SocialMedia) => {
    const socialLinks = Object.entries(SocialMedia)

    return (
      <>
        {socialLinks.map(([key, value]) => (
          <a key={crypto.randomUUID()} target="_blank" href={value}>
            {key}
          </a>
        ))}
      </>
    )
  }

  toContactAnimation()

  return (
    <>
      <main className="contact">
        <div className="contact__background" data-img={isBackground}>
          <Header />
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
