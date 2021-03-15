import { toChildArray, cloneElement } from 'preact';
import { useState, useEffect } from 'preact/hooks';

export default function({ page, children }) {
  const pageMap = new Map();

  toChildArray(children).forEach(c => pageMap.set(c.props.route, c));

  useEffect(() => {
    window.location.hash = `${page}`;
  }, [page])

  const Page = pageMap.get(page);

  if (!Page) {
    window.location.href = "/";
    return;
  }

  return Page;
}
