"use client";

import AddNewPoll from "@/components/AddNewPoll";
import Alert from "@/components/Alert";
import Input from "@/components/Input";
import { addPoll } from "@/lib/actions";
import { PollInitialState, PollType } from "@/lib/definitions";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function Page({ poll }: {poll?: PollType | null}) {
  const initialState: PollInitialState = { errors: {}, message: '' };
  const [errorState, setErrorState] = useState<PollInitialState | null>(initialState);
  const [fields, setFields] = useState([{ value: "" }]);
  const { data: session } = useSession();

  const addField = () => {
    console.log("field added");
    setFields([...fields, { value: "" }]);
  };

  const removeFields = () => {
    if (fields.length > 1) {
      setFields(fields.slice(0, -1));
    }
  };

  const changeOption = (value: string, index: number) => {
    setFields(
      fields.map((field: { value: string }, idx: number) => {
        if (idx === index) field.value = value;
        return field;
      }),
    );
  };

  return (
    <AddNewPoll />
  );
}
