import React from 'react'
import TemplateWrapper from '../components/Layout'
import HomeBanner from '../components/home/homebanner'
import Collaborate from '../components/home/collaborate'
import WhoWeAre from '../components/home/whoweare'
import IntrestedCollaboration from '../components/home/intrestedcollaboration'
import Process from '../components/home/processtab'
import Tesimonial from '../components/home/testimonial'


const Home = () => (
    <TemplateWrapper>
          <div className="home">

              <HomeBanner />

              <Collaborate />

              <WhoWeAre />

              <Process />

              <IntrestedCollaboration />

              <Tesimonial />

          </div>  
    </TemplateWrapper>
)

export default Home;
