import Card from "./components/Card";
import { cardsList } from "./assets/cardsList";
import { useScroll } from "framer-motion";
import { useRef } from "react";

function App() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // useEffect(() => {
  //   scrollYProgress.on("change", () =>
  //     console.log("scrollYProgress", scrollYProgress.current)
  //   );

  //   return () => {
  //     // scrollYProgress.destroy()
  //   };
  // }, []);

  return (
    <div ref={containerRef} className="mt-[40vh] mb-[50vh]">
      <div className="flex items-center justify-center gap-3">
        <h1 className="mb-10 text-6xl font-extrabold text-center">
          Cards Parallax effect
        </h1>
        <div className="rotate-45">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-corner-right-down"
          >
            <polyline points="10 15 15 20 20 15" />
            <path d="M4 4h7a4 4 0 0 1 4 4v12" />
          </svg>
        </div>
      </div>
      {cardsList?.map((card, index) => {
        const targetScale = 1 - (cardsList.length - index) * 0.05;
        return (
          <Card
            key={card?.id || index}
            index={index}
            targetScale={targetScale}
            range={[index * 0.25, 1]}
            progress={scrollYProgress}
            {...card}
          />
        );
      })}
    </div>
  );
}

export default App;
