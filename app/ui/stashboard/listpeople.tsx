import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { People } from '@/app/lib/definitions-star';
export default async function ListPeople({
  listPeople,
}: {
  listPeople: People[];
}) {
  return (
    // <div className="flex w-full flex-col md:col-span-4">
    //   <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
    //     Lista
    //   </h2>
    //   <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
    //     {/* NOTE: comment in this code when you get to this point in the course */}

    //     { <div className="bg-white px-6">
    //       {listPeople.map((people, i) => {
    //         return (
    //           <div
    //             key={people.name}
    //             className={clsx(
    //               'flex flex-row items-center justify-between py-4',
    //               {
    //                 'border-t': i !== 0,
    //               },
    //             )}
    //           >
    //             <div className="flex items-center">
    //               <div className="min-w-0">
    //                 <p className="truncate text-sm font-semibold md:text-base">
    //                   {people.name}
    //                 </p>
    //                 <p className="hidden text-sm text-gray-500 sm:block">
    //                   {people.height}
    //                 </p>
    //                 <p className="hidden text-sm text-gray-500 sm:block">
    //                   {people.hair_color}
    //                 </p>
    //                 <p className="hidden text-sm text-gray-500 sm:block">
    //                   {people.skin_color}
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div> }
    //     <div className="flex items-center pb-2 pt-6">
    //       <ArrowPathIcon className="h-5 w-5 text-gray-500" />
    //       <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
    //     </div>
    //   </div>
    // </div>
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {listPeople?.map((people) => (
              <div
                key={people.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{people.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{people.height}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {people.hair_color}
                    </p>
                    <p>{people.skin_color}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nombre
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Altura
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Color de cabello
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Color de piel
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Año de naciemiento
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {listPeople?.map((people) => (
                <tr
                  key={people.name}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{people.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {people.height}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {people.hair_color}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {people.skin_color}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {people.eye_color}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
