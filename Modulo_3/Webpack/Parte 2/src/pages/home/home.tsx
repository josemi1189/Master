import { Saludo } from "@/components/saludo";
import { LogoLemoncode } from "@/components/logoLemoncode";
import styles from "./home.module.scss";

export const Home = () => {
  return (
    <div className={styles.container}>
      <Saludo />
      <LogoLemoncode />
    </div>
  );
};
