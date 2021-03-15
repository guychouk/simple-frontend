import { html } from 'htm/preact';
import { render } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import { Users, Home } from './pages';
import { getPageFromHash } from './lib';
import { Navbar, Router } from './components';


function App(props, children) {
  const [page, setPage] = useState(getPageFromHash());
  const [state, setState] = useState({ users: [] });

  return html`
    <${Router} page=${page}> 
      <${Home} route="/" />
      <${Users.create} route="/users/create" />
      <${Users.list} route="/users/list" users=${state.users}  />
    <//>
  `;
}

render(html`<${App} />`, document.getElementById('app'));
