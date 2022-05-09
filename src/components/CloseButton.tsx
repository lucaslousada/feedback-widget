import { Popover } from '@headlessui/react';

import { X } from 'phosphor-react';

export function CloseButton() {
  return (
    <Popover.Button
      className="text-zinc-400 hover:text-zinc-100 col-start-3"
      title="Fechar fomulário de feedback"
    >
      <X weight="bold" className="w-4 h-4" />
    </Popover.Button>
  );
}
