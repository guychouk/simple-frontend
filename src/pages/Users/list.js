import { html } from 'htm/preact';

export default function({ users }) {
  users = users || [];

  const userRow = (user) => html`
    <li>
      <a href="#">
        ${u.name}
      </a>
    </li>
  `

  return html`
    <main>
      <h2>Users</h2>
      <ul>
        ${users.map(userRow)}
      </ul>
    </main>
  `;
}
