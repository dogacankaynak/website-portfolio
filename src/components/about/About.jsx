import React from 'react'
import './about.css'
import ME from '../../assets/basket.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id ='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src ={ME} alt="About Image"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            {/*<article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
              <small></small>
              </article>   */}
            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Success driven, resilient, creative computer engineer who has developed
            diversified skills such as; hard cs skills over projects, social entreprenurship
            skills through marketing & event coordinator role in Radio Bilkent, team
            player and leadership skills by being 14 years of licensed point guard of various basketball teams.
            My purpose is to become a part of an organization where I can contribute to success of 
            the team while enhancing my software skills. 
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Get in Touch</a>
        </div>
      </div>
    </section>
  )
}

export default About