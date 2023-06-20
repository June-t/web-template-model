/* eslint-disable react-hooks/rules-of-hooks */
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
