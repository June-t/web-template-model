import ContactModel from '../../domain/models/Contact'
import AboutModel from '../../domain/models/About'
import { getContactInformation, getAboutInformation } from '../data/database'

const contactContainer = (): ContactModel => {
  return getContactInformation()
}

const AboutContainer = (): AboutModel => {
  return getAboutInformation()
}

export { contactContainer, AboutContainer }
