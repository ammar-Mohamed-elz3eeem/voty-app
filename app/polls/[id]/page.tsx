"use server";

import PollCard from "@/components/PollCard";
import { getPollById, setVote } from "@/lib/actions";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const poll = await getPollById(params.id);
  if (poll) {
    return (
      <PollCard poll={poll} />
    );
  }
  notFound();
}