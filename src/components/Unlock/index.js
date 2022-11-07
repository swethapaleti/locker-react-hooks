import {useState} from 'react'

import {MainContainer, Locker, Image, Text, Btn} from './styledComponents'

const Unlock = () => {
  const [locker, toggleLocker] = useState(false)

  const changeLocker = () => {
    toggleLocker(prevLock => !prevLock)
  }

  return (
    <MainContainer>
      <Locker>
        <Image
          src={
            locker
              ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
              : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
          }
          alt={locker ? 'unlock' : 'lock'}
        />
        <Text>
          {locker ? 'Your Device is Unlocked' : 'Your Device is Locked'}
        </Text>
        <Btn onClick={changeLocker}>{locker ? 'Lock' : 'Unlock'}</Btn>
      </Locker>
    </MainContainer>
  )
}

export default Unlock
