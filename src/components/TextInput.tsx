import { ChangeEventHandler, DetailedHTMLProps, InputHTMLAttributes } from "react";

type Props = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "onChange"
> & {
  onChange: (value: string) => void;
};

const TextInput = (props: Props) => {
  const { onChange, ...p } = props;
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => onChange(e.target.value);
  return (
    <input
      className="border-2 p-2 text-gray-600 border-tropical_indigo rounded-lg shadow-lg bg-transparent focus:outline-none focus:ring focus:border-thistle_light text-center"
      type="text"
      onChange={handleChange}
      {...p}
    />
  );
};

export default TextInput;
