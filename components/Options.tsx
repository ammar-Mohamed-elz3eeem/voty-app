"use client";

import Option from "@/components/Option";
import { PollType } from "@/lib/definitions";
import { useState } from "react";

function Options({ poll }: { poll: PollType }) {
  const [selected, setSelected] = useState("");

  return (
    <div className="mt-5">
      <ul className="flex flex-col gap-5">
        {poll?.options.map((option) => (
          <Option
            selected={selected}
            onClick={() => {
              setSelected(option.id);
            }}
            key={option.id}
            option={option}
          />
        ))}
      </ul>
    </div>
  );
}

export default Options;
