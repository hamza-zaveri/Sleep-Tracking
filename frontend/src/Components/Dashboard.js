import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div class="container table-responsive py-5">
        <table class="table table-bordered table-hover">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Serial Number</th>
              <th scope="col">Title</th>
              <th scope="col">Date</th>
              <th scope="col">Sleep time</th>
              <th scope="col">Wakeup time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Evening nap</td>
              <td>2022-04-23</td>
              <td>5:30</td>
              <td>17:20</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Night sleep</td>
              <td>2022-04-23</td>
              <td>21:00</td>
              <td>7:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Dashboard;
