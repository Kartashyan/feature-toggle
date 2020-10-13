import React, { useState } from 'react'
const initialState = [];
const FeatureContext = React.createContext(initialState);



function FeatureProvider(props) {
  const [response, setResponse] = useState([])
  return (
    <FeatureContext.Provider value={{ response, setResponse }}>
      {props.children}
    </FeatureContext.Provider>
  );
}
export { FeatureContext, FeatureProvider };