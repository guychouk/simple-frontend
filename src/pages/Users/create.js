import { html } from 'htm/preact';
import { Form } from '../../components';

export default function() {
  function onSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    console.log(`%cUser login credentials - Email: ${email}, Password: ${password}`, 'color:teal;');
  }

  return html`
    <main>
      <h1>Create a User</h1>
      <hr/>
      <${Form} title="Add User" onSubmit=${onSubmit}>
        <div>
          <label for="name">Name</label>
          <div>
            <input id="name" type="text" required autofocus />
          </div>
        </div>
      <//>
    </main>
  `;
}
