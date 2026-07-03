import '../components/CloudAnimation.css'

// const LAYER_CONFIG = {
//   1: { scale: 1.2, duration: 25, blur: 0},
//   2: { scale: 0.9, duration: 50, blur: 0},
//   3: { scale: 0.6, duration: 90, blur: 1},
// } as const;

interface CloudProps {
  image: string;
  // layer: 1 | 2 | 3;
}

// const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min;

const Cloud = (props: CloudProps) => {
  // const config = LAYER_CONFIG[props.layer];

  return (
    <img
      src={props.image}
      className="absolute top-10 animate-drift-fore"
    />

  )
}

export { Cloud };