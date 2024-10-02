import React, { useState, useEffect } from 'react';

const boardMembers = [
  {
    name: "Tom James",
    title: "Chair",
    image: "/images/board-tom-james.png",
    description: "Dr. Thomas James is a professor in the Department of Engineering Management at Rose-Hulman, where he teaches courses in mechanical engineering, accounting, finance, and entrepreneurship. Prof. James received his PhD in Mechanical Engineering and an Executive MBA from Marquette University. He earned an MS in Materials Science from the University of Wisconsin-Milwaukee and a BS Mechanical Engineering from the Milwaukee School of Engineering. Prof. James is a Fellow of the American Society of Mechanical Engineers and is a registered Professional Engineer (PE). Prof. James is also an avid inventor with over two dozen patents, and he has several publications in peer reviewed journals related to his research in biomechanical systems. Prior to joining academia, he worked in the consumer products industry for 13 years, where he was the Director of Engineering at Milwaukee Tool and later joined their parent company, Techtronic Industries, where he was the Senior Vice President of Global Engineering for the power tools division based in Hong Kong."
  },
  {
    name: "Gary Bullock",
    title: "Vice Chair",
    image: "/images/board-gary-bullock.png",
    description: "Gary Bullock is an Electrical Engineer with over 37 years' experience in Applied Research and Systems Engineering. Gary currently serves as Chief Technology Officer for Pierce Aerospace, Inc. He is a graduate TechStars founder and a member/mentor in the Rose-Hulman Sawmill Society. Gary also holds positions on several advisory boards for academia, industry and trade associations, including the Rose-Hulman Alumni Advisory Board. As the mentor of the students forming the organization, he makes a great addition to the Board."
  },
  {
    name: "Ellie Caldwell",
    title: "Treasurer",
    image: "/images/board-ellie-caldwell.png",
    description: "Ellie came to Sackrider & Company in 2004, after working for several years in the Washington, DC office of Clifton Gunderson, LLP. She is a 2001 graduate of Indiana State University. Ellie became a Director at Sackrider & Company in 2020. Ellie's areas of expertise include: assurance services, income tax planning and preparation, accounting software consulting and outsourced controller services. Ellie currently serves as a board member for The Wabash Valley Road Runners (Treasurer), Terre Haute Chamber of Commerce(Treasurer), Wabash Valley Art Spaces (Vice-Chair), and the Vigo County Historical Society (Treasurer). She also serves as a Director of the Trained in Terre Haute Half-Marathon training program. Ellie enjoys spending time with her two sons, running, biking and reading."
  },
  {
    name: "Haiden Smith",
    title: "Secretary",
    image: "/images/board-haiden-smith.png",
    description: "Haiden is a graduate of Rose-Hulman with a bachelor's degree in Electrical Engineering. While at Rose, he held many leadership roles, such as Class President of the Class of 2022. He is also Rose-Hulman's first student to be named a Grand Challenges Scholar. He has played an integral role in the formation of Delta Rho Sigma. As a long-time proponent of starting a business fraternity at Rose, he has served as a mentor for the students starting Delta Rho Sigma. He is now employed at Eli Lilly and a patent law firm and is working towards his master's degree."
  },
  {
    name: "Christian Beadling",
    title: "Member Representative",
    image: "/images/board-christian-beadling.jpg",
    description: "Christian is a junior majoring in Computer Science and Software Engineering at Rose-Hulman Institute of Technology. He is part of the founding team of DRHO, and currently serves as the Vice-President of the Rose-Hulman chapter."
  },
  {
    name: "Ryan Brown",
    title: "Member Representative",
    image: "/images/board-ryan-brown.png",
    description: "Ryan is a junior at Rose-Hulman Institute of Technology. He is studying Computer Science. He has been the President of DRHO during it's second year and currently serves as the treasurer."
  },
  {
    name: "Andrew Nichols",
    title: "Member Representative",
    image: "/images/board-andrew-nichols.png",
    description: "Andrew Nichols is a mechanical engineering student at Rose-Hulman Institute of Technology from Houston, Texas. He is also President of the Delta Rho Sigma chapter at Rose-Hulman and was a member of the original Start-Up Weekend team. Being the owner and founder of the Andrew's Artisan Cakes and Andrew's Artisan Pens businesses, Andrew is an experienced entrepreneur."
  },
  {
    name: "Jack Cooperman",
    title: "Executive Director",
    image: "/images/board-jack-cooperman.png",
    description: "Jack is a junior computer engineering major at Rose-Hulman Institute of Technology. He was the student that led the Start-Up Weekend team to pitch Delta Rho Sigma, and served as President of the Rose-Hulman chapter. He is also the Class of 2025 class president. In his free time, Jack enjoys reading, writing, playing the saxophone, and spending time with his fellow Delta Rho Sigma members. He aspires to a career as an ethical hacker and plans to be a lifelong supporter of Delta Rho Sigma."
  }
];

const BoardMemberCard = ({ name, title, image, description }) => (
  <div 
    className="bg-transparent border-4 border-[#CFA746] rounded-lg shadow-md overflow-hidden" 
    style={{ borderRadius: '15px' }}  // Added 15px border radius for the container
  >
    <div className="flex">
      <img 
        src={image} 
        alt={name} 
        className="w-1/3 h-32 object-cover" 
        style={{ borderBottomRightRadius: '15px' }}  // Rounded bottom-right corner of the image
      />
      <div className="w-2/3 p-4">
        <h2 className="text-xl font-semibold text-white">{name}</h2> {/* Changed text color to white */}
        <h3 className="text-gray-400">{title}</h3> {/* Slightly lighter gray for the title */}
      </div>
    </div>
    <div className="p-4">
      <p 
        className="text-white text-sm h-40 overflow-y-auto description"  // Added "description" class for custom hover behavior
      >
        {description}
      </p>
    </div>
  </div>
);

// CSS
const styles = `
.description {
  scrollbar-width: none; /* Hide scrollbar by default */
}

.description:hover {
  scrollbar-width: auto; /* Show scrollbar on hover */
}

.description::-webkit-scrollbar {
  width: 0; /* Hide scrollbar on WebKit browsers by default */
}

.description:hover::-webkit-scrollbar {
  width: 8px; /* Show scrollbar on hover on WebKit browsers */
}

.description::-webkit-scrollbar-thumb {
  background-color: #9CA3AF; /* Tailwind CSS 'text-gray-400' color */
  border-radius: 10px;
}

.description::-webkit-scrollbar-track {
  background-color: #333; /* Custom scrollbar track color */
}
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);


export const Board = () => {
  const photos = [
    '/images/board-scroll.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
        setIsSliding(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div style={{ backgroundColor: '#363939', width: '100%', margin: 0, padding: 0, minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="mb-12">
        <div className="h-96 flex items-center justify-center relative" style={{ backgroundColor: '#CFA746', overflow: 'hidden', width: '100%' }}>
          <div
            className={`slider ${isSliding ? 'sliding' : ''}`}
            style={{
              display: 'flex',
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${photos.length * 100}%`,
            }}
          >
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover"
                style={{ flex: '0 0 100%' }}
              />
            ))}
          </div>
        </div>
      </section>

      <div style={{ margin: '0 10vw', paddingBottom: '2rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <BoardMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>  
  );
};