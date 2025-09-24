"use client";

import React from 'react'
import { useParams } from 'next/navigation'
function Profile() {
  const params = useParams();
  return (
    <div>Profile Page : {params.username}</div>
  )
}

export default Profile