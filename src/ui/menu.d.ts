export interface MenuItem {
    id: number;
    menu_text: string;
    menu_url: string;
    has_children: boolean;
    menu_id: string;
    children?: MenuItem[];
}

export interface MenuItemEntry extends Omit<MenuItem, 'children'> {
    parent_menu: number;
    priority: number;
    active: boolean;
    required_role: string;
    timestamp: string;
}

export interface UserFavorite {
    id: number;
    path: string;
    name: string;
}
