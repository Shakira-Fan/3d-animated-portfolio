import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { motion } from "motion/react";
import { heroArtwork, works } from "../../content";
import Shape from "./Shape";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="heroArtwork" aria-hidden="true">
        <img src={heroArtwork.image} alt="" />
      </div>

      <div className="heroScene" aria-hidden="true">
        <Canvas>
          <Suspense fallback={null}>
            <Shape />
          </Suspense>
        </Canvas>
      </div>

      <div className="heroShade" />

      <div className="section-inner heroInner">
        <motion.div
          className="heroCopy"
          initial={{ y: 36, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="eyebrow">Wall / wear / object</p>
          <h1 className="spray-title">
            Art that wants
            <span className="marker"> a surface.</span>
          </h1>
          <p className="heroLead">
            A living archive for raw character art, graffiti marks, poster
            graphics, and the objects that can carry them into the world.
          </p>
          <div className="heroActions">
            <a href="#objects">View 3D objects</a>
            <a href="#works">Browse works</a>
          </div>
        </motion.div>

        <motion.aside
          className="heroCard"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
        >
          <span>Current archive</span>
          <strong>{works.length + 1} pieces</strong>
          <p>
            {heroArtwork.title}, murals, shirt prints, skateboard graphics, and
            small object studies.
          </p>
        </motion.aside>
      </div>
    </section>
  );
};

export default Hero;
