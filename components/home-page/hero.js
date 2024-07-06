import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/iron-man.png"
          alt="An image of Ironman"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am IronMan</h1>
      <p>I do stuff that amazes people</p>
    </section>
  );
}

export default Hero;
