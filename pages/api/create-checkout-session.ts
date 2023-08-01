import type { NextApiRequest, NextApiResponse } from "next";
import { bucket, getFolderName } from "@/utils/awsConstants";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { cart } = JSON.parse(req.body);

  // console.log('cart: ', cart);

  const lineItems = [];
  for (const key in cart) {
    lineItems.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: cart[key].product.title,
          images: [`${bucket}/${getFolderName(cart[key].product.type)}/${
            cart[key].product.id
          }/${cart[key].product.images[0]}`],
        },
        unit_amount: (cart[key].price * 100).toFixed(0),
      },
      quantity: cart[key].number,
    });
  }

  const session = await stripe.checkout.sessions.create({
    line_items: [...lineItems],
    mode: "payment",
    payment_method_types: ["card"], // use localhost:3000 when testing locally
    success_url: 'http://afk-ecommerce.vercel.app' + "?status=success",
    cancel_url: 'http://afk-ecommerce.vercel.app/checkout/cart' + "?status=cancel",
  });

  res.status(200).json({ session });
}