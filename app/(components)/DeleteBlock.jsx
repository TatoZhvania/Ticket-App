'use client';

import { useRouter } from 'next/navigation';
import { TiDeleteOutline } from 'react-icons/ti';

const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const deleteTicket = async () => {
    const res = await fetch(`/api/Tickets/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <>
      <p className=" text-red-400 hover:cursor-pointer hover:text-red-200">
        <TiDeleteOutline size={25} onClick={deleteTicket} />
      </p>
    </>
  );
};

export default DeleteBlock;
