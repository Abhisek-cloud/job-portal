"use client"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { MdOutlineStarRate } from "react-icons/md";


function page() {
  const form = useForm()

  const recuterSubmit = async (data: any) => {

  }
  const candidateSubmit = async (data: any) => {

  }
  return (
    <div className='container mx-auto flex justify-center py-8 pb-5 '>

      <div className=" w-full lg:w-3/4  min-h-min py-5 lg:px-14 lg:py-11">
        <Tabs defaultValue="account" >
          <div className="p-5 flex flex-col lg:flex-row gap-4 justify-between items-center border-b">
            <div className="flex">
              <h1 className=" text-base lg:text-4xl font-semibold text-black dark:text-white">
                Please complete your registration
              </h1>

            </div>
            <TabsList>
              <TabsTrigger value="candidate" className=" text-base font-semibold">Candidate</TabsTrigger>
              <TabsTrigger value="recuter" className="text-base font-semibold">Recuter</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="recuter">
            <Form {...form} >
              <form onSubmit={form.handleSubmit(recuterSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-xl'>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} className='w-full text-lg py-5 rounded-md' />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="comapnyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-xl'>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your company name" {...field} className='w-full text-lg py-5 rounded-md' />
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
                      <FormLabel className='text-xl'>Role</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your role" type='text' {...field} className='w-full text-lg py-5 rounded-md' />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />


                <Button type="submit" className='bg-blue-500 px-3 py-6 rounded-[5px] text-white   text-lg '>Submit</Button>
              </form>
            </Form>
          </TabsContent>
          <TabsContent value="candidate" >
            <div>
              <Form {...form} >
                <form onSubmit={form.handleSubmit(candidateSubmit)} className="space-y-4">


                  <div className="grid grid-clos-1 lg:grid-cols-2 gap-3">


                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-xl flex gap-1 items-start'>Your Name <MdOutlineStarRate className="text-xs text-red-800" /></FormLabel>
                          <FormControl>
                            <Input placeholder="Enter you name" type='text' {...field} className='w-full text-lg py-5 rounded-md' />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="currentJobLocation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-xl'>Current job location</FormLabel>
                          <FormControl>
                            <Input placeholder="Cuurent location" type='text' {...field} className='w-full text-lg py-5 rounded-md' />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="totalExperience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-xl'>Experience</FormLabel>
                          <FormControl>
                            <Input placeholder="Total Experience" type='text' {...field} className='w-full text-lg py-5 rounded-md' />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="currentCompany"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-xl'>Current Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Current Company" type='text' {...field} className='w-full text-lg py-5 rounded-md' />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="noticePeriod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-xl'>Notice Period</FormLabel>
                          <FormControl>
                            <Input placeholder="Notice period of current company" type='text' {...field} className='w-full text-lg py-5 rounded-md' />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="college"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-xl flex gap-1 items-start'>college Name <MdOutlineStarRate className="text-xs text-red-800" /></FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your college name" type='text' {...field} className='w-full text-lg py-5 rounded-md' />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="graduatedYear"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-xl flex gap-1 items-start'>Graduation Year<MdOutlineStarRate className="text-xs text-red-800" /> </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter graduation year" type='text' {...field} className='w-full text-lg py-5 rounded-md' />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="degree"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-xl flex gap-1 items-start'>Enter your degree<MdOutlineStarRate className="text-xs text-red-800" /></FormLabel>
                          <FormControl>
                            <Input placeholder="your degree" type='text' {...field} className='w-full text-xl py-5 rounded-md' />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="skills"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-xl flex gap-1 items-start '>Skills<MdOutlineStarRate className="text-xs text-red-800" /></FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your skills" type="text" {...field} className='w-full text-lg py-5 rounded-md' />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="linkdin"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-xl'>Linkdin</FormLabel>
                          <FormControl>
                            <Input placeholder="Linkdin profile link" type='text' {...field} className='w-full text-lg py-5 rounded-md' />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="resume"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-xl'>Resume</FormLabel>
                        <FormControl>
                          <Input type='file' {...field} className='h-min text-md py-3 rounded-md' />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className='bg-blue-500 px-3 py-6 rounded-[5px] text-white   text-lg '>Submit</Button>
                </form>
              </Form>
            </div>

          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default page
