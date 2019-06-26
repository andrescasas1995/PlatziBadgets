import React from "react";

import "./styles/Badge.css";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id}>
              <div className="card m-2 shadow p-3 bg-white rounded rounded-lg">
                <div className="card-body">
                  <div className="media">
                    <div className="Badge__section-name">
                      <img
                        src={badge.avatarUrl}
                        className="Badge__avatar mr-3"
                        alt="..."
                      />
                      <div className="media-body">
                        <h2 className="font-weight-bold">
                          {badge.firstName} {badge.lastName}
                        </h2>
                        <div>{badge.jobTitle}</div>
                        <div className="text-primary">@{badge.twitter}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
