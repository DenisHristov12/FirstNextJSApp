'use client';

import { useFormStatus } from 'react-dom';

function MealsForm() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'Share Meal'}
    </button>
  );
}

export default MealsForm;
