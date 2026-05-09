import React from 'react';

const InfoCard = ({ title, description }) => (
  <div className="flex flex-col bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 lg:p-12 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
    {/* Header: Fixed height on desktop can help alignment, but mb-8 is standard */}
    <h3 className="font-mono text-[0.75rem] md:text-[0.8rem] uppercase tracking-[0.2em] mb-6 md:mb-8 leading-relaxed text-gray-900 font-bold">
      {title}
    </h3>
    
    {/* Body: Leading-relaxed for better legibility */}
    <p className="text-[1rem] md:text-[1.05rem] leading-[1.6] text-gray-700 font-normal">
      {description}
    </p>
  </div>
);

export default function ValuesSection() {
  const values = [
    {
      title: "Wear All Day Comfort",
      description: "Lightweight, bouncy, and wildly comfortable, our shoes make any outing feel effortless. Slip in, lace up, or slide them on and enjoy the comfy support."
    },
    {
      title: "Sustainability In Every Step",
      description: "From materials to transport, we're working to reduce our carbon footprint to near zero. Holding ourselves accountable and striving for climate goals isn't a 30-year goal—it's now."
    },
    {
      title: "Materials From The Earth",
      description: "We replace petroleum-based synthetics with natural alternatives wherever we can. Like using wool, tree fiber, and sugarcane. They're soft, breathable, and better for the planet."
    }
  ];

  return (
    /* py-12 md:py-20 ensures good vertical breathing room on all devices */
    <div className="bg-[#f5f2ed] py-11 md:py-17 px-4 sm:px-8"> 
      <section className="mx-auto max-w-7xl">
        {/* Grid Logic:
            - 1 column on mobile
            - Gap increases as screen gets bigger (gap-4 to gap-8)
            - md:grid-cols-3 for tablet and up
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((val, index) => (
            <InfoCard 
              key={index} 
              title={val.title} 
              description={val.description} 
            />
          ))}
        </div>
      </section>
    </div>
  );
}