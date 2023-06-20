import Contact from '../presentation/pages/Contact.tsx'

export const ContactControllers = ({ content }: any) => {
  const { phone, email, socialMedia } = content
  return <Contact isPhone={phone} isEmail={email} isSocial={socialMedia} />
}

export default ContactControllers
