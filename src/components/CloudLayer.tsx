import { Cloud } from '../components/Cloud'
import cloud1 from "../assets/clouds/cloud1.png";
import cloud2 from "../assets/clouds/cloud2.png";

const CloudLayer = () => {
  // const config = LAYER_CONFIG[props.layer];

  return (
		<>
			<Cloud image={cloud1} layer='fore'/>
			<Cloud image={cloud2} layer='mid'/>
			<Cloud image={cloud1} layer='back'/>
		</>
  )
}

export { CloudLayer };