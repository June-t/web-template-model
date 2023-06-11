import { Flip, gsap } from 'gsap/all'
gsap.registerPlugin(Flip)

/* ANIMATION HOME PAGE STEPS: 
  
  1) — LOADER ANIMATION           [PENDING]
  2) — CHANGE TEXT                [PENDING]
  3) — TRANSITION ELEMENTS        [PENDING]
  4) — SHOW GALLERY ELEMENTS      [PENDING]
  
  */

gsap.config({
  force3D: true,
})

const invertedTextUtility = (target: gsap.TweenTarget) => {
  const tl = gsap.timeline()
  tl.to(target, { y: '-20vh' })
  tl.set(target, { y: '20vh' })
  tl.to(target, { y: '0vh' })

  return tl
}

export const toTransitionElements = () => {
  const toContainer = document.querySelector('.carousel')
  const timeline = gsap.timeline({
    paused: true,
    ease: 'cubic-bezier(0.55,0.06,0.68,0.19);',
  })

  timeline
    .to('.content__image', { y: '-5%', duration: 0.5 })
    .fromTo(
      '.content__title span',
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: -25,
        stagger: 0.08,
        duration: 0.5,
        onComplete: () => {
          gsap.set('.content__title', { visibility: 'hidden' })
        },
      },
      '<'
    )
    .to(
      '.footerExtend',
      {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          gsap.set('.footerExtend', { display: 'none' })
        },
      },
      '<'
    )
    .add(() => {
      const STATE = Flip.getState('.gallery__item')
      toContainer?.classList.remove('is-transition')
      gsap.set('.home', { visibility: 'visible' })
      const LAST = Flip.from(STATE, {
        ease: 'power3.inOut',
        duration: 2,
        stagger: 0.1,
      })
      return LAST
    })
    .to('.item__text', { opacity: 1, duration: 0.5 }, '>=+2')
    .fromTo(
      '.indicators',
      {
        opacity: 0,
        y: 50,
        stagger: 0.08,
        display: 'flex',
        onComplete: () => {
          gsap.set('.home__indicators', { overflow: 'hidden' })
        },
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        onComplete: () => {
          gsap.set('.home__indicators', { overflow: 'visible' })
        },
      },
      '-=0.5'
    )
    .to('.content__options', { opacity: 1 }, '+=0.2')
    .fromTo('.indicators .line', { opacity: 0 }, { opacity: 1 }, '>=-0.5')
    .then(() => {
      timeline.kill()
    })

  timeline.play()
  return timeline
}

export const toShowElements = () => {
  const indicatorsNumber = document.querySelector('.indicators__number')
  const indicatorsText = document.querySelector('.indicators__text')

  const timeline = gsap.timeline({
    ease: 'Power2.easeOut',
    duration: 0.2,
  })

  timeline.add(invertedTextUtility(indicatorsNumber))
  timeline.add(invertedTextUtility(indicatorsText), '<')

  timeline.play()
}
