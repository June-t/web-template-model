import { useRef } from 'react'
import { useWindowSize } from 'usehooks-ts'
import { Link } from 'react-router-dom'
import { OtherContainer } from '../../../infrastructure/repositories/InfoRepositoryImpl.ts'
import gsap from 'gsap'

type Header = {
  logo: string
  years: string
}

const { logo, year }: Header = OtherContainer().header

export const Header = () => {
  const { width } = useWindowSize()
  const headerMenu = useRef<HTMLDivElement>(null)

  const IsDesktop = () => {
    return (
      <>
        <header className="header">
          <h3>{logo}</h3>
          <nav className="header__desktop">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
      </>
    )
  }

  const IsMobile = () => {
    const handleMenu = () => {
      if (headerMenu.current?.classList.contains('open')) {
        headerMenu.current?.classList.toggle('open')
        closeMenu()
      } else {
        headerMenu.current?.classList.toggle('open')
        openMenu()
      }
    }

    const openMenu = () => {
      const tl = gsap.timeline({ ease: 'power3.inOut' })

      tl.set('.template', { overflow: 'hidden' })
      tl.fromTo(
        '.header__mobile',
        { height: '0vh', opacity: 0, visibility: 'visible' },
        { height: '100vh', opacity: 1, duration: 0.5 }
      )

      tl.fromTo(
        '.mobile__links a',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08 },
        '>'
      )

      tl.fromTo(
        '.mobile__footer',
        { opacity: 0 },
        { opacity: 1, stagger: 0.08 },
        '>'
      )
    }

    const closeMenu = () => {
      const tl = gsap.timeline({ ease: 'power3.inOut' })

      tl.fromTo(
        '.mobile__footer',
        { opacity: 1 },
        { opacity: 0, stagger: 0.08 }
      )

      tl.fromTo(
        '.mobile__links a',
        { y: 0, opacity: 1 },
        { y: 20, opacity: 0, stagger: 0.08 },
        '>'
      )

      tl.fromTo(
        '.header__mobile',
        { height: '100vh', opacity: 1 },
        { height: '0vh', opacity: 0, duration: 1 },
        '>+0.5'
      )
      tl.set('.header__mobile', { visibility: 'hidden' })
      tl.set('.template', { overflow: 'auto' })
    }

    return (
      <>
        <header className="header">
          <h3>{logo}</h3>
          <div className="header__button" ref={headerMenu} onClick={handleMenu}>
            <span></span>
            <span></span>
          </div>
          <nav className="header__mobile">
            <div className="mobile__links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="mobile__footer">
              <span>{logo}</span>
              <p>{year}</p>
            </div>
          </nav>
        </header>
      </>
    )
  }

  return <>{width && width <= 768 ? <IsMobile /> : <IsDesktop />}</>
}

export default Header
