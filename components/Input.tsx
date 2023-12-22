import { ChangeEventHandler } from "react";
import Alert from "./Alert";

type InputProps = {
  type?: string;
  name?: string;
  label?: string;
  defaultValue?: string
  InpClasses?: string;
  lblClasses?: string;
  wrapperClasses?: string;
  placeholder?: string;
  errors?: string[];
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
};

export default function Input({
  type,
  name,
  label,
  defaultValue,
  placeholder,
  InpClasses,
  lblClasses,
  wrapperClasses,
  errors,
  onChange,
}: InputProps) {
  return (
    <div className={`w-full flex flex-col ${wrapperClasses}`}>
      <label className={`form-label text-white ${lblClasses}`}>
        {label}
      </label>
      <input
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        id={name}
        className={`form-input rounded-md ${InpClasses}`}
        defaultValue={defaultValue}
      />
      {errors?.map((err, idx) => <Alert key={idx} message={err} />)}
    </div>
  );
}
