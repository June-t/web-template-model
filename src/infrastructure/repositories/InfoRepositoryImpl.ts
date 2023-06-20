import database from '../data/db'

enum InfoRepositoryImpl {
  home = 'home',
  collection = 'home',
  about = 'about',
  contact = 'contact',
  additional = 'additional',
}

export const getHome = database[InfoRepositoryImpl.home]

export const getAbout = database[InfoRepositoryImpl.about]

export const getCollection = database[InfoRepositoryImpl.collection]

export const getContact = database[InfoRepositoryImpl.contact]

export const getAdditional = database[InfoRepositoryImpl.additional]
