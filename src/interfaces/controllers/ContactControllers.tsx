import Contact from '../presentation/pages/Contact.tsx'

export const ContactControllers = ({ content }: any) => {
  const { phone, email, background, socialMedia } = content
  return (
    <Contact
      isBackground={background}
      isPhone={phone}
      isEmail={email}
      isSocial={socialMedia}
    />
  )
}

export default ContactControllers
