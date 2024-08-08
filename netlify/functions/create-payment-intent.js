require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (request) => {
    try {
        console.log('entering the netlify function!!');
        const { amount } = JSON.parse(request.body);
        const paymentIntent = await stripe.paymentIntents.create({
            shipping: {
                name: 'Jenny Rosen',
                address: {
                  line1: '510 Townsend St',
                  postal_code: '98140',
                  city: 'San Francisco',
                  state: 'CA',
                  country: 'US',
                },
            },
            description: "payment description",
            amount,
            currency: "usd",
            payment_method_types: ["card"]
          });

          return {
            statusCode: 200,
            body: JSON.stringify({
                paymentIntent
            })
          }
    } catch(error) {
        console.log({error});
        return {
            statusCode: 400,
            body: JSON.stringify({error})
        }
    }
}