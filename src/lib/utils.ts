import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { StylesConfig } from 'react-select'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const reactSelectStyles: StylesConfig<any, true> = {
  control: (provided, state) => ({
    ...provided,
    borderColor: 'rgba(209,213,219, 1)', // border-gray-300
    boxShadow: 'rgba(209,213,219, 1)',
    '&:hover': {
      borderColor: 'rgba(209,213,219, 1)', // hover on border
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? 'rgba(209,213,219, 1)' : 'white',
    background:state.isSelected ? 'lightblue':'',
    color: 'black',
    '&:active': {
      backgroundColor: 'rgba(209,213,219, 1)',
    },
  }),
}
