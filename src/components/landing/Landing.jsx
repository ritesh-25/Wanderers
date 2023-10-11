import SimpleImageSlider from "react-simple-image-slider";
import image1 from "../../assests/image1.webp";
import image2 from "../../assests/image2.jpg";
const images = [
  { url: image1 },
  { url: image2 },
];

const App = () => {
  return (
    <div>
      <SimpleImageSlider
        width={'100%'}
        height={'70%'}
        images={images}
        showBullets={true}
        showNavs={true}
        // showNavs={true}
        autoPlay={true} 
        timer={2000}
        style={{ maxWidth: "100%" }}
      />
    </div>
  );
}
export default App;