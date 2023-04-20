import Lottie from "lottie-react";
import animationAstronaut from '../../assets/lotties/astronot.json';
import animationRocket from '../../assets/lotties/rocket.json';

export default function DecorativeItem(props: any) {
  return (
    <div {...props} className={`DecorativeItem ${props?.className}`}>
      <Lottie animationData={animationAstronaut} loop={true} />
      <Lottie className="Rocket" animationData={animationRocket} loop={true} />
    </div>
  )
}
