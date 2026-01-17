/*
  # Create shopping cart table

  1. New Tables
    - `cart_items`
      - `id` (uuid, primary key)
      - `product_id` (text)
      - `product_title` (text)
      - `collection` (text)
      - `price` (integer)
      - `quantity` (integer)
      - `image` (text)
      - `created_at` (timestamp)
  2. Description
    - Stores shopping cart items for users
    - No authentication required (session-based cart)
*/

CREATE TABLE IF NOT EXISTS cart_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id text NOT NULL,
  product_title text NOT NULL,
  collection text NOT NULL,
  price integer NOT NULL,
  quantity integer NOT NULL DEFAULT 1,
  image text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Cart items are publicly accessible"
  ON cart_items FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can insert cart items"
  ON cart_items FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can update cart items"
  ON cart_items FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can delete cart items"
  ON cart_items FOR DELETE
  TO public
  USING (true);
