import { Dispatch, FC, SetStateAction } from 'react'

import styles from './Contacts.module.css'

interface IProps {
  setIsMobileMenu: Dispatch<SetStateAction<boolean>>
}

export const MenuButton: FC<IProps> = ({ setIsMobileMenu }) => {
  const handleClick = () => {
    setIsMobileMenu((prevState) => !prevState)
  }

  return (
    <button onClick={handleClick} className={`${styles.btn} ${styles.menu}`}>
      &equiv; Menu
    </button>
  )
}
