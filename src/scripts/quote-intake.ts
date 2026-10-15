// The intake must acknowledge acceptance before the form confirms receipt.
const focusQuote = () => {
  if (!window.location.hash) return;
  const target = document.getElementById(window.location.hash.slice(1));
  const first = target?.querySelector('input:not([type="hidden"]):not([aria-hidden="true"]):not([tabindex="-1"]), select, textarea') as HTMLElement | null;
  if (first) first.focus({ preventScroll: true });
};
window.addEventListener('hashchange', focusQuote);
window.addEventListener('load', () => window.requestAnimationFrame(focusQuote));
document.addEventListener('click', (event) => {
  const link = (event.target as Element).closest('a[href*="#"]') as HTMLAnchorElement | null;
  if (link && link.origin === location.origin && link.pathname === location.pathname) window.setTimeout(focusQuote, 0);
});
focusQuote();

document.querySelectorAll('form.qcard').forEach((el) => {
  const form = el as HTMLFormElement;
  if (form.dataset.leadSubmitBound === 'true') return;
  const preferred = form.querySelector('[name="preferred_contact"]') as HTMLSelectElement | null;
  const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
  if (!submitButton || !form.querySelector('.qcard__done')) return;
  const contactInputs = Array.from(form.querySelectorAll('[data-contact-field] input')) as HTMLInputElement[];
  const updateContact = () => {
    contactInputs.forEach(input => {
      const field = input.closest('[data-contact-field]') as HTMLElement;
      const selected = preferred ? field.dataset.contactField === preferred.value : true;
      field.hidden = !selected;
      input.required = preferred ? selected : input.type === 'email';
      if (!selected) input.setCustomValidity('');
    });
  };
  const validatePhone = () => {
    const phone = contactInputs.find(input => input.closest('[data-contact-field]')?.getAttribute('data-contact-field') === 'phone');
    if (phone && !phone.required && !phone.value.trim()) phone.setCustomValidity('');
    if (phone && (phone.required || phone.value.trim())) {
      const digits = phone.value.replace(/\D/g, '');
      phone.setCustomValidity(digits.length >= 10 && digits.length <= 15 ? '' : 'Enter a phone number with at least 10 digits.');
    }
  };
  contactInputs.filter(input => input.type === 'tel').forEach(input => input.addEventListener('blur', validatePhone));
  preferred?.addEventListener('change', updateContact);
  updateContact();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
    const label = button?.querySelector('.btn__label');
    const note = form.querySelector('.qcard__note') as HTMLElement | null;
    const done = form.querySelector('.qcard__done') as HTMLElement | null;
    validatePhone();
    if (!button || !done || button.disabled || !form.reportValidity()) return;
    if ((form.querySelector('input[name="_honey"]') as HTMLInputElement | null)?.value) return;
    const data = new FormData(form);
    const value = (key: string, fallback: string) => String(data.get(key) || data.get(fallback) || '').trim();
    const channel = preferred?.value || 'email';
    const params = new URLSearchParams({
      '1.3': value('1.3', 'name'), '2': value('2', 'email'), '4': value('4', 'phone'),
      '5.1': value('5.1', 'address'), '5.3': value('5.3', 'city'), '5.5': value('5.5', 'postal'),
      '3': (data.get('service') ? 'Service: ' + data.get('service') + ' | ' : '') + value('3', 'message'),
      source_url: window.location.href, date_created: new Date().toISOString(),
    });
    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    if (label) label.textContent = 'Sending...';
    if (note) { note.hidden = false; note.textContent = 'Sending your request...'; }
    const fields = Array.from(form.querySelectorAll('input, select, textarea')) as (HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)[];
    fields.forEach(field => { field.disabled = true; });
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 90000);
    try {
      const response = await fetch(form.action, {
        method: 'POST', mode: 'cors', headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: params.toString(), signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || result.error || result.success === false || result.accepted === false || result.status === 'error'
        || (result.success !== true && result.accepted !== true)) throw new Error('Acceptance not confirmed');
      form.querySelectorAll('.field, .qcard__sub, .qcard__fallback, .qcard > h3').forEach((field) => field.setAttribute('hidden', ''));
      button.hidden = true;
      if (note) note.hidden = true;
      const confirmation = done.querySelector('p');
      if (confirmation) confirmation.textContent = 'Your request has been accepted. Jayden\'s Mechanical will follow up by ' + (channel === 'email' ? 'email' : 'phone') + ' to confirm service availability and the next step. Submission does not book an appointment.';
      done.hidden = false;
      done.focus();
    } catch {
      if (label) label.textContent = 'Get A Free Quote';
      if (note) {
        note.hidden = false;
        note.textContent = 'We could not confirm your request. Your details are still here. Please try again or use the contact link below.';
      }
    } finally {
      window.clearTimeout(timer);
      fields.forEach(field => { field.disabled = false; });
      button.disabled = false;
      form.removeAttribute('aria-busy');
    }
  });
  form.dataset.leadSubmitBound = 'true';
  form.dataset.intakeReady = 'true';
  submitButton.disabled = false;
});
