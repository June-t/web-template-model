import data from './db.json'

enum DB {
  ABOUT = 'about',
  CONTACT = 'contact',
  HOME = 'home',
  GALLERY = 'home',
  OTHER = 'others',
}

const getContactInformation = () => {
  return data[DB.CONTACT]
}

const getAboutInformation = () => {
  return data[DB.ABOUT]
}

const getHomeInformation = () => {
  return data[DB.HOME]
}

const getGalleryInformation = () => {
  return data[DB.GALLERY]
}

const getOtherInformation = () => {
  return data[DB.OTHER]
}

export {
  getContactInformation,
  getAboutInformation,
  getOtherInformation,
  getHomeInformation,
  getGalleryInformation,
}
