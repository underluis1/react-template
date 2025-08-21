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
import { useCreateProva } from "@/hooks/Prova/useCreateProva";

export function DialogCreate() {
  const [nome, setNome] = useState("");
  const [age, setAge] = useState<number | undefined>(undefined);
  const [open, setOpen] = useState(false);

  const { mutate, isPending, error } = useCreateProva();

  const deleteAll = () => {
    setNome("");
    setAge(undefined);
  };
  const handleSave = () => {
    if (!nome || age == null || Number.isNaN(age)) return; // validazione minima
    mutate(
      { name: nome, age },
      {
        onSuccess: () => {
          deleteAll();
          setOpen(false); // chiude; onOpenChange farà reset
        },
      }
    );
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
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

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="flex flex-col gap-4"
        >
          <div className="grid gap-1">
            <Label htmlFor="nome">Nome</Label>
            <Input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-1">
            <Label htmlFor="age">Età</Label>
            <Input
              id="age"
              type="number"
              min={0}
              value={age ?? ""} // evita controlled/uncontrolled
              onChange={(e) => {
                const v = e.target.value;
                setAge(v === "" ? undefined : Number(v));
              }}
              required
            />
          </div>

          {error && (
            <p className="text-sm text-red-600">
              {(error as Error).message ?? "Errore durante il salvataggio"}
            </p>
          )}

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary" disabled={isPending}>
                Chiudi
              </Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={isPending || !nome || age == null || Number.isNaN(age)}
            >
              {isPending ? "Salvataggio..." : "Salva"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
