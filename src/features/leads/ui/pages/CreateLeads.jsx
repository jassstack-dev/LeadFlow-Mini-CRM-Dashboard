
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  UserRound,
  Building2,
  Mail,
  Phone,
  IndianRupee,
  FileText,
  Save,
  RotateCcw,
} from "lucide-react";
import { useLeads } from "../../hooks/useLeads";


const CreateLeads = () => {
  const { register,
    handleSubmit,
    reset,
    errors,
    isSubmitting,
    onSubmit,inputClass,errorClass} = useLeads()

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">

      {/* Header */}
      <div className="max-w-5xl mx-auto mb-7">
        <p className="text-sm text-gray-400 mb-2">
          Workspace / Leads / Create Lead
        </p>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Create New Lead
        </h1>

        <p className="text-sm text-gray-500 mt-2">
          Add a new potential customer to your CRM.
        </p>
      </div>

      {/* Form Card */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm">

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Personal Information */}
          <div className="p-5 md:p-8 border-b border-gray-100">

            <div className="flex items-center gap-3 mb-7">
              <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                <UserRound size={21} />
              </div>

              <div>
                <h2 className="font-semibold text-gray-800">
                  Personal Information
                </h2>
                <p className="text-xs text-gray-400 mt-1">
                  Enter customer's basic details
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter full name"
                  className={inputClass}
                  {...register("fullName", {
                    required: "Full name is required",
                    minLength: {
                      value: 2,
                      message: "Name must contain at least 2 characters",
                    },
                  })}
                />

                {errors.fullName && (
                  <p className={errorClass}>
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className={inputClass}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />

                {errors.email && (
                  <p className={errorClass}>
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>

                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  className={inputClass}
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\+?[0-9\s()-]{7,15}$/,
                      message: "Enter a valid phone number",
                    },
                  })}
                />

                {errors.phone && (
                  <p className={errorClass}>
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter company name"
                  className={inputClass}
                  {...register("companyName", {
                    required: "Company name is required",
                  })}
                />

                {errors.companyName && (
                  <p className={errorClass}>
                    {errors.companyName.message}
                  </p>
                )}
              </div>

            </div>
          </div>

          {/* Lead Information */}
          <div className="p-5 md:p-8 border-b border-gray-100">

            <div className="flex items-center gap-3 mb-7">
              <div className="p-2.5 bg-purple-50 rounded-xl text-purple-600">
                <Building2 size={21} />
              </div>

              <div>
                <h2 className="font-semibold text-gray-800">
                  Lead Information
                </h2>
                <p className="text-xs text-gray-400 mt-1">
                  Configure lead details and preferences
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Industry */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry <span className="text-red-500">*</span>
                </label>

                <select
                  className={inputClass}
                  {...register("industry", {
                    required: "Please select an industry",
                  })}
                >
                  <option value="">Select Industry</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Technology">Technology</option>
                  <option value="Education">Education</option>
                  <option value="Finance">Finance</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Retail">Retail</option>
                  <option value="Other">Other</option>
                </select>

                {errors.industry && (
                  <p className={errorClass}>
                    {errors.industry.message}
                  </p>
                )}
              </div>

              {/* Source */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lead Source <span className="text-red-500">*</span>
                </label>

                <select
                  className={inputClass}
                  {...register("source", {
                    required: "Please select lead source",
                  })}
                >
                  <option value="">Select Source</option>
                  <option value="Website">Website</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Cold Call">Cold Call</option>
                  <option value="Referral">Referral</option>
                  <option value="Other">Other</option>
                </select>

                {errors.source && (
                  <p className={errorClass}>
                    {errors.source.message}
                  </p>
                )}
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lead Status
                </label>

                <select
                  className={inputClass}
                  {...register("status")}
                >
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Qualified">Qualified</option>
                  <option value="Converted">Converted</option>
                  <option value="Lost">Lost</option>
                </select>
              </div>

              {/* Priority */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Priority
                </label>

                <select
                  className={inputClass}
                  {...register("priority")}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              {/* Estimated Value */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Estimated Deal Value (₹) <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <IndianRupee
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="number"
                    min="0"
                    placeholder="Enter estimated value"
                    className={`${inputClass} pl-11`}
                    {...register("estimatedValue", {
                      required: "Estimated value is required",
                      valueAsNumber: true,
                      min: {
                        value: 0,
                        message: "Value cannot be negative",
                      },
                    })}
                  />
                </div>

                {errors.estimatedValue && (
                  <p className={errorClass}>
                    {errors.estimatedValue.message}
                  </p>
                )}
              </div>

            </div>
          </div>

          {/* Notes */}
          <div className="p-5 md:p-8">

            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-amber-50 rounded-xl text-amber-600">
                <FileText size={21} />
              </div>

              <div>
                <h2 className="font-semibold text-gray-800">
                  Additional Notes
                </h2>
                <p className="text-xs text-gray-400 mt-1">
                  Add any additional information
                </p>
              </div>
            </div>

            <textarea
              rows="4"
              placeholder="Write something about this lead..."
              className={`${inputClass} resize-none`}
              {...register("notes", {
                maxLength: {
                  value: 500,
                  message: "Maximum 500 characters allowed",
                },
              })}
            />

            {errors.notes && (
              <p className={errorClass}>
                {errors.notes.message}
              </p>
            )}

          </div>

          {/* Footer Actions */}
          <div className="px-5 md:px-8 py-5 bg-gray-50 rounded-b-2xl border-t border-gray-100 flex flex-col-reverse sm:flex-row justify-end gap-3">

            <button
              type="button"
              onClick={() => reset()}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-white transition text-sm font-medium"
            >
              <RotateCcw size={17} />
              Reset Form
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60 transition text-sm font-semibold"
            >
              <Save size={17} />
              {isSubmitting ? "Saving..." : "Create Lead"}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateLeads;
