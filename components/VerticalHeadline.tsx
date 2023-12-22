export default function VerticalHeadline({
  text,
  colorClass,
  borderClass,
}: {
  text: string;
  colorClass?: string;
  borderClass?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center -rotate-180 pl-20 border-l-8 ${borderClass} justify-end [writing-mode:vertical-lr]`}
    >
      <h2 className={`text-7xl ${colorClass}`}>{text}</h2>
    </div>
  );
}
