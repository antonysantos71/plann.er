import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Button } from "../../../components/button";
import {useState} from 'react'
import { format } from "date-fns";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  eventStartAndEndDates: DateRange | undefined
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
  setDestination: (destination: string) => void
  setEventStartAndEndDates: (dates: DateRange | undefined) => void
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  closeGuestsInput,
  openGuestsInput,
  setDestination,
  eventStartAndEndDates,
  setEventStartAndEndDates
}: DestinationAndDateStepProps) {

  const [isDAtePickedOpen, setIsDatePickedOpen] = useState(false);

  function openDatePicked() {
    setIsDatePickedOpen(true);
  }

  function closeDaatePicked() {
    setIsDatePickedOpen(false);
  }

  const displayedDate = eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to 
  ? format(eventStartAndEndDates.from, "d' de 'LLL").concat(' até ').concat(format(eventStartAndEndDates.to, "d' de 'LLL"))
  : null
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex itens-center  gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          onChange={(envet) => setDestination(envet.target.value)}
        />
      </div>

      <button onClick={openDatePicked} disabled={isGuestsInputOpen} className="flex itens-center gap-2 text-left">
        <Calendar className="size-5 text-zinc-400" />
        <span className=" text-lg text-zinc-400 w-40 ">
          {displayedDate || "Quando?"}
        </span>
      </button>

      {isDAtePickedOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex itens-center justify-between">
                <h1 className="text-lg font-semibold">
                  Selecione a data 
                </h1>
                <button type="button" onClick={closeDaatePicked}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <DayPicker mode="range" selected={eventStartAndEndDates} onSelect={setEventStartAndEndDates} />
            </div>
          </div>
        </div>
      )}
            
      <div className="w-px h-6 bg-zinc-800" />
      {isGuestsInputOpen ? (
        <Button onClick={closeGuestsInput} variant="secondary" size="full">
          Alterar data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput} variant="primary">
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
}
