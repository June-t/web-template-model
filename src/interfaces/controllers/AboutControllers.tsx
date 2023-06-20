import About from '../presentation/pages/About.tsx'

export const AboutControllers = ({ content }: any) => {
  const { faq, interview } = content

  return <About isInterview={interview} isFaq={faq} />
}

export default AboutControllers
