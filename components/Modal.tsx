"use client"
// we are using "use client" since we have interactivity in our component

import React from 'react'
import { useState, Fragment, FormEvent } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'


const Modal = () => {
    let [isOpen, setIsOpen] = useState(false)

    const [isSubmitting, setIsSubmitting] = useState(false)

    const [email, setEmail] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)

        // await addUserEmailToProduct(productId, email)

        setIsSubmitting(false)
        setEmail('')
        closeModal()
    }

    const openModal = () => setIsOpen(true)

    const closeModal = () => setIsOpen(false)

    return (
        <>
            <button type="button" className='btn' onClick={openModal} >
                Track
            </button >
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" onClose={closeModal} className="dialog-container">
                    <div className='min-h-screen px-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay
                                className="fixed inset-0"
                            />
                        </Transition.Child>

                        {/* this span will make the modal in the middle of the screen */}
                        <span className='inline-block h-screen align-middle' aria-hidden="true" />

                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-95'
                        >
                            <div className='dialog-content'>
                                <div className='flex flex-col'>
                                    <div className='flex justify-between'>
                                        <div className='p-3 border border-gray-200 rounder-10'>
                                            <Image
                                                src='/assets/icons/logo.svg'
                                                alt='logo'
                                                height={28}
                                                width={28}
                                            />
                                        </div>
                                        <Image
                                            src='/assets/icons/x-close.svg'
                                            alt='close'
                                            height={24}
                                            width={24}
                                            className='cursor-pointer'
                                            onClick={closeModal}
                                        />
                                    </div>
                                    <h4 className='dialog-head_text'>
                                        Stay updated with the prices you want in your inbox!
                                    </h4>

                                    <p className='text-sm text-gray-600 mt-2'>
                                        Never miss a good deal with our alerts.
                                    </p>
                                </div>
                                <form className='flex flex-col mt-5' onSubmit={handleSubmit}>
                                    <label htmlFor='email' className='text-sm font-medium text-gray-300'>
                                        Email Address
                                    </label>
                                    <div className='dialog-input_container'>
                                        <Image
                                            src={'/assets/icons/mail.svg'}
                                            alt='mail'
                                            height={18}
                                            width={18}
                                        />
                                        <input
                                            required
                                            type='email'
                                            id='email'
                                            placeholder='Enter your email address'
                                            className='dialog-input'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <button
                                        type='submit'
                                        className='dialog-btn'
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Track'}
                                    </button>
                                </form>

                            </div>
                        </Transition.Child>
                    </div>
                </Dialog >
            </Transition >
        </>
    )
}

export default Modal