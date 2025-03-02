"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerInputProps {
  selected: string;
  onChange: (date: string | undefined) => void;
}

export function DatePickerInput({ selected, onChange }: DatePickerInputProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !selected && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selected ? (
            format(new Date(selected), "PPP")
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={new Date(selected)}
          onSelect={(date) => onChange(date?.toISOString())}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export function DatePickerInputWithTime({
  selected,
  onChange,
}: DatePickerInputProps) {
  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(selected);
    date.setHours(parseInt(event.target.value.split(":")[0]));
    date.setMinutes(parseInt(event.target.value.split(":")[1]));
    onChange(date.toISOString());
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !selected && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selected ? (
            format(new Date(selected), "dd MMM yyyy HH:mm")
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <label className="flex items-center gap-2 m-2 border-b border-border pb-2">
          <span className="text-sm font-medium">Set the time:</span>
          <input
            className="text-sm"
            type="time"
            value={format(new Date(selected), "HH:mm")}
            onChange={handleTimeChange}
          />
        </label>
        <Calendar
          mode="single"
          selected={new Date(selected)}
          onSelect={(date) => onChange(date?.toISOString())}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
