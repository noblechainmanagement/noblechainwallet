// Supabase helper functions
// The supabase client is now initialized inline in the HTML

function isAnonKeyConfigured() {
  return typeof window.supabase !== 'undefined' && window.supabase.auth;
}

// Expose helper function to global scope
window.isAnonKeyConfigured = isAnonKeyConfigured;
