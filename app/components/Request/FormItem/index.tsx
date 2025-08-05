import React from 'react'
import cn from 'classnames'
import { ErrorMessage } from '@hookform/error-message'

import styles from './FormItem.module.css'

const fullSize = ['Address', 'Additional']
const require = ['First Name', 'Email']

interface IProps {
  register: any
  errors: any
  name: string
  label: string
}

export const FormItem: React.FC<IProps> = ({ register, name, errors, label }) => {
  const getInput = () => {
    switch (name) {
      case 'Additional':
        return (
          <textarea
            id={name}
            {...register(name)}
            autoComplete="off"
            className={`${styles.input} ${styles.description}`}
          />
        )
      default:
        return <input id={name} {...register(name)} autoComplete="off" className={styles.input} />
    }
  }

  const getRequire = () => {
    if (require.includes(name)) {
      return <span className={styles.star}> *</span>
    }

    return null
  }

  return (
    <div
      className={cn(styles.input_container, {
        [styles.full_size]: fullSize.includes(name),
      })}
    >
      <label htmlFor={name} className={styles.input_label}>
        {label}
        {getRequire()}
      </label>

      {getInput()}

      <ErrorMessage
        errors={errors as any}
        name={name}
        render={({ message }) => <p className={styles.error}>{message}</p>}
      />
    </div>
  )
}
