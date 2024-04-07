'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button } from "@nextui-org/react";
import Link from 'next/link';
import { readContract } from '@wagmi/core';
import { config } from '../wagmi';
import { abi, contractAddress } from '../constants/contractABI';
import { keccak256 } from 'viem';
import ConnectWallet from './connectWallet';
import { getAccount } from '@wagmi/core';

export default function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bankName, setBankName] = useState('');
    const [date, setDate] = useState('');
    const [resultMessage, setResultMessage] = useState('');
    const [messageType, setMessageType] = useState('none');

    function toUint8Array(str: string) {
        return new TextEncoder().encode(str);
    }

    // Fonction pour hasher prénom, nom, et nom de banque
    function hashNameBank(firstName: string, lastName: string, bankName: string) {
        // Concaténer les chaînes avec un délimiteur pour assurer l'unicité
        const combinedString = `${firstName}|${lastName}|${bankName}`;

        // Convertir la chaîne combinée en Uint8Array
        const combinedUint8Array = toUint8Array(combinedString);

        // Hasher avec keccak256
        const hash = keccak256(combinedUint8Array);

        return hash;
    }

    const handleNextClick = async () => {
        const account = getAccount(config);
        console.log("Account: ", account.address);
        const resultHash = hashNameBank(firstName, lastName, bankName);
        console.log("Hash: ", resultHash);
        try {
            const result = await readContract(config, {
                abi: abi,
                address: contractAddress,
                functionName: 'checkData',
                args: [account.address, resultHash],
            });
            if (result) {
                setResultMessage('Success! Your data matches.'); // Update message on success
                setMessageType('success');
            } else {
                setResultMessage('Failure! Your data does not match.'); // Update message on failure
                setMessageType('error');
            }
            console.log(result);
        } catch (error) {
            console.error("An error occurred:", error);
            setResultMessage('An error occurred.');
            setMessageType('error');
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col gap-4 w-1/3">
                <Card className=" p-3 bg-opacity-100 bg-gray-800 max-w-lg w-full">
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col mx-auto justify-center mt-2">
                            <p className="mx-auto mb-3 text-2xl text-white">Enter your personal information</p>
                            <ConnectWallet />
                        </div>
                    </CardHeader>
                    <CardBody>
                        <Input type="text" variant="bordered" label="First name" className="my-3 text-white"
                            onChange={(e) => setFirstName(e.target.value)} />

                        <Input type="text" variant="bordered" label="Last name" className="my-3 text-white"
                            onChange={(e) => setLastName(e.target.value)} />

                        <Input type="text" variant="bordered" label="Bank name" className="my-3 text-white"
                            onChange={(e) => setBankName(e.target.value)} />
                        <Input type="date" variant="bordered" label="Date" className="my-3 text-white" defaultValue='2002-01-01'
                            onChange={(e) => setDate(e.target.value)} />
                    </CardBody>
                    <CardFooter className="mb-2 flex flex-col justify-center items-center">
                        <div className="flex gap-4">
                            <Button className="bg-tiffany_blue" onPress={handleNextClick}>Save</Button>
                            <Link href="/" className="text-sm text-white flex items-center">
                                Go back home
                            </Link>
                        </div>
                        {/* Display the result message */}
                        {resultMessage && (
                            <p className={`text-center mt-4 ${messageType === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                                {resultMessage}
                            </p>
                        )}
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
