const items = [
‘Community Before Commerce’,
‘Feasibility & Market Research’,
‘BIS · CAROTAR · GST Compliance’,
‘Master Franchise & Distribution’,
‘Japan → Delhi NCR’,
‘Store Setup & Brand Aesthetics’,
‘Depth Before Scale’,
];

export default function Marquee() {
const doubled = […items, …items];

return (
<div className="mq" aria-hidden="true">
<div className="mq-t">
{doubled.map((item, i) => (
<span key={i} className="mq-i">
{item} <span className="mq-d">✦</span>
</span>
))}
</div>
</div>
);
}
