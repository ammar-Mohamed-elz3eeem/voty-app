"use client";

type OptionProps = {
  option: { id: string; name: string };
  onClick: VoidFunction;
  selected: string;
};

function Option({ option, selected, onClick }: OptionProps) {
  return (
    <li className="cursor-pointer" onClick={onClick} key={option.id}>
      <div
        className={`py-2 mx-3 rounded-md ${
          selected === option.id ? "bg-green-400" : "bg-primary-o-0.7"
        }`}
      >
        <div className="stats"></div>
        <div className="text-white">
          <h3 className="text-xl ml-10">{option.name}</h3>
        </div>
      </div>
    </li>
  );
}

export default Option;
