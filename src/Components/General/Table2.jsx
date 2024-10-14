import React from 'react'
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

    <div class="profile-card">
      <div class="profile-row"><span class="profile-label">Name:</span><span class="profile-data">Jemma Cummings</span></div>
      <div class="profile-row"><span class="profile-label">Title:</span><span class="profile-data">Senior Designer</span></div>
      <div class="profile-row"><span class="profile-label">Company:</span><span class="profile-data">20goto10</span></div>
      <div class="profile-row"><span class="profile-label">Role:</span><span class="profile-data">Member</span></div>
      <div class="profile-row"><span class="profile-label">Username:</span><span class="profile-data">jemmaC</span></div>
    </div>

    <div class="profile-card">
      <div class="profile-row"><span class="profile-label">Name:</span><span class="profile-data">Jimi Cardenas</span></div>
      <div class="profile-row"><span class="profile-label">Title:</span><span class="profile-data">Copywriter</span></div>
      <div class="profile-row"><span class="profile-label">Company:</span><span class="profile-data">Wind-UI</span></div>
      <div class="profile-row"><span class="profile-label">Role:</span><span class="profile-data">Owner</span></div>
      <div class="profile-row"><span class="profile-label">Username:</span><span class="profile-data">cardenasji</span></div>
    </div>

    <div class="profile-card">
      <div class="profile-row"><span class="profile-label">Name:</span><span class="profile-data">Mateusz Tucker</span></div>
      <div class="profile-row"><span class="profile-label">Title:</span><span class="profile-data">Project Manager</span></div>
      <div class="profile-row"><span class="profile-label">Company:</span><span class="profile-data">Tailwindui</span></div>
      <div class="profile-row"><span class="profile-label">Role:</span><span class="profile-data">Member</span></div>
      <div class="profile-row"><span class="profile-label">Username:</span><span class="profile-data">mt</span></div>
    </div>
  </div>
</div>

    </div>
  )
}
