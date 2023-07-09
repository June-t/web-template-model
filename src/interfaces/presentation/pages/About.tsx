import { toAboutAnimation } from '../../animations/animationAll'

export const About = ({ isInterview, isFaq }) => {
  type Interview = {
    name: string
    agency: string
    age: number | string
    height: string
    placeOfBirth: string
  }

  type Faq = {
    question: string
    answer: string
  }

  type Property = Interview | Faq

  const QuestionAnswer = ({ property }: { property: Property }) => {
    const questionAnswerObj = Object.entries(property)
    if (Array.isArray(property)) {
      return (
        <>
          {property.map((item, index) => (
            <div className="question_answer" key={index}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </>
      )
    } else {
      return (
        <>
          {questionAnswerObj.map(([key, value]) => (
            <div className="question_answer" key={key}>
              <h3>{key}</h3>
              <p>{value}</p>
            </div>
          ))}
        </>
      )
    }
  }

  toAboutAnimation()

  return (
    <>
      <main className="about">
        <h1>About</h1>
        <hr />
        <div className="about__content">
          <div className="content__enterview">
            <h2>interview</h2>
            <QuestionAnswer property={isInterview} />
          </div>
          <div className="content__faq">
            <h2>
              faq <span>(Warning: Filler Content)</span>
            </h2>
            <QuestionAnswer property={isFaq} />
          </div>
        </div>
      </main>
    </>
  )
}

export default About
