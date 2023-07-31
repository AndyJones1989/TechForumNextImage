import { getPlaiceholder } from "plaiceholder";

const generateBlur = async (imagePath: string) => {
  try {
    const buffer = await fetch(imagePath).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );

    const { base64 } = await getPlaiceholder(buffer);

    return base64;
  } catch (err) {
    err;
  }
};

export default generateBlur;
