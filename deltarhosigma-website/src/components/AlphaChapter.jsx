import React, { useState, useEffect } from 'react';

const ChapterInfo = ({ name, description, photoSrc, photoOnRight }) => (
  <div className={`flex items-center mb-8 ${photoOnRight ? 'flex-row-reverse' : ''}`}>
    <div className={`w-1/5 ${photoOnRight ? 'ml-4' : 'mr-4'}`}>
      <img src={photoSrc} alt={name} className="rounded-lg w-full h-auto" />
    </div>
    <div className="w-4/5">
      <h2 className="text-xl font-bold mb-2 text-white">{name}</h2>
      <p className="text-white">{description}</p>
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

      {/* Chapter Info Section */}
      <div style={{ margin: '0 10vw', paddingBottom: '2rem' }}>
        <section className="mb-12">
          <ChapterInfo
            name="Nate King"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius sagittis dui nec aliquam. Pellentesque nunc dolor, dapibus at vehicula nec, pulvinar quis ligula."
            photoSrc="/images/chapter-a-person-1.jpg"
            photoOnRight={false}
          />
        </section>

        <section className="mb-12">
          <ChapterInfo
            name="Alex Johnson"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius sagittis dui nec aliquam. Pellentesque nunc dolor, dapibus at vehicula nec, pulvinar quis ligula."
            photoSrc="/images/chapter-a-person-2.jpg"
            photoOnRight={true}
          />
        </section>

        <section className="mb-12">
          <ChapterInfo
            name="Sam Taylor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius sagittis dui nec aliquam. Pellentesque nunc dolor, dapibus at vehicula nec, pulvinar quis ligula."
            photoSrc="/images/chapter-a-person-3.jpg"
            photoOnRight={false}
          />
        </section>
      </div>
    </div>
  );
};