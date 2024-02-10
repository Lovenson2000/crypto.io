"use client";

import { useRouter } from 'next/navigation';
import React from 'react'

export default function Page () {

  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return (
    <div> This page will give details about </div>
  );
}
