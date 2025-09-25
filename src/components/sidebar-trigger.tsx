"use client"

import { useSidebar } from "@/components/ui/sidebar"
import { Menu } from 'lucide-react';

export function CustomTrigger() {
  const { toggleSidebar } = useSidebar()
 
  return <button className="cursor-pointer" onClick={toggleSidebar}><Menu size={20}/></button>
}