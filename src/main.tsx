import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CardContainer from './components/Card/CardContainer.tsx'
import CardForm from './components/Card/CardForm.tsx'
import CardDetails from './components/Card/CardDetails.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import Navbar from './components/Navbar/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route  path="/" element={<App />}/>
        <Route path="/products" element={<CardContainer />} />
        <Route path="create-product" element={<CardForm />} />
        <Route path="/products/:id" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  </Provider>

)
