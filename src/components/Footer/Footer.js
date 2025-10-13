import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <a
      href='https://github.com/emmanuelbitang/emmanuelbitang.github.io'
      className='link footer__link'
    >
      © {new Date().getFullYear()} - Developed By Emmanuel Bitang
    </a>
  </footer>
)

export default Footer
