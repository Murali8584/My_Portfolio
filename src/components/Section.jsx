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
      className={`${className} flex justify-center`}
      style={style}
      {...props}
    >
     <div className='max-w-[80%]'> 
      {children}
     </div>    
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
