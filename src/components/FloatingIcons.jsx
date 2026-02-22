import './FloatingIcons.css';

const TECH_ICONS = [
  { name: 'redis', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'grpc', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grpc/grpc-original.svg' },
  { name: 'fastapi', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'pytorch', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'cplusplus', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'postgresql', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
];

// Positions around the photo edges (using % offsets from container center)
// Spread 8 icons roughly evenly around the perimeter
const ICON_PLACEMENTS = [
  { top: '45%',  left: '15%',  rotation: -10 },  // left (redis)
  { top: '45%',  left: '75%',  rotation: 15 },   // right (grpc)
  { top: '30%',  left: '8%',   rotation: -20 },  // upper-left (fastapi)
  { top: '65%',  left: '10%',  rotation: 12 },   // lower-left (pytorch)
  { top: '30%',  left: '80%',  rotation: -15 },  // upper-right (python)
  { top: '65%',  left: '82%',  rotation: 20 },   // lower-right (c++)
  { top: '95%',  left: '12%',  rotation: -12 },  // bottom-left (java)
  { top: '93%',  left: '78%',  rotation: 18 },   // bottom-right (postgresql)
];

function FloatingIcons() {
  return (
    <div className="photo-icons" aria-hidden="true">
      {TECH_ICONS.map((icon, i) => {
        const p = ICON_PLACEMENTS[i];
        return (
          <img
            key={icon.name}
            className="photo-icon"
            src={icon.url}
            alt=""
            draggable={false}
            style={{
              top: p.top,
              left: p.left,
              '--base-rotation': `${p.rotation}deg`,
              animationDelay: `${-i * 1.2}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export default FloatingIcons;
