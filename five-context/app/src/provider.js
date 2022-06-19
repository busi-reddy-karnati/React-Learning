import React, { useState } from 'react'

//Can use any name since we have exported default, else you will have to use the same as exported
import PackageContext from './context'

const Provider = (props) => {
  const [mission, setMission] = useState({
    missionName: 'Go to Russia',
    agent: 7,
    accept: 'Not Accepted',
  })
  //   Since we mention props.children, we can go use the same in children
  return (
    <PackageContext.Provider
      // value is the one that we pass along with the provider
      value={{
        data: mission,
        isMissionAccepted: () => {
          // Don't change anything but accept
          setMission({ ...mission, accept: 'ACCEPTED' })
        },
      }}
    >
      {props.children}
    </PackageContext.Provider>
  )
}
