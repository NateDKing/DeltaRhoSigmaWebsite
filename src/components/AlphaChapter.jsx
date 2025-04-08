import React, { useState, useEffect } from 'react';

const ChapterInfo = ({ name, role, description, photoSrc, photoOnRight }) => (
  <div className={`flex items-center mb-8 ${photoOnRight ? 'flex-row-reverse' : ''}`}>
    <div className={`w-1/5 ${photoOnRight ? 'ml-4' : 'mr-4'}`}>
      <img src={photoSrc} alt={name} className="rounded-lg w-full h-auto" />
    </div>
    <div className="w-4/5">
      <h2 className="text-xl font-bold mb-2 text-white">{name}</h2>
      <h3 className="text-lg font-semibold mb-2 text-gray-300">{role}</h3>
      <blockquote className="text-white">
        "{description}"
        <footer className="text-sm text-gray-400">— {name}</footer>
      </blockquote>
    </div>
  </div>
);

export const AlphaChapter = () => {
  const photos = [
    '/images/chapter-a-main.jpg'
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
    <div className="m-0 p-0 min-h-screen">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="max-h-96 flex items-center justify-center relative overflow-hidden bg-primary-gray">
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

      {/* Chapter Info Section */}
      <div className="mx-10vw mb-2rem">
      <section className="mb-12 inline">
        <ChapterInfo
          name="Andrew Nichols"
          role="President"
          description="As an engineer, I love solving problems, and through entrepreneurship, I can address the challenges that matter most to me, while creating value for others. Delta Rho Sigma empowers me and others to turn these solutions into impactful ventures."
          photoSrc="/images/chapter-a-andrew-nichols.png"
          photoOnRight={false}
        />
      </section>

        <section className="mb-12">
          <ChapterInfo
            name="Christian Beadling"
            role="Vice President"
            description="As engineers we know how to speak theory. That gets you nowhere as an entrepreneur. Entrepreneurs need an action-focused mindset, and Delta Rho Sigma is the best place on campus to push you into action."
            photoSrc="/images/chapter-a-christian-beadling.jpg"
            photoOnRight={true}
          />
        </section>

        <section className="mb-12">
          <ChapterInfo
            name="Ryan Brown"
            role="Treasurer"
            description="Becoming an engineer teaches us to solve a multitude of problems, but what it lacks is how to identify problems in the first place. Becoming entrepreneurial has enabled me to see opportunities I wouldn't have before. Delta Rho Sigma has opened up the path for becoming an entrepreneur, and has allowed me to walk it with like minded people who I would otherwise not have had a chance to meet."
            photoSrc="/images/chapter-a-ryan-brown.png"
            photoOnRight={false}
          />
        </section>

        <section className="mb-12">
          <ChapterInfo
            name="Ethan Schurr"
            role="Secretary"
            description="As a software engineer, I must consistently keep an open mindset for new languages to learn. Delta Rho Sigma provides a firsthand approach to learning the language of entrepreneurs, so long as they provide the adequate time."
            photoSrc="/images/chapter-a-ethan-schurr.jpg"
            photoOnRight={true}
          />
        </section>

        <section className="mb-12">
          <ChapterInfo
            name="Jack Cooperman"
            role="Rush Chair"
            description="Delta Rho Sigma aspires to empower STEM-focused college students to make startups to showcase their unique talents and high level engineering skills. We provide mentorship and capital to make our members' goals a reality."
            photoSrc="/images/chapter-a-jack-cooperman.png"
            photoOnRight={false}
          />
        </section>

        <section className="mb-12">
          <ChapterInfo
            name="Jacob Cockerill"
            role="Event Coordinator"
            description="Engineers are half scientists and half artists. The role of the engineer is to passionately solve problems with the skepticism of a scientist, and the creativity of an artist. Within the current framework, it is difficult to achieve my fullest potential of this definition. Delta Rho Sigma provides a space to fully explore the boundaries of this definition."
            photoSrc="/images/chapter-a-jacob-cockerill.jpg"
            photoOnRight={true}
          />
        </section>

        <section className="mb-12">
          <ChapterInfo
            name="Nate King"
            role="Webmaster"
            description="While engineering teaches us the importance of precision, Delta Rho Sigma helps us recognize the value of taking initiative and transforming technical ideas into viable business projects."
            photoSrc="/images/chapter-a-nate-king.jpg"
            photoOnRight={false}
          />
        </section>

        <section className="mb-12">
          <ChapterInfo
            name="Deven Wells"
            role="Alumni relations"
            description="Although I am pursuing a top engineering degree, the skills and lessons I've learned from my entrepreneurial ventures have propelled me toward my goals and provided keys to success that I believe my education alone could not have offered."
            photoSrc="/images/chapter-a-deven-wells.jpg"
            photoOnRight={true}
          />
        </section>

        <section className="mb-12">
          <ChapterInfo
            name="Elijah Johnson"
            role="Chief Mentor"
            description="Being an entrepreneur is learning how to grow, but sometimes growth can be painful and challenging. When you're struggling to overcome these challenges, there are few things more encouraging than a group of individuals by your side to help you navigate the storm. Delta Rho Sigma brings together a family of people who have not only an exceptional toolbox of technical skills, but also an unmatched entrepreneurial ambition."
            photoSrc="/images/chapter-a-elijah-johnson.jpg"
            photoOnRight={false}
          />
        </section>
      </div>
    </div>
  );
};
