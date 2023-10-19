"use client"
import { scrapeAndStoreProduct } from '@/lib/actions'
import React from 'react'
import { useState, FormEvent } from 'react'

const isValidAmazonProductURL = (url: string) => {
    try {
        const parsedURL = new URL(url)
        const hostname = parsedURL.hostname

        // check if the hostname is an amazon domain or whatever other domains we want to support

        if (hostname.includes('amazon.com') || hostname.includes('amazon.') || hostname.includes('amazon')
        ) {
            return true
        }
    } catch (error) {
        return false;
    }
    return false;
}

const Searchbar = () => {
    const [searchPrompt, setSearchPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        // event.preventDefault() stops the page from reloading when the form is submitted (which is the default behavior) so that the site feels more like a single page app
        event.preventDefault()

        const isValidLink = isValidAmazonProductURL(searchPrompt);

        if (!isValidLink) {
            alert('Please enter a valid Amazon product link')
            return
        }

        try {
            setIsLoading(true)

            // scrape the first product here
            const product = await scrapeAndStoreProduct(searchPrompt)
        } catch (error) {
            console.log(error)
        } finally {
            // finally blocks run no matter what happens between either the catch or the try block
            setIsLoading(false)
        }
    }

    return (
        <form className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit}>
            <input
                type='text'
                value={searchPrompt}
                onChange={(e) => setSearchPrompt(e.target.value)}
                placeholder='Enter Product Link'
                className='searchbar-input'
            />
            <button
                className='searchbar-btn'
                type='submit'
                disabled={searchPrompt === '' || isLoading}
            >
                {isLoading ? 'Searching...' : 'Search'}
            </button>
        </form>
    )
}

export default Searchbar