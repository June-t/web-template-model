/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, MouseEvent } from 'react'
import { Flip, gsap } from 'gsap/all'
gsap.registerPlugin(Flip)

gsap.config({
  force3D: true,
})

// UTILITIES

const extractNumber = (str: string) => {
  const regex = /\d+/g
  const numerosEncontrados = str.match(regex)
  return numerosEncontrados
}

const invertedTextUtility = (target: any) => {
  const tl = gsap.timeline()
  tl.to(target, { y: '-20vh' })
  tl.set(target, { y: '20vh' })
  return tl
}

// ANIMATIONS IN HOME

export const toLoaderAnimation = (): gsap.core.Timeline => {
  const timeline = gsap.timeline({ paused: true })

  // VISIBILITY SET

  timeline.set(['.is-home'], { opacity: 1, duration: 0.5 })

  timeline.set(['.home__content .content__title', '.content__image'], {
    opacity: 1,
  })

  timeline.set(
    [
      '.header',
      '.home__button',
      '.footerExtend',
      '.indicators',
      '.button_slider',
      '.item__img img',
    ],
    { opacity: 0 }
  )

  timeline.set(['.swiper', '.swiper-container', '.is-home'], {
    overflow: 'hidden',
  })

  // COUNTER LOADER [01/04]
  timeline
    .to(
      '.loader__counter span',
      {
        duration: 1,
        innerHTML: 100,
        ease: 'cubic-bezier(0.17,0.84,0.44,1);',
        roundProps: 'innerHTML',
        onUpdate() {
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
    .to('.loader__counter span', { opacity: 1, duration: 0.5 }, '<')
    .to('.item__img', { height: '50vh', duration: 1 }, '<')
    .to('.loader__counter', { opacity: 0, duration: 0.2 }, '+=0.5')
  // FIRST IMAGE [02/04]
  timeline
    .to('.item__img', { background: '#0000' }, '<-0.3')
    .to('.item__img img', { opacity: 1 }, '>-1')
    .to('.item__img', { width: '100%', duration: 0.5 }, '>')

  // VISIBILITY SET

  timeline.to(
    ['.header', '.footerExtend', '.home__indicators'],
    {
      opacity: 1,
      stagger: 0.1,
      duration: 0.5,
    },
    '<'
  )

  // ALL IMAGE ROTATE [03/04]

  timeline.add(() => {
    const toContainer = document.querySelector('.home__content')
    const STATE = Flip.getState('.gallery__item')
    toContainer?.classList.add('animation__rotate')
    const LAST = Flip.from(STATE, {
      ease: 'power3.inOut',
      duration: 1,
      stagger: 0.05,
    })

    return LAST
  }, '>+1')

  // ENTER TO TEXT & SET [04/04]

  timeline.fromTo(
    '.mask span',
    { top: '10vh', opacity: 0 },
    { top: '0vh', opacity: 1, stagger: 0.08, duration: 1 }
  )
  timeline.set(
    ['.swiper', '.swiper-container', '.is-home'],
    { overflow: 'visible' },
    '<'
  )

  timeline.set('.swiper', { pointerEvents: 'none', userSelect: 'none' }, '<')
  timeline.set('.home', { overflow: 'visible', cursor: 'pointer' }, '>')
  timeline.add(() => {
    const toContainer = document.querySelector('.home')

    function handleClick() {
      toExpandElementsAnimation().play()
      toContainer.removeEventListener('click', handleClick)
    }

    toContainer.addEventListener('click', handleClick)
  })

  return timeline
}

export const toExpandElementsAnimation = (): gsap.core.Timeline => {
  const timeline = gsap.timeline({
    ease: 'cubic-bezier(0.45,0.05,0.55,0.95);',
    paused: true,
    onComplete: () => {
      timeline.kill()
    },
  })

  // VISIBILITY SET [01/04]

  timeline
    .to(['.content__title span', '.footerExtend'], {
      opacity: 0,
      stagger: 0.1,
    })
    .set(['.content__title span', '.footerExtend'], { display: 'none' })
  timeline.set('.home', { cursor: 'auto' }, '>').set('.content__title span', {
    visibility: 'hidden',
  })

  // EXPAND INTERIOR ROTATE [02/04]

  timeline.add(() => {
    const toContainer = document.querySelector('.home__content')
    const STATE = Flip.getState('.gallery__item')
    toContainer?.classList.remove('animation__rotate')
    Flip.from(STATE, {
      duration: 1,
      ease: 'power3.inOut',
      stagger: 0.08,
    })
  }, '<')

  timeline.to(
    ['.item__img', '.item__img img'],
    { width: '100%', duration: 0.5 },
    '>+0.5'
  )

  // EXPAND IMAGE [03/04]

  timeline.add(() => {
    const toContainer = document.querySelector('.home__content')
    const STATE = Flip.getState('.gallery__item')
    toContainer?.classList.add('mobile__animation')
    toContainer?.classList.remove('loader__animation')
    const LAST = Flip.from(STATE, {
      duration: 1,
      ease: 'power3.inOut',
      stagger: 0.1,
    })

    return LAST
  }, '>+1')

  // STYLE SET TRANSITION [OTHERS]

  timeline.set(
    ['.swiper', '.swiper-container', '.home__content'],
    {
      overflow: 'hidden',
    },
    '>'
  )

  // VISIBILITY OTHER ELEMENTS [04/04]

  timeline.fromTo(
    '.gallery__item .item__text',
    { opacity: 0, visibility: 'visible' },
    { opacity: 1, stagger: 0.1, duration: 1 },
    '>+1'
  )

  timeline.set('.gallery__item', { pointerEvents: 'auto' }, '>')
  timeline.set('.swiper', { pointerEvents: 'auto', userSelect: 'auto' }, '<')

  timeline.fromTo(
    '.indicators',
    { opacity: 0, visibility: 'visible' },
    { opacity: 1, stagger: 0.1 },
    '<'
  )

  timeline.fromTo(
    '.home__indicators hr',
    { width: '0%' },
    { width: '100%', duration: 0.5 },
    '<'
  )

  timeline.fromTo(
    '.home__indicators .indicators span',
    { y: '100%' },
    { y: '0%', stagger: 0.1, duration: 1 },
    '<'
  )

  timeline.to('.home__button', { opacity: 1, duration: 0.5 }, '<')

  return timeline
}

export const toShowElements = (event: MouseEvent<HTMLElement>) => {
  const indicatorsNumber = document.querySelector('.indicators__number')
  const indicatorsText = document.querySelector('.indicators__text')
  const elementText =
    event.currentTarget?.querySelector('.item__text h3')?.textContent
  const elementTotal =
    event.currentTarget?.querySelector('.item__text span')?.textContent

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
    indicatorsNumber.innerHTML = `${'0' + extractNumber(elementTotal)} `
    indicatorsText.innerHTML = elementText
  })
  timeline.to([indicatorsNumber, indicatorsText], { y: '0vh' }, '>')

  timeline.play()
}

// ANIMATIONS IN ABOUT

export const toAboutAnimation = () => {
  useEffect(() => {
    gsap.delayedCall(0, () => {
      const timeline = gsap.timeline({
        paused: true,
        onComplete: () => {
          timeline.kill()
        },
      })

      // ANIMATION SET
      timeline.fromTo(
        '.about h1',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5 },
        '<'
      )

      timeline.fromTo(
        '.about hr',
        { width: '0%' },
        { width: '100%', duration: 1 },
        '<'
      )

      timeline.fromTo(
        ['.content__enterview', '.content__faq'],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        '>-0.5'
      )

      timeline.play()
    })
  }, [])
}

// ANIMATIONS IN CONTACT

export const toContactAnimation = () => {
  useEffect(() => {
    gsap.delayedCall(0, () => {
      const timeline = gsap.timeline({
        paused: true,
        onComplete: () => {
          timeline.kill()
        },
      })
      const imgBackground: HTMLDivElement = document.querySelector(
        '.contact__background'
      )
      // ANIMATION SET

      timeline.set('.contact__background', {
        backgroundImage: 'url(' + imgBackground.dataset.img + ')',
      })

      timeline.fromTo(
        ['.header a', '.header h3'],
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        '<'
      )

      timeline.fromTo(
        '.information__links a',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        '<'
      )

      timeline.fromTo(
        '.line',
        { width: '0%' },
        { width: 'calc(100vw - 2px)', duration: 0.5 },
        '<'
      )

      timeline.fromTo(
        ['.information__message span', '.information__message h2'],
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        '>'
      )

      timeline.play()
    })
  }, [])
}
