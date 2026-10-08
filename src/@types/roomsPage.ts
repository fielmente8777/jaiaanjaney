export interface StayRootedSectionType {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  stats: {
    value: string;
    label: string;
  }[];
  images: {
    main: string;
    small: string;
  };
}

export interface RoomItemType {
  number: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  specs: {
    guests: string;
    size: string;
    bed: string;
  };
  image: string;
  images?: string[];
  cta: {
    viewText: string;
    viewLink: string;
    bookText: string;
    bookLink: string;
  };
}

export interface BuildingRoomsSectionType {
  eyebrow: string;
  title: string;
  description: string;
  rooms: RoomItemType[];
}

export interface ComfortItemType {
  title: string;
  subtitle: string;
  icon: string;
}

export interface ThoughtfulComfortsSectionType {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: ComfortItemType[];
}
