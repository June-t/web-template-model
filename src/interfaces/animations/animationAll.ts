import { Flip, gsap } from 'gsap/all'
gsap.registerPlugin(Flip)

/* ANIMATION HOME PAGE STEPS: 
  
  1) — LOADER ANIMATION           [PENDING]\
    . 1.1) — SHOW COUNTER
    . 1.2) — ELEMENTS MIDLE
  2) — CHANGE TEXT                [READY?]
  3) — TRANSITION ELEMENTS        [READY]
  4) — SHOW GALLERY ELEMENTS      [PENDING]
  
*/

gsap.config({
  force3D: true,
})

const extractNumber = (cadena: string) => {
  const regex = /\d+/g // Expresión regular para encontrar números
  const numerosEncontrados = cadena.match(regex)
  return numerosEncontrados
}

const invertedTextUtility = (target: any, element: any) => {
  const tl = gsap.timeline()
  tl.to(target, { y: '-20vh' })
  tl.set(target, { y: '20vh' })
  return tl
}

export const toLoaderAnimation = () => {
  const toContent = document.querySelector('.home__content')
  const toContainer = document.querySelector('.loader__counter')
  const timeline = gsap.timeline({
    paused: true,
    ease: 'cubic-bezier(0.55,0.06,0.68,0.19);',
  })

  timeline
    .set(['.header', '.footerExtend', '.content__title', '.item__text'], {
      opacity: 0,
      visibility: 'hidden',
    })
    .set('.home__content', { className: 'home__content is-loader' })

  timeline
    .add(() => {
      const STATE = Flip.getState('.loader__counter')
      toContainer?.classList.add('is-active')
      const LAST = Flip.from(STATE, {
        ease: 'power3.inOut',
        duration: 2,
        stagger: 0.1,
      })
      return LAST
    })
    .to('.loader__counter span', { opacity: 1, duration: 0.5 }, '+=0.5')
    .to(
      '.loader__counter span',
      {
        duration: 1.5,
        innerHTML: 100,
        roundProps: 'innerHTML',
        onUpdate: function () {
          const counter = document.querySelector('loader__counter span')
          if (counter) {
            counter.textContent = Math.round(
              this.targets()[0].innerHTML
            ).toString()
          }
        },
      },
      '<'
    )
    .to('.loader__counter span', { opacity: 0, duration: 0.5 }, '+=0.5')
    .to('.loader__counter', { background: '#0000' }, '>')
    .to('.item__img img', { opacity: 1, duration: 0.5 }, '<')
    .to('.item__img', { width: '100%', duration: 0.5 }, '<')
    .to('.styles-module_item-container__a8zaY', { visibility: 'visible' }, '>')
    .to(
      '.styles-module_item-container__a8zaY',
      { opacity: 1, duration: 0.5 },
      '<'
    )
    .add(() => {
      const STATE = Flip.getState('.styles-module_item-container__a8zaY')
      toContent?.classList.add('loader-rotate')
      const LAST = Flip.from(STATE, {
        ease: 'power3.inOut',
        duration: 1,
        stagger: 0.05,
      })
      return LAST
    })
    .then(() => {
      document
        .querySelectorAll('.home__content .loader__counter')
        .forEach((e) => {
          e.remove()
        })
    })

  timeline.set(['.header', '.footerExtend', '.content__title'], {
    visibility: 'visible',
  })
  timeline.to(['.header', '.footerExtend', '.content__title'], { opacity: 1 })
  timeline.to(
    '.content__title span',
    { top: '0vh', stagger: 0.05, duration: 0.5 },
    '<'
  )

  timeline.play()
}

export const toTransitionElements = () => {
  const toContainer = document.querySelector('.carousel')
  const timeline = gsap.timeline({
    ease: 'cubic-bezier(0.55,0.06,0.68,0.19);',
  })

  timeline
    .to('.styles-module_item-container__a8zaY', {
      rotate: 0,
      y: 0,
      duration: 0.5,
    })
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
    .fromTo(
      '.item__text',
      {
        opacity: 0,
        visibility: 'visible',
      },
      {
        opacity: 1,
        duration: 0.5,
      },
      '>=+2'
    )
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
    .to('.content__options svg', { opacity: 1 }, '<')
    .fromTo('.indicators .line', { opacity: 0 }, { opacity: 1 }, '>=-0.5')
    .set('.content__title', { visibility: 'hidden' })
    .then(() => {
      document.querySelector('.home__content')?.classList.remove('is-loader')
      timeline.kill()
    })

  timeline.play()
}

export const toShowElements = (element: any) => {
  const indicatorsNumber = document.querySelector('.indicators__number')
  const indicatorsText = document.querySelector('.indicators__text')
  const elementText =
    element.currentTarget?.querySelector('.item__text h3')?.textContent
  const elementTotal =
    element.currentTarget?.querySelector('.item__text span')?.textContent

  const timeline = gsap.timeline({
    ease: 'cubic-bezier(0.45,0.05,0.55,0.95);',
    duration: 0.3,
  })

  timeline.add(invertedTextUtility(indicatorsNumber, element))
  timeline.add(invertedTextUtility(indicatorsText, element), '<')
  timeline.add(() => {
    indicatorsNumber.innerHTML = `${extractNumber(elementTotal)}`
    indicatorsText.innerHTML = elementText
  })
  timeline.to([indicatorsNumber, indicatorsText], { y: '0vh' }, '>')

  timeline.play()
}
