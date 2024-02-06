import { fetchCoins } from '@/app/api/data'
import React from 'react'

export default function CoinsTable() {
    const coins = fetchCoins();

  return (
    <div>CoinsTable</div>
  )
}