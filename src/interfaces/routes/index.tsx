import { Routes, Route, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Header from '../presentation/components/Header.tsx'
import { HomeControllers } from '../controllers/HomeControllers.tsx'
import GalleryPage from '../controllers/GalleryControllers.tsx'
import AboutPage from '../controllers/AboutControllers.tsx'
import ContactPage from '../controllers/ContactControllers.tsx'
import { getGalleryInformation } from '../../infrastructure/data/database.ts'

const AppLayout = ({ children, isPage }) => {
  return <div className={'template ' + `${'is-' + isPage}`}>{children}</div>
}

export default function AppLayoutContainer() {
  const location = useLocation()
  const collection = getGalleryInformation().collection

  return (
    <Routes location={location}>
      <Route
        path="/"
        element={
          <AppLayout isPage={'home'}>
            <Header />
            <HomeControllers />
          </AppLayout>
        }
      />
      {collection.map((item, index) => (
        <Route
          key={item.file}
          path={`/${item.file}`}
          element={
            <AppLayout isPage={'gallery'}>
              <Header />
              <GalleryPage identifier={index} />
            </AppLayout>
          }
        />
      ))}
      <Route
        path="/about"
        element={
          <AppLayout isPage={'about'}>
            <Header />
            <AboutPage />
          </AppLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <AppLayout isPage={'contact'}>
            <ContactPage />
          </AppLayout>
        }
      />
    </Routes>
  )
}
