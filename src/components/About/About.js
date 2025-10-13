import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion/dist/framer-motion'

import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import { about } from '../../portfolio'
import WavingHand from '../../images/waving-hand.png'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about
  const waveControls = useAnimation()

  useEffect(() => {
    const pageLoadSequence = async () => {
      waveControls.start({
        rotate: [0, -10, 12, -10, 9, 0, 0, 0, 0, 0, 0],
        transition: { duration: 2, loop: 999},
      })
    }
    pageLoadSequence()
  }, [waveControls])

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>{' '}
          <motion.div
            animate={waveControls}
            style={{ originX: 0.7, originY: 0.7 ,display: 'inline-block'}}
          >
            <img className='emoji' src={WavingHand} alt='waving hand' />
          </motion.div>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target="_blank" rel="noreferrer">
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target="_blank" 
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target="_blank" 
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
