import { ArrowRight, UserRoundPlus} from "lucide-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { InviteGuestsModal } from "./invite-guests-modal";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
import { InviteGuestsStep } from "./steps/invite-guests-step";

export function CreateTripPage() {
  const navigate = useNavigate();
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpend, setIsGuestsModalOpend] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState([
    'antonysantos@gmail.com'
  ]);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);

  function openGuestsInput() {
    setIsGuestsInputOpen(true);
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false);
  }

  function openGuestsModal() {
    setIsGuestsModalOpend(true);
  }

  function closeGuestsModal() {
    setIsGuestsModalOpend(false)
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true);
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false);
  }

  function addEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString();
    if (!email) {
      return
    }
    if (emailsToInvite.includes(email)) {
      return
    }
    setEmailsToInvite([
      ...emailsToInvite,
      email
    ])
    event.currentTarget.reset();
  }

  function removeEmaiToInvite(emailToRemove: string) {
    const newEmailsList = emailsToInvite.filter(email => email !== emailToRemove);
    setEmailsToInvite(newEmailsList);
  }

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate('/trips/1');
  }
  
  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua proxima viagem!</p>
        </div>
        <div className="space-y-4">

          <DestinationAndDateStep 
            closeGuestsInput={closeGuestsInput}
            openGuestsInput={openGuestsInput}
            isGuestsInputOpen={isGuestsInputOpen}
          />

          {isGuestsInputOpen && (
            <InviteGuestsStep 
              openGuestsModal={openGuestsModal}
              openConfirmTripModal={openConfirmTripModal}
              emailsToInvite={emailsToInvite}
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pelo Plann.er você automaticamente concorda <br /> com nossos
          <a className="text-zinc-300 underline" href="#">termos de uso </a> e
          <a className="text-zinc-300 underline" href="#">politicas de provacidade</a>
        </p>
      </div>

      {isGuestsModalOpend && (
        <InviteGuestsModal 
          closeGuestsModal={closeGuestsModal}
          emailsToInvite={emailsToInvite}
          addEmailToInvite={addEmailToInvite}
          removeEmaiToInvite={removeEmaiToInvite}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal 
          closeConfirmTripModal={closeConfirmTripModal}
          createTrip={createTrip}
        />
      )}

    </div>
  )
}