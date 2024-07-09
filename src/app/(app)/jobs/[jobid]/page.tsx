"use client"
import React from 'react'

function page({ params }: { params: { jobid: string } }) {
  console.log(params);

  return (
    <div>page</div>
  )
}

export default page