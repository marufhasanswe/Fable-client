import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { auth } from "@/lib/auth";

export async function POST(request) {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");

    const userSession = await auth.api.getSession({
      headers: await headers(),
    });

    if (!userSession?.user) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const user = userSession?.user;
    const formData = await request.formData();
    const ebookId = formData.get("ebookId");
    const ebookTitle = formData.get("ebookTitle");
    const writerId = formData.get("writerId");
    const writerName = formData.get("writerName");
    const amount = formData.get("amount");

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      customer_email: user.email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: Number(amount) * 100,
            product_data: {
              name: ebookTitle,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        ebookId,
        ebookTitle,
        buyerId: user?.id,
        buyerEmail: user?.email,
        writerId,
        writerName,
        amount,
      },
      mode: "payment",
      success_url: `${origin}/browse-ebooks/payment-success?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 },
    );
  }
}
