import React from 'react'
import { useContext } from 'react'
import { channelContext, userContext } from '../../App'

function ComponentC() {
   const user = useContext(userContext)
   const channel = useContext(channelContext)
  return (
    <div>
        Component C <br />
        {user} - {channel}
    </div>
  )
}

export default ComponentC
