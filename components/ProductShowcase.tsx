"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const ResidentArtists = () => {
  const artists = [
    {
      id: 1,
      name: "Elena Vasquez",
      specialty: "Sculptural Furniture",
      location: "Barcelona, Spain",
      story:
        "Elena transforms raw materials into poetic forms that blur the line between furniture and art. Her architectural background infuses each piece with structural integrity while maintaining an organic, flowing aesthetic.",
      signature: "Flowing Stones Collection",
      image: "/images/artist_elena.JPG",
      artwork: "/images/about-background.jpeg",
    },
  ];

  return (
    <section
      id="collections"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/aurelia-sketch.png"
          alt="Aurelia Sketch Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 mb-6">
            Resident Artists
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            At Aurelia, we embrace an artist-first mindset. Our resident artists
            are the heart of our creative process, where each collaboration
            births unique furniture and decorative pieces built around their
            stories, vision, and artistic journey.
          </p>
        </motion.div>

        {/* Artist Showcase */}
        <div className="max-w-4xl mx-auto">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Artist Portrait */}
              <div className="relative">
                <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Artist Artwork */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={artist.artwork}
                    alt={`${artist.signature} by ${artist.name}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Artist Story */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-light text-neutral-900 mb-2">
                    {artist.name}
                  </h3>
                  <p className="text-lg text-primary-700 mb-1">
                    {artist.specialty}
                  </p>
                  <p className="text-sm text-neutral-500 uppercase tracking-wide">
                    {artist.location}
                  </p>
                </div>

                <p className="text-lg text-neutral-600 leading-relaxed">
                  {artist.story}
                </p>

                <div className="pt-4">
                  <p className="text-sm text-neutral-500 uppercase tracking-wide mb-2">
                    Signature Collection
                  </p>
                  <p className="text-xl font-light text-neutral-900">
                    {artist.signature}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <button className="bg-primary-900 hover:bg-primary-800 text-white px-8 py-4 font-normal flex items-center space-x-3 mx-auto transition-colors duration-200 hover-minimal">
            <span>Meet All Artists</span>
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResidentArtists;
