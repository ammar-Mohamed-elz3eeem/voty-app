type alertType = "danger" | "success" | "info" | "warning";

export default function Alert({
  type = "danger",
  message,
}: {
  message: string;
  type?: alertType;
}) {
  const alerts = {
    danger: "bg-red-400",
    info: "bg-blue-400",
    warning: "bg-yellow-400",
    success: "bg-green-400",
  };
  return (
    <div
      className={`h-auto my-1 px-3 py-3 rounded-md w-full text-white ${alerts[type]}`}
    >
      <p>{message}</p>
    </div>
  );
}
