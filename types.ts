
export interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum EventType {
  MATRIMONIO = 'Matrimonio',
  CORPORATIVO = 'Evento Corporativo',
  GRADUACION = 'Graduación',
  ANIVERSARIO = 'Aniversario'
}
