import { Calendar, MapPin, Plus, Settings2 } from "lucide-react";
import { useState } from "react";
import { Button } from "../../components/button";
import { Activities } from "./actives";
import { CreateActivityModal } from "./create-activity-modal";
import { DestinationAndDateHeader } from "./destination-and-date-header";
import { Guests } from "./guests";
import { ImpontantsLinks } from "./impontants-links";

export function TripDetailsPage() {

  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false);
  
  function opendCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }
  
  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationAndDateHeader />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold">Atividade</h1>
            <Button onClick={opendCreateActivityModal}>
              <Plus className="size-5" />
              Cadastrar Atividade
            </Button>
          </div>

          <Activities />
          
        </div>

        <div className="w-80 space-y-6">
          <ImpontantsLinks />
          <div className="w-full h-px bg-zinc-800" />
          <Guests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal 
          closeCreateActivityModal={closeCreateActivityModal}  
        />
      )}
    </div>
  );
}
