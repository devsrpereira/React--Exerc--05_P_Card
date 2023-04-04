import React from 'react'
import Star from './Star'

export default function Personal_Card(){

    const [contact, setContact] = React.useState({
        firstName: "Saulo",
        lastName: "Pereira",
        phone: "+55 (11) 994104833",
        email: "srdevpereira@gmail.com",
        picture:"foto_perfil01.jpg",
        isFavorit: true,
    })

    function Marcar_Favorito(){
        setContact(prevState => ({
            ...prevState,
                isFavorit: !prevState.isFavorit
            }))
    }    


return(
    <div className='card_page'>
        <div className='card_picture'>
            <img className='picture_img' src= {`../images/${contact.picture}`} alt="Perfil" />
        </div>
        <div className ='card_content'>
            <Star isFilled={contact.isFavorit} handleClik={Marcar_Favorito} />
            <h1 className ='content_name'>{`${contact.firstName} ${contact.lastName}`}</h1>
            <p className ='content_phone'>{contact.phone} </p>
            <p className ='content_email'>{contact.email}</p>
        </div>
    </div>

)


}