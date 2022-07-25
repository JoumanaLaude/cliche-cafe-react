import React from 'react';

export default function TitleText({title, content}) {
   return (
      <>
         <h2 className="pt-3">{title}</h2>
         <p>{content}</p>
      </>
   )
}
