export default function Row({ className, children, center }) {
    return (
      <div className={`flex gap-2 ${center ? "items-center" : ""} ${className}`}>
        {children}
      </div>
    );
  }