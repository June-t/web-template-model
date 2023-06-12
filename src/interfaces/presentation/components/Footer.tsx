import { OtherContainer } from '../../../infrastructure/repositories/InfoRepositoryImpl.ts'

type Footer = {
  logo: string
  message: string
  year: string
}
const { logo, message, year }: Footer = OtherContainer().footer

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <h3>{logo}</h3>
        <span>{message}</span>
        <span>{year}</span>
      </footer>
    </>
  )
}

export default Footer
