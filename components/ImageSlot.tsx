import Corners from "./Corners";

type Props = {
  label: string;
  className?: string;
};

/** Duotone blueprint placeholder that stands in for a real photo. */
export default function ImageSlot({ label, className = "" }: Props) {
  return (
    <figure className={`blueprint duotone ${className}`.trim()}>
      <div className="image-slot">{label}</div>
      <Corners />
    </figure>
  );
}
