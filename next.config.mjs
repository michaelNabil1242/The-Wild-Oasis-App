/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kayzjwnvzupfvvuyqxnm.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  //if all you have is static pages, you can deploy them and host them anywhere without the need of a node server (like on netlify or vercel static hosting)
  // output: "export",
};

export default nextConfig;
