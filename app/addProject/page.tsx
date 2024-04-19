export default function page() {
  return (
    <div className="h-[100%] flex justify-center items-center">
      <div className="p-4 rounded-md border-2 border-white">
        <h1 className="">Add new project</h1>
        <input
          type="text"
          placeholder="Project name"
          className="px-2 py-1 w-[100%] bg-[transparent] border-2 border-mainBorder"
        />
        <div className="flex space-x-[8.7rem] mt-2">
          <button className="btn">Cancel</button>
          <button className="btn bg-[#17bbd4] ">Create</button>
        </div>
      </div>
    </div>
  );
}
