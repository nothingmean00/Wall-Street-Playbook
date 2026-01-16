"use client"

import { useState, useEffect } from "react"
import { 
  FileText, 
  Download, 
  Clock, 
  CheckCircle, 
  XCircle,
  Loader2,
  Eye,
  LogOut,
  User,
  Mail,
  Phone,
  Briefcase,
  Building2,
  Calendar,
  MessageSquare,
  RefreshCw,
  ChevronRight,
  AlertCircle,
  Trash2
} from "lucide-react"

interface Submission {
  id: number
  name: string
  email: string
  phone: string | null
  service_type: string
  target_role: string | null
  target_firms: string | null
  current_status: string | null
  experience_level: string | null
  timeline: string | null
  specific_concerns: string | null
  additional_notes: string | null
  resume_url: string
  resume_filename: string | null
  status: string
  payment_status: string | null
  stripe_session_id: string | null
  amount_paid: number | null
  admin_notes: string | null
  created_at: string
  updated_at: string
}

const statusColors: Record<string, { bg: string; text: string; label: string }> = {
  pending: { bg: "bg-amber-100", text: "text-amber-700", label: "Pending" },
  in_review: { bg: "bg-blue-100", text: "text-blue-700", label: "In Review" },
  in_progress: { bg: "bg-purple-100", text: "text-purple-700", label: "In Progress" },
  completed: { bg: "bg-green-100", text: "text-green-700", label: "Completed" },
  cancelled: { bg: "bg-red-100", text: "text-red-700", label: "Cancelled" },
}

const paymentStatusColors: Record<string, { bg: string; text: string; label: string }> = {
  unpaid: { bg: "bg-red-100", text: "text-red-700", label: "Unpaid" },
  paid: { bg: "bg-green-100", text: "text-green-700", label: "Paid" },
}

const statusOptions = [
  { value: "pending", label: "Pending" },
  { value: "in_review", label: "In Review" },
  { value: "in_progress", label: "In Progress" },
  { value: "completed", label: "Completed" },
  { value: "cancelled", label: "Cancelled" },
]

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [authError, setAuthError] = useState("")
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)
  const [loading, setLoading] = useState(false)
  const [updating, setUpdating] = useState(false)
  const [adminNotes, setAdminNotes] = useState("")
  const [filterStatus, setFilterStatus] = useState<string>("all")

  const fetchSubmissions = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/admin/submissions", {
        headers: {
          Authorization: `Bearer ${password}`,
        },
      })
      
      if (response.status === 401) {
        setIsAuthenticated(false)
        setAuthError("Session expired. Please login again.")
        return
      }
      
      const data = await response.json()
      setSubmissions(data.submissions || [])
    } catch (error) {
      console.error("Failed to fetch submissions:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setAuthError("")
    setLoading(true)
    
    try {
      const response = await fetch("/api/admin/submissions", {
        headers: {
          Authorization: `Bearer ${password}`,
        },
      })
      
      if (response.ok) {
        setIsAuthenticated(true)
        const data = await response.json()
        setSubmissions(data.submissions || [])
      } else {
        setAuthError("Invalid password")
      }
    } catch (error) {
      setAuthError("Connection error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setPassword("")
    setSubmissions([])
    setSelectedSubmission(null)
  }

  const updateSubmission = async (id: number, updates: { status?: string; admin_notes?: string }) => {
    setUpdating(true)
    try {
      const response = await fetch(`/api/admin/submissions/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify(updates),
      })
      
      if (response.ok) {
        await fetchSubmissions()
        if (selectedSubmission?.id === id) {
          setSelectedSubmission(prev => prev ? { ...prev, ...updates } : null)
        }
      }
    } catch (error) {
      console.error("Failed to update submission:", error)
    } finally {
      setUpdating(false)
    }
  }

  const deleteSubmission = async (id: number) => {
    if (!confirm("Are you sure you want to delete this submission? This cannot be undone.")) {
      return
    }
    
    try {
      const response = await fetch(`/api/admin/submissions/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${password}`,
        },
      })
      
      if (response.ok) {
        setSelectedSubmission(null)
        await fetchSubmissions()
      }
    } catch (error) {
      console.error("Failed to delete submission:", error)
    }
  }

  useEffect(() => {
    if (selectedSubmission) {
      setAdminNotes(selectedSubmission.admin_notes || "")
    }
  }, [selectedSubmission])

  const filteredSubmissions = filterStatus === "all" 
    ? submissions 
    : submissions.filter(s => s.status === filterStatus)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getServiceLabel = (type: string) => {
    return type === "resume-rewrite" ? "Resume Rewrite" : "Resume Review"
  }

  const getServicePrice = (type: string) => {
    return type === "resume-rewrite" ? "$497" : "$197"
  }

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-4">
              <FileText className="w-8 h-8 text-amber-400" />
            </div>
            <h1 className="text-2xl font-bold text-white">Resume Admin</h1>
            <p className="text-slate-400 mt-2">Wall Street Playbook</p>
          </div>
          
          <form onSubmit={handleLogin} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
            <div className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                  Admin Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  placeholder="Enter admin password"
                  required
                />
              </div>
              
              {authError && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {authError}
                </div>
              )}
              
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Authenticating...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  // Main Admin Dashboard
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800/80 backdrop-blur border-b border-slate-700 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <FileText className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h1 className="text-lg font-bold">Resume Submissions</h1>
                <p className="text-sm text-slate-400">{submissions.length} total submissions</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={fetchSubmissions}
                disabled={loading}
                className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                title="Refresh"
              >
                <RefreshCw className={`w-5 h-5 text-slate-400 ${loading ? "animate-spin" : ""}`} />
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex gap-6">
          {/* Submissions List */}
          <div className="w-full lg:w-1/2 xl:w-2/5">
            {/* Filter */}
            <div className="mb-4 flex items-center gap-2">
              <span className="text-sm text-slate-400">Filter:</span>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-amber-500"
              >
                <option value="all">All Status</option>
                {statusOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* List */}
            <div className="space-y-3">
              {loading && submissions.length === 0 ? (
                <div className="flex items-center justify-center py-20">
                  <Loader2 className="w-8 h-8 animate-spin text-amber-400" />
                </div>
              ) : filteredSubmissions.length === 0 ? (
                <div className="text-center py-20 text-slate-500">
                  <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>No submissions found</p>
                </div>
              ) : (
                filteredSubmissions.map((submission) => {
                  const statusStyle = statusColors[submission.status] || statusColors.pending
                  const paymentStyle = paymentStatusColors[submission.payment_status || "unpaid"] || paymentStatusColors.unpaid
                  const isSelected = selectedSubmission?.id === submission.id
                  
                  return (
                    <button
                      key={submission.id}
                      onClick={() => setSelectedSubmission(submission)}
                      className={`w-full text-left p-4 rounded-xl border transition-all ${
                        isSelected 
                          ? "bg-slate-800 border-amber-500/50" 
                          : "bg-slate-800/50 border-slate-700 hover:border-slate-600"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold truncate">{submission.name}</h3>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${paymentStyle.bg} ${paymentStyle.text}`}>
                              {paymentStyle.label}
                            </span>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusStyle.bg} ${statusStyle.text}`}>
                              {statusStyle.label}
                            </span>
                          </div>
                          <p className="text-sm text-slate-400 truncate mt-1">{submission.email}</p>
                          <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-3 h-3" />
                              {getServiceLabel(submission.service_type)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {formatDate(submission.created_at)}
                            </span>
                            {submission.amount_paid && (
                              <span className="text-green-400 font-medium">
                                ${(submission.amount_paid / 100).toFixed(0)}
                              </span>
                            )}
                          </div>
                        </div>
                        <ChevronRight className={`w-5 h-5 flex-shrink-0 transition-colors ${isSelected ? "text-amber-400" : "text-slate-600"}`} />
                      </div>
                    </button>
                  )
                })
              )}
            </div>
          </div>

          {/* Details Panel */}
          <div className="hidden lg:block lg:w-1/2 xl:w-3/5">
            {selectedSubmission ? (
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden sticky top-24">
                {/* Header */}
                <div className="bg-slate-800 px-6 py-4 border-b border-slate-700">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-bold">{selectedSubmission.name}</h2>
                      <p className="text-slate-400 text-sm mt-1">
                        Submitted {formatDate(selectedSubmission.created_at)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={selectedSubmission.resume_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-medium rounded-lg transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download Resume
                      </a>
                      <button
                        onClick={() => deleteSubmission(selectedSubmission.id)}
                        className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                        title="Delete submission"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
                  {/* Status & Service */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-900/50 rounded-xl p-4">
                      <label className="block text-xs font-medium text-slate-400 mb-2">Status</label>
                      <select
                        value={selectedSubmission.status}
                        onChange={(e) => updateSubmission(selectedSubmission.id, { status: e.target.value })}
                        disabled={updating}
                        className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
                      >
                        {statusOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="bg-slate-900/50 rounded-xl p-4">
                      <label className="block text-xs font-medium text-slate-400 mb-2">Service</label>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{getServiceLabel(selectedSubmission.service_type)}</span>
                        <span className="text-amber-400 font-bold">{getServicePrice(selectedSubmission.service_type)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Contact Information
                    </h3>
                    <div className="bg-slate-900/50 rounded-xl p-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-slate-500" />
                        <a href={`mailto:${selectedSubmission.email}`} className="text-amber-400 hover:underline">
                          {selectedSubmission.email}
                        </a>
                      </div>
                      {selectedSubmission.phone && (
                        <div className="flex items-center gap-3">
                          <Phone className="w-4 h-4 text-slate-500" />
                          <a href={`tel:${selectedSubmission.phone}`} className="hover:text-amber-400">
                            {selectedSubmission.phone}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Background */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Background
                    </h3>
                    <div className="bg-slate-900/50 rounded-xl p-4 space-y-3 text-sm">
                      {selectedSubmission.target_role && (
                        <div>
                          <span className="text-slate-500">Target Role:</span>
                          <p className="text-white mt-0.5">{selectedSubmission.target_role}</p>
                        </div>
                      )}
                      {selectedSubmission.target_firms && (
                        <div>
                          <span className="text-slate-500">Target Firms:</span>
                          <p className="text-white mt-0.5">{selectedSubmission.target_firms}</p>
                        </div>
                      )}
                      {selectedSubmission.current_status && (
                        <div>
                          <span className="text-slate-500">Current Status:</span>
                          <p className="text-white mt-0.5">{selectedSubmission.current_status}</p>
                        </div>
                      )}
                      {selectedSubmission.experience_level && (
                        <div>
                          <span className="text-slate-500">Experience:</span>
                          <p className="text-white mt-0.5">{selectedSubmission.experience_level}</p>
                        </div>
                      )}
                      {selectedSubmission.timeline && (
                        <div>
                          <span className="text-slate-500">Timeline:</span>
                          <p className="text-white mt-0.5">{selectedSubmission.timeline}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Concerns & Notes */}
                  {(selectedSubmission.specific_concerns || selectedSubmission.additional_notes) && (
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        Client Notes
                      </h3>
                      <div className="bg-slate-900/50 rounded-xl p-4 space-y-3 text-sm">
                        {selectedSubmission.specific_concerns && (
                          <div>
                            <span className="text-slate-500">Specific Concerns:</span>
                            <p className="text-white mt-0.5 whitespace-pre-wrap">{selectedSubmission.specific_concerns}</p>
                          </div>
                        )}
                        {selectedSubmission.additional_notes && (
                          <div>
                            <span className="text-slate-500">Additional Notes:</span>
                            <p className="text-white mt-0.5 whitespace-pre-wrap">{selectedSubmission.additional_notes}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Admin Notes */}
                  <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Admin Notes
                    </h3>
                    <div className="bg-slate-900/50 rounded-xl p-4">
                      <textarea
                        value={adminNotes}
                        onChange={(e) => setAdminNotes(e.target.value)}
                        rows={4}
                        className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:border-amber-500"
                        placeholder="Add internal notes about this submission..."
                      />
                      <button
                        onClick={() => updateSubmission(selectedSubmission.id, { admin_notes: adminNotes })}
                        disabled={updating || adminNotes === (selectedSubmission.admin_notes || "")}
                        className="mt-3 px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 rounded-lg text-sm transition-colors"
                      >
                        {updating ? "Saving..." : "Save Notes"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-slate-800/30 border border-slate-700/50 border-dashed rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <Eye className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>Select a submission to view details</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Detail Modal */}
      {selectedSubmission && (
        <div className="lg:hidden fixed inset-0 bg-slate-900/95 z-50 overflow-y-auto">
          <div className="min-h-screen">
            {/* Mobile Header */}
            <div className="sticky top-0 bg-slate-800 px-4 py-3 border-b border-slate-700 flex items-center justify-between">
              <button
                onClick={() => setSelectedSubmission(null)}
                className="text-slate-400 hover:text-white"
              >
                ← Back
              </button>
              <a
                href={selectedSubmission.resume_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-amber-500 text-slate-900 text-sm font-medium rounded-lg"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>

            {/* Mobile Content */}
            <div className="p-4 space-y-4">
              <div>
                <h2 className="text-xl font-bold">{selectedSubmission.name}</h2>
                <p className="text-slate-400 text-sm">{selectedSubmission.email}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800 rounded-xl p-3">
                  <label className="block text-xs text-slate-400 mb-1">Status</label>
                  <select
                    value={selectedSubmission.status}
                    onChange={(e) => updateSubmission(selectedSubmission.id, { status: e.target.value })}
                    className="w-full bg-slate-700 border-0 rounded-lg px-2 py-1 text-sm"
                  >
                    {statusOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div className="bg-slate-800 rounded-xl p-3">
                  <label className="block text-xs text-slate-400 mb-1">Service</label>
                  <p className="font-medium text-sm">{getServiceLabel(selectedSubmission.service_type)}</p>
                  <p className="text-amber-400 font-bold text-sm">{getServicePrice(selectedSubmission.service_type)}</p>
                </div>
              </div>

              {selectedSubmission.target_role && (
                <div className="bg-slate-800 rounded-xl p-3">
                  <label className="block text-xs text-slate-400 mb-1">Target Role</label>
                  <p className="text-sm">{selectedSubmission.target_role}</p>
                </div>
              )}

              {selectedSubmission.target_firms && (
                <div className="bg-slate-800 rounded-xl p-3">
                  <label className="block text-xs text-slate-400 mb-1">Target Firms</label>
                  <p className="text-sm">{selectedSubmission.target_firms}</p>
                </div>
              )}

              {selectedSubmission.specific_concerns && (
                <div className="bg-slate-800 rounded-xl p-3">
                  <label className="block text-xs text-slate-400 mb-1">Concerns</label>
                  <p className="text-sm whitespace-pre-wrap">{selectedSubmission.specific_concerns}</p>
                </div>
              )}

              <div className="bg-slate-800 rounded-xl p-3">
                <label className="block text-xs text-slate-400 mb-2">Admin Notes</label>
                <textarea
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                  rows={3}
                  className="w-full bg-slate-700 border-0 rounded-lg px-3 py-2 text-sm resize-none"
                  placeholder="Add notes..."
                />
                <button
                  onClick={() => updateSubmission(selectedSubmission.id, { admin_notes: adminNotes })}
                  disabled={updating}
                  className="mt-2 w-full py-2 bg-slate-700 rounded-lg text-sm"
                >
                  Save Notes
                </button>
              </div>

              <button
                onClick={() => deleteSubmission(selectedSubmission.id)}
                className="w-full py-3 text-red-400 border border-red-500/30 rounded-xl text-sm"
              >
                Delete Submission
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
