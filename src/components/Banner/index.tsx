import { FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi'

import './style.css'

const Banner = () => {
  return (
    <div className="banner">
      <div className="infobox">
        <h3 id='subtitle'>Olá, eu sou o Eric |</h3>
          <div className="icon">
            <a 
              href="https://www.linkedin.com/in/eric-oliveira-588379204/" 
              target="_blank"
            >
              <FiLinkedin />
            </a>
          </div>
          <div className="icon">
            <a 
              href="https://github.com/EricOliveiras" target="_blank"
            >
              <FiGithub />
            </a>
          </div>
          <div className="icon">
            <a 
              href="/EricOliveira.pdf"
              download
            >
              <FiFileText />
            </a>
          </div>
      </div>
      <h1 className='title'>Desenvolvedor Web</h1>
    </div>
  )
}

export default Banner