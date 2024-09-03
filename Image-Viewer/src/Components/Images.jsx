/* eslint-disable react/prop-types */
const Images = ({ images = [] }) => {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <img
          key={index}
          src={`http://192.168.0.134:4201/${image}`}
          alt={`Image ${index + 1}`}
          style={{ height: `250px` }}
        />
      ))}
    </div>
  );
};
export default Images;
