import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block text-zinc-100 font-medium">Jessica</span>
            <span className="block text-xs text-zinc-400 truncate max-w-[250px]">
              jessica.santos@gmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block text-zinc-100 font-medium">Antony</span>
            <span className="block text-xs text-zinc-400 truncate max-w-[250px]">
              antony.santos@gmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
        </div>
      </div>
      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  )
}