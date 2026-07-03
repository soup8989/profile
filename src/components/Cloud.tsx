import '../components/CloudAnimation.css'

type Layer = 'fore' | 'mid' | 'back';

const LAYER_CONFIG = {
  fore: { animation: "animate-drift-fore"},
  mid:  { animation: "animate-drift-mid"},
  back: { animation: "animate-drift-back"},
}

interface CloudProps {
  image: string;
  layer: Layer;
}

// const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min;

const Cloud = (props: CloudProps) => {
  const config = LAYER_CONFIG[props.layer];

  return (
    <img
      src={props.image}
      className={`absolute top-10 ${config.animation}`}
    />
  )
}

export { Cloud };