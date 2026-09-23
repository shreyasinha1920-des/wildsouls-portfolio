import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './components/Layout'
import AiProjects from './pages/AiProjects'
import CaseStudy from './pages/CaseStudy'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

// URLs match the live site (see ../sitemap.md), so existing links keep working.
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/ai-projects', element: <AiProjects /> },
      { path: '/:slug', element: <CaseStudy /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
