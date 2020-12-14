import { Helmet } from 'react-helmet'

import React from 'react'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name={description} />
      <meta name={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  description: 'Best Imaginary products for cheap',
  keywords: 'React, MongoDB, JS, CSS, HTML',
  title: "Welcome To MattShop"
}

export default Meta