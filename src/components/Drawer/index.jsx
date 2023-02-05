import Button from "../Button/";
import ListItem from "../ListItem";

import "./Drawer.css";

const Drawer = ({ children }) => (
  <aside class="Drawer">
    {children ? children : ''}

    <ul>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 1</ListItem>
    </ul>

    <Button onClick={() => alert(1)}>Click 11</Button>
    <Button onClick={() => alert(2)}>Click 12</Button>
    <Button onClick={() => alert(3)}>Click 13</Button>
  </aside>
);

export default Drawer;