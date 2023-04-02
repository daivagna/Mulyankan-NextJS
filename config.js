const apiUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:8000/api' // development api
    : 'https://mulyankan-liard.vercel.app/api'; // production api

const SENDGRID_API_KEY='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';

export {
    apiUrl,
    SENDGRID_API_KEY
};