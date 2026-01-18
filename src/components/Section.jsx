import { forwardRef } from 'react';

const Section = forwardRef(({ 
  id, 
  className = '', 
  style, 
  children,
  ...props 
}, ref) => {
  return (
    <section 
      id={id} 
      ref={ref}
      className={`${className}`}
      style={style}
      {...props}
    >
      {children}
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
