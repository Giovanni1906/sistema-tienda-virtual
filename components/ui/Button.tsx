type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="w-full bg-primary text-white py-2 px-4 rounded-md font-medium
                 cursor-pointer transition-all duration-300 ease-in-out
                 hover:bg-secondary hover:shadow-lg"
      {...props}
    >
      {children}
    </button>
  );
}