import { FieldValues, UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { TIcon } from "../../../types/icon"
import { Icons } from "../misc/Icons"

interface props {
    icon?: TIcon;
    placeholder?: string;
    register: UseFormRegisterReturn<string>;
    border?: boolean;
    className?: string;
    onClick?: () => void;
    submit?: boolean;
}

export const InputText = ({ icon, placeholder, register, border, className, submit, onClick }: props) => {
    return (
        <div className={`rounded-[6px] bg-font-white flex flex-row justify-between gap-[16px] ${border && "border border-gray-300"} ${className}`}>
            <input
                className="px-[12px] h-[32px] focus:outline-0 w-full font-light bg-transparent placeholder:text-gray-300"
                placeholder={placeholder}
                {...register}
            />

            { icon && 
                <button type={ submit ? "submit" : "button" } onClick={ onClick } className="px-[12px] text-gray-300 hover:text-gray-200 transition-base active:text-font-black">
                    <Icons className="text-[1.3em]" icon={ icon } />
                </button>
            }
        </div>
    )
}