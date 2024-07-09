"use client"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import axios from "axios"
import { signUpschema } from '@/types/types'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation'
function page() {
  const router = useRouter()
  const form = useForm<z.infer<typeof signUpschema>>({
    resolver: zodResolver(signUpschema),
    defaultValues: {
      username: "",
      email: "",
      password: "",

    },
  })



  async function onSubmit(data: z.infer<typeof signUpschema>) {
    try {
      const response = await axios.post('/api/sign-up', data);
      console.log(response);

      if (response.status === 404) {
        toast.error("Duplicate key")
      }

      if (response.status === 200) {
        router.push("/")
      }
    } catch (error) {
      toast.error("User not create")
    }
  }

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='flex items-center justify-center flex-col gap-3 border-2 p-8 rounded-md '>
        <div className='border-b border-black'>
          <h1 className='text-4xl font-semibold pb-3'>Sign-up</h1>
        </div>
        <Form {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-xl'>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field} className='w-full text-lg py-5 rounded-md' />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
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
                    <Input placeholder="Paswwrod" type='password' {...field} className='w-full text-lg py-5 rounded-md' />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <p>If Already have an account <Link href='/sign-in' className='text-lg font-semibold text-blue-400'>Sign-in</Link></p>
            <Button type="submit" className='bg-blue-500 px-3 py-6 rounded-[5px] text-white   text-lg '>Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default page


