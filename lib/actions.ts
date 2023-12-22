"use server";

import { voteValidator } from "@/lib/validators";
import { PollInitialState } from "@/lib/definitions";
import prisma from "@/lib/prisma";

export async function getPolls() {
  const polls = await prisma.poll.findMany({
    include: { Votes: true, options: {select: {id: true, name: true}}, creator: true },
  });
  return polls;
}

export async function getPollsByUserId(userId: string) {
  const polls = await prisma.poll.findMany({
    include: { Votes: true, options: true, creator: true },
    where: { creator_id: userId }
  });
  return polls;
}

export async function getPollById(pollId: string) {
  try {
    const poll = await prisma.poll.findUnique({
      where: { id: pollId },
      include: { Votes: true, options: true },
    });
    return poll;
  } catch (error) {
    return null;
  }
}

export async function addPoll(prevState: PollInitialState, formData: FormData) {
  const validateFields = voteValidator.safeParse({
    subject: formData.get("subject"),
    options: formData.getAll("options").map((value) => ({ name: value })),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing Fields, Failed to create poll",
    };
  }

  const poll = validateFields.data;

  try {
    const pollId = formData.get('pollId') as string;
    if (pollId) {
      const editPoll = await updatePoll(pollId, prevState, formData);
    } else {
      const createdPoll = await prisma.poll.create({
        data: {
          subject: poll.subject,
          options: {
            createMany: {
              data: poll.options,
            },
          },
          creator_id: formData.get("userId") as string
        },
      });
    }

    return null;
  } catch (error) {
    console.error(error);
    return {
      errors: {},
      message: "Database Failure: Failed to create poll",
    };
  }
}

export async function deletePoll(pollId: string) {
  try {
    await prisma.poll.delete({ where: { id: pollId } });
  } catch (error) {
    return {
      message: "Database Failure: Failed to delete poll",
    };
  }
}

export async function updatePoll(
  pollId: string,
  prevState: PollInitialState,
  formData: FormData,
) {
  const validateFields = voteValidator.safeParse({
    subject: formData.get("subject"),
    options: formData.getAll("options").map((value) => ({ name: value })),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing Fields, Failed to create poll",
    };
  }

  const poll = validateFields.data;

  try {
    const insertions: {name: string}[] = [];
    const editions: { where: { pollId: string, id: string }, data: { name: string } }[]  = [];

    poll.options.forEach(option => {
      const delimiter = option.name.indexOf("-");
      let optionName;
      let optionId;
      if (delimiter >= 0) {
        optionName = option.name.substring(0, delimiter);
        optionId = option.name.substring(delimiter + 1);
        editions.push({
          where: { pollId, id: optionId },
          data: { name: optionName }
        });
      } else {
        optionName = option.name.substring(0);
        insertions.push({name: optionName});
      }
    });
    const updated = await prisma.poll.update({
      where: { id: pollId },
      data: {
        subject: poll.subject,
        options: {
          updateMany: editions,
          createMany: {
            data: insertions
          }
        },
      },
    });
  } catch (error) {
    console.log(error);
    return {
      message: "Database Failure, Failed to update poll information",
    };
  }
}

export async function setVote(selectedOption: string, pollId: string, userId: string): Promise<boolean | {message: string}> {
  if (!selectedOption || !pollId || !userId) {
    return {
      message: 'Unauthorized'
    }
  }
  try {
    const user = prisma.user.findUnique({where: {id: userId}});
    if (!user) {
      return {
        message: 'Unauthorized'
      }
    }
  } catch (err) {
    return {
      message: 'Unauthorized'
    }
  }
  try {
    const poll = await prisma.poll.findUnique({where: {id: pollId}, include: {options: true, Votes: true}});
    if (!poll) {
      return {
        message: 'Unauthorized'
      }
    }
    if (poll.options.filter(option => option.id == selectedOption).length <= 0) {
      return {
        message: 'Undefined option'
      }
    }
  } catch (err) {
    return {
      message: 'Unauthorized'
    }
  }
  try {
    await prisma.votes.create({
      data: {
        optionId: selectedOption,
        PollId: pollId,
        userId: userId
      }
    });
    return true;
  } catch (error) {
    console.log(error);
    return {
      message: 'Something wrong happened'
    }
  }
}
