import './index.css'
export const ConnectionStatus = ({ connectionState }) => {
  return <div className='connection-status'>
    {connectionState ? <>
      <div className='connection-bulb on'></div><div className='connection-message'>You are connected</div>
      </> :
      <>
        <div className='connection-bulb off'></div><div className='connection-message'>You are not connected</div>
      </>
    }
  </div>
}