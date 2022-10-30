import React from 'react'

const PublicationCard = () => {
  return (
    <div>
        <div className='publications-container mb-3 row'>
                      <img className='publications-container__img me-5 col-auto' src='https://redigital.cl/wp-content/uploads/2022/10/alfombra-1.jpg' alt=''/>
                      <div className='publications-container__name me-5 col-auto'>Alfombra yute</div>                  
                      <div className='publications-container__price me-5 col-auto'>$199.990</div>
                      <div className='publications-container__date me-5 col-auto'>Publicado el 29 de octubre 2022</div>
        </div>
    </div>
  )
}

export default PublicationCard