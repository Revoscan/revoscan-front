import React from "react";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    label: string;
    required?: boolean;
    options: Array<{ value: string; label: string }>;
}

export default function Select({
    label,
    required,
    options,
    ...props
}: SelectProps)  {
    return (
        <label className="w-full flex flex-col gap-2 mt-4 z-1">
            <span>{label}{' '}{required && <span className="text-red-500">*</span>}</span>
            <div className='rounded-full shadow-[inset_0_0_4px_rgba(255,255,255,0.6)] px-8 py-4 mt-2'>
                <select
                    className="w-full cursor-pointer "
                    required={required}
                    {...props}
                >
                    {options.map((option, i) => (
                        <option key={option.value} value={option.value} className='text-black hover:text-black'>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </label>
    );
}
