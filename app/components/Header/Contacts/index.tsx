import { Dispatch, FC, SetStateAction } from 'react'

import { Quote } from './Quote'
import { Phone } from './Phone'
import { MenuButton } from './MenuButton'

import styles from './Contacts.module.css'

interface IProps {
  setIsMobileMenu: Dispatch<SetStateAction<boolean>>
}

export const Contacts: FC<IProps> = ({ setIsMobileMenu }) => (
  <div className={styles.container}>
    <Phone />

    <Quote />

    <MenuButton setIsMobileMenu={setIsMobileMenu} />
  </div>
)
