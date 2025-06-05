
const isNetlify = () => {
  return typeof window !== 'undefined' && window.location.hostname.includes('netlify');
};

export const getImageUrl = (imagePath: string, options?: { w?: number; h?: number; fit?: string }) => {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // If on Netlify and options provided, use CDN
  if (isNetlify() && options) {
    const params = new URLSearchParams();
    params.append('url', `/${cleanPath}`);
    if (options.w) params.append('w', options.w.toString());
    if (options.h) params.append('h', options.h.toString());
    if (options.fit) params.append('fit', options.fit);
    
    return `/.netlify/images?${params.toString()}`;
  }
  
  // Fallback to original path for local development
  return `/${cleanPath}`;
};
