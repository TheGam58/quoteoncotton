# Image Upload Guide for Quote on Cotton Website

This guide explains how to add images to your website project.

## Where to Add Images

### 1. **Static Images (Local Files)**

If you want to add local image files to your project:

1. Create an `images` or `assets` folder in the `src` directory:
   ```
   src/
     images/
       your-image.jpg
   ```

2. Import and use the image in your component:
   ```tsx
   import myImage from '../images/your-image.jpg';
   
   // Then use it in JSX:
   <img src={myImage} alt="Description" />
   ```

### 2. **External Images (URLs)**

Currently, the project uses external image URLs from Pexels. You can:

1. **Use existing image URLs** (like in `exploredesigns.tsx`):
   ```tsx
   const imageUrl = 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800';
   ```

2. **Replace with your own image URLs**:
   - Upload images to a hosting service (Imgur, Cloudinary, AWS S3, etc.)
   - Use the provided URL in your code

### 3. **Custom Prints - User Uploaded Images**

The custom prints page (`src/pages/customprints.tsx`) allows users to upload their own images. This feature:
- Accepts JPEG, PNG, GIF, and WebP formats
- Maximum file size: 10MB
- Supports drag & drop
- Shows image preview
- Validates file type and size

**How it works:**
- Users can drag & drop images or click to browse
- Images are converted to base64 data URLs for preview
- Images are stored in the cart as base64 strings

## Adding Images to Specific Sections

### Home Page Collections

Edit `src/componets/Collections.tsx`:
```tsx
const collections: CollectionLink[] = [
  {
    id: 'skull',
    title: 'Skull Collection',
    image: 'YOUR_IMAGE_URL_HERE',  // Replace this
    // ... other properties
  }
];
```

### Explore Designs Page

Edit `src/pages/exploredesigns.tsx`:
```tsx
const designs: Design[] = [
  { 
    image: 'YOUR_IMAGE_URL_HERE',  // Replace this
    collection: 'skull',
    price: 700 
  }
];
```

### Product Pages (Hoodies, Skull Collections)

Edit the respective files:
- `src/pages/hoodies.tsx` - Update `HOODIE_STYLES` array
- `src/pages/skullcollections.tsx` - Update `SKULL_STYLES` array

Example:
```tsx
const HOODIE_STYLES: HoodieStyle[] = [
  {
    id: 'classic',
    name: 'Classic Black Hoodie',
    image: 'YOUR_IMAGE_URL_HERE',  // Replace this
    description: '...'
  }
];
```

## Best Practices

1. **Image Formats:**
   - Use JPEG for photos
   - Use PNG for graphics with transparency
   - Use WebP for better compression (if supported)

2. **Image Sizes:**
   - Recommended: 800-1200px width for product images
   - Use responsive images with appropriate sizing
   - Optimize images before uploading (compress to reduce file size)

3. **Image Hosting:**
   - For production, use a CDN or image hosting service
   - Consider using services like:
     - Cloudinary
     - AWS S3 + CloudFront
     - Imgur
     - Supabase Storage (if using Supabase)

4. **Alt Text:**
   - Always include descriptive `alt` text for accessibility
   - Example: `<img src="..." alt="Classic Black Hoodie with Skull Design" />`

## Using Supabase Storage (Recommended for Production)

If you're using Supabase, you can store images in Supabase Storage:

1. **Upload to Supabase:**
   ```typescript
   import { supabase } from './supabaseClient';
   
   const uploadImage = async (file: File) => {
     const { data, error } = await supabase.storage
       .from('product-images')
       .upload(`${Date.now()}-${file.name}`, file);
     
     if (error) throw error;
     return data;
   };
   ```

2. **Get Public URL:**
   ```typescript
   const getImageUrl = (path: string) => {
     const { data } = supabase.storage
       .from('product-images')
       .getPublicUrl(path);
     return data.publicUrl;
   };
   ```

## Example: Adding a New Product Image

1. **Prepare your image:**
   - Resize to 800-1200px width
   - Compress the file
   - Save as JPEG or PNG

2. **Add to your code:**
   ```tsx
   // In hoodies.tsx
   {
     id: 'new-style',
     name: 'New Style Hoodie',
     image: 'https://your-image-host.com/path/to/image.jpg',
     description: 'Description of the new style'
   }
   ```

3. **Test locally:**
   - Run `npm run dev`
   - Navigate to the page
   - Verify the image loads correctly

## Troubleshooting

- **Image not loading:** Check the URL is correct and accessible
- **CORS errors:** Ensure your image host allows cross-origin requests
- **Large file sizes:** Compress images before using
- **Slow loading:** Use image optimization or a CDN
