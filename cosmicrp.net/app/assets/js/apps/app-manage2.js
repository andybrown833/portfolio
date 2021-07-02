function ToggleAllApplications() {
      var apps_all = document.getElementById('apps.all');
      var apps_pending = document.getElementById('apps.pending');
      var apps_denied = document.getElementById('apps.denied');
      var apps_acepted = document.getElementById('apps.acepted');
      var apps_closed = document.getElementById('apps.closed');
      
      var apps_all_toggle = document.getElementById('ToggleAllApplications')
      var apps_pending_toggle = document.getElementById('TogglePendingApplications')
      var apps_denied_toggle = document.getElementById('ToggleDeniedApplications')
      var apps_acepted_toggle = document.getElementById('ToggleAcceptedApplications')
      var apps_closed_toggle = document.getElementById('ToggleClosedApplications')
      apps_all.classList.remove('hidden')
      apps_pending.classList.add('hidden')
      apps_denied.classList.add('hidden')
      apps_acepted.classList.add('hidden')
      apps_closed.classList.add('hidden')

      // BACKGROUND
      apps_all_toggle.classList.add('bg-gray-900')
      apps_pending_toggle.classList.remove('bg-gray-900')
      apps_denied_toggle.classList.remove('bg-gray-900')
      apps_acepted_toggle.classList.remove('bg-gray-900')
      apps_closed_toggle.classList.remove('bg-gray-900')

      // TEXT
      apps_all_toggle.classList.add('text-white')
      apps_pending_toggle.classList.add('text-gray-300')
      apps_denied_toggle.classList.add('text-gray-300')
      apps_acepted_toggle.classList.add('text-gray-300')
      apps_closed_toggle.classList.add('text-gray-300')
}
function TogglePendingApplications() {
      var apps_all = document.getElementById('apps.all');
      var apps_pending = document.getElementById('apps.pending');
      var apps_denied = document.getElementById('apps.denied');
      var apps_acepted = document.getElementById('apps.acepted');
      var apps_closed = document.getElementById('apps.closed');
      
      var apps_all_toggle = document.getElementById('ToggleAllApplications')
      var apps_pending_toggle = document.getElementById('TogglePendingApplications')
      var apps_denied_toggle = document.getElementById('ToggleDeniedApplications')
      var apps_acepted_toggle = document.getElementById('ToggleAcceptedApplications')
      var apps_closed_toggle = document.getElementById('ToggleClosedApplications')
      apps_all.classList.add('hidden')
      apps_pending.classList.remove('hidden')
      apps_denied.classList.add('hidden')
      apps_acepted.classList.add('hidden')
      apps_closed.classList.add('hidden')

      // BACKGROUND
      apps_all_toggle.classList.remove('bg-gray-900')
      apps_pending_toggle.classList.add('bg-gray-900')
      apps_denied_toggle.classList.remove('bg-gray-900')
      apps_acepted_toggle.classList.remove('bg-gray-900')
      apps_closed_toggle.classList.remove('bg-gray-900')

      // TEXT
      apps_all_toggle.classList.add('text-gray-300')
      apps_pending_toggle.classList.add('text-white')
      apps_denied_toggle.classList.add('text-gray-300')
      apps_acepted_toggle.classList.add('text-gray-300')
      apps_closed_toggle.classList.add('text-gray-300')
}
function ToggleDeniedApplications() {
      var apps_all = document.getElementById('apps.all');
      var apps_pending = document.getElementById('apps.pending');
      var apps_denied = document.getElementById('apps.denied');
      var apps_acepted = document.getElementById('apps.acepted');
      var apps_closed = document.getElementById('apps.closed');
      
      var apps_all_toggle = document.getElementById('ToggleAllApplications')
      var apps_pending_toggle = document.getElementById('TogglePendingApplications')
      var apps_denied_toggle = document.getElementById('ToggleDeniedApplications')
      var apps_acepted_toggle = document.getElementById('ToggleAcceptedApplications')
      var apps_closed_toggle = document.getElementById('ToggleClosedApplications')
      apps_all.classList.add('hidden')
      apps_pending.classList.add('hidden')
      apps_denied.classList.remove('hidden')
      apps_acepted.classList.add('hidden')
      apps_closed.classList.add('hidden')

      // BACKGROUND
      apps_all_toggle.classList.remove('bg-gray-900')
      apps_pending_toggle.classList.remove('bg-gray-900')
      apps_denied_toggle.classList.add('bg-gray-900')
      apps_acepted_toggle.classList.remove('bg-gray-900')
      apps_closed_toggle.classList.remove('bg-gray-900')

      // TEXT
      apps_all_toggle.classList.add('text-gray-300')
      apps_pending_toggle.classList.add('text-gray-300')
      apps_denied_toggle.classList.add('text-white')
      apps_acepted_toggle.classList.add('text-gray-300')
      apps_closed_toggle.classList.add('text-gray-300')
}
function ToggleAcceptedApplications() {
      var apps_all = document.getElementById('apps.all');
      var apps_pending = document.getElementById('apps.pending');
      var apps_denied = document.getElementById('apps.denied');
      var apps_acepted = document.getElementById('apps.acepted');
      var apps_closed = document.getElementById('apps.closed');
      
      var apps_all_toggle = document.getElementById('ToggleAllApplications')
      var apps_pending_toggle = document.getElementById('TogglePendingApplications')
      var apps_denied_toggle = document.getElementById('ToggleDeniedApplications')
      var apps_acepted_toggle = document.getElementById('ToggleAcceptedApplications')
      var apps_closed_toggle = document.getElementById('ToggleClosedApplications')
      apps_all.classList.add('hidden')
      apps_pending.classList.add('hidden')
      apps_denied.classList.add('hidden')
      apps_acepted.classList.remove('hidden')
      apps_closed.classList.add('hidden')

      // BACKGROUND
      apps_all_toggle.classList.remove('bg-gray-900')
      apps_pending_toggle.classList.remove('bg-gray-900')
      apps_denied_toggle.classList.remove('bg-gray-900')
      apps_acepted_toggle.classList.add('bg-gray-900')
      apps_closed_toggle.classList.remove('bg-gray-900')

      // TEXT
      apps_all_toggle.classList.add('text-gray-300')
      apps_pending_toggle.classList.add('text-gray-300')
      apps_denied_toggle.classList.add('text-gray-300')
      apps_acepted_toggle.classList.add('text-white')
      apps_closed_toggle.classList.add('text-gray-300')
}
function ToggleClosedApplications() {
      var apps_all = document.getElementById('apps.all');
      var apps_pending = document.getElementById('apps.pending');
      var apps_denied = document.getElementById('apps.denied');
      var apps_acepted = document.getElementById('apps.acepted');
      var apps_closed = document.getElementById('apps.closed');
      
      var apps_all_toggle = document.getElementById('ToggleAllApplications')
      var apps_pending_toggle = document.getElementById('TogglePendingApplications')
      var apps_denied_toggle = document.getElementById('ToggleDeniedApplications')
      var apps_acepted_toggle = document.getElementById('ToggleAcceptedApplications')
      var apps_closed_toggle = document.getElementById('ToggleClosedApplications')
      apps_all.classList.add('hidden')
      apps_pending.classList.add('hidden')
      apps_denied.classList.add('hidden')
      apps_acepted.classList.add('hidden')
      apps_closed.classList.remove('hidden')

      // BACKGROUND
      apps_all_toggle.classList.remove('bg-gray-900')
      apps_pending_toggle.classList.remove('bg-gray-900')
      apps_denied_toggle.classList.remove('bg-gray-900')
      apps_acepted_toggle.classList.remove('bg-gray-900')
      apps_closed_toggle.classList.add('bg-gray-900')

      // TEXT
      apps_all_toggle.classList.add('text-gray-300')
      apps_pending_toggle.classList.add('text-gray-300')
      apps_denied_toggle.classList.add('text-gray-300')
      apps_acepted_toggle.classList.add('text-gray-300')
      apps_closed_toggle.classList.add('text-white')
}