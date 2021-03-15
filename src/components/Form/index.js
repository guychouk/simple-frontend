import { html } from 'htm/preact';

export default function({ title, onSubmit, children }) {
  return html`
    <form onSubmit=${onSubmit}>
      ${children}
      <div class="form-group">
        <button type="submit">${title}</button>
      </div>
    </form>
  `;
}
