import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

export default function FeedbackForm() {
  return (
    <form>
      <div className="flex flex-col items-end justify-end">
        <input type="text" placeholder="Email Address" className="w-full" />
        <textarea
          className="w-full mt-2"
          rows={4}
          cols={40}
          placeholder="Feedback Content"
        ></textarea>
        <button className="py-2 px-6 mt-2 flex items-center bg-primary">
          Send <ArrowRightIcon className="h-6 w-6" />
        </button>
      </div>
    </form>
  );
}
