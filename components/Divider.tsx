function Divider({ height, color }: { height: number; color: string }) {
  return (
    <div
      className={`flex items-center justify-center`}
      style={{ height: height }}
    >
      <hr className={`w-full border-${color}`} />
    </div>
  );
}

export default Divider;
