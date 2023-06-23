/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react'
import { Flip, gsap } from 'gsap/all'
gsap.registerPlugin(Flip)

gsap.config({
  force3D: true,
})

const extractNumber = (cadena: string) => {
  const regex = /\d+/g // Expresión regular para encontrar números
  const numerosEncontrados = cadena.match(regex)
  return numerosEncontrados
}

const invertedTextUtility = (target: any) => {
  const tl = gsap.timeline()
  tl.to(target, { y: '-20vh' })
  tl.set(target, { y: '20vh' })
  return tl
}

/* 

  LOADER ANIMATION [01/03]
  SHOW ELEMENTS ANIMATION [01/03] [RELATION WITH: 01/03]
  EXPAND ELEMENTS ANIMATON [01/03] [RELATION WITH: 02/03]

*/

export const enterText = () => {
  const timeline = gsap.timeline({
    ease: 'cubic-bezier(0.45,0.05,0.55,0.95);',
  })

  timeline.fromTo('.mask span', { top: '15vh' }, { top: '0vh', stagger: 0.1 })

  return timeline
}

export const toLoaderAnimaton = () => {
  useEffect(() => {
    gsap.delayedCall(1, () => {
      const timeline = gsap.timeline({ paused: true })
      const toContainer = document.querySelector('.home__content')

      // VISIBILITY SET

      timeline.set(
        ['.header', '.footerExtend', '.indicators', '.button_slider'],
        { opacity: 0 }
      )

      // COUNTER LOADER [01/04]
      timeline
        .to('.loader__counter span', { opacity: 1 }, '+=0.5')
        .to(
          '.loader__counter span',
          {
            // duration: 2.5,
            innerHTML: 100,
            roundProps: 'innerHTML',
            onUpdate: function () {
              const counter = document.querySelector('.loader__counter span')
              if (counter) {
                counter.textContent = Math.round(
                  this.targets()[0].innerHTML
                ).toString()
              }
            },
          },
          '<'
        )
        .to('.item__img', { height: '50vh' }, '<')
        .to('.loader__counter span', { opacity: 0 }, '+=0.5')
      // FIRST IMAGE [02/04]
      timeline
        .to('.item__img', { width: '100%' }, '<')
        .to('.item__img', { background: '#0000' }, '<')
        .to('.item__img img', { opacity: 1 }, '<')

      // VISIBILITY SET

      timeline.to(
        ['.header', '.footerExtend'],
        {
          opacity: 1,
          stagger: 0.1,
        },
        '<'
      )

      // ALL IMAGE ROTATE [03/04]

      timeline.add(() => {
        const STATE = Flip.getState('.gallery__item img')
        toContainer.classList.add('animation__rotate')
        const LAST = Flip.from(STATE, {
          ease: 'power3.inOut',
          duration: 1,
          stagger: 0.1,
        })

        return LAST
      }, '>+1')

      // ENTER TO TEXT [04/04]
      timeline.add(enterText(), '<')
      timeline.play()
    })
  }, [])
}

export const toExpandElementsAnimation = () => {
  const toContainer = document.querySelector('.home__content')
  const timeline = gsap.timeline({
    ease: 'cubic-bezier(0.45,0.05,0.55,0.95);',
  })

  // VISIBILITY SET [01/04]

  timeline
    .to(['.content__title span', '.footerExtend'], {
      opacity: 0,
      duration: 1,
      stagger: 0.1,
    })
    .set(['.content__title span', '.footerExtend'], {
      visibility: 'hidden',
      display: 'none',
    })
    .set('.gallery__item .item__text', {
      opacity: 0,
      visibility: 'hiden',
    })
    .set('.gallery__item .item__img', {
      height: '100%',
    })

  // EXPAND INTERIOR [02/04]

  timeline.add(() => {
    const toContainer = document.querySelector('.home__content')
    const STATE = Flip.getState('.gallery__item img')
    toContainer?.classList.remove('loader__animation')
    toContainer?.classList.remove('animation__rotate')
    Flip.from(STATE, {
      ease: 'power3.inOut',
      duration: 1,
      stagger: 0.08,
    })
  })

  // EXPAND IMAGE [03/04]

  timeline.add(() => {
    const toContentImagen = document.querySelector('.content__image')
    const STATE = Flip.getState('.gallery__item')
    toContentImagen?.classList.remove('carousel-midle')
    Flip.from(STATE, {
      ease: 'power3.inOut',
      duration: 1,
      stagger: 0.08,
    })
  }, '>+1')

  // VISIBILITY SET [04/04]

  timeline.fromTo(
    '.gallery__item .item__text',
    { opacity: 0, visibility: 'visible' },
    { opacity: 1, duration: 1, stagger: 0.1 },
    '>'
  )

  timeline.to('.button_slider', { opacity: 1, duration: 1 }, '>')

  timeline.fromTo(
    '.indicators',
    { opacity: 0, visibility: 'visible' },
    { opacity: 1, duration: 1, stagger: 0.1 },
    '>'
  )

  return timeline
}

export const toShowElements = (element: HTMLElement | any) => {
  const indicatorsNumber = document.querySelector('.indicators__number')
  const indicatorsText = document.querySelector('.indicators__text')
  const elementText =
    element.currentTarget?.querySelector('.item__text h3')?.textContent
  const elementTotal =
    element.currentTarget?.querySelector('.item__text span')?.textContent

  const timeline = gsap.timeline({
    ease: 'cubic-bezier(0.45,0.05,0.55,0.95);',
    duration: 0.3,
    onComplete: () => {
      timeline.kill()
    },
  })

  timeline.add(invertedTextUtility(indicatorsNumber))
  timeline.add(invertedTextUtility(indicatorsText), '<')
  timeline.add(() => {
    indicatorsNumber.innerHTML = `${extractNumber(elementTotal)}`
    indicatorsText.innerHTML = elementText
  })
  timeline.to([indicatorsNumber, indicatorsText], { y: '0vh' }, '>')

  timeline.play()
}
