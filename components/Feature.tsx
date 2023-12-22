export default function Feature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <li>
      <div className="flex flex-row gap-6 items-center">
        <div>{icon}</div>
        <div className="flex-1 text-lg">{text}</div>
      </div>
    </li>
  );
}
