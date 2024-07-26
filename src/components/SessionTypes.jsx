export default function SessionTypes() {
  const scheduleData = [
    {
      icon: <BookIcon className="h-10 w-10 mr-2" />,
      title: 'Keynote Sessions',
      time: '9:00 AM - 10:00 AM',
      description:
        'Join us for a series of inspiring keynote sessions from industry leaders and experts. Learn about the latest trends and insights in the field.',
    },
    {
      icon: <ClipboardIcon className="h-10 w-10 mr-2" />,
      title: 'Fundamental Theory',
      time: '11:00 AM - 12:00 PM',
      description:
        'Dive deep into the fundamental theories and concepts that underpin the field. These sessions will provide a solid foundation for your learning.',
    },
    {
      icon: <HammerIcon className="h-10 w-10 mr-2" />,
      title: 'Hands-on Workshop',
      time: '2:00 PM - 4:00 PM',
      description:
        "Get your hands dirty and apply what you've learned in a series of interactive workshops. Collaborate with your peers and instructors to solve real-world problems.",
    },
    {
      icon: <UsersIcon className="h-10 w-10 mr-2" />,
      title: 'Panel Discussions',
      time: '5:00 PM - 6:00 PM',
      description:
        'Join us for a panel discussion with industry experts, where you can ask questions and engage in thought-provoking conversations about the future of the field.',
    },
  ];
  return (
    <div
      id="sessionType"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-r bg-opacity-90 mb-[120px]"
    >
      <h1 className="text-4xl md:text-6xl font-sans font-medium mb-10 lg:mb-20 text-center text-white">
        Session Types
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {scheduleData.map((item, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center mb-2">
              {item.icon}
              <h2 className="text-2xl lg:text-4xl font-sans font-medium text-white">{item.title}</h2>
            </div>
            <div className="flex justify-start items-center my-4 ml-0">
              <div className="bg-[#222] text-white text-muted-foreground px-5 py-1 rounded-full text-lg font-medium">
                {item.time}
              </div>
            </div>
            <p className="text-xl font-sans text-white">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function HammerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
      <path d="m18 15 4-4" />
      <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
