import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    placeholder: string;
    type: string;
    required?: boolean;
}

export default function Input({
    label,
    placeholder,
    type = 'text',
    required,
    ...props
}: InputProps)  {
    return (
        <label className="w-full flex flex-col gap-2 mt-4 z-1">
            <span>{label}{' '}{required && <span className="text-red-500">*</span>}</span>
            <input type={type}
                className="rounded-full shadow-[inset_0_0_4px_rgba(255,255,255,0.6)] px-8 py-4 mt-2 cursor-pointer  "
                placeholder={placeholder}
                required={required}
                {...props}
            />
        </label>
    );
}
