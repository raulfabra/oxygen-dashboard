import { useState } from 'react'

export const Navbar = () => {
  const [title] = useState('Dashboard')
  const [isOpen] = useState(false)

  return (
    <nav>
      <div>
        {isOpen
          ? <img src='' alt='' />
          : <img src='' alt='' />}
      </div>
      <h2>{title}</h2>
    </nav>
  )
}
