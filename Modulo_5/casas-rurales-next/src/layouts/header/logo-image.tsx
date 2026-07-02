import Image from "next/image";

export const LogoImage = () => {
  return (
    <Image
      aria-hidden="true"
      src="/logo.png"
      alt="Logo de Casas Rurales"
      width={100}
      height={90}
      style={{ width: "100px" }}
    />
  );
};
