import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Blog Ecedi</h1>
    <p>Bienvenue sur le blog d'Ecedi</p>
    <p>Ici gîsent nos articles sur des sujets divers et variés lié de près ou de loin à Ecedi</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
