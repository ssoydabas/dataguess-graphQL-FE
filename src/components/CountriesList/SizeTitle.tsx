import capitalizeFirstLetter from "../../services/string/capitalizeFirstLetter";

interface ISizeTitleProps {
  size: string;
}

export default function SizeTitle({ size }: ISizeTitleProps) {
  return (
    <h3
      key={size}
      className="w-4/6 mx-auto py-4 text-2xl border-b-[2px] border-black"
    >
      {capitalizeFirstLetter(size)} Countries
    </h3>
  );
}
