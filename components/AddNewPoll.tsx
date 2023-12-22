'use client';

import { addPoll } from '@/lib/actions';
import { PollInitialState, PollType } from '@/lib/definitions';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react'
import Alert from './Alert';
import Input from './Input';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/20/solid';

function AddNewPoll({ poll }: { poll?: PollType }) {
  const initialState: PollInitialState = { errors: {}, message: '' };
  const [ errorState, setErrorState ] = useState<PollInitialState | null>(initialState);
  const [ fields, setFields ] = useState([{ value: "" }]);
  const { data: session } = useSession();

  const addField = () => {
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

  useEffect(() => {
    if (poll && poll?.options) {
      const options = poll.options.map(option => ({value: option.name as string}));
      if (fields.length != options.length) {
        setFields(options);
      }
    }
  }, [poll]);

  return (
    <div className='flex flex-col'>
      <div className="text-center font-bold text-3xl text-red-500">
        {(poll && 'Edit Poll') || 'New Poll'}
      </div>
      
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <form
          action={async (formdata) => {
            if (!poll) {
              fields.forEach((field) => formdata.append("options", field.value));
              formdata.set('userId', session?.user.id);
            }
            if (poll) {
              fields.forEach((field, idx) => {
                if (poll.options && poll.options.length > idx) 
                  formdata.append("options", field.value + "-" + poll.options[idx].id)
                else
                  formdata.append("options", field.value);
              });
              formdata.set('pollId', poll.id);
            }
            setErrorState(await addPoll(initialState, formdata));
          }}
        >
          {errorState === null && <Alert type="success" message={`Poll ${ (poll && 'Edited') || 'Created' } successfully`} />}

          <Input 
            InpClasses={`peer block w-full rounded-md border border-gray-200 px-3 py-2 text-sm outline-2 placeholder:text-gray-500`}
            placeholder="Title"
            type="Text"
            name="subject"
            defaultValue={poll && poll.subject}
            />

          <div className="mb-4">
            <div className="relative mt-2 rounded-md">
              {errorState?.errors?.subject && errorState?.errors?.subject.map(error => <Alert type="danger" message={error} />)}
              {errorState?.errors?.options && errorState?.errors?.options.map(error => <Alert type="danger" message={error} />)}
              
              {fields.map((field, index) => (
                <div className="relative mt-2" key={index}>
                  <PlusCircleIcon
                    onClick={addField}
                    className="pointer-events-cursor absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
                  />
                  <input
                    name="options[]['value']"
                    onChange={(e) => {
                      changeOption(e.target.value, index);
                    }}
                    type="text"
                    defaultValue={poll?.options && poll.options[index] && poll.options[index].name}
                    placeholder="Enter Option name"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 pr-10 text-sm outline-2 placeholder:text-gray-500"
                  />
                  <MinusCircleIcon
                    onClick={removeFields}
                    className="pointer-events-cursor absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
                  />
                </div>
              ))}

              {errorState?.message && <Alert type="danger" message={errorState?.message} />}
            </div>
          </div>
          {/* Icons */}
          <div className="icons flex text-gray-500 m-2">
            <svg
              className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <svg
              className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
            <div className="count ml-auto text-gray-400 text-xs font-semibold">
              0/300
            </div>
          </div>

          {/* Buttons */}
          <div className="buttons flex">
            <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">
              Cancel
            </div>
            <button
              className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
              type="submit"
            >
              { (poll && 'Edit Poll') || 'Add Poll' }
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddNewPoll