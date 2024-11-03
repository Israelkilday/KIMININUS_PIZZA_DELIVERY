import { CrustSelectionProps } from "../types/CrustSelection";

const CrustSelection: React.FC<CrustSelectionProps> = ({ crust, setCrust }) => {
  return (
    <div className="flex justify-center">
      <div className="mb-8 flex gap-x-12 font-medium">
        <label className="flex cursor-pointer items-center gap-x-2">
          <input
            type="radio"
            name="crust"
            value="Tradicional"
            checked={crust === "Tradicional"}
            onChange={(e) => setCrust(e.target.value)}
            className="h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-400 checked:border-secondary checked:bg-gradient-to-r checked:from-primary checked:to-secondary"
          />
          Tradicional
        </label>

        <label className="flex cursor-pointer items-center gap-x-2">
          <input
            type="radio"
            name="crust"
            value="Fina"
            checked={crust === "Fina"}
            onChange={(e) => setCrust(e.target.value)}
            className="h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-400 checked:border-secondary checked:bg-gradient-to-r checked:from-primary checked:to-secondary"
          />
          Fina
        </label>
      </div>
    </div>
  );
};

export default CrustSelection;
