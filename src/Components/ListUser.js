import React , {Component} from 'react'

export default class ListUser extends Component {
    render() {
        return(
            <div class="container">
            <br />
  <h2 style={{ color : "white"}}>Hoverable Dark Table</h2><br />
  <p style={{ color : "white"}}>The .table-hover class adds a hover effect (grey background color) on table rows:</p>   
  <br />         
  <table class="table table-dark table-hover">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
</div>
        )
    }
}