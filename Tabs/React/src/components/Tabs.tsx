import { useState } from "react";

export default function Tabs({ defaultValue, items }: any) {
  const [value, setValue] = useState<any>(defaultValue ?? items[0].value);

  return (
    <div className="tabs">
      <div className="tabs-list">
        {items.map(({ label, value: itemValue }: any) => {
          const isActiveValue = itemValue === value;

          return (
            <button
              key={itemValue}
              type="button"
              className={[
                "tabs-list-item",
                isActiveValue && "tabs-list-item--active",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => {
                setValue(itemValue);
              }}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div>
        {items.map(({ panel, value: itemValue }: any) => (
          <div key={itemValue} hidden={itemValue !== value}>
            {panel}
          </div>
        ))}
      </div>
    </div>
  );
}
