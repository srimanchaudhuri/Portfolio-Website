import React, {useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {

    const formRef = useRef()
    const [form, setForm] = useState({
      name: '',
      email: '',
      message: '',
    })
  
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value})
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      setLoading(true)

      emailjs.send
      (
        'service_cba4z25',
        'template_ldfvfrt', 
        {
          from_name: form.name,
          to_name: 'Sriman',
          from_email: form.email,
          to_email: 'srimanchaudhuri@gmail.com',
          message: form.message,
        },
        'NvUlmTsEWG9smsLtG'
      )
      .then(() => {
        setLoading(false)
        alert('Thank you. I will get back to you as soon as possible.')

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (err) => {
        setLoading(false)
        console.log(err)

        alert('Something went wrong')
      })
    }

  return (
    <div className=' xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
        variants={slideIn('left',"tween", 0.2, 1)}
        className=' flex-[0.75] bg-zinc-900 p-8 rounded-2xl'
      >
        <p className={`${styles.sectionSubText}, text-red `}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className=' flex flex-col mt-12 gap-8'
        >
          <label className='flex flex-col'>
            <span className=' text-red font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Your Name'
              className=' bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className=' text-red font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Email Address'
              className=' bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className=' text-red font-medium mb-4'>Your Message To Me</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Write your message here...'
              className=' bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className=' bg-red py-3 px-8 outline-none
             font-bold w-fit text-white shadow-md shadow-primary cursor-pointer
             rounded-xl
            '
          >
            {loading ? 'Sending...' : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className=' xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")