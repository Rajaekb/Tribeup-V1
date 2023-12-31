'use client';


import axios from 'axios';

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from '../utils/motion';
import { useState } from "react";
import { useTranslations } from "next-intl";

const NewsLetter = () => {

  const t = useTranslations('Index');

  const [email, setEmail] = useState('');

  /* const [inputs, setInputs] = useState({
 
     email: '',
 
   })*/

  const [form, setForm] = useState('')

  /* const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

 const onSubmitForm = async (e) => {
    e.preventDefault()

    if (inputs.email) {
      setForm({ state: 'loading' })
      try {
        const res = await fetch(`/api/emailapi`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        })

        const { error } = await res.json()

        if (error) {
          setForm({
            state: 'error',
            message: error,
          })
          return
        }

        setForm({
          state: 'success',
          message: 'Thank you for your subscription',
        })
        setInputs({

          email: '',

        })
      } catch (error) {
        setForm({
          state: 'error',
          message: 'Something went wrong',
        })
      }
    }
  }
*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      setForm({ state: 'loading' })
      try {
        await axios.post('/api/emailapi', { email });
        //alert('Message sent successfully!');
        setForm({
          state: 'success',
          message: 'Thank you for your subscription',
        })

        setEmail('');

      } catch (error) {
        console.error(error);
        alert('An error occurred. Please try again later.');
        setForm({
          state: 'error',
          message: error.message,
        })
      }
    }
  };
  return (

    <section className="  text-center lg:text-left h-[250px] bg-cover bg-no-repeat bg-top  bg-fixed  ">
      <motion.div variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="   flex justify-center items-center"
      >
        <motion.div variants={fadeIn('up', 'tween', 0.8, 1)} class=" sm:-mt-[100px] w-[80%] mx-auto py-5 sm:h-56 bg-[#d0ff05] flex flex-wrap justify-center items-center ">

          <div class="">
            <div class="grid lg:grid-cols-2 gap-x-6 items-center">
              <div class="">


                <motion.h1 variants={fadeIn('up', 'tween', 0.2, 1)}

                  className=" text-black sm:text-xl font-bold">

                  <span className="px-8  tracking-[0.10em] "> {t('subscribe')} </span>
                </motion.h1>
              </div>

              <form onSubmit={handleSubmit}>

                <div class="">
                  <div class="md:flex flex-row">


                    <input required
                      type="email"
                      id='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Enter your email"
                    />
                    <input
                      type="submit"
                      class="border  border-black text-black  font-bold px-10 py-5 cursor-pointer hover:scale-110 duration-300 ease-in-out "
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    />


                  </div>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>

  )
}
  ;

export default NewsLetter;
