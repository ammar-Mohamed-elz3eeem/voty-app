type ButtonProps = {
  isPending?: boolean;
  text?: string;
  loadingTxt?: string;
  className?: string;
};

export default function SubmitButton({
  isPending,
  text,
  loadingTxt,
  className,
}: ButtonProps) {
  return (
    <div>
      <div className="flex flex-col">
        <button className={`btn w-auto text-white ${className}`}>
          {(!isPending && <span>{text || "Submit"}</span>) || (
            <span>{loadingTxt || "Loading..."}</span>
          )}
        </button>
      </div>
    </div>
  );
}
