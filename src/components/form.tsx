'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Input, Button } from "@nextui-org/react";
import Link from 'next/link';

export default function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bankName, setBankName] = useState('');

    const handleNextClick = () => {
        // const formDataUser = {
        //     firstName,
        //     lastName,
        //     bankName,
        // };

        // // Retrieve existing data from localStorage
        // const existingData = localStorage.getItem('formDataUser');
        // const DataUser = existingData ? JSON.parse(existingData) : [];

        // // Add the new forms data to the array
        // DataUser.push(formDataUser);

        // // Save the updated array back to localStorage
        // localStorage.setItem('DataUser', JSON.stringify(DataUser));
        // console.log('New formDataUser added', DataUser);
    };


    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col gap-4 w-1/3">
                <Card className=" p-3 bg-opacity-60 max-w-lg w-full">
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col mx-auto justify-center mt-2">
                            <p className="mx-auto">Enter your personal information</p>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <Input type="text" variant="bordered" label="First name" className="my-3"
                            onChange={(e) => setFirstName(e.target.value)} />

                        <Input type="text" variant="bordered" label="Last name" className="my-3"
                            onChange={(e) => setLastName(e.target.value)} />

                        <Input type="text" variant="bordered" label="Bank name" className="my-3"
                            onChange={(e) => setBankName(e.target.value)} />
                    </CardBody>
                    <CardFooter className="mb-2 flex justify-center items-center">
                        <div className="flex gap-4">
                            <Button className="bg-tiffany_blue" onClick={handleNextClick}>Save</Button>
                            <Link href="/" className="text-sm text-black flex items-center">
                                Go back home
                            </Link>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}