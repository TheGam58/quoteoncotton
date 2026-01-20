# How to Enable Email Notifications for Orders

Since we are using Netlify Forms to handle order submissions, you can easily set up email notifications to receive an email whenever someone places an order.

## Steps to Enable Notifications

1. **Deploy your site to Netlify**:
   - Ensure your latest code (with the form changes) is deployed.
   - You can verify this by going to your Netlify dashboard and checking the "Forms" tab for your site. You should see an active form named `order`.

2. **Go to Site Settings**:
   - In your Netlify dashboard, click on **Site configuration**.

3. **Navigate to Forms**:
   - In the left sidebar, click on **Forms**.
   - Then click on **Form notifications**.

4. **Add a Notification**:
   - Click **Add notification**.
   - Select **Email notification**.
   - **Event**: New form submission.
   - **Email to notify**: Enter `mka098735@gmail.com`.
   - **Form**: Select `order` (or "Any form").
   - Click **Save**.

## Testing

1. Go to your live website.
2. Add items to the cart and proceed to checkout.
3. Fill in the details and click "Place Order".
4. You should see the "Order Confirmed" screen on the website.
5. Check your email (`mka098735@gmail.com`). You should receive a notification from Netlify with the order details within a few minutes.
