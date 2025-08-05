import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'

import styles from './JobRequirements.module.css'

const jobs = [
  'Gutter installation',
  'Soffit/fascia/cladding services',
  'Gutter cleaning and maintenance',
]

interface IProps {
  currentJob: string
  setCurrentJob: Dispatch<SetStateAction<string>>
}

export const JobRequirements: FC<IProps> = ({ currentJob, setCurrentJob }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentJob(e.target.value)
  }

  return (
    <div>
      <p className={styles.input_label}>Job Requirements</p>
      {jobs.map((job, index) => {
        return (
          <div key={job} className={styles.input_container}>
            <input
              id={job}
              key={index}
              type="radio"
              value={job}
              checked={currentJob === job}
              onChange={handleChange}
            />

            <label htmlFor={job}>{job}</label>
          </div>
        )
      })}
    </div>
  )
}
