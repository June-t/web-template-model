import Contact from '../presentation/pages/Contact.tsx'
import { contactContainer } from '../../infrastructure/repositories/InfoRepositoryImpl.ts'

const { phone, email, socialMedia } = contactContainer()

export const ContactControllers = () => {
  return <Contact isPhone={phone} isEmail={email} isSocial={socialMedia} />
}

export default ContactControllers
