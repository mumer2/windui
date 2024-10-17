import React from 'react';
import CodePre from './CodePre';
import { Table2 } from './Table2';

const Table = () => {
  const htmlCode = `  <div>
       <div class="table-container1">
  <table class="styled-table">
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
      <tr>
        <td>Ayub Salas</td>
        <td>Designer</td>
        <td>Carroll Group</td>
        <td>Member</td>
        <td>salas_a</td>
      </tr>
      <tr>
        <td>Agnes Sherman</td>
        <td>Developer</td>
        <td>Apple</td>
        <td>Admin</td>
        <td>shermanagnes</td>
      </tr>
      <tr>
        <td>Jemma Cummings</td>
        <td>Senior Designer</td>
        <td>20goto10</td>
        <td>Member</td>
        <td>jemmaC</td>
      </tr>  
      <tr>
        <td>Jimi Cardenas</td>
        <td>Copywriter</td>
        <td>Wind-UI</td>
        <td>Owner</td>
        <td>cardenasji</td>
      </tr>  
      <tr>
        <td>Mateusz Tucker</td>
        <td>Project Manager</td>
        <td>Tailwindui</td>
        <td>Member</td>
        <td>mt</td>
      </tr>
    </tbody>
  </table>

  {/* <!-- Mobile card layout for small screens --> */}
  <div class="profile-cards">
    <div class="profile-card">
      <div class="profile-row"><span class="profile-label">Name:</span><span class="profile-data">Ayub Salas</span></div>
      <div class="profile-row"><span class="profile-label">Title:</span><span class="profile-data">Designer</span></div>
      <div class="profile-row"><span class="profile-label">Company:</span><span class="profile-data">Carroll Group</span></div>
      <div class="profile-row"><span class="profile-label">Role:</span><span class="profile-data">Member</span></div>
      <div class="profile-row"><span class="profile-label">Username:</span><span class="profile-data">salas_a</span></div>
    </div>
  `;

const reactCode = `import React from 'react'
import './Table2.css';
export const Table2 = () => {
  return (
    <div>
       <div class="table-container1">
  <table class="styled-table">
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
      <tr>
        <td>Ayub Salas</td>
        <td>Designer</td>
        <td>Carroll Group</td>
        <td>Member</td>
        <td>salas_a</td>
      </tr>
      <tr>
        <td>Agnes Sherman</td>
        <td>Developer</td>
        <td>Apple</td>
        <td>Admin</td>
        <td>shermanagnes</td>
      </tr>
      <tr>
        <td>Jemma Cummings</td>
        <td>Senior Designer</td>
        <td>20goto10</td>
        <td>Member</td>
        <td>jemmaC</td>
      </tr>  
      <tr>
        <td>Jimi Cardenas</td>
        <td>Copywriter</td>
        <td>Wind-UI</td>
        <td>Owner</td>
        <td>cardenasji</td>
      </tr>  
      <tr>
        <td>Mateusz Tucker</td>
        <td>Project Manager</td>
        <td>Tailwindui</td>
        <td>Member</td>
        <td>mt</td>
      </tr>
    </tbody>
  </table>

  {/* <!-- Mobile card layout for small screens --> */}
  <div class="profile-cards">
    <div class="profile-card">
      <div class="profile-row"><span class="profile-label">Name:</span><span class="profile-data">Ayub Salas</span></div>
      <div class="profile-row"><span class="profile-label">Title:</span><span class="profile-data">Designer</span></div>
      <div class="profile-row"><span class="profile-label">Company:</span><span class="profile-data">Carroll Group</span></div>
      <div class="profile-row"><span class="profile-label">Role:</span><span class="profile-data">Member</span></div>
      <div class="profile-row"><span class="profile-label">Username:</span><span class="profile-data">salas_a</span></div>
    </div>

    <div class="profile-card">
      <div class="profile-row"><span class="profile-label">Name:</span><span class="profile-data">Agnes Sherman</span></div>
      <div class="profile-row"><span class="profile-label">Title:</span><span class="profile-data">Developer</span></div>
      <div class="profile-row"><span class="profile-label">Company:</span><span class="profile-data">Apple</span></div>
      <div class="profile-row"><span class="profile-label">Role:</span><span class="profile-data">Admin</span></div>
      <div class="profile-row"><span class="profile-label">Username:</span><span class="profile-data">shermanagnes</span></div>
    </div>

    </div>
  )
}

`;

const cssCode = `.tables{
  margin-top: 15%;
  margin-left: 2%;
  color: #706a6a;
}
.tables h1{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}
.tables h2{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  font-size: 1.8rem;
  line-height: 2.25rem;
  font-weight: 400;
}
.tables h4{
  font-size: 18px;
  color: rgb(71 ,85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}
.table-container {
  margin: 20px;
  padding: 50px;
  border: 1px solid rgb(227, 227, 227);
  border-radius: 10px;


}

/* Make the table container responsive */
.table-responsive {
  overflow-x: auto;
}

/* Style for the table */
.styled-table {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  font-size: 16px;
}

.styled-table thead {
  background-color: #f0fdf4; /* Light green header */
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
  border: 1px solid #e2e8f0; /* Light grey border */
  text-align: left;
  color: gray;
}

.styled-table tbody tr {
  transition: background-color 0.2s ease-in;
}

.styled-table tbody tr:nth-child(even) {
  background-color: #f9fafb; /* Light grey row for even rows */
}

.styled-table th {
  font-weight: bold;
  color: #334155; /* Dark grey text color */
}

.styled-table tbody tr:hover {
  background-color: #ecf1f7; /* Light grey hover effect */
}

/* Adjust table font size and layout for smaller screens */
@media (max-width: 768px) {
  .styled-table {
    font-size: 14px;
  }

  .styled-table th,
  .styled-table td {
    padding: 8px 10px;
  }
}

@media (max-width: 480px) {
  .styled-table {
    font-size: 12px;
  }

  .styled-table th,
  .styled-table td {
    padding: 6px 8px;
  }

  /* Optional: Stack table rows on extra small screens */
  .table-container {
    overflow-x: auto;
  }
}`;
  return (
    <>
     <div className="tables">
            <h1>Tables</h1>
            <p>The table element represents tabular data — that is, the information presented in a two-dimensional table comprised of rows and columns of cells containing data.</p>
        </div>

        <div className="table-container">
        <Table2/>
    </div>

    <div className="tables">
            <h2>Variations</h2>
            <h4>Simple Table</h4>
        </div>

        <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode} cssCode={cssCode}/>
    </div>

        <div className="table-container">
     <Table2/>
    </div>
    </>
  );
};

export default Table;
