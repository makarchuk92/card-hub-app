import Button from '@mui/material/Button'
import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { cardApi } from '../../services/CardService'





const CardDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data: posts } = cardApi.useGetCardsQuery()



  const cardId = posts?.find((card) => card.id === id)

  return (
    <div>
        <Button
         
        variant="contained"
        color="primary"
        size="small"
        onClick={() => navigate('/')}
      >Home</Button>
      {cardId ? (
        <React.Fragment>
          <h3>Date: {cardId.date}</h3>
          <p>{cardId.body}</p>
        </React.Fragment>
      ) : (
        <p>not found</p>)
      }

    </div>
  )
}

export default CardDetails