import AddNewPoll from '@/components/AddNewPoll'
import { getPollById } from '@/lib/actions'
import { PollType } from '@/lib/definitions';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const poll = await getPollById(params.id);

  if (poll) {
    return (
      <AddNewPoll poll={poll} />
    )
  }
  notFound();
}
