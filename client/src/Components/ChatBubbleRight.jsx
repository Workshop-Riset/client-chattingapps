export default function ChatBubbleRight({props}) {
  return (
    <div>
      <div className="flex flex-row-reverse justify-end items-start gap-2.5 p-4 ">
        <img
          className="flex w-8 h-8 rounded-full"
          src="https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbGV8ZW58MHx8MHx8fDA%3D"
        />
        <div className="flex flex-col gap-1 w-full max-w-[320px]">
          <div className="flex justify-end items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              11:46
            </span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Bonnie Green
            </span>
          </div>
          <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-s-xl rounded-ee-xl dark:bg-gray-700">
            <p className="text-sm font-normal text-gray-900 dark:text-white">
            {props.message}

            </p>
          </div>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Delivered
          </span>
        </div>
      </div>
    </div>
  );
}
