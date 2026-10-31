# Mohammed Salma - Portfolio

My personal portfolio site, in English and Arabic, built with React and Vite.

- Language toggle with full right-to-left layout for Arabic
- A hero styled after the queue-management displays I set up at Modern Technology
- Projects: an e-commerce store (React, Laravel, Stripe) and Masar, my graduation project
- CV downloads in both languages

## Run locally

```bash
npm install
npm run dev
```

## Edit the content

All text lives in `src/content.js`, with an `en` and an `ar` section. Images go in `public/projects/`, CV files in `public/cv/`.

## Contact form

The form sends messages to your inbox through [Web3Forms](https://web3forms.com) (free).

Messages arrive at the email the Web3Forms account was created with. The access key is set in
`src/components/Contact.jsx`. It is a public key, safe to keep in client code. To switch keys without
editing code, put `VITE_WEB3FORMS_KEY=...` in a `.env` file (and in Vercel's Environment Variables).

## Deploy

Push to GitHub and import the repository on [Vercel](https://vercel.com). Vercel detects Vite automatically: build command `npm run build`, output folder `dist`.
