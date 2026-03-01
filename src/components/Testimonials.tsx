import React from "react";
import { motion } from "framer-motion";

export const dummyTestimonials = [
  {
    text: "Atelïr changed my perspective on tattoos. The blackwork is beyond amazing. They truly understand art and expression.",
    image: "https://i.pravatar.cc/150?img=11",
    name: "Alexia M.",
    role: "Client"
  },
  {
    text: "Minimalist fine lines perfectly executed. It's a sanctuary in Brussels. My pieces healed flawlessly.",
    image: "https://i.pravatar.cc/150?img=12",
    name: "Julien T.",
    role: "Collector"
  },
  {
    text: "Incredible vibe, very clean, and extremely professional. The artists take time to listen to your ideas.",
    image: "https://i.pravatar.cc/150?img=32",
    name: "Sophie L.",
    role: "First Tattoo"
  },
  {
    text: "Mastery in every curve indeed. A safe, welcoming space with incredibly talented artists. 10/10 recommended.",
    image: "https://i.pravatar.cc/150?img=43",
    name: "Marc D.",
    role: "Client"
  },
  {
    text: "Getting a blackout piece is a huge commitment, but the team here made the entire process so smooth and easy.",
    image: "https://i.pravatar.cc/150?img=53",
    name: "Kevin B.",
    role: "Collector"
  }
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof dummyTestimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="testimonials-track"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="testimonial-card" key={i}>
                  <div className="testimonial-text">"{text}"</div>
                  <div className="testimonial-author">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="testimonial-avatar"
                    />
                    <div className="testimonial-info">
                      <div className="testimonial-name">{name}</div>
                      <div className="testimonial-role">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <TestimonialsColumn
          testimonials={dummyTestimonials}
          duration={20}
          className="testimonials-col"
        />
        <TestimonialsColumn
          testimonials={[...dummyTestimonials].reverse()}
          duration={25}
          className="testimonials-col hidden-mobile"
        />
        <TestimonialsColumn
          testimonials={dummyTestimonials.slice(2).concat(dummyTestimonials.slice(0, 2))}
          duration={22}
          className="testimonials-col hidden-tablet"
        />
      </div>
    </section>
  );
}
