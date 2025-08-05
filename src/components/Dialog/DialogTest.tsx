import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function DialogTest() {
  // stato per i campi
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  // funzione di reset
  const deleteAll = () => {
    setNome("");
    setCognome("");
    setEmail("");
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        // se chiudo il dialog, resetto i campi
        if (!isOpen) deleteAll();
        setOpen(isOpen);
      }}
    >
      <DialogTrigger asChild>
        <Button variant="outline">Crea record</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Crea Record</DialogTitle>
          <DialogDescription>
            Inserisci i campi per creare il record
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <div className="grid gap-1">
            <Label htmlFor="nome">Nome</Label>
            <Input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="cognome">Cognome</Label>
            <Input
              id="cognome"
              type="text"
              value={cognome}
              onChange={(e) => setCognome(e.target.value)}
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Chiudi
            </Button>
          </DialogClose>
          <Button
            type="button"
            onClick={() => {
              // submit dei dati…
              console.log({ nome, cognome, email });
              // e chiusura
              setOpen(false);
            }}
          >
            Salva
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
