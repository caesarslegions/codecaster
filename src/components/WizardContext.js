import React, { createContext, useState } from 'react';

export const WizardContext = createContext();

export const WizardProvider = ({ children }) => {
  const [wizard, setWizard] = useState(null);

  return (
    <WizardContext.Provider value={{ wizard, setWizard }}>
      {children}
    </WizardContext.Provider>
  );
};