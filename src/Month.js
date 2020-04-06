import React from 'react';
import Settings from "./Settings"

export const Month = ( m ) => { 

  const getSrc = () => {
      return Settings.baseS3Bucket + '0.jpg'
  }

  return ( <p>
  <img src="{ getSrc  } " />
  { getSrc( ) }
  
  </p>
  )
}
