import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Card = ({
  id,
  index,
  title,
  description,
  image,
  link,
  color,
  targetScale,
  range,
  progress,
}) => {
  const cardContainerRef = useRef(null);
  //   const [scrollYProgress] = useScroll({
  //     target: cardContainerRef,
  //     offset: ["start end", "end start"],
  //   });

  const { scrollYProgress } = useScroll();

  const reversedScaleForImage = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={cardContainerRef}
      className={`h-screen w-full sticky top-0 flex items-center justify-center`}
    >
      <motion.div
        className={`p-6 flex flex-col gap-6 mx-auto max-w-[60%] min-w-[500px] h-[400px] relative rounded-2xl`}
        style={{
          backgroundColor: color,
          scale: cardScale,
          top: `calc(-5% + ${index * 25}px`,
        }}
      >
        <h2 className="w-full text-center text-2xl font-semibold">
          {title || "-"}
        </h2>
        <div className="h-full flex items-center justify-center gap-5">
          <div className="w-1/2 h-full">
            <p className="mb-4">{description || "-"}</p>
            <a className="text-blue-600 underline font-medium" href={link}>
              Read more
            </a>
          </div>
          <div className="relative h-full w-1/2 rounded-2xl overflow-hidden">
            <motion.div
              style={{ scale: reversedScaleForImage }}
              className="h-full w-full"
            >
              <img
                className="h-full w-full object-cover"
                src={image}
                alt={title}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
