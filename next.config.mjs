/** @type {import('next').NextConfig} */
const nextConfig = {
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
          'https://drive.google.com/file/d/1lpezW5KzsP82Ku5ECwhUA2tfBuGp1U5K/view?usp=drive_link',
        permanent: false,
      },
      {
        source: '/cfs',
        destination:
          'https://drive.google.com/file/d/1qBIZWryww6nAM47n4d31E-kMNwu6Yevp/view?usp=drive_link',
        permanent: false,
      },
      {
        source: '/promo',
        destination:
          'https://drive.google.com/file/d/1kx2dvwie4yqe2rFAnEnteCadNF5g7Of_/view?usp=drive_link',
        permanent: false,
      },
      {
        source: '/brochure',
        destination:
          'https://drive.google.com/file/d/19VHPzwg-9_S-TlF4yX5konH3Z9WZlRRV/view?usp=drive_link',
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
