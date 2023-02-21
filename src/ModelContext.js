import React, { useState, useContext, createContext } from "react";

const ModelContext = createContext();
const ModelUpdateContext = createContext();


export const useModel = () => {
  return useContext(ModelContext);
}

export const useModelUpdate = () => {
  return useContext(ModelUpdateContext);
}

export const ModelProvider = ({children}) => {

  const [model, setModel] = useState({
    id: undefined,
    scale: [1, 1, 1],
    material: 'stainless',
  });

 
  return (
    <ModelContext.Provider value={model}>
      <ModelUpdateContext.Provider value={setModel}>
      {children}
      </ModelUpdateContext.Provider>
    </ModelContext.Provider>
  )
}
