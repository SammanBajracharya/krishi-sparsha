import { mockUsers } from "@/mockData"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getUserWithId(id: string) {
    return mockUsers.find((user) => user.id === id);
}
