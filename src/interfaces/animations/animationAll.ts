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

export const toLoaderAnimaton = (elementRef) => {
  useEffect(() => {
    const ctx = gsap.context(() => {}, elementRef)
  }, [])
}

export const enterText = () => {
  const timeline = gsap.timeline({
    ease: 'cubic-bezier(0.45,0.05,0.55,0.95);',
  })

  timeline.fromTo('.mask span', { top: '15vh' }, { top: '0vh', stagger: 0.1 })

  return timeline
}

export const toExpandElementsAnimation = () => {
  const toContainer = document.querySelector('.content__image')
  const timeline = gsap.timeline({
    ease: 'cubic-bezier(0.45,0.05,0.55,0.95);',
  })

  timeline.add(() => {
    const STATE = Flip.getState('.gallery__item')
    toContainer?.classList.remove('carousel-midle')
    Flip.from(STATE, {
      ease: 'power3.inOut',
      duration: 2,
      stagger: 0.08,
    })
  })

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
