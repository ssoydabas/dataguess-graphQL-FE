interface ISelectableCountryProps {
  name: string;
  backgroundColor: string;
  isSelected: boolean;
  onSelect: () => void;
}

export default function SelectableCountryItem({
  name,
  backgroundColor,
  isSelected,
  onSelect,
}: ISelectableCountryProps) {
  const style = isSelected ? { backgroundColor: backgroundColor } : {};

  return (
    <div
      className="w-4/6 mx-auto my-4 px-12 py-2 rounded-xl border"
      style={style}
      onClick={onSelect}
    >
      <div>{name}</div>
    </div>
  );
}
