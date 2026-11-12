
import React from "react";
import {
  Plus,
  Users,
  Clock3,
  CheckCircle2,
  TrendingUp,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { useLeads } from "../../hooks/useLeads";

const Leads = () => {
  const {leads , navigate, deleteLeads } = useLeads();


 

  return (
    <div className="min-h-screen bg-slate-50 p-5 md:p-8">

      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="mb-1 text-sm text-slate-500">
            Workspace / Leads
          </p>

          <h1 className="text-2xl font-bold text-slate-900">
            All Leads
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage and track all your business leads in one place.
          </p>
        </div>

        <button
          onClick={() => navigate("/dashboard/create")}
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          <Plus size={18} />
          Add New Lead
        </button>
      </div>

      {/* Stats Cards */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {/* Total Leads */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
              <Users size={21} />
            </div>
            <ArrowUpRight size={18} className="text-blue-500" />
          </div>

          <p className="mt-5 text-sm font-medium text-slate-500">
            Total Leads
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            {leads.length}
          </h2>
        </div>

        {/* New Leads */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
              <Clock3 size={21} />
            </div>
            <ArrowUpRight size={18} className="text-amber-500" />
          </div>

          <p className="mt-5 text-sm font-medium text-slate-500">
            New Leads
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            {leads.filter((lead) => lead.status === "New").length}
          </h2>
        </div>

        {/* Qualified Leads */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
              <CheckCircle2 size={21} />
            </div>
            <ArrowUpRight size={18} className="text-emerald-500" />
          </div>

          <p className="mt-5 text-sm font-medium text-slate-500">
            Qualified Leads
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            {leads.filter((lead) => lead.status === "Qualified").length}
          </h2>
        </div>

        {/* Converted Leads */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-purple-50 p-3 text-purple-600">
              <TrendingUp size={21} />
            </div>
            <ArrowUpRight size={18} className="text-purple-500" />
          </div>

          <p className="mt-5 text-sm font-medium text-slate-500">
            Converted
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            {leads.filter((lead) => lead.status === "Converted").length}
          </h2>
        </div>

      </div>

      {/* Leads Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div className="border-b border-slate-200 p-5">
          <h2 className="text-lg font-bold text-slate-900">
            Lead Directory
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            All your leads and their details.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px] text-left">

            <thead className="bg-slate-50">
              <tr className="text-xs uppercase tracking-wide text-slate-500">
                <th className="px-6 py-4 font-semibold">Lead Details</th>
                <th className="px-6 py-4 font-semibold">Contact</th>
                <th className="px-6 py-4 font-semibold">Source</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Priority</th>
                <th className="px-6 py-4 font-semibold">Value</th>
                <th className="px-6 py-4 font-semibold">Created</th>
                <th className="px-6 py-4 font-semibold">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">

              {leads.length > 0 ? (
                leads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="transition hover:bg-slate-50"
                  >
                    {/* Lead Details */}
                    <td className="px-6 py-4">
                      <p className="font-semibold text-slate-800">
                        {lead.fullName}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {lead.companyName}
                      </p>
                    </td>

                    {/* Contact */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <Mail size={14} />
                        {lead.email}
                      </div>

                      <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                        <Phone size={14} />
                        {lead.phone}
                      </div>
                    </td>

                    {/* Source */}
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {lead.source}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                          lead.status === "New"
                            ? "bg-blue-50 text-blue-600"
                            : lead.status === "Qualified"
                            ? "bg-emerald-50 text-emerald-600"
                            : lead.status === "Converted"
                            ? "bg-purple-50 text-purple-600"
                            : "bg-rose-50 text-rose-600"
                        }`}
                      >
                        {lead.status}
                      </span>
                    </td>

                    {/* Priority */}
                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                          lead.priority === "High"
                            ? "bg-rose-50 text-rose-600"
                            : lead.priority === "Medium"
                            ? "bg-amber-50 text-amber-600"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {lead.priority}
                      </span>
                    </td>

                    {/* Estimated Value */}
                    <td className="px-6 py-4 text-sm font-semibold text-slate-800">
                      ₹{Number(lead.estimatedValue ?? lead.value ?? 0).toLocaleString("en-IN")}
                    </td>

                    {/* Created Date */}
                    <td className="px-6 py-4 text-xs text-slate-500">
                      {lead.createdAt
                        ? new Date(lead.createdAt).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : lead.date || "-"}
                    </td>

                    <td className="text-red-600 cursor-pointer" onClick={()=>deleteLeads(lead.id)} >
                        delete
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-6 py-16 text-center">
                    <div className="flex flex-col items-center">
                      <div className="mb-4 rounded-full bg-slate-100 p-4">
                        <Users size={28} className="text-slate-400" />
                      </div>

                      <h3 className="text-base font-semibold text-slate-800">
                        No leads found
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Start by adding your first business lead.
                      </p>

                      <button
                        onClick={() => navigate("/leads/create")}
                        className="mt-5 flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                      >
                        <Plus size={16} />
                        Add Your First Lead
                      </button>
                    </div>
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 px-6 py-4">
          <p className="text-sm text-slate-500">
            Showing {leads.length} leads
          </p>
        </div>

      </div>
    </div>
  );
};

export default Leads;
