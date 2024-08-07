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
          'https://drive.google.com/file/d/1BFzPUQeP3Bg4bWRCpgaFdn0aDFhkdDEC/view?usp=drive_link',
        permanent: false,
      },
      {
        source: '/cfs',
        destination:
          'https://drive.google.com/file/d/1soWn87dbySO8v0jkYYRvnd-r4p8TLb41/view?usp=drive_link',
        permanent: false,
      },
      {
        source: '/promo',
        destination:
          'https://drive.google.com/file/d/1UFZy_bTjjfhSDbQqvmb320T1tQrQJrbS/view?usp=sharing',
        permanent: false,
      },
      {
        source: '/brochure',
        destination:
          'https://drive.google.com/file/d/1fa5Zmy4cOSogwEWpy-PuJLb28t_OUOpa/view?usp=sharing',
        permanent: false,
      },
      {
        source: '/register',
        destination:
          'https://docs.google.com/forms/d/e/1FAIpQLSd5Di8MKfGigs0tGXBXriaJmZqWgvu0FmbXOUwwGC4ypBAB2g/viewform?usp=sf_link',
        permanent: false,
      },
      {
        source: '/hackathon',
        destination:
          'https://drive.google.com/file/d/1-ErCH16EsNWvVS0AeqMPO_bIjVjnAe58/view?usp=sharing',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
