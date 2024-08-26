export interface Champion {
  id: number;
  name: string;
  title: string;
  lore: string;
  imageUrl: string;
  roles: Role[];
  abilities: Ability[];
  skins: Skin[];
}

export interface Role {
  id: number;
  name: string;
}

export interface Ability {
  id: number;
  cooldown: number;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Skin {
  id: number;
  name: string;
  imageUrl: string;
}
