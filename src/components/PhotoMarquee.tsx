import React from "react";
import { motion } from "framer-motion";

export const PhotoColumn = (props: {
  className?: string;
  images: string[];
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
        className="photo-column-track"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.images.map((image, i) => (
                <div className="photo-card" key={i}>
                  <img
                    src={image}
                    alt="Portfolio Piece"
                    className="portfolio-img"
                  />
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
