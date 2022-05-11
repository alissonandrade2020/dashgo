import { Stack } from "@chakra-ui/react";
import {
  RiBriefcase4Fill,
  RiContactsLine,
  RiDashboardLine,
  RiDraftFill,
  RiFilePaper2Fill,
  RiGithubFill,
  RiGitMergeLine,
  RiInputMethodLine,
  RiLinkedinBoxFill,
  RiNewspaperFill,
  RiRocketFill,
  RiRunFill,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">
          Dashboard
        </NavLink>
        <NavLink icon={RiContactsLine} href="/users">
          Usuários
        </NavLink>
        <NavLink icon={RiBriefcase4Fill} href="/gerents">
          Gerentes
        </NavLink>
        <NavLink icon={RiRunFill} href="/coords">
          Coordenadores
        </NavLink>
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine} href="/forms">
          Formulários
        </NavLink>
        <NavLink icon={RiGitMergeLine} href="automations">
          Automação
        </NavLink>
      </NavSection>
      <NavSection title="REDES SOCIAIS">
        <NavLink
          icon={RiLinkedinBoxFill}
          target="_blank"
          href="https://www.linkedin.com/in/alisson-de-andrade-ara%C3%BAjo-160224190/"
        >
          NetWork's
        </NavLink>
        <NavLink
          icon={RiGithubFill}
          target="_blank"
          href="https://github.com/alissonandrade2020/"
        >
          Projetos
        </NavLink>
        <NavLink
          icon={RiRocketFill}
          target="_blank"
          href="https://app.rocketseat.com.br/me/alissondeandradearaujo"
        >
          Rocketseat
        </NavLink>
        <NavLink
          icon={RiDraftFill}
          target="_blank"
          href="https://alissondeandradearaujo.000webhostapp.com"
        >
          Alisson Andrade
        </NavLink>
        <NavLink
          icon={RiNewspaperFill}
          target="_blank"
          href="https://alissonandradesistema.000webhostapp.com/curriculo"
        >
          Experiências
        </NavLink>
        <NavLink
          icon={RiFilePaper2Fill}
          target="_blank"
          href="http://lattes.cnpq.br/7594653859194302"
        >
          CV
        </NavLink>
      </NavSection>
    </Stack>
  );
}