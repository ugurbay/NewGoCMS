import { component$, Slot } from '@builder.io/qwik';
import { RouterOutlet } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <RouterOutlet>
      <Slot />
    </RouterOutlet>
  );
});
