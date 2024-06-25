/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  distDir: './dist', // Changes the build output directory to `./dist/`.
  async redirects() {
    return [
      {
        source: '/whatsapp',
        destination: 'https://chat.whatsapp.com/IB17XyKKIvx2uo0i5DYDTS',
        permanent: false,
      },
      {
        source: '/pitch',
        destination:
          'https://drive.google.com/file/d/1dwiyvYdlGzo_qKJgDk1rVLfYSY-cBPYx/view?usp=drive_link',
        permanent: false,
      },
      {
        source: '/cfs',
        destination:
          'https://drive.google.com/file/d/1GHNlv66omIWsknBeFpmgniWPgiENa4Mj/view?usp=drive_link',
        permanent: false,
      },
      {
        source: '/promo',
        destination:
          'https://drive.google.com/file/d/16HDNVGTlzIlti3GFfH4VXFWqDIJRG2Vz/view?usp=drive_link',
        permanent: false,
      },
      {
        source: '/brochure',
        destination:
          'https://drive.google.com/file/d/1sYzc6FaMd4S0wvNOjk7_kjvA4kbmOHCg/view?usp=drive_link',
        permanent: false,
      },
      {
        source: '/register',
        destination:
          'https://docs.google.com/forms/d/e/1FAIpQLSd5Di8MKfGigs0tGXBXriaJmZqWgvu0FmbXOUwwGC4ypBAB2g/viewform?usp=sf_link',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
