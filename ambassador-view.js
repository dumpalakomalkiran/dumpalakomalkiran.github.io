// The Angular component owns consent, availability and chat state.
const dialogId = 'kk-ambassador-panel';

function preparePanel(dialog) {
  const consent = dialog.querySelector('.consent');
  if (!consent || consent.querySelector('.privacy-toggle')) return;
  const checkbox = consent.querySelector('input');
  const input = dialog.querySelector('textarea');
  const label = dialog.querySelector('label[for="kk-amb-input"]');
  const log = dialog.querySelector('.log');
  label.classList.remove('visually-hidden');
  log.tabIndex = 0;

  const details = document.createElement('div');
  details.id = 'kk-privacy-details';
  const hadFocus = document.activeElement === checkbox;
  details.append(...consent.children);
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'privacy-toggle';
  toggle.setAttribute('aria-controls', details.id);
  toggle.textContent = 'Privacy notice';
  consent.append(toggle, details);

  function showDetails(expanded) {
    details.hidden = !expanded;
    toggle.setAttribute('aria-expanded', String(expanded));
  }
  function syncConsent() {
    toggle.hidden = !checkbox.checked;
    showDetails(!checkbox.checked);
  }
  toggle.addEventListener('click', () => showDetails(details.hidden));
  checkbox.addEventListener('change', () => {
    syncConsent();
    if (checkbox.checked) requestAnimationFrame(() => {
      if (dialog.open) (input.disabled ? toggle : input).focus();
    });
  });
  syncConsent();
  if (hadFocus) (checkbox.checked ? toggle : checkbox).focus();
  const hint = document.createElement('span');
  hint.className = 'composer-hint';
  hint.id = 'kk-amb-keyboard';
  hint.textContent = 'Enter to send · Shift+Enter for a new line';
  label.after(hint);
  input.setAttribute('aria-describedby', hint.id + ' kk-amb-count');
  dialog.querySelector('.send').setAttribute('aria-label','Send question');
  dialog.querySelector('.tool').setAttribute('aria-label','Clear conversation');
}

function onPanelOpen(event) {
  const dialog = event.target;
  if (dialog.id === dialogId && dialog.open) preparePanel(dialog);
}
document.addEventListener('toggle', onPanelOpen, true);
// Opening the dialog and rendering its contents can occur in separate Angular turns.
document.addEventListener('focusin', event => {
  const dialog = event.target.closest?.('#' + dialogId + '[open]');
  if (dialog) preparePanel(dialog);
});
const opened = document.querySelector('#' + dialogId + '[open]');
if (opened) preparePanel(opened);
