import { useEffect, useRef } from 'react';

const CustomIcon = ({ name, className = "" }) => {
  const iconRef = useRef(null);

  useEffect(() => {
    if (iconRef.current && name) {
      const request = new XMLHttpRequest();
      request.open("GET", `${import.meta.env.BASE_URL}assets/icons/${name}.svg`);
      request.setRequestHeader("Content-Type", "image/svg+xml");
      request.addEventListener("load", (event) => {
        if (event.target.status === 200) {
          iconRef.current.innerHTML = event.target.responseText;
        }
      });
      request.send();
    }
  }, [name]);

  return <i ref={iconRef} data-custom-icon={name} className={className}></i>;
};

export default CustomIcon;

