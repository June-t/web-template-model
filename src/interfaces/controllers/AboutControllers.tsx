import About from '../presentation/pages/About.tsx'
import { AboutContainer } from '../../infrastructure/repositories/InfoRepositoryImpl.ts'

const { interview, faq } = AboutContainer()

export const AboutControllers = () => {
  return <About isInterview={interview} isFaq={faq} />
}

export default AboutControllers
