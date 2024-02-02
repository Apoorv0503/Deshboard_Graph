import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import MainConatiner from './components/MainContainer.jsx';
import AllReports from './page/AllReports.jsx';
import CustomerCurrent from './page/CustomerCurrent.jsx';
import Geography from './page/Geography.jsx';
import Conversation from './page/Conversation.jsx';
import Deals from './page/Deals.jsx';
import Export from './page/Export.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainConatiner />,
      },
      {
        path: "/customer/:customerType",
        element: <CustomerCurrent />,
      },
      {
        path: "/report",
        element: <AllReports />,
      },
      {
        path: "/geography",
        element: <Geography />,
      },
      {
        path: "/conversation",
        element: <Conversation />,
      },
      {
        path: "/deal",
        element: <Deals />,
      },
      {
        path: "/export",
        element: <Export />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
