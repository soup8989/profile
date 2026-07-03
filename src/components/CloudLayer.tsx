import { Cloud } from '../components/Cloud'
import cloud1 from "../assets/clouds/cloud1.png";

const CloudLayer = () => {
  // const config = LAYER_CONFIG[props.layer];

  return (
    <Cloud image={cloud1}/>
  )
}

export { CloudLayer };