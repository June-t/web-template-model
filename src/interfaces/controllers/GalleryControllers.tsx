import Gallery from '../presentation/pages/Gallery.tsx'
import { getGalleryInformation } from '../../infrastructure/data/database.ts'

const collection = getGalleryInformation().collection
export const GalleryControllers = (identifier: any) => {
  return <Gallery content={collection} id={identifier} />
}

export default GalleryControllers
