import { html } from 'htm/preact';

export default function({ users }) {
  return html`
    <table class="table">
      <thead>
        <tr><th scope="col">Name</th></tr>
      </thead>
      <tbody>
        ${users.map(u => html`<tr><td>${u.email}</td></tr>`)}
      </tbody>
    </table>
  `;
}
