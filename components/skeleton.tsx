export const TablesSkeleton = () => {
  return (
    <table className="w-full text-sm text-left text-gray-500 ">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="px-6 py-3">#</th>
          <th className="px-6 py-3">Name</th>
          <th className="px-6 py-3">Phone Number</th>
          <th className="px-6 py-3">Create At</th>
          <th className="px-6 py-3 text-center">Action</th>
        </tr>
      </thead>
      <tbody className="animate-pulse"> 
        <tr className="bg-white border-b border-gray-50">
          <td className="px-6 py-3">
            <div className="h-4 w-4 rounded bg-gray-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-32 rounded bg-gray-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-20 rounded bg-gray-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-32 rounded bg-gray-100"></div>
          </td>
          <td>
            <div className="flex justify-center gap-1">
              <div className="h-7 w-7 rounded bg-gray-100"></div>
              <div className="h-7 w-7 rounded bg-gray-100"></div>
            </div>
          </td>
        </tr>
        <tr className="bg-white border-b border-gray-50">
          <td className="px-6 py-3">
            <div className="h-4 w-4 rounded bg-gray-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-32 rounded bg-gray-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-20 rounded bg-gray-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-32 rounded bg-gray-100"></div>
          </td>
          <td>
            <div className="flex justify-center gap-1">
              <div className="h-7 w-7 rounded bg-gray-100"></div>
              <div className="h-7 w-7 rounded bg-gray-100"></div>
            </div>
          </td>
        </tr>
        <tr className="bg-white border-b border-gray-50">
          <td className="px-6 py-3">
            <div className="h-4 w-4 rounded bg-gray-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-32 rounded bg-gray-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-20 rounded bg-gray-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-32 rounded bg-gray-100"></div>
          </td>
          <td>
            <div className="flex justify-center gap-1">
              <div className="h-7 w-7 rounded bg-gray-100"></div>
              <div className="h-7 w-7 rounded bg-gray-100"></div>
            </div>
          </td>
        </tr>
        <tr className="bg-white border-b border-gray-50">
          <td className="px-6 py-3">
            <div className="h-4 w-4 rounded bg-gray-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-32 rounded bg-gray-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-20 rounded bg-gray-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-32 rounded bg-gray-100"></div>
          </td>
          <td>
            <div className="flex justify-center gap-1">
              <div className="h-7 w-7 rounded bg-gray-100"></div>
              <div className="h-7 w-7 rounded bg-gray-100"></div>
            </div>
          </td>
        </tr>
        <tr className="bg-white border-b border-gray-50">
          <td className="px-6 py-3">
            <div className="h-4 w-4 rounded bg-gray-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-32 rounded bg-gray-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-20 rounded bg-gray-100"></div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-32 rounded bg-gray-100"></div>
          </td>
          <td>
            <div className="flex justify-center gap-1">
              <div className="h-7 w-7 rounded bg-gray-100"></div>
              <div className="h-7 w-7 rounded bg-gray-100"></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
