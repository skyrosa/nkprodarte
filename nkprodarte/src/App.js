import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import setEvents from "./App";
import { createBrowserRouter, Outlet, Router, RouterProvider, ScrollRestoration } from "react-router-dom";
import { productsData } from "./api/Api";


export const createEvent = async (EventData) => {
  try {
    const response = await fetch('http://localhost:3000/events', {
      method: 'POST',
      body: EventData,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error al crear el evento en la API');
  }
};

const handleEventFormSubmit = (newEvent) => {
  // Atualize a lista de eventos com o novo evento criado
  setEvents((prevEvents) => [...prevEvents, newEvent]);
};
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: productsData,
      },
      {
        path: "/cart",
        element: <Cart/>
      },
    ],
  },
]);

function App() {
  return (
    <div className='font-bodyFont'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
