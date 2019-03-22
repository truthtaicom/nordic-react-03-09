import React, { useState } from 'react';

const ChaContext = React.createContext()

export default function useCart() {
  const [selected, setSelected] = useState()
  return [selected, setSelected]
}