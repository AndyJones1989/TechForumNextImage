/* eslint-disable @next/next/no-img-element */

const Banner = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          top: "100px",
          textAlign: "center",
          fontWeight: "800",
          fontSize: "60px",
          zIndex: 1,
        }}
      >
        Distilled Awesome
      </div>
      <div style={{ margin: "0 auto", display: "grid" }}>
        <img
          width="80%"
          style={{ justifySelf: "center", position: "relative" }}
          src="https://i.ytimg.com/vi/1oNl40Vxkpw/maxresdefault.jpg"
          alt="cars banner"
        />
      </div>
    </>
  );
};

export default Banner;
