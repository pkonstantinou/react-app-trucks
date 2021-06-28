import { useState, useRef, useEffect } from 'react';

function useOpen(initialIsOpen) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return [ref, isOpen, setIsOpen];
}

export default useOpen;
