import React from 'react'
import Helmet from 'react-helmet'
import './all.sass'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../components/assets/styles/style.css';
import Header from './header'
import Footer from './footer' 


const TemplateWrapper = ({ children }) => (
  <div className="main-wrapper">
      <Helmet title="Creative City Solutions" />
      <Header />
        <div className="content-wrapper">{children}</div>
      <Footer />
  </div>
)

export default TemplateWrapper;
