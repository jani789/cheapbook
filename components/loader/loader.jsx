import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
export default function MyLoader({ height, width, color }) {
  return <Loader type='Bars' color={color} height={height} width={width} />;
}
