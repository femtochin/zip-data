type MenuItem = {
    title: string,
    icon: string, // TODO: Allow only valid icon names
    href: string,
}

const menuItems: MenuItem[] = [
  {
    title: "Dashbaord",
    icon: "home",
    href: "/dashboard",
  },
  {
    title: "Data Sheet",
    icon: "grid",
    href: "/table",
  }
  
];

export default menuItems;
