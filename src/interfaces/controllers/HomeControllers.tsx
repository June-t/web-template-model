import Home from '../presentation/pages/Home.tsx'
import { HomeContainer } from '../../infrastructure/repositories/InfoRepositoryImpl.ts'
const { name, collection } = HomeContainer()

export const HomeControllers = () => {
  return <Home isName={name} isGallery={collection} />
}

export default HomeControllers
