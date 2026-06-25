import React from "react";
interface Props {
  params: Promise<{ slug: string }>;
}

const Details: React.FC<Props> = async ({ params }) => {
  const { slug } = await params;
  return <div>Details- {slug}</div>;
};

export default Details;
