
export default function Col({ className, center, children }) {
  return (
    <div
      className={`flex w-full flex-col gap-2 ${center ? "items-center" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
