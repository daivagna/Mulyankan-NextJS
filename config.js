const apiUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:8000/api' // development api
    : 'https://mulyankan-liard.vercel.app/api'; // production api

const SENDGRID_API_KEY='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';

export {
    apiUrl,
    SENDGRID_API_KEY
};