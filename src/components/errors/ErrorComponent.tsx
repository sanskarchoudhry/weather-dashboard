import { ErrorComponentProps } from "../../services/types";

export default function ErrorComponent({ message }: ErrorComponentProps) {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md w-[20rem] my-4">
      <p className="font-semibold">Error:</p>
      <p>{message}</p>
    </div>
  );
}
