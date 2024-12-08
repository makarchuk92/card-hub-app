import {  Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

function App() {


  return (
    <>
      <Container fixed>
        <Outlet  />
      </Container>
    </>
  )
}

export default App
