import { RouterProvider } from 'react-router-dom'
import { router } from './app/providers/router.tsx'

import './styles/global.scss'

function App() {
  return <RouterProvider router={router} />
}

export default App
