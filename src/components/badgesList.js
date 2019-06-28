import React from "react";
import { Link } from "react-router-dom";

import "./styles/Badge.css";

function userSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filterBadges, setFilterBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilterBadges(result);
  }, [badges, query]);

  return { query, setQuery, filterBadges };
}

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filterBadges } = userSearchBadges(badges);

  if (filterBadges.length === 0) {
    return (
      <React.Fragment>
        <div className="BadgesList">
          <div className="form-group">
            <label>FilterBadges</label>
            <input
              type="text"
              className="form-control"
              value={query}
              onChange={e => {
                setQuery(e.target.value);
              }}
            />
          </div>
        </div>
        <h3>No existen Badges</h3>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <div className="BadgesList">
        <div className="form-group">
          <label>FilterBadges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>
      </div>

      <ul className="list-unstyled">
        {filterBadges.map(badge => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
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
              </Link>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default BadgesList;
