# PriceTracker

This is a PriceTracking app that uses CRON jobs to periodically update the product data. NodeMailer is used to send user's notifications. Inspired by the JSMastery Data Scraping Video.

## ToDo

- Create Charts from the Product Data
- Add Sharing Features such as Tweet Now
- Add Authentication for user's to save their products and wishlists.
- Set Custom Price Alerts based off Price Targets (i.e. 10% off or $10 off)
- Add a Product Search Feature
- Add save product for user quick access
- Add saved products to the home page

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Environment Variables

#### Bright Data (Used for Data Scraping and Proxying So that Amazon doesn't block the requests)

BRIGHT_DATA_USERNAME=
BRIGHT_DATA_PASSWORD=

#### MongoDB (Used to store the product data)

MONGODB_URI=

#### Clerk Authentication (Used for User Authentication)

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

#### NodeMailer Email Account (Used to send user's notifications)

EMAIL_PASSWORD=

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
