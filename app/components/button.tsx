export const Button = ({ type, className, children, onClick }: { type?: "primary" | "secondary"; className?: string; children: React.ReactNode; onClick?: () => void }) => {
  return (
    <button
        onClick={onClick}
        className={`px-6 py-2 bg-transparent uppercase border hover:bg-brand-green transition-colors duration-300 cursor-pointer font-medium ${type === "primary" ? " text-foreground border-foreground hover:text-background" : "text-background border-background"} ${className}`}
    >
      {children}
    </button>
  );
};
