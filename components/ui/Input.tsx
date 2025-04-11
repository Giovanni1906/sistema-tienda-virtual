import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // O usa íconos propios si prefieres

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function Input({ label, type, ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="flex flex-col gap-1 relative">
      <label className="text-sm text-gray-700 font-medium">{label}</label>
      <div className="relative">
        <input
          type={isPassword && showPassword ? "text" : type}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition text-sm pr-10"
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}
