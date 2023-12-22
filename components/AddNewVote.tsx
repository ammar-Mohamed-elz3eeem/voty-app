'use client';

import { useSession } from 'next-auth/react'
import Link from 'next/link';

function AddNewVote() {
  const { data: session } = useSession();
  console.log(session);
  if (session?.user.id) {
    return (
      <div className="ml-auto">
        <Link href="/polls/new">
          <button className="btn btn-primary">
            Add New Vote
          </button>
        </Link>
      </div>
    )
  }
}

export default AddNewVote
