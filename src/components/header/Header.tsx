import { HeaderComponentProps } from '@/types/interface'
import { ChevronLeft } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router'

const Header: React.FC<HeaderComponentProps> = ({ headerTitle, navigationPath }) => {
  const navigate = useNavigate()
  return (
    <div className='h-16 bg-teal px-2'>
      <div className='h-full flex space-x-2 items-center'>
        <ChevronLeft className='h-7 w-7 text-white cursor-pointer' onClick={() => {
          navigate(navigationPath)
        }} />
        <p className='text-white font-medium text-xl mb-px'>{headerTitle}</p>
      </div>
    </div>
  )
}

export default Header