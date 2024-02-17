"use client";

import { useState } from "react";

export default function CoinConversionForm() {

    const [baseCoin, setBaseCoin] = useState("Bitcoin/BTC");
    const [toCoin, setToCoin] = useState("Ethereum");
    const [amount, setAmount] = useState(1);
    
    return (
        <form>

        </form>
    );
}