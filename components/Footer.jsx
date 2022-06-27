import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID PIZZA MANIA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            #53/C Edgah Quarter Near Mahavir Chowk
            <br /> sangrur,Punjab
            <br /> (+91) 7347467673
          </p>
          <p className={styles.text}>
            Old school market near Bypass
            <br /> Patiala,Punjab
            <br /> (+91) 8288855651
          </p>
          <p className={styles.text}>
            Near Prem Petrol Pump, Mahvir bazar
            <br /> Ludhiana,Punjab
            <br /> (+91) 6287155651
          </p>
          <p className={styles.text}>
            roxy road near DPS school
            <br /> Delhi
            <br /> (+91) 7609855421
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
