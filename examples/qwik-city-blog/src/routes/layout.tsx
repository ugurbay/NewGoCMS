import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div>
      <header>
        <nav>
          <a href="/">Home</a> | <a href="/blog/">Blog</a>
        </nav>
      </header>
      <main>
        <Slot />
      </main>
    </div>
  );
});
