import React from "react";
import "./Leafpanel.css";

const plants = [
  ["/leafpanel/plant-pothos.png", "Pothos", "Fancy greens"],
  ["/leafpanel/plant-syngonium.png", "Syngonium", "Air-purification"],
  ["/leafpanel/plant-petunia.png", "Petunia", "Flowering"],
  ["/leafpanel/plant-birkin.png", "Birkin", "Fancy greens"],
  ["/leafpanel/plant-aglaonema.png", "Aglaonema", "Air-purification"],
  ["/leafpanel/plant-cherry-tomato.png", "Cherry tomato", "Edibles"],
  ["/leafpanel/plant-marantus.png", "Marantus", "Fancy greens"],
  ["/leafpanel/plant-snake.png", "Snake plant", "Air-purification"],
  ["/leafpanel/italian-basil.png", "Italian Basil", "Edibles"],
  ["/leafpanel/kalanchoe.png", "Kalanchoe", "Flowering"],
  ["/leafpanel/lettuce.png", "Lettuce", "Edibles"],
];

const Leafpanel: React.FC = () => (
  <main className="leafpanel-page">
    <section className="leafpanel-hero">
      <img className="leafpanel-hero-image" src="/leafpanel/hero-leafpanel.png" alt="A Leafpanel green wall illuminated by its grow light" />
      <div className="leafpanel-hero-shade" />
      <div className="leafpanel-hero-copy">
        <img className="leafpanel-hero-logo" src="/wegro-logo-white.svg" alt="Wegro" />
        <h1>leafpanel</h1>
        <p>Smart Plug &amp; Play Greenwalls</p>
        <a href="https://forms.gle/huRMTgAdArwFu6pj6" target="_blank" rel="noreferrer" className="leafpanel-button">Order Now</a>
      </div>
    </section>

    <section className="leafpanel-intro">
      <div className="leafpanel-intro-quote" aria-hidden="true">“</div>
      <div className="leafpanel-intro-message">
        <h2>We shape our <em>buildings</em>; thereafter they <em>shape us</em>.</h2>
        <p className="leafpanel-attribution">Winston Churchill</p>
        <div className="leafpanel-intro-copy">
          <p>The spaces we occupy influence how we think, feel, collaborate, and perform.</p>
          <p>As our urban habitats evolve, <em>Nature</em> is increasingly becoming an essential part of how built-environments are designed—not merely as decoration, but as infrastructure for <em>Wellbeing</em>.</p>
          <p><strong>Leafpanel</strong> brings living greenery into the spaces where people work, meet, and gather.</p>
        </div>
      </div>
      {/* <div className="leafpanel-intro-gallery" aria-label="Leafpanel in use">
        <img className="leafpanel-intro-detail" src="/leafpanel/intro-detail.png" alt="Leafpanel planting detail" />
        <img className="leafpanel-intro-wide" src="/leafpanel/intro-wide.png" alt="Leafpanel green wall in an interior" />
        <img className="leafpanel-intro-tall" src="/leafpanel/intro-tall.png" alt="Leafpanel green wall installation" />
      </div> */}
    </section>

    <section className="leafpanel-problem">
      <img className="leafpanel-problem-background" src="/leafpanel/problem-background.png" alt="A workplace without greenery" />
      <div className="leafpanel-problem-overlay" />
      <div className="leafpanel-problem-content">
        <h2>Is Your Space Designed for People or Just Furniture?</h2>
        <p className="leafpanel-problem-callout">Spaces without greenery report higher stress, lower focus, and reduced wellbeing. Nature isn&apos;t a luxury in a workspace. It&apos;s infrastructure!</p>
        <p className="leafpanel-problem-label">Studies reveal:</p>
        <div className="leafpanel-stats">
          <div><strong>2–8X</strong><span>higher levels of pollutants in indoor air</span></div>
          <div><strong>6–9%</strong><span>drop in productivity from stale indoor air</span></div>
          <div><strong>15%</strong><span>of sick leaves are linked to poor air quality</span></div>
          <div><strong>2/3</strong><span>indoor plants die within 1 month of adoption</span></div>
        </div>
        <a href="#details" className="leafpanel-text-link">Let’s bring Nature Inside!</a>
      </div>
    </section>

    <section id="details" className="leafpanel-details lp-section">
      <div className="leafpanel-details-copy">
        <p className="eyebrow">INTRODUCING</p>
        <h2>Leafpanel</h2>
        <p>Plug-and-play aeroponic green wall that transforms any vertical surface into a thriving, living ecosystem.</p>
        <strong>Zero floorspace. No hassle. Only delight.</strong>
        <div className="leafpanel-steps">
          <span><b aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 4h16v12H4V4zm2 2v8h12V6H6zm-2 12h16v2H4z" /></svg></b>Install<small>on wall or<br />floor trolley</small></span>
          <span><b aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg></b>Add<small>plants, water &amp;<br />liquid nutrients</small></span>
          <span><b aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M11 3h2v10h-2V3zm1 18a9 9 0 0 1-5.66-16l1.42 1.42A7 7 0 1 0 15.24 6L16.66 4A9 9 0 0 1 12 21z" /></svg></b>Power on<small>and Enjoy</small></span>
        </div>
      </div>
      <div className="leafpanel-product-stage">
        <img className="leafpanel-product-image" src="/leafpanel/lp details.png" alt="Leafpanel living green wall" />
        
      </div>
    </section>

    <section className="leafpanel-science">
      <div>
        <p className="eyebrow">THE SCIENCE BEHIND</p>
        <h2>Healthy green walls, made effortless.</h2>
        <p>Automated grow lights, app-based care, a concealed water tank, and precision irrigation work together to help your plants flourish.</p>
        <div className="leafpanel-metrics"><span><b>90%</b> less water</span><span><b>30%</b> faster growth</span><span><b>80%</b> less effort</span></div>
      </div>
      <img src="/leafpanel/science.png" alt="Close-up of Leafpanel technology" />
    </section>

    {/* <section className="leafpanel-compare lp-section">
      <div className="leafpanel-compare-image">
        <img src="/leafpanel/stand-out.png" alt="Regular planters and green walls with wilted plants" />
      </div>
      <div className="leafpanel-compare-old-way">
        <div className="leafpanel-compare-heading"><p className="eyebrow">REGULAR PLANTERS &amp; GREEN WALLS</p></div>
        <div className="leafpanel-compare-old-table">
          {comparisons.map(([oldWay]) => <div className="leafpanel-compare-old-row" key={oldWay}>{oldWay}</div>)}
        </div>
      </div>
      <div className="leafpanel-compare-panel">
        <h2>How we<br />Stand out</h2>
        <div className="leafpanel-compare-table">
          {comparisons.map(([, leafpanelWay, note]) => <div className="leafpanel-compare-row" key={leafpanelWay}><b>{leafpanelWay}</b><small>{note}</small></div>)}
        </div>
      </div>
    </section> */}

    <section className="leafpanel-plants">
      <div className="leafpanel-plants-intro"><p className="eyebrow">THE LEAFPANEL PLANT COLLECTION</p><h2>Plants</h2><p>Choose from a diverse collection of plants, all compatible with the Wegro Leafpanel ecosystem.</p></div>
      <div className="leafpanel-plant-categories">
        <article className="leafpanel-plant-category-group fancy">
          <h3>Fancy greens</h3>
          <div className="leafpanel-plant-cards">
            {[plants[0], plants[3], plants[6]].map(([src, name]) => <figure className="leafpanel-plant-card" key={name}><img src={src} alt={name} /><figcaption>{name}</figcaption></figure>)}
          </div>
          <p className="leafpanel-plant-list">Chlorophytum <span>Chamaedorea Palm</span> <span>Broken-heart</span> <span>Stapelia</span></p>
        </article>
        <article className="leafpanel-plant-category-group air">
          <h3>Air purification</h3>
          <div className="leafpanel-plant-cards">
            {[plants[1], plants[7], plants[4]].map(([src, name]) => <figure className="leafpanel-plant-card" key={name}><img src={src} alt={name} /><figcaption>{name}</figcaption></figure>)}
          </div>
          <p className="leafpanel-plant-list">Philodendron <span>Oxcardium</span> <span>Syngonium</span> <span>ZZ Plant</span> <span>Calathea</span> <span>Maranta</span></p>
        </article>
        <article className="leafpanel-plant-category-group flowering">
          <h3>Flowering plants</h3>
          <div className="leafpanel-plant-cards">
            {[plants[2], plants[9]].map(([src, name]) => <figure className="leafpanel-plant-card" key={name}><img src={src} alt={name} /><figcaption>{name}</figcaption></figure>)}
          </div>
          <p className="leafpanel-plant-list">Petunia <span>Zinnia</span> <span>Geranium</span></p>
        </article>
        <article className="leafpanel-plant-category-group edibles">
          <h3>Edibles</h3>
          <div className="leafpanel-plant-cards">
            {[plants[8], plants[5], plants[10]].map(([src, name]) => <figure className="leafpanel-plant-card" key={name}><img src={src} alt={name} /><figcaption>{name}</figcaption></figure>)}
          </div>
          <p className="leafpanel-plant-list">Lemon Grass <span>Coriander</span> <span>Rosemary</span> <span>Spinach</span> <span>Ajwain</span> <span>Lettuce</span> <span>Mint</span> <span>Parsley</span></p>
        </article>
      </div>
    </section>

    <section className="leafpanel-configure lp-section">
      <div className="leafpanel-configure-copy"><h2>Configure</h2><p>Leafpanel is built around you. Choose from two sizes and three colour finishes, then extend your setup with our range of add-ons.</p></div>
      <div className="leafpanel-configure-content">
        <p className="eyebrow">FINISHES</p>
        <div className="leafpanel-finishes">
          {[['/leafpanel/finish-claystone.png', 'Claystone'], ['/leafpanel/finish-ivory.png', 'Ivory'], ['/leafpanel/finish-graphite.png', 'Graphite']].map(([src, name]) => <figure key={name}><img src={src} alt={`${name} Leafpanel finish`} /><figcaption>{name}</figcaption></figure>)}
        </div>
        <p className="eyebrow">ADD-ONS</p>
        <div className="leafpanel-addons">
          {[['/leafpanel/addon-trolley.png', 'Trolley'], ['/leafpanel/addon-camera.png', 'Camera']].map(([src, name]) => <figure key={name}><img src={src} alt={`Leafpanel ${name} add-on`} /><figcaption>{name}</figcaption></figure>)}
        </div>
        <p className="eyebrow">SIZES</p>
        <div className="leafpanel-sizes"><div><b>Leafpanel 15x</b><span>600 mm × 790 mm × 200 mm<br />Plant capacity: 15</span></div><div><b>Leafpanel 28x</b><span>750 mm × 984 mm × 200 mm<br />Plant capacity: 28</span></div></div>
      </div>
    </section>
    <section className="leafpanel-past-clients">
      <p className="eyebrow"><strong>PAST CLIENTS</strong></p>
      <div className="leafpanel-client-logo-placeholders" aria-label="Past client logos">
        <div className="leafpanel-client-logo-placeholder"><img src="/leafpanel/image 14.png" alt="Past client logo 1" /></div>
        <div className="leafpanel-client-logo-placeholder"><img src="/leafpanel/image 15.png" alt="Past client logo 2" /></div>
        <div className="leafpanel-client-logo-placeholder"><img className="leafpanel-client-logo-16" src="/leafpanel/image 16.png" alt="Past client logo 3" /></div>
      </div>
    </section>
    <section className="leafpanel-cta">
      <div>
        <h2>Ready to make your space greener?</h2>
        <a href="https://forms.gle/huRMTgAdArwFu6pj6" target="_blank" rel="noreferrer" className="leafpanel-button">Order Now</a>
      </div>
     </section>
  </main>
);

export default Leafpanel;
