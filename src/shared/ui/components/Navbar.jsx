import React from "react";
import { NavLink } from "react-router";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  ChartNoAxesCombined,
  CalendarDays,
  Kanban,
  UsersRound,
  Settings,
  UserRound,
} from "lucide-react";

const Navbar = () => {
  return (
    <aside className="w-64 h-screen bg-white border-r p-5 flex flex-col">

      <h1 className="text-2xl font-bold text-blue-600 mb-10">
        LeadFlow
      </h1>

      <nav className="flex-1 space-y-8">

        <div>
          <p className="text-xs font-semibold text-gray-400 mb-3">
            WORKSPACE
          </p>

          <NavLink to="/dashboard" className={({isActive}) =>
            `flex items-center gap-3 p-3 rounded-lg ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`
          }
          end>

            <LayoutDashboard size={19} />
            Dashboard
          </NavLink>

          <NavLink to="/dashboard/leads" end className={({isActive}) =>
            `flex items-center gap-3 p-3 rounded-lg ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`
          }>
            <Users size={19} />
            All Leads
          </NavLink>

          <NavLink to="/dashboard/create" className={({isActive}) =>
            `flex items-center gap-3 p-3 rounded-lg ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`
          }>
            <UserPlus size={19} />
            Add Lead
          </NavLink>

          <NavLink to="/analytics" className={({isActive}) =>
            `flex items-center gap-3 p-3 rounded-lg ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`
          }>
            <ChartNoAxesCombined size={19} />
            Analytics
          </NavLink>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-400 mb-3">
            MANAGEMENT
          </p>

          <NavLink to="/tasks" className={({isActive}) =>
            `flex items-center gap-3 p-3 rounded-lg ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`
          }>
            <CalendarDays size={19} />
            Tasks & Follow-ups
          </NavLink>

          <NavLink to="/pipeline" className={({isActive}) =>
            `flex items-center gap-3 p-3 rounded-lg ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`
          }>
            <Kanban size={19} />
            Pipeline
          </NavLink>

          <NavLink to="/contacts" className={({isActive}) =>
            `flex items-center gap-3 p-3 rounded-lg ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`
          }>
            <UsersRound size={19} />
            Contacts
          </NavLink>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-400 mb-3">
            PREFERENCES
          </p>

          <NavLink to="/settings" className={({isActive}) =>
            `flex items-center gap-3 p-3 rounded-lg ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`
          }>
            <Settings size={19} />
            Settings
          </NavLink>

          <NavLink to="/profile" className={({isActive}) =>
            `flex items-center gap-3 p-3 rounded-lg ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`
          }>
            <UserRound size={19} />
            My Profile
          </NavLink>
        </div>

      </nav>

      <div className="border-t pt-4 text-xs text-gray-400">
        LeadFlow CRM v1.0
      </div>

    </aside>
  );
};

export default Navbar;