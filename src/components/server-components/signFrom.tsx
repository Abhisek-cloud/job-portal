"use client"
import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { Input } from '../ui/input'
import { signIn } from 'next-auth/react'

function SignFrom() {

  const form = useForm()
  async function handleSubmit(data) {
    console.log(data);

    await signIn('credentials', {

      email: data.email,
      password: data.password
    });
  };
  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 flex flex-col justify-center items-center ">

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-xl'>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} className='w-full text-lg py-5 rounded-md' />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-xl'>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} className='w-full text-lg py-5 rounded-md' />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <p>If you are new user then <Link href='/sign-up' className='text-lg font-semibold text-blue-400'>Sign-up</Link></p>
        <Button type="submit" className='bg-blue-500 px-3 py-6 rounded-[5px] text-white   text-lg '>Submit</Button>
      </form>
    </Form>
  )
}

export default SignFrom