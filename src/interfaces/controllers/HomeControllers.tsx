import Home from '../presentation/pages/Home.tsx'
import { HomeContainer } from '../../infrastructure/repositories/InfoRepositoryImpl.ts'

const { name, collection } = HomeContainer()

console.log(collection[0])

export const HomeControllers = () => {
  return <Home isName={name} isGallery={collection} />
}

export default HomeControllers
