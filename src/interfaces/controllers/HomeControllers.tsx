import Home from '../presentation/pages/Home.tsx'

export const HomeControllers = ({ content }: any) => {
  interface Content {
    full_name: string
    collection: unknown
  }

  const { full_name, collection }: Content = content
  return <Home isName={full_name} isGallery={collection} />
}

export default HomeControllers
