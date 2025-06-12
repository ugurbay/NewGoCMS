import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <h1>Blog Posts</h1>
      <ul>
        <li><a href="/blog/hello">Hello Qwik</a></li>
      </ul>
    </>
  );
});
