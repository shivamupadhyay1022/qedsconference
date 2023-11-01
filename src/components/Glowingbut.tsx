import React from 'react'
import './Glowingbut.css'


interface Props {

    children?: React.ReactNode;
    onClick: () => void;

  }
  
  const Glowingbut: React.FC<Props> = ({ 
      
      children,
      onClick,
      
    }) => { 
    return (
      <button onClick={onClick} className='buttonglowing mx-4 my-4'>
      {children}
      </button>
    );
  }


export default Glowingbut