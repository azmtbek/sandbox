import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks";
import {
  fetchNotificationsWebsocket,
  selectNotificationsMetadata,
  useGetNotificationsQuery,
} from "@/features/notifications/notificationsSlice";

export const Navbar = () => {
  const dispatch = useAppDispatch();

  useGetNotificationsQuery();

  const notificationsMetadata = useAppSelector(selectNotificationsMetadata);
  const numUnreadNotifications = notificationsMetadata.filter((n) => !n.read).length;
  console.log(numUnreadNotifications);

  const fetchNewNotifications = () => {
    dispatch(fetchNotificationsWebsocket());
  };

  let unreadNotificationsBadge;

  if (numUnreadNotifications > 0) {
    unreadNotificationsBadge = (
      <span className="badge">{numUnreadNotifications}</span>
    );
  }

  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
            <Link to="/users">Users</Link>
            <Link to="/notifications">
              Notifications {unreadNotificationsBadge}
            </Link>
          </div>
          <button className="button" onClick={fetchNewNotifications}>
            Refresh Notifications
          </button>
        </div>
      </section>
    </nav>
  );
};
