export default function WinLossGraph() {
  const data = [60, 40, 55, 70, 30, 80, 50];
  const max = Math.max(...data);
  const min = Math.min(...data);

  return (
    <svg className="w-full h-24" viewBox="0 0 100 24">
      {data.map((value, index) => {
        const height = ((value - min) / (max - min)) * 24;
        const x = (index / (data.length - 1)) * 100;
        return (
          <g key={index}>
            <line
              x1={x}
              y1={24}
              x2={x}
              y2={24 - height}
              stroke={value > 50 ? "#4ade80" : "#f87171"}
              strokeWidth="2"
            />
            <circle
              cx={x}
              cy={24 - height}
              r="1"
              fill={value > 50 ? "#4ade80" : "#f87171"}
            />
          </g>
        );
      })}
    </svg>
  );
}
