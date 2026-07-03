import { Cloud } from '../components/Cloud'
import cloud1 from "../assets/clouds/cloud1.png";

const CloudLayer = () => {
  // const config = LAYER_CONFIG[props.layer];

  return (
		<>
			<Cloud image={cloud1} layer='fore'/>
			<Cloud image={cloud1} layer='mid'/>
			<Cloud image={cloud1} layer='back'/>
		</>
  )
}

export { CloudLayer };