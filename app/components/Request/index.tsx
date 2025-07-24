'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { motion } from 'framer-motion'
import * as yup from 'yup'

import { Wrapper } from '../Wrapper'
import { FormItem } from './FormItem'
import { FormButton } from './FormButton'

import styles from './Request.module.css'
import { Title } from '@/app/components/Title'
import { Divider } from '@/app/components/Divider'

export const Request = () => {
  const schema = yup
    .object()
    .shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      nationality: yup.string().required(),
      travelers: yup.string().required(),
      date: yup.string().required(),
      time: yup.string().required(),
      address: yup.string().required(),
      additional: yup.string(),
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
    const body = {
      name: data.name,
      email: data.email,
      nationality: data.nationality,
      travelers: data.travelers,
      date: data.date,
      time: data.time,
      address: data.address,
      additional: data.additional,
    }

    await fetch('/api/booking', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.status === 200) {
        reset()
      }
    })
  }

  return (
    <motion.section initial="hidden" whileInView="visible" className={styles.container}>
      <Wrapper classes={styles.wrapper}>
        <Title text="Request a free estimate" />

        <Divider />

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <FormItem register={register} errors={errors} name="name" label="name" />

          <FormItem register={register} errors={errors} name="email" label="email" />

          <FormItem register={register} errors={errors} name="nationality" label="nationality" />

          <FormItem register={register} errors={errors} name="travelers" label="travelers" />

          <FormItem register={register} errors={errors} name="date" label="date" />

          <FormItem register={register} errors={errors} name="time" label="time" />

          <FormItem register={register} errors={errors} name="address" label="address" />

          <FormItem register={register} errors={errors} name="additional" label="additional" />

          <div className={styles.fees}>
            <FormButton bookingButton="Submit" />
          </div>
        </form>
      </Wrapper>
    </motion.section>
  )
}
