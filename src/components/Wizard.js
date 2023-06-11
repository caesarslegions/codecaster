import React, { useContext } from 'react';
import { WizardContext } from './WizardContext';
import './Wizard.css';

function Wizard() {
  const { wizard } = useContext(WizardContext);

  return (
    <div className={`wizard-sprite ${wizard}-wizard`} />
  );
}

export default Wizard;
