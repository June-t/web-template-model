import ContactModel from '../../domain/models/Contact'
import AboutModel from '../../domain/models/About'
import OtherModel from '../../domain/models/Others'
import HomeModel from '../../domain/models/Home'
import GalleryModel from '../../domain/models/Gallery'
import {
  getContactInformation,
  getAboutInformation,
  getOtherInformation,
  getHomeInformation,
  getGalleryInformation,
} from '../data/database'

const contactContainer = (): ContactModel => {
  return getContactInformation()
}

const AboutContainer = (): AboutModel => {
  return getAboutInformation()
}

const HomeContainer = (): HomeModel => {
  return getHomeInformation()
}

const GalleryContainer = (): GalleryModel => {
  return getGalleryInformation()
}

const OtherContainer = (): OtherModel => {
  return getOtherInformation()
}

export {
  contactContainer,
  AboutContainer,
  HomeContainer,
  OtherContainer,
  GalleryContainer,
}
