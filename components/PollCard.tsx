'use client';

import { useState } from 'react'
import Divider from './Divider'
import Option from './Option'
import { PollType } from '@/lib/definitions'
import { setVote } from '@/lib/actions';
import { useSession } from 'next-auth/react';
import Alert from './Alert';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

function PollCard({ poll }: {poll: PollType}) {
  const [ selected, setSelected ] = useState('');
  const { data: session } = useSession();
  const [ error, setError ] = useState<{message?: string}>({});

  function handleButtonSubmit() {
    setVote(selected, poll.id, session?.user?.id!).then((value) => {
      if (typeof value !== 'boolean') {
        console.log(value);
        return setError({message: value.message});
      }
      setError({});
    });
  }

  return (
    <div className="md:mx-16 md:my-16 mx-3 my-3 relative">
      <div className="bg-[url('/bg.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col">
          <div className="mt-5">
            <h1 className="text-2xl text-center">{poll.subject}</h1>
          </div>
          <Divider height={40} color="primary" />
          <div className="mt-5">
            <ul className="flex flex-col gap-5">
              {error?.message && <li>
                <Alert type='danger' message={error.message} />
              </li>}
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
          <Divider height={40} color="primary" />
          <div className="flex-wrap mt-5 mx-5 mb-10 flex flex-row gap-4 items-center justify-center sm:justify-between">
            <div className="text-base">
              {poll.Votes.length} have been voted on this poll
            </div>
            <button disabled={selected === ''} onClick={handleButtonSubmit} className="btn btn-primary">Vote Now</button>
          </div>
        </div>
      </div>
      {poll.Votes.filter(vote => vote.userId === session?.user?.id).length && <div className='h-full w-full absolute top-0 left-0 bg-primary-o-0.7'>
        <div className='flex flex-col w-full h-full gap-5 items-center justify-center '>
          <h1 className='text-5xl font-bold text-white'>Error</h1>
          <ExclamationTriangleIcon className='w-20 h-20 text-white' />
          <h1 className='text-3xl font-bold text-white'>You have been Voted Before</h1>
        </div>
      </div>}
    </div>
  )
}

export default PollCard