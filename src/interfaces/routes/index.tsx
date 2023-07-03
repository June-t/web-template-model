import { Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from '../presentation/components/Header.tsx'
import HomePage from '../controllers/HomeControllers.tsx'
import GalleryPage from '../presentation/pages/Gallery.tsx'
import AboutPage from '../controllers/AboutControllers.tsx'
import ContactPage from '../controllers/ContactControllers.tsx'

import {
  getHome,
  getCollection,
  getAbout,
  getContact,
} from '../../infrastructure/repositories/InfoRepositoryImpl.ts'

const AppLayout = ({ children, isPage }) => {
  return <div className={'template ' + `${'is-' + isPage}`}>{children}</div>
}

export default function AppLayoutContainer() {
  const location = useLocation()
  const { collection } = getCollection

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes location={location}>
        <Route
          path="/"
          element={
            <AppLayout isPage={'home'}>
              <Header />
              <HomePage content={getHome} />
            </AppLayout>
          }
        />
        {collection.map((item) => (
          <Route
            key={item.file}
            path={`/${item.file}`}
            element={
              <AppLayout isPage={'gallery'}>
                <Header />
                <GalleryPage content={item} />
              </AppLayout>
            }
          />
        ))}
        <Route
          path="/about"
          element={
            <AppLayout isPage={'about'}>
              <Header />
              <AboutPage content={getAbout} />
            </AppLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <AppLayout isPage={'contact'}>
              <ContactPage content={getContact} />
            </AppLayout>
          }
        />
      </Routes>
    </Suspense>
  )
}
