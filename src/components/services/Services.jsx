import { useState } from "react";
import { motion } from "motion/react";
import { surfaces } from "../../content";
import LighterModelContainer from "./lighter/LighterModelContainer";
import SkatiedModelContainer from "./skatie/SkatieModelContainer";
import TShirtModelContainer from "./tShirt/TShirtModelContainer";
import "./services.css";

const objectTabs = [
  {
    id: "skateboard",
    label: "Skateboard",
    title: "Deck graphics",
    text: "Long compositions, stickers, tags, and character fragments feel natural on a board.",
    Model: SkatiedModelContainer,
  },
  {
    id: "shirt",
    label: "T-shirt",
    title: "Wearable prints",
    text: "The poster-like pieces can become front graphics, back prints, or limited drops.",
    Model: TShirtModelContainer,
  },
  {
    id: "lighter",
    label: "Lighter",
    title: "Pocket object",
    text: "Small objects work as collectible studies for logos, tags, and cropped faces.",
    Model: LighterModelContainer,
  },
];

const Services = () => {
  const [activeObject, setActiveObject] = useState(objectTabs[0]);
  const ActiveModel = activeObject.Model;

  return (
    <section className="surfaces" id="objects">
      <div className="section-inner surfacesIntro">
        <div>
          <p className="eyebrow">Surface system</p>
          <h2 className="spray-title">
            From wall to <span className="marker">thing.</span>
          </h2>
        </div>
        <p>
          The site is rebuilt around where the art actually belongs: painted
          walls, clothes, decks, and small objects. The 3D area makes those
          surfaces feel tangible.
        </p>
      </div>

      <div className="section-inner surfaceGrid">
        {surfaces.map((surface, index) => (
          <motion.article
            className="surfaceCard"
            key={surface.id}
            initial={{ y: 32, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
          >
            <span>{surface.label}</span>
            <h3>{surface.title}</h3>
            <p>{surface.copy}</p>
          </motion.article>
        ))}
      </div>

      <div className="section-inner objectLab">
        <div className="objectCopy">
          <p className="eyebrow">3D object lab</p>
          <h2>{activeObject.title}</h2>
          <p>{activeObject.text}</p>
          <div className="objectTabs" role="tablist" aria-label="3D object type">
            {objectTabs.map((tab) => (
              <button
                className={tab.id === activeObject.id ? "active" : ""}
                key={tab.id}
                type="button"
                onClick={() => setActiveObject(tab)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="modelStage">
          <ActiveModel />
        </div>
      </div>
    </section>
  );
};

export default Services;
