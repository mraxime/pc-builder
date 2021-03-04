import { ChakraProvider } from '@chakra-ui/react';
import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Accueil from './Pages/Accueil';
import Boutique from './Pages/Boutique';
import Panier from './Pages/Panier';
import cartReducer from './reducers/cart';

const initialState = [];

export const CartContext = React.createContext();

function App() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  return (
    <ChakraProvider>
      <CartContext.Provider value={{ cart, dispatch }}>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Accueil} />
            <Route path="/boutique" component={Boutique} />
            <Route path="/panier" component={Panier} />
          </Switch>
        </Router>
      </CartContext.Provider>
    </ChakraProvider>
  );
}

export default App;
