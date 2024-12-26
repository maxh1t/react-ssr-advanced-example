import viteLogo from '/vite.svg'

import reactLogo from '../assets/react.svg'

export default function Home() {
  return (
    <div className='page'>
      <h2 className='page-title'>Home</h2>
      <div className='page-content'>
        <span>
          <a href='https://vite.dev' target='_blank' rel='noreferrer'>
            <img src={viteLogo} className='logo' alt='Vite logo' />
          </a>
          <a href='https://react.dev' target='_blank' rel='noreferrer'>
            <img src={reactLogo} className='logo' alt='React logo' />
          </a>
        </span>
      </div>
    </div>
  )
}
