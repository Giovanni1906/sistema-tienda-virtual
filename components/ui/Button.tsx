type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
  };
  
  export default function Button({ children, ...props }: ButtonProps) {
    return (
      <button
        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/80 transition font-medium"
        {...props}
      >
        {children}
      </button>
    );
  }
  