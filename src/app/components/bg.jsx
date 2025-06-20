import bgImage from "../assets/bg.png";

export function Bg() {
    console.log ('bgImage = ', bgImage)
    return (
        <div
        className="relative z-10 pointer-events-none"
        style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        }}>
        </div>
    )
}