import React from "react";
import axios from "axios";

class GroupList extends React.Component {
  state = {
    groups: [] // 초기값으로 빈 배열 설정
  };

  componentDidMount() {
    axios.get("http://localhost:8080/groups")
      .then(response => {
        const data = response.data.response;
        const groupsArray = Array.from(data); // 객체를 배열로 변환
        this.setState({ groups: groupsArray }); // 가져온 데이터로 groups 배열 업데이트
      })
      .catch(error => {
        console.error("Error fetching groups:", error);
      });
  }

  render() {
    const { groups } = this.state; // state에서 groups 배열 가져오기
    return (
      <div>
        <h1>Group List</h1>
        <table>
          <thead>
            <tr>
              <th>Group ID</th>
              <th>Subject</th>
              <th>Category</th>
              <th>Host</th>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
          </thead>
          <tbody>
            {groups.map(group => (
              <tr key={group.groupId}>
                <td>{group.groupId}</td>
                <td>{group.study.subject}</td>
                <td>{group.study.category}</td>
                <td>{group.host.hostName}</td>
                <td>{group.time.startTime}</td>
                <td>{group.time.endTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GroupList;
