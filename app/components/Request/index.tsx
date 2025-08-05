'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Divider } from '../Divider'
import { Title } from '../Title'
import { Wrapper } from '../Wrapper'

import { FormItem } from './FormItem'
import { JobRequirements } from './JobRequirements'

import { animation } from '@/app/constants'

import styles from './Request.module.css'

export const Request = () => {
  const [currentJob, setCurrentJob] = useState('Gutter installation')
  const [loading, setLoading] = useState(false) // 👈 новое состояние

  const schema = yup
    .object()
    .shape({
      'First Name': yup.string().required(),
      'Last Name': yup.string(),
      Phone: yup.string(),
      Email: yup.string().email().required(),
      Address: yup.string(),
    })
    .required()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<any>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    setLoading(true) // 👈 показать лоадер

    const body = {
      firstName: data['First Name'],
      lastName: data['Last Name'],
      phone: data.Phone,
      email: data.Email,
      jobRequirements: currentJob,
      address: data.Address,
      additional: data.Additional,
    }

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      if (res.status === 200) {
        reset()
        setCurrentJob('Gutter installation')
        toast.success('Your message has been sent successfully!', {
          position: 'top-right',
          autoClose: 5000,
          theme: 'dark',
        })
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } catch (error) {
      toast.error('Network error. Please try again.')
    } finally {
      setLoading(false) // 👈 скрыть лоадер
    }
  }

  return (
    <motion.section
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      variants={animation}
      viewport={{ once: true }}
    >
      <Wrapper>
        <Title text="Fill out the form below and we’ll get back to you ASAP" />

        <Divider />

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <FormItem register={register} errors={errors} name="First Name" label="First Name" />

          <FormItem register={register} errors={errors} name="Last Name" label="Last Name" />

          <FormItem register={register} errors={errors} name="Phone" label="Phone" />

          <FormItem register={register} errors={errors} name="Email" label="Email" />

          <FormItem register={register} errors={errors} name="Address" label="address" />

          <JobRequirements currentJob={currentJob} setCurrentJob={setCurrentJob} />

          <FormItem register={register} errors={errors} name="Additional" label="additional" />

          <div className={styles.btn_container}>
            <button type="submit" className={styles.btn} disabled={loading}>
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </form>
      </Wrapper>
    </motion.section>
  )
}
