"use client";

import * as React from "react";
import {
  SquareTerminal,
  PieChart,
  ArrowDownCircle,
  ArrowUpCircle,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// ✅ ENV – Nome do team e ícone
const LOGO_NAME = process.env.NEXT_PUBLIC_LOGO_NAME || "Meu Financeiro";
const LOGO_ICON = process.env.NEXT_PUBLIC_LOGO_ICON || "$";

// ✅ MENU SIMPLES – links diretos
const data = {
  user: {
    name: "Usuário",
    email: "user@email.com",
    avatar: "/avatars/user.jpg",
  },

  teams: [
    {
      name: LOGO_NAME,
      logo: () => <span className="text-xl font-extrabold">{LOGO_ICON}</span>,
      plan: "Plano Básico",
    },
  ],

  navMain: [
    {
      title: "Início",
      url: "/inicio",
      icon: SquareTerminal,
    },
    {
      title: "Saldos",
      url: "/saldos",
      icon: PieChart,
    },
    {
      title: "Entradas",
      url: "/entradas",
      icon: ArrowDownCircle,
    },
    {
      title: "Saídas",
      url: "/saidas",
      icon: ArrowUpCircle,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* ✅ TeamSwitcher sozinho no topo, nada mais */}
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
