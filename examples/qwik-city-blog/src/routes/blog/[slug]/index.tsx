import { component$, useStore } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const loc = useLocation();
  const state = useStore({ title: loc.params.slug });

  return (
    <>
      <h1>{state.title}</h1>
      <p>This is a sample blog post using Qwik City.</p>
    </>
  );
});
