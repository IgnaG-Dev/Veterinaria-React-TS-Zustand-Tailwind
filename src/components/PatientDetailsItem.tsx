type PatientDetailsItemsProps = {
  label: string;
  data: string;
};

export default function PatientDetailsItem({
  label,
  data,
}: PatientDetailsItemsProps) {
  return (
    <p className="font-bold .b-3 text-gray-700 uppercase">
      {label}: {""}
      <span className="font-normal normal-case">{data}</span>
    </p>
  );
}
