import { Flip, gsap } from 'gsap/all'
gsap.registerPlugin(Flip)

/* ANIMATION HOME PAGE STEPS: 
  
  1) — LOADER ANIMATION           [PENDING]
  2) — SHOW ELEMENTS HOME         [PENDING]
  3) — TRANSITION ELEMENTS        [PENDING]
  4) — SHOW GALLERY ELEMENTS      [PENDING]
  
  */

gsap.config({
  force3D: true,
})

export const toTransitionElements = () => {
  const toContainer = document.querySelector('.home__content')
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
          gsap.set('.content__title span', { visibility: 'hidden' })
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
      toContainer?.classList.add('is-gallery')
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

  timeline.play()
  return timeline
}
