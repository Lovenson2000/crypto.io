"use client";
import { fetchCoins } from '@/app/api/data';
import React from 'react'

export async function page({params}) {

  const { id } = params;
  const response = await fetchCoins();
  const coin = response.filter((coin) => coin.id === id);
 
  return (
    <div> This page will give details about {coin.name} </div>
  );
}
