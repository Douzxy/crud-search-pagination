import { getContacts } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { EditButton, DeleteButton } from "@/components/buttons";

const ContactTable = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const contacts = await getContacts(query, currentPage);

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
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={contact.id} className="bg-white border-b">
            <td className="px-6 py-3">{index + 1}</td>
            <td className="px-6 py-3">{contact.name}</td>
            <td className="px-6 py-3">{contact.phone}</td>
            <td className="px-6 py-3">
              {formatDate(contact.createAt.toString())}
            </td>
            <td>
              <div className="flex justify-center gap-1">
                <EditButton id={contact.id} />
                <DeleteButton id={contact.id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
