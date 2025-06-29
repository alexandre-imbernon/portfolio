import noiseImage from '../assets/noise.jpg';

export function NoiseOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-20"
      style={{
        backgroundImage: `url(${noiseImage})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        mixBlendMode: 'multiply',
        opacity: 0.8,
      }}
    />
  );
}
