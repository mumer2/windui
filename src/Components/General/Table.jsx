import React from 'react';

const Table = () => {
  const data = [
    { name: 'Ayub Salas', title: 'Designer', company: 'Carroll Group', role: 'Member', username: 'salas_a' },
    { name: 'Agnes Sherman', title: 'Developer', company: 'Apple', role: 'Admin', username: 'shermanagnes' },
    { name: 'Jemma Cummings', title: 'Senior Designer', company: '20goto10', role: 'Member', username: 'jemmaC' },
    { name: 'Jimi Cardenas', title: 'Copywriter', company: 'Wind-UI', role: 'Owner', username: 'cardenasji' },
    { name: 'Mateusz Tucker', title: 'Project Manager', company: 'Tailwindui', role: 'Member', username: 'mt' },
  ];

  return (
    <>
     <div className="tables">
            <h1>Tables</h1>
            <p>The table element represents tabular data — that is, the information presented in a two-dimensional table comprised of rows and columns of cells containing data.</p>
        </div>
        <div className="table-container">
      <div className="table-responsive">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Company</th>
              <th>Role</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.title}</td>
                <td>{row.company}</td>
                <td>{row.role}</td>
                <td>{row.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Table;
