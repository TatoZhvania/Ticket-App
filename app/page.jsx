import React from 'react';
import TicketCard from './(components)/TicketCard';

const getTickets = async () => {
  const apiURL = process.env.API_URL;

  try {
    const res = await fetch(`${apiURL}/api/Tickets`, {
      cache: 'no-store',
    });

    return res.json();
  } catch (error) {
    console.log('Faild to get tickets', error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  return (
    <div className="p-5">
      {/* <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-col-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
        <div className="lg:grid grid-cols-2 xl:grid-cols-4"></div>
      </div> */}
      <h1>helo</h1>
    </div>
  );
};

export default Dashboard;
