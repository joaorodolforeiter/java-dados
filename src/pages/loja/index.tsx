import { type Dispatch, type SetStateAction, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";

const tech = ["DDR", "DDR2", "DDR3"];
const size = ["4gb", "16gb", "8gb", "256mb"];
const speed = ["400mhz", "800mhz", "3200mhz", "4900mhz", "8000mhz"];

export default function Index() {
  const [techSelected, setTechSelected] = useState(tech);
  const [sizeSelected, setSizeSelected] = useState(size);
  const [speedSelected, setSpeedSelected] = useState(speed);

  return (
    <div className="flex h-full">
      <aside className="w-72 overflow-auto bg-purple-200 p-10 shadow-md max-sm:hidden">
        <div className="mb-12 text-3xl font-bold">Filtros</div>
        <div className="space-y-6">
          <Radio
            label="Tecnologia"
            options={tech}
            selected={techSelected}
            setSelected={setTechSelected}
          />
          <Radio
            label="Tamanho"
            options={size}
            selected={sizeSelected}
            setSelected={setSizeSelected}
          />
          <Radio
            label="Velocidade"
            options={speed}
            selected={speedSelected}
            setSelected={setSpeedSelected}
          />
        </div>
      </aside>
    </div>
  );
}

function Radio({
  label,
  options,
  selected,
  setSelected,
}: {
  label: string;
  options: string[];
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
}) {
  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <div className="mb-3 text-xl">
        <RadioGroup.Label>{label}</RadioGroup.Label>
      </div>
      <div className="space-y-2">
        {options.map((option) => (
          <RadioGroup.Option
            key={option}
            value={option}
            className={({ checked }) =>
              clsx(
                "relative flex cursor-pointer rounded-lg bg-white px-5 py-4 shadow-md focus:outline-none",
                { "bg-purple-700 text-white": checked }
              )
            }
          >
            <RadioGroup.Label as="p">{option}</RadioGroup.Label>
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
